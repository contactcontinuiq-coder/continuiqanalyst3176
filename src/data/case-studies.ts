// Sample case studies — numbers from PRD Section 6.4 / 6.8.
// All entries carry sample: true and must render a visible "Sample engagement" badge.

export interface MetricTile {
  label: string;
  value: string;
  delta?: string;              // e.g. "+8% margin" or "-22%"
  tone?: "success" | "danger" | "warning" | "neutral";
  caption?: string;
}

export interface CaseStudy {
  slug: string;
  industry: string;            // Short uppercase tag
  industryLabel: string;       // Longer prose label e.g. "D2C Skincare Brand, Shopify"
  headline: string;            // Big result
  wowMetric: {                 // "The number" tile shown on the card and hero
    value: string;
    label: string;
    tone: "success" | "danger" | "warning";
  };
  context: string;             // 2-line summary for cards
  business: string[];          // Paragraphs (2) for "The Business"
  problem: string[];           // Paragraphs for "The Problem"
  whatWeDid: string[];         // Paragraphs for "What We Did"
  result: {                    // 3–4 metric tiles
    tiles: MetricTile[];
    summary: string;
  };
  ownerOutcome: string;        // Paraphrased quote — what changed for the owner
  sample: true;                // Always true for now — never invent fake testimonials
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "d2c-skincare-ad-waste",
    industry: "D2C ECOMMERCE",
    industryLabel: "A Mumbai D2C skincare brand on Shopify",
    headline: "Found ₹14L/year in wasted Meta ad spend",
    wowMetric: {
      value: "₹14L",
      label: "saved per year",
      tone: "success",
    },
    context:
      "Spending ₹6L/month on ads, growing top-line but losing margin. The owner couldn't tell which products were profitable after ad costs.",
    business: [
      "An MP-headquartered D2C skincare brand selling through Shopify, with ad spend running across Meta and Google. The team had grown from 4 to 14 people in 18 months on the back of strong revenue numbers.",
      "Monthly revenue had crossed ₹2Cr but the founder was uncomfortable. Cash kept disappearing. Two SKUs sold 60% of the volume, but margin per order had been dropping every quarter.",
    ],
    problem: [
      "The team was reading Shopify gross revenue and Meta ROAS as if they were the same story. They weren't. After shipping, COGS, returns, and ad cost, three of their top five SKUs were losing money on every order.",
      "Nobody in the company could open a single screen and see contribution margin per product. Reports came from three tools and a Google Sheet maintained by the founder's assistant.",
    ],
    whatWeDid: [
      "Linked Shopify, Meta Ads, and the inventory system into a single warehouse. Built per-SKU contribution margin (revenue – COGS – shipping – ad spend attributed by purchase) refreshed daily.",
      "Set up an anomaly alert that pings the founder on WhatsApp when any SKU drops below a 30% contribution margin for 3 days in a row.",
    ],
    result: {
      tiles: [
        {
          label: "Wasted ad spend caught",
          value: "₹14L",
          delta: "per year",
          tone: "success",
        },
        {
          label: "Unprofitable SKUs killed",
          value: "3",
          caption: "of 17",
          tone: "danger",
        },
        {
          label: "Net margin",
          value: "+8 pts",
          delta: "in 60 days",
          tone: "success",
        },
        {
          label: "Time to spot a leak",
          value: "1 day",
          caption: "previously: ~30 days",
          tone: "warning",
        },
      ],
      summary:
        "Killed 3 unprofitable SKUs. Reallocated ad spend to top 5 products. Net margin improved 8 percentage points in 60 days.",
    },
    ownerOutcome:
      "\"I stopped flying blind. Now I know on Monday morning if a SKU is bleeding — not at the end of the quarter when the damage is already done.\"",
    sample: true,
  },
  {
    slug: "retail-chain-store-audit",
    industry: "RETAIL",
    industryLabel: "An MP-based clothing chain with 12 stores",
    headline: "Identified the 3 stores quietly losing ₹2L/month each",
    wowMetric: {
      value: "₹72L",
      label: "annualised leakage stopped",
      tone: "success",
    },
    context:
      "Owner felt some stores were underperforming but couldn't prove it. Monthly reports came 3 weeks late from accounting.",
    business: [
      "A 12-store clothing retail chain across Madhya Pradesh, including tier-2 and tier-3 cities. The founder had built the business over 14 years and ran it on instinct backed by tally reports.",
      "Top-line was healthy at ~₹4Cr/month, but EBITDA had been flat for two years despite opening three new stores in that window.",
    ],
    problem: [
      "Reports from accounting were arriving 21 days after month-close. By the time the owner saw that a store had had a bad month, two more weeks of bad months had already happened.",
      "There was no view of contribution margin by store — only revenue. Two locations with low rent looked healthy on revenue but were eating cost on staffing and inventory shrinkage.",
    ],
    whatWeDid: [
      "Built per-store scorecards covering revenue per square foot, contribution margin, footfall conversion, and inventory turn — refreshed weekly from POS exports.",
      "Layered region heatmaps and product-mix analysis so the founder could see which categories actually worked in which towns.",
    ],
    result: {
      tiles: [
        {
          label: "Stores quietly losing money",
          value: "3",
          caption: "of 12",
          tone: "danger",
        },
        {
          label: "Monthly leakage per store",
          value: "₹2L",
          tone: "danger",
        },
        {
          label: "Stores closed / restructured",
          value: "2",
          delta: "paid back in 4 months",
          tone: "success",
        },
        {
          label: "Reporting lag",
          value: "7 days",
          caption: "previously: 21 days",
          tone: "success",
        },
      ],
      summary:
        "Closed 1 store. Replaced manager at another. Restructured a third. All decisions paid back in 4 months.",
    },
    ownerOutcome:
      "\"I was emotional about closing that store. The numbers made it obvious. We were funding it with the good stores.\"",
    sample: true,
  },
  {
    slug: "manufacturing-inventory-cut",
    industry: "MANUFACTURING",
    industryLabel: "A plastic packaging manufacturer in Pune",
    headline: "Cut inventory waste by 22% in one quarter",
    wowMetric: {
      value: "₹38L",
      label: "working capital freed",
      tone: "success",
    },
    context:
      "Raw material inventory was eating working capital. No visibility into which SKUs sat in the warehouse.",
    business: [
      "A plastic packaging manufacturer in Pune supplying FMCG and pharma customers. ~220 SKUs, 80 staff, and a single warehouse holding raw resin plus finished goods.",
      "The business was growing 18% year-over-year but the owner was constantly arranging short-term credit to fund inventory. Something was off.",
    ],
    problem: [
      "Procurement was buying resin based on a six-month-old forecast and \"gut feel.\" Finished goods sat in the warehouse for 90+ days on slower SKUs while top SKUs ran out of stock 3–4 times a quarter.",
      "There was no single answer to \"how much of which SKU should we have on the floor right now?\"",
    ],
    whatWeDid: [
      "Ran an inventory turnover analysis by SKU class. Built a demand-forecasting model on 24 months of order data and seasonality.",
      "Reset reorder points and safety stock per SKU. Set up a weekly dashboard showing inventory days of cover, slow-moving stock, and stock-out risk.",
    ],
    result: {
      tiles: [
        {
          label: "Inventory waste cut",
          value: "22%",
          delta: "in one quarter",
          tone: "success",
        },
        {
          label: "Working capital freed",
          value: "₹38L",
          tone: "success",
        },
        {
          label: "Stock-outs on top SKUs",
          value: "-60%",
          tone: "success",
        },
        {
          label: "Slow movers identified",
          value: "31 SKUs",
          caption: "earmarked for clearance",
          tone: "warning",
        },
      ],
      summary:
        "₹38L freed up in working capital. Stock-outs on top SKUs dropped 60%. 31 SKUs flagged for clearance pricing.",
    },
    ownerOutcome:
      "\"We stopped paying interest on resin that was sitting in the warehouse. That alone covered the engagement four times over in the first year.\"",
    sample: true,
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
