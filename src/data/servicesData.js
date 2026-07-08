import { 
  Code, 
  Layers, 
  TrendingUp, 
  Briefcase, 
  Smartphone, 
  Cloud,
  Star
} from 'lucide-react';

export const SERVICE_CATEGORIES = [
  {
    id: "custom-website",
    Icon: Code,
    title: "Custom Website Development",
    description: "Custom responsive websites built for performance and growth.",
    highlights: ["Responsive Design", "Fast Loading", "SEO Friendly"],
    details: {
      techLabel: "Core Technologies",
      technologies: ["React", "Node.js", "MongoDB", "Next.js"],
      process: ["Requirement Analysis", "UI/UX Design", "Development & Testing", "Deployment"],
      deliverables: ["Source Code", "Deployment Architecture", "Admin Dashboard", "API Documentation"]
    }
  },
  {
    id: "landing-pages",
    Icon: Layers,
    title: "Landing Pages",
    description: "High-converting landing pages designed to maximize leads.",
    highlights: ["Lead Generation", "Conversion Focused", "Mobile Friendly"],
    details: {
      techLabel: "Tools & Frameworks",
      technologies: ["Framer Motion", "Tailwind CSS", "React", "A/B Testing"],
      process: ["Audience Research", "Copywriting & Wireframing", "Development", "Performance Optimization"],
      deliverables: ["High-Converting Page", "Analytics Integration", "Lead Capture Setup"]
    }
  },
  {
    id: "seo",
    Icon: TrendingUp,
    title: "SEO Optimization",
    description: "Improve search engine rankings and drive organic traffic.",
    highlights: ["Keyword Research", "On Page SEO", "Technical SEO"],
    details: {
      techLabel: "SEO Analytics Tools",
      technologies: ["Google Analytics", "Ahrefs", "Semrush", "Search Console"],
      process: ["Site Audit", "Keyword Strategy", "On-Page Optimization", "Link Building"],
      deliverables: ["Monthly SEO Report", "Keyword Ranking Dashboard", "Content Plan"]
    }
  },
  {
    id: "digital-marketing",
    Icon: TrendingUp,
    title: "Digital Marketing",
    description: "End-to-end digital marketing strategies for businesses.",
    highlights: ["Social Media", "Content Marketing", "Campaign Management"],
    details: {
      techLabel: "Marketing Platforms",
      technologies: ["HubSpot", "Mailchimp", "Hootsuite", "Google Ads"],
      process: ["Market Research", "Strategy Development", "Campaign Execution", "Analytics Review"],
      deliverables: ["Marketing Strategy Document", "Campaign Creatives", "Performance Reports"]
    }
  },
  {
    id: "google-ads",
    Icon: Star,
    title: "Google Ads (PPC)",
    description: "ROI-focused Google Ads campaigns with full management.",
    highlights: ["PPC Campaigns", "Keyword Targeting", "Analytics"],
    details: {
      techLabel: "PPC Tools",
      technologies: ["Google Ads Manager", "Google Tag Manager", "Looker Studio"],
      process: ["Keyword Research", "Ad Copywriting", "Bid Management", "Conversion Tracking"],
      deliverables: ["Optimized Campaigns", "Weekly ROI Reports", "Audience Insights"]
    }
  },
  {
    id: "meta-ads",
    Icon: Briefcase,
    title: "Meta Ads",
    description: "Facebook and Instagram advertising designed for growth.",
    highlights: ["Facebook Ads", "Instagram Ads", "Retargeting"],
    details: {
      techLabel: "Ad Technologies",
      technologies: ["Meta Business Suite", "Facebook Pixel", "CAPI"],
      process: ["Audience Building", "Creative Design", "A/B Testing", "Scaling"],
      deliverables: ["Ad Creatives", "Pixel Implementation", "Campaign Dashboard"]
    }
  },
  {
    id: "maintenance",
    Icon: Smartphone,
    title: "Website Maintenance",
    description: "Regular updates, backups and security monitoring.",
    highlights: ["Security", "Backups", "Performance"],
    details: {
      techLabel: "Monitoring Tools",
      technologies: ["AWS CloudWatch", "Datadog", "UptimeRobot", "Sentry"],
      process: ["Vulnerability Scanning", "Plugin Updates", "Database Backups", "Performance Tuning"],
      deliverables: ["Monthly Maintenance Report", "99.9% Uptime Guarantee", "Priority Support"]
    }
  },
  {
    id: "hosting",
    Icon: Cloud,
    title: "Hosting & Domains",
    description: "Reliable hosting and domain setup with SSL.",
    highlights: ["Hosting", "SSL", "Domain Setup"],
    details: {
      techLabel: "Infrastructure",
      technologies: ["AWS", "Vercel", "Cloudflare", "Docker"],
      process: ["Server Provisioning", "SSL Installation", "DNS Management", "CDN Setup"],
      deliverables: ["Secure Hosting Environment", "SSL Certificate", "Automated Backups"]
    }
  }
];
