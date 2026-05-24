// Shared service data — used on homepage cards, /services page, and footer links.
// Copy is verbatim from PRD Section 6.3.

export type ServiceTone = "audit" | "build" | "subscribe" | "premium";

export interface Service {
  number: string;
  slug: string;            // For deep links / anchors
  name: string;
  tagline: string;
  description: string;
  deliverables: string[];
  priceRange: string;
  priceNote?: string;
  bestFor: string;
  ctaLabel: string;
  tone: ServiceTone;       // Controls semantic color treatment
}

export const services: Service[] = [
  {
    number: "01",
    slug: "data-audit",
    name: "Data Audit",
    tagline: "Find out where your business is losing money — in 30 minutes.",
    description:
      "A focused review of your existing data. We tell you the top opportunities and the top leaks, before you spend on dashboards or tools.",
    deliverables: [
      "Data quality report",
      "KPI review",
      "Top 3 opportunities, top 3 leaks",
      "20-minute walkthrough call",
    ],
    priceRange: "₹5,000 – ₹20,000",
    priceNote: "Free for qualified businesses",
    bestFor: "First-time clients. Companies who aren't sure where to start.",
    ctaLabel: "Start with an audit",
    tone: "audit",
  },
  {
    number: "02",
    slug: "dashboard-setup",
    name: "Executive Dashboard Setup",
    tagline: "One screen. Every number that matters.",
    description:
      "A custom Power BI / Looker / Metabase dashboard built around the KPIs your business actually runs on. Set up once, runs automatically.",
    deliverables: [
      "Custom executive dashboard",
      "KPI definitions and logic",
      "Automated daily/weekly reports",
      "Team training",
    ],
    priceRange: "₹20,000 – ₹1,00,000",
    priceNote: "One-time project",
    bestFor: "Founders who don't have visibility. Teams running on Excel.",
    ctaLabel: "See dashboard examples",
    tone: "build",
  },
  {
    number: "03",
    slug: "growth-intelligence",
    name: "Growth Intelligence",
    tagline: "Your analytics department, on subscription.",
    description:
      "We become your ongoing BI team. Weekly reports, monthly reviews, and recommendations delivered to your inbox.",
    deliverables: [
      "Weekly performance reports",
      "Monthly business review call",
      "Trend analysis & anomaly alerts",
      "Recommendations with priority",
    ],
    priceRange: "₹15,000 – ₹75,000 / month",
    priceNote: "Monthly retainer",
    bestFor:
      "Businesses doing ₹50L+/month who can't justify a full-time analyst.",
    ctaLabel: "Become a Growth Intelligence client",
    tone: "subscribe",
  },
  {
    number: "04",
    slug: "revenue-optimization",
    name: "Revenue Optimization",
    tagline: "Find the money. Then bring it home.",
    description:
      "A deep, end-to-end revenue analysis. We tear apart your profitability, customers, products, and pricing — then ship recommendations with projected impact.",
    deliverables: [
      "Product profitability analysis",
      "Customer cohort & retention analysis",
      "Pricing analysis & recommendations",
      "Demand forecasting",
      "Executive presentation",
    ],
    priceRange: "₹50,000 – ₹3,00,000+",
    priceNote: "Premium engagement",
    bestFor: "Businesses ready to make real strategic moves.",
    ctaLabel: "Get a revenue review",
    tone: "premium",
  },
];
