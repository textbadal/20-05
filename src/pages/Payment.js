import React from "react";

function Payment() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f7fb",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          background: "#fff",
          maxWidth: "500px",
          width: "100%",
          borderRadius: "20px",
          padding: "35px",
          textAlign: "center",
          boxShadow: "0 15px 40px rgba(0,0,0,.1)",
        }}
      >
        <img
          src="/logo.png" // Replace with your logo path
          alt="Averiqo Technologies"
          style={{
            width: "80px",
            marginBottom: "15px",
          }}
        />

        <h1
          style={{
            marginBottom: "10px",
            color: "#1e293b",
          }}
        >
          Complete Your Payment
        </h1>

        <p
          style={{
            color: "#64748b",
            lineHeight: "26px",
          }}
        >
          Scan the QR Code below using any UPI application to complete your
          payment securely.
        </p>

        <div
          style={{
            margin: "30px 0",
          }}
        >
          <img
            src="/QrCode.jpeg"
            alt="Razorpay QR"
            style={{
              width: "280px",
              maxWidth: "100%",
              border: "8px solid #f3f4f6",
              borderRadius: "12px",
            }}
          />
        </div>

        <div
          style={{
            background: "#eef6ff",
            borderRadius: "10px",
            padding: "15px",
            marginBottom: "20px",
          }}
        >
          <h3
            style={{
              marginBottom: "10px",
            }}
          >
            Accepted Payment Apps
          </h3>

          <p
            style={{
              color: "#555",
              margin: 0,
            }}
          >
            Google Pay • PhonePe • Paytm • BHIM • Any UPI App
          </p>
        </div>

        <div
          style={{
            textAlign: "left",
            background: "#fafafa",
            borderRadius: "10px",
            padding: "18px",
            marginBottom: "25px",
          }}
        >
          <h3>Payment Instructions</h3>

          <ol
            style={{
              lineHeight: "28px",
              color: "#555",
              paddingLeft: "18px",
            }}
          >
            <li>Open any UPI application.</li>
            <li>Scan the QR Code.</li>
            <li>Enter the payment amount.</li>
            <li>Complete the payment.</li>
            <li>Send us the payment screenshot.</li>
          </ol>
        </div>

        <a
          href="https://wa.me/919334991688"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            background: "#25D366",
            color: "#fff",
            padding: "15px 35px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "17px",
          }}
        >
          Send Payment Screenshot
        </a>

        <p
          style={{
            marginTop: "25px",
            color: "#888",
            fontSize: "14px",
          }}
        >
          Payments are securely processed through <strong>Razorpay</strong>.
        </p>
      </div>
    </div>
  );
}

export default Payment;