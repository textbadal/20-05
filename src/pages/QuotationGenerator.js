import React, { useState, useEffect } from 'react';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

export default function QuotationGenerator() {
  // State for Client & Company Metadata (Indian Context)
  const [clientDetails, setClientDetails] = useState({
    companyName: '',
    contactPerson: '',
    address: '',
    clientGSTIN: '',
    yourGSTIN: '27AAAAA0000A1Z5', // Replace with Averiqo's actual GSTIN
    yourPAN: 'ABCDE1234F',         // Replace with your actual PAN
    placeOfSupply: 'Same State',   // 'Same State' (CGST+SGST) or 'Other State' (IGST)
    taxRate: '18',                 // Standard tech service tax rate in India is 18%
    validityDays: '30',
  });

  // Bank Details for Indian payment workflows
  const [bankDetails] = useState({
    bankName: 'HDFC Bank Ltd',
    accountNo: '50200012345678',
    ifscCode: 'HDFC0000123',
    branch: 'Mumbai Main Branch'
  });

  // State for Dynamic Table Rows including SAC/HSN
  const [lineItems, setLineItems] = useState([
    { id: 1, description: '', sacCode: '998314', quantity: 1, unitPrice: 0 },
  ]);

  // Financial Summary States
  const [financials, setFinancials] = useState({
    subtotal: 0,
    cgst: 0,
    sgst: 0,
    igst: 0,
    grandTotal: 0,
  });

  // Recalculate GST allocation based on Location Matrix
  useEffect(() => {
    const subtotal = lineItems.reduce((acc, item) => {
      const qty = parseFloat(item.quantity) || 0;
      const price = parseFloat(item.unitPrice) || 0;
      return acc + qty * price;
    }, 0);

    const totalTaxRate = parseFloat(clientDetails.taxRate) || 0;
    const totalTaxAmount = subtotal * (totalTaxRate / 100);

    let cgst = 0, sgst = 0, igst = 0;

    if (clientDetails.placeOfSupply === 'Same State') {
      cgst = totalTaxAmount / 2;
      sgst = totalTaxAmount / 2;
    } else {
      igst = totalTaxAmount;
    }

    const grandTotal = subtotal + totalTaxAmount;
    setFinancials({ subtotal, cgst, sgst, igst, grandTotal });
  }, [lineItems, clientDetails.taxRate, clientDetails.placeOfSupply]);

  const handleClientChange = (e) => {
    const { name, value } = e.target;
    setClientDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleItemChange = (id, field, value) => {
    setLineItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const addRow = () => {
    setLineItems((prev) => [
      ...prev,
      { id: Date.now(), description: '', sacCode: '998314', quantity: 1, unitPrice: 0 },
    ]);
  };

  const removeRow = (id) => {
    if (lineItems.length > 1) {
      setLineItems((prev) => prev.filter((item) => item.id !== id));
    } else {
      alert('Your quotation must have at least one line item.');
    }
  };

  // Indian Styled PDF Generator Engine
  const exportToPDF = () => {
    const doc = new jsPDF({ orientation: 'p', unit: 'mm', format: 'a4' });
    const today = new Date().toLocaleDateString('en-IN');
    const quoteNum = `AQ-2026-${Math.floor(1000 + Math.random() * 9000)}`;

    // Top Header Banner
    doc.setFillColor(15, 23, 42);
    doc.rect(0, 0, 210, 40, 'F');

    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(20);
    doc.text('AVERIQO TECHNOLOGIES', 15, 22);
    
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.text(`GSTIN: ${clientDetails.yourGSTIN} | PAN: ${clientDetails.yourPAN}`, 15, 30);

    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('TAX QUOTATION', 155, 25);

    // Metadata Blocks
    doc.setTextColor(51, 65, 85);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text('Quotation From:', 15, 52);
    doc.setFont('helvetica', 'normal');
    doc.text('Averiqo Technologies Corp.', 15, 58);
    doc.text('Contact: billing@averiqo.com', 15, 64);

    doc.setFont('helvetica', 'bold');
    doc.text('Line To / Client Details:', 90, 52);
    doc.setFont('helvetica', 'normal');
    doc.text(`${clientDetails.companyName || 'Valued Client'}`, 90, 58);
    doc.text(`Attn: ${clientDetails.contactPerson || 'N/A'}`, 90, 64);
    doc.text(`Address: ${clientDetails.address || 'N/A'}`, 90, 70);
    doc.setFont('helvetica', 'bold');
    doc.text(`Client GSTIN: ${clientDetails.clientGSTIN || 'URP (Unregistered Person)'}`, 90, 76);

    doc.setFont('helvetica', 'bold');
    doc.text('Quote Details:', 160, 52);
    doc.setFont('helvetica', 'normal');
    doc.text(`Ref No: ${quoteNum}`, 160, 58);
    doc.text(`Date: ${today}`, 160, 64);
    doc.text(`Place of Supply: ${clientDetails.placeOfSupply}`, 160, 70);

    // Format Body Matrix with HSN/SAC
    const tableBody = lineItems.map((item, index) => [
      item.description || `Service ${index + 1}`,
      item.sacCode,
      item.quantity,
      `Rs. ${parseFloat(item.unitPrice).toFixed(2)}`,
      `Rs. ${(item.quantity * item.unitPrice).toFixed(2)}`,
    ]);

    autoTable(doc, {
      startY: 85,
      head: [['Description / Scope of Work', 'SAC/HSN', 'Qty', 'Unit Rate', 'Total Value']],
      body: tableBody,
      headStyles: { fillColor: [30, 41, 59], textColor: [255, 255, 255] },
      alternateRowStyles: { fillColor: [248, 250, 252] },
      margin: { left: 15, right: 15 },
    });

    let currentY = doc.lastAutoTable.finalY + 12;

    // Left Section: Print Bank transfer coordinates
    doc.setFont('helvetica', 'bold');
    doc.text('Electronic Bank Remittance Details:', 15, currentY);
    doc.setFont('helvetica', 'normal');
    doc.text(`Beneficiary: Averiqo Technologies`, 15, currentY + 6);
    doc.text(`Bank Name: ${bankDetails.bankName}`, 15, currentY + 11);
    doc.text(`A/C No: ${bankDetails.accountNo}`, 15, currentY + 16);
    doc.text(`IFSC Code: ${bankDetails.ifscCode}`, 15, currentY + 21);

    // Right Section: Standardized Indian Tax accounting breakdown table
    doc.text(`Subtotal:`, 130, currentY);
    doc.text(`Rs. ${financials.subtotal.toFixed(2)}`, 195, currentY, { align: 'right' });

    if (clientDetails.placeOfSupply === 'Same State') {
      currentY += 6;
      doc.text(`CGST (${parseFloat(clientDetails.taxRate) / 2}%):`, 130, currentY);
      doc.text(`Rs. ${financials.cgst.toFixed(2)}`, 195, currentY, { align: 'right' });
      
      currentY += 6;
      doc.text(`SGST (${parseFloat(clientDetails.taxRate) / 2}%):`, 130, currentY);
      doc.text(`Rs. ${financials.sgst.toFixed(2)}`, 195, currentY, { align: 'right' });
    } else {
      currentY += 6;
      doc.text(`IGST (${clientDetails.taxRate}%):`, 130, currentY);
      doc.text(`Rs. ${financials.igst.toFixed(2)}`, 195, currentY, { align: 'right' });
    }

    currentY += 8;
    doc.setLineWidth(0.4);
    doc.line(125, currentY - 4, 195, currentY - 4);

    doc.setFont('helvetica', 'bold');
    doc.text(`Grand Total (INR):`, 130, currentY);
    doc.text(`Rs. ${financials.grandTotal.toFixed(2)}`, 195, currentY, { align: 'right' });

    // Legal Footer
    currentY += 20;
    doc.setLineWidth(0.2);
    doc.setDrawColor(200, 200, 200);
    doc.line(15, currentY, 195, currentY);

    currentY += 6;
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8.5);
    doc.text(`Terms: Quote valid for ${clientDetails.validityDays} days. Subject to realization of advance amounts. Disputes subject to local jurisdiction.`, 15, currentY);

    const filename = `Averiqo_Quote_${(clientDetails.companyName || 'Client').replace(/\s+/g, '_')}.pdf`;
    doc.save(filename);
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans">
      <header className="bg-slate-900 text-white p-4 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-wide">AVERIQO TECHNOLOGIES</h1>
          <span className="bg-emerald-600 text-xs px-3 py-1 rounded-full uppercase font-semibold">
            India Billing Desk
          </span>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-4 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Client Block */}
          <div className="bg-white p-6 rounded-xl shadow-xs border border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900 mb-4 pb-2 border-b border-slate-100">
              1. Client Information & Statutory Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">Company / Corporate Identity</label>
                <input
                  type="text"
                  name="companyName"
                  value={clientDetails.companyName}
                  onChange={handleClientChange}
                  placeholder="e.g., Reliance Digital"
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">Contact Person Name</label>
                <input
                  type="text"
                  name="contactPerson"
                  value={clientDetails.contactPerson}
                  onChange={handleClientChange}
                  placeholder="e.g., Amit Sharma"
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">Client GSTIN</label>
                <input
                  type="text"
                  name="clientGSTIN"
                  value={clientDetails.clientGSTIN}
                  onChange={handleClientChange}
                  placeholder="27XXXXXXXXXXX1Z"
                  className="w-full px-3 py-2 border border-slate-300 rounded-md uppercase focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">Place of Supply (GST Routing)</label>
                <select
                  name="placeOfSupply"
                  value={clientDetails.placeOfSupply}
                  onChange={handleClientChange}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Same State">Intrastate (CGST + SGST)</option>
                  <option value="Other State">Interstate (IGST)</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-600 mb-1">Billing Address</label>
                <input
                  type="text"
                  name="address"
                  value={clientDetails.address}
                  onChange={handleClientChange}
                  placeholder="e.g., Bandra Kurla Complex, Mumbai, MH"
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Line Items Block */}
          <div className="bg-white p-6 rounded-xl shadow-xs border border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900 mb-4 pb-2 border-b border-slate-100">
              2. Deliverables Matrix
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 text-sm text-slate-500">
                    <th className="pb-2 w-5/12">Description</th>
                    <th className="pb-2 w-2/12 px-2">SAC/HSN</th>
                    <th className="pb-2 w-1/12 px-2">Qty</th>
                    <th className="pb-2 w-3/12 px-2">Rate (₹)</th>
                    <th className="pb-2 w-1/12 text-center"></th>
                  </tr>
                </thead>
                <tbody>
                  {lineItems.map((item) => (
                    <tr key={item.id} className="border-b border-slate-100 last:border-0">
                      <td className="py-3">
                        <input
                          type="text"
                          value={item.description}
                          onChange={(e) => handleItemChange(item.id, 'description', e.target.value)}
                          placeholder="e.g., E-commerce Architecture Integration"
                          className="w-full px-2 py-1 border border-slate-200 rounded-md"
                        />
                      </td>
                      <td className="py-3 px-2">
                        <input
                          type="text"
                          value={item.sacCode}
                          onChange={(e) => handleItemChange(item.id, 'sacCode', e.target.value)}
                          className="w-full px-2 py-1 border border-slate-200 rounded-md text-center"
                        />
                      </td>
                      <td className="py-3 px-2">
                        <input
                          type="number"
                          value={item.quantity}
                          min="1"
                          onChange={(e) => handleItemChange(item.id, 'quantity', parseInt(e.target.value) || 0)}
                          className="w-full px-2 py-1 border border-slate-200 rounded-md"
                        />
                      </td>
                      <td className="py-3 px-2">
                        <input
                          type="number"
                          value={item.unitPrice}
                          min="0"
                          step="1"
                          onChange={(e) => handleItemChange(item.id, 'unitPrice', parseFloat(e.target.value) || 0)}
                          className="w-full px-2 py-1 border border-slate-200 rounded-md"
                        />
                      </td>
                      <td className="py-3 text-center">
                        <button
                          onClick={() => removeRow(item.id)}
                          className="text-red-500 hover:text-red-700 font-bold text-lg cursor-pointer"
                        >
                          &times;
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button
              onClick={addRow}
              className="mt-4 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold rounded-lg transition cursor-pointer"
            >
              + Add Line Item
            </button>
          </div>
        </div>

        {/* Right Side Totals View */}
        <div>
          <div className="bg-slate-900 text-white p-6 rounded-xl shadow-lg sticky top-6">
            <h2 className="text-lg font-semibold border-b border-slate-800 pb-3 mb-4">GST Invoice Ledger</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-400">Taxable Value:</span>
                <span>₹{financials.subtotal.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
              </div>
              
              {clientDetails.placeOfSupply === 'Same State' ? (
                <>
                  <div className="flex justify-between">
                    <span className="text-slate-400">CGST ({parseFloat(clientDetails.taxRate) / 2}%):</span>
                    <span>₹{financials.cgst.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">SGST ({parseFloat(clientDetails.taxRate) / 2}%):</span>
                    <span>₹{financials.sgst.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
                  </div>
                </>
              ) : (
                <div className="flex justify-between">
                  <span className="text-slate-400">IGST ({clientDetails.taxRate}%):</span>
                  <span>₹{financials.igst.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
                </div>
              )}

              <div className="flex justify-between text-base font-bold pt-3 border-t border-slate-800">
                <span>Total Amount (INR):</span>
                <span className="text-emerald-400">₹{financials.grandTotal.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={exportToPDF}
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg transition shadow-md cursor-pointer block text-center"
              >
                📥 Download GST Quotation
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}