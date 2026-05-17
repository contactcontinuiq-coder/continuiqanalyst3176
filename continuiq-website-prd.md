# Continuiq Consulting — Website PRD
**Product:** continuiqconsulting.com — agency marketing site
**Owner:** Continuiq (Indore, MP, India)
**Version:** 1.0
**Last updated:** May 2026
**Status:** Ready for build

---

## 1. Executive Summary

Continuiq is a freelance data & business analytics agency serving e-commerce and D2C brands. We turn messy business data into clear dashboards, audits, and decision-ready reports. Our domain — **continuiqconsulting.com** — currently has no live site.

This PRD specifies a fast, modern, SEO-strong, 4-section marketing site whose single job is to convert visitors into **Free Data Audit** bookings. Everything below — tech stack, design, animations, SEO — is in service of that one outcome.

**Primary KPI:** Free Data Audit form submissions / month
**Secondary KPIs:** Time-on-page, scroll depth, organic impressions for target keywords

---

## 2. Goals & Non-Goals

### 2.1 Goals
1. **Convert** — visitors → audit bookings at ≥3% (industry-standard for B2B agency sites is 1–2%; we aim higher with a strong free offer)
2. **Credibility** — the site must look like a premium agency, not a freelancer portfolio. Visual quality is a sales asset.
3. **Speed** — Largest Contentful Paint < 1.5s on 4G; Lighthouse Performance ≥ 95
4. **Discoverability** — rank for long-tail terms like "shopify dashboard consultant india", "data audit for d2c brands" within 90 days
5. **Trust** — clear local presence (Indore), clear founder voice, clear pricing posture

### 2.2 Non-Goals
- No blog at launch (will be added in Phase 2)
- No multi-page site at launch — single-page scroll only
- No e-commerce / payments — audit booking is a form, not a checkout
- No live chat widget (kills page weight, low ROI at this stage)
- No multi-language — English only

---

## 3. Target Audience

### 3.1 Primary persona — "Anish, the D2C Founder"
- 28–40, runs a Shopify or WooCommerce store doing ₹50L–₹5Cr ARR
- Knows his data is messy but doesn't know what to do about it
- Uses Excel, Google Analytics, Shopify reports — none of which talk to each other
- Spends too much time pulling numbers manually each week
- **What he wants from the site:** proof that we understand his stack, a clear offer, an easy way to book a call

### 3.2 Secondary persona — "Priya, the Marketing Manager"
- 25–35, runs growth/ops at a D2C brand
- Reports to a founder who keeps asking "what's our LTV by channel?"
- She's the one Googling solutions late at night
- **What she wants from the site:** clear deliverables, timelines, and something she can forward to her founder

### 3.3 Tertiary — "Local Indore SMB owner"
- Found us through a referral or Google search for local consultants
- Needs hand-holding, prefers a quick call over a form
- **What they want:** phone number, WhatsApp, local credibility

---

## 4. Site Structure

Single-page scroll site. Sticky header. Smooth-scroll anchor navigation.

```
┌─────────────────────────────────────────┐
│ 1. HERO                                 │ ← hook + primary CTA
├─────────────────────────────────────────┤
│ 2. SERVICES (3 cards)                   │ ← what we do
├─────────────────────────────────────────┤
│ 3. SOCIAL PROOF (process + trust)       │ ← why us
├─────────────────────────────────────────┤
│ 4. CTA (audit booking form)             │ ← convert
├─────────────────────────────────────────┤
│ FOOTER                                  │
└─────────────────────────────────────────┘
```

---

## 5. Section-by-Section Spec

### 5.1 Sticky Header
- Logo (Continuiq mark + wordmark) on the left
- Anchor nav: Services · Process · Contact
- Dark/light mode toggle (sun/moon icon)
- CTA button on the right: **"Book Free Audit"** (scrolls to section 4)
- **Behaviour:** transparent on hero, solid blurred background after 80px scroll
- **Mobile:** hamburger that slides in a full-screen overlay menu

### 5.2 Hero Section

**Layout:** Two-column on desktop (60/40), stacked on mobile.

**Left column:**
- Eyebrow tag: "📍 Indore · Serving D2C brands globally"
- **H1 headline:** "Turn your messy business data into decisions that make money."
- **Subheadline:** "Continuiq builds dashboards, runs audits, and surfaces the insights your Shopify and Google Analytics dashboards are hiding. Get a free data audit this week."
- **Primary CTA:** "Get My Free Audit →" (scrolls to form)
- **Secondary CTA:** "See What We Do" (scrolls to services)
- **Trust strip below CTAs:** "Built on" + small monochrome logos of Power BI, Python, SQL, Google Analytics, Shopify

**Right column:**
- Animated dashboard mockup — a slick fake analytics dashboard with bars/lines that animate on load. Should feel like a real BI tool but stylised. Floating cards with KPI numbers (e.g. "Revenue +23%", "Churn -8%") that subtly drift.

**Background:**
- Subtle animated mesh gradient in deep blues
- Faint grid pattern overlay (low opacity)
- One large glowing orb that slowly moves (CSS only, no JS for perf)

### 5.3 Services Section

**Header:**
- Eyebrow: "What we deliver"
- H2: "Three ways we turn your data into ₹"

**Three service cards (grid 3×1 desktop, 1×3 mobile):**

| Card | Title | Pitch | Deliverable | Timeline |
|------|-------|-------|-------------|----------|
| 1 | **Sales Dashboard in 48h** | One live dashboard that answers every "how are we doing?" question your team asks every Monday. | Power BI / Looker Studio dashboard, connected to your live data, with 8–12 KPIs and filters. | 48 hours |
| 2 | **Customer Churn Report** | Find out exactly which customers are leaving, why, and what they were worth — before next quarter. | 15-page report + retention playbook + cohort analysis. | 5 business days |
| 3 | **GA + Shopify Audit** | A surgical audit of your analytics stack: what's broken, what's missing, what's costing you money. | 2-page diagnostic + 5 prioritised fixes + 30-min walkthrough call. | 3 business days (Free for first 3 clients this month) |

**Card design:**
- Each card has: icon at top, title, pitch, deliverable list (3 bullets), timeline badge, "Learn more →" link
- On hover (desktop): gentle lift (translateY -4px), border glow in accent blue, icon does a tiny rotation
- The third card has a "FREE" sticker in the corner to draw the eye

**Animation:** Cards stagger-fade-up on scroll into view (Intersection Observer + Motion).

### 5.4 Social Proof Section

Until real testimonials exist, this section earns trust through **process, expertise, and locality**.

**Sub-section A: "How we work" (4-step process strip)**
1. **Discovery call** (15 min) — we listen, you talk
2. **Free data audit** — we look under the hood
3. **Proposal + plan** — clear scope, clear price
4. **Delivery in 48h–2 weeks** — depending on scope

Visual: horizontal stepper with connecting lines that "draw" themselves as the user scrolls.

**Sub-section B: "By the numbers" stat strip**
- 4 stat cards with count-up animation on scroll:
  - "5+ tools" we work across daily
  - "48hr" fastest dashboard turnaround
  - "100%" money-back if you're not happy with the audit
  - "1-on-1" — you work directly with the founder, no account managers

**Sub-section C: "Why Continuiq"**
- Three-column trust pillars:
  - **Outcome-first** — we don't sell tools, we sell decisions you can make on Monday morning
  - **Indian SMB pricing** — agency quality, founder-friendly rates
  - **Full-stack analytics** — Excel to Python to BI tools, one team

**Sub-section D: Testimonials placeholder**
- Carousel component, ready to populate. At launch shows two case-study teasers with anonymised numbers (e.g. "D2C apparel brand — found ₹2.1L/month in untracked refunds").

### 5.5 CTA Section — Free Audit Booking

The most important section. Visually distinct (full-bleed blue panel in light mode, accent gradient in dark mode).

**Headline:** "Get your free data audit. Limited to 3 clients this month."
**Sub:** "We'll spend 90 minutes inside your analytics, then send you a 2-page report telling you exactly what's broken and what's making you money."

**Form fields:**
1. Your name *
2. Business name *
3. Work email *
4. WhatsApp / phone (optional but recommended)
5. Where do you sell? (Shopify / Amazon / Website / Other — checkbox group)
6. What's your one biggest data headache right now? (textarea, 280 chars)
7. Monthly revenue range (dropdown: <₹5L / ₹5–25L / ₹25L–1Cr / ₹1Cr+ / Prefer not to say)

**Submit button:** "Send me my audit slot →"

**Below form:**
- "We reply within 12 hours. No spam, ever."
- Tiny WhatsApp icon + number for those who hate forms
- contactcontinuiq@gmail.com

**Backend:**
- Form submissions go to `contactcontinuiq@gmail.com` via Resend
- Also push to a Google Sheet via webhook (for tracking)
- Auto-reply email to the lead within 30 seconds (uses our existing "application received" email tone)

### 5.6 Footer
- Logo + one-liner tagline
- Quick links: Services · Process · Contact · Privacy
- Email: contactcontinuiq@gmail.com
- Location: Indore, MP, India
- Social: LinkedIn (when ready)
- Bottom row: © 2026 Continuiq Consulting. Made in Indore.

---

## 6. Technical Stack

### 6.1 Core
| Layer | Choice | Why |
|-------|--------|-----|
| Framework | **Next.js 15** (App Router) | SSG/ISR, image optimisation, native metadata API, best-in-class SEO |
| Language | **TypeScript** | Type safety, better DX, fewer bugs |
| Styling | **Tailwind CSS v4** | Fast, consistent, tiny output, perfect for design tokens |
| Components | **shadcn/ui** | Owned components, accessible by default, no runtime bloat |
| Animation | **Motion** (formerly Framer Motion) | Industry standard, declarative, great for scroll-triggered |
| Icons | **Lucide React** | Clean, consistent, tree-shakeable |
| Forms | **React Hook Form** + **Zod** | Performant validation, type-safe schemas |
| Theme | **next-themes** | Battle-tested dark/light toggle |
| Fonts | **next/font** with Inter + Outfit | Self-hosted, zero CLS, brand-aligned |

### 6.2 Backend / Services
| Need | Choice |
|------|--------|
| Hosting | **Vercel** (free tier covers launch) |
| Domain | continuiqconsulting.com (already owned) |
| Transactional email | **Resend** + **React Email** (3,000 free/mo) |
| Form storage backup | Google Sheets via webhook or Airtable |
| Analytics | **Vercel Analytics** + **Plausible** (privacy-friendly, no cookie banner needed) |
| Error monitoring | **Sentry** (free tier) |

### 6.3 Why not WordPress / Webflow / Framer?
- WordPress: slow, plugin-heavy, security headache for a 4-section site
- Webflow: subscription cost, harder to customise animations
- Framer: great for prototyping but harder to optimise SEO and Core Web Vitals
- Next.js gives us full control, best perf, best SEO, and is free to host

---

## 7. Design System

### 7.1 Colour palette (blue-forward, brand-aligned)

**Light mode**
```
--background:       #FFFFFF
--surface:          #F8FAFC   (subtle off-white)
--surface-elevated: #FFFFFF
--border:           #E2E8F0
--text-primary:     #0A1628   (deep navy)
--text-secondary:   #475569
--text-muted:       #94A3B8
--brand-primary:    #0F2A5C   (Continuiq deep navy — from logo)
--brand-accent:     #2563EB   (electric blue, for CTAs)
--brand-glow:       #60A5FA   (light blue for highlights / gradients)
--success:          #10B981
--warning:          #F59E0B
```

**Dark mode**
```
--background:       #050B1A   (near-black navy)
--surface:          #0A1628
--surface-elevated: #111E36
--border:           #1E293B
--text-primary:     #F1F5F9
--text-secondary:   #94A3B8
--text-muted:       #64748B
--brand-primary:    #3B82F6   (brighter blue for dark bg)
--brand-accent:     #60A5FA
--brand-glow:       #93C5FD
```

### 7.2 Typography
- **Display / Headings:** Outfit (700 / 600) — matches the existing logo wordmark
- **Body:** Inter (400 / 500) — clean, legible at all sizes
- **Mono (for numbers in stats):** JetBrains Mono

**Scale (clamp-based, fluid):**
- H1: clamp(2.5rem, 5vw + 1rem, 4.5rem)
- H2: clamp(2rem, 3vw + 1rem, 3rem)
- H3: clamp(1.25rem, 1vw + 1rem, 1.5rem)
- Body: 1rem (16px) / 1.6 line-height

### 7.3 Spacing & layout
- Max content width: 1280px
- Section vertical padding: clamp(4rem, 8vw, 8rem)
- 8-point grid for all spacing
- Generous whitespace — agency sites should feel premium, not cramped

### 7.4 Components needed (shadcn/ui base)
- Button (primary, secondary, ghost)
- Card
- Input, Textarea, Select, Checkbox
- Form (with React Hook Form)
- Toast (for form submission feedback)
- Toggle (theme switcher)
- Sheet (mobile menu)

---

## 8. Animation & Interaction Spec

### 8.1 Principles
- **Purposeful** — every animation either guides attention or signals state. No animation for animation's sake.
- **Fast** — most transitions 200–400ms. Anything longer is a deliberate hero moment.
- **Respect `prefers-reduced-motion`** — disable all non-essential animations for users who opt out.
- **60fps or it doesn't ship** — use `transform` and `opacity` only; avoid animating layout properties.

### 8.2 Hero animations
- Headline: split into words, stagger-fade-in on mount (40ms between words)
- Dashboard mockup: bars grow from 0 to full height with spring easing
- Floating KPI cards: subtle vertical drift (Y ±6px over 4s loop)
- Background mesh: very slow CSS gradient shift (15s loop)

### 8.3 Scroll-triggered
- Service cards: stagger fade-up (Intersection Observer threshold 0.2)
- Process stepper: connecting lines "draw" using stroke-dasharray
- Stat counters: count up from 0 when in view (use `useInView` + `animate`)
- Section headings: subtle fade-up on enter

### 8.4 Micro-interactions
- Buttons: scale 0.98 on press, brightness increase on hover
- Cards: translateY -4px + shadow grow on hover
- Theme toggle: sun/moon icon morph with rotation
- Form fields: border glow on focus, label float-up

### 8.5 Cursor (optional, desktop only)
- Subtle custom cursor that scales up on interactive elements — skip if it pushes the bundle over budget.

---

## 9. SEO Strategy

### 9.1 Target keywords (90-day plan)
**Primary (high intent):**
- "data analyst consultant india"
- "shopify dashboard freelancer"
- "data audit for d2c brands"
- "power bi consultant for ecommerce"

**Secondary (informational, for future blog):**
- "how to set up shopify dashboard"
- "customer churn analysis for d2c"
- "google analytics audit checklist"

**Local:**
- "data analyst indore"
- "business analytics consultant indore"
- "freelance data analyst madhya pradesh"

### 9.2 On-page SEO
- Single semantic HTML structure — one `<h1>`, proper heading hierarchy
- Meta title: `Continuiq Consulting | Data & Business Analytics for D2C Brands`
- Meta description: 155 chars, keyword-rich, ends with the free audit hook
- OG image: 1200×630 with logo + headline + tagline (auto-generated via Next.js OG image API)
- Canonical URL set
- `alt` text on every image
- Internal anchor links between sections

### 9.3 Structured data (JSON-LD)
Three schemas in the `<head>`:
1. **Organization** — name, logo, URL, contact, social profiles
2. **LocalBusiness** — Indore address (even if home-based), service area, hours
3. **Service** — one block per service card with description and provider

### 9.4 Technical SEO
- `robots.txt` and `sitemap.xml` auto-generated by Next.js
- Mobile-first responsive (Google's primary index)
- HTTPS via Vercel (automatic)
- Core Web Vitals targets:
  - **LCP** < 1.5s
  - **INP** < 200ms
  - **CLS** < 0.05

### 9.5 Off-page (parallel work)
- Submit to Google Search Console day 1
- Create Google Business Profile (Indore) — huge for local SEO
- Backlink targets: relevant Indian D2C blogs, founder communities, guest posts

---

## 10. Performance Budget

| Metric | Target | Hard ceiling |
|--------|--------|--------------|
| Initial JS bundle | < 90 KB gzipped | 120 KB |
| Total page weight | < 500 KB | 800 KB |
| LCP | < 1.5s | 2.5s |
| FID / INP | < 100ms | 200ms |
| CLS | < 0.05 | 0.1 |
| Lighthouse Performance | ≥ 95 | 90 |
| Lighthouse Accessibility | 100 | 95 |
| Lighthouse SEO | 100 | 95 |

**Tactics to hit these:**
- All images via `next/image` with proper sizes/priority
- Above-the-fold hero image preloaded
- Animation library lazy-loaded after first interaction
- Fonts via `next/font` with `display: swap`
- No third-party scripts on first load (analytics deferred)

---

## 11. Accessibility (WCAG 2.1 AA)

- All interactive elements keyboard-navigable, with visible focus states
- Colour contrast ratio ≥ 4.5:1 for body, ≥ 3:1 for large text — verified in both themes
- Form inputs have associated labels (not just placeholders)
- Animations respect `prefers-reduced-motion`
- Skip-to-content link for screen-reader users
- ARIA labels on icon-only buttons (theme toggle, mobile menu, social icons)
- Form errors announced via `aria-live="polite"`

---

## 12. Analytics & Measurement

### 12.1 What we track
- Page view (Vercel Analytics + Plausible)
- Scroll depth (25%, 50%, 75%, 100%)
- CTA button clicks (which CTA, which section)
- Form starts (first field focused)
- Form submissions (successful)
- Form abandonment (started but didn't submit)
- Outbound link clicks (WhatsApp, email)
- Theme toggle usage

### 12.2 Conversion funnel
```
Landing → Scrolled to Services → Scrolled to CTA → Form started → Form submitted
```
Each step is a tracked event; we'll watch the biggest drop-off and iterate there first.

### 12.3 Weekly review dashboard
Once live, build a Power BI dashboard pulling from Vercel + Plausible + Google Search Console — eat our own dog food.

---

## 13. Content Requirements (Pre-launch checklist)

- [ ] Final logo file (SVG + 32px / 192px / 512px PNGs for favicon set)
- [ ] OG image 1200×630
- [ ] Hero headline copy approved
- [ ] 3 service descriptions approved
- [ ] Trust pillar copy approved
- [ ] Form auto-reply email content (we already have a template from past comms)
- [ ] Privacy policy page (1-pager, GDPR-lite — even Indian businesses need this for global leads)
- [ ] Terms of service (optional at launch, recommended within 30 days)

---

## 14. Launch Plan

### Phase 1 — Launch (Day 0 → Day 7)
- Build all 4 sections
- Wire up form → Resend → Sheet
- Deploy to Vercel
- Connect continuiqconsulting.com via DNS
- Submit to Google Search Console
- Set up Google Business Profile
- Verify analytics firing

### Phase 2 — Iterate (Week 2 → Week 4)
- Add first 2 real case studies once first audits complete
- Add testimonials section with real quotes
- A/B test hero headline (2 variants)
- Improve any section with high drop-off

### Phase 3 — Scale (Month 2+)
- Add `/case-studies/` route with MDX-powered detail pages
- Add `/blog/` with SEO-targeted long-form posts
- Add `/about/` page with founder story
- Add booking calendar embed (Cal.com) as alternative to form

---

## 15. Out of Scope (for v1)

- Blog system
- Case study sub-pages
- Pricing page (intentionally — we want every lead through the audit)
- Live chat
- Multi-language
- User accounts / login
- Payment processing
- AI chatbot

---

## 16. Risks & Open Questions

| Risk / Question | Mitigation / Decision needed |
|----|----|
| Form might attract spam | Add hCaptcha (invisible) before launch |
| Domain DNS propagation can delay launch | Set DNS up 24h before content is ready |
| "Free audit" might attract low-intent leads | Qualify with revenue dropdown; manually filter |
| No real testimonials at launch | Use case-study teasers with anonymised numbers; commit to first 3 audits → 3 testimonials |
| Single founder support load if site converts well | Acceptable bottleneck for first 30 days; add Cal.com booking after that |

---

## 17. Success Criteria

The site is a success if, within 30 days of launch, we have:
- ✅ 10+ Free Data Audit form submissions
- ✅ At least 2 audits converted to paid engagements
- ✅ Lighthouse scores: Performance ≥ 95, Accessibility = 100, SEO = 100
- ✅ Indexed and ranking for at least one target keyword
- ✅ At least 1 referral lead that mentioned the site

---

## Appendix A — Copy bank (ready to paste into code)

**Hero H1:** Turn your messy business data into decisions that make money.

**Hero sub:** Continuiq builds dashboards, runs audits, and surfaces the insights your Shopify and Google Analytics dashboards are hiding. Get a free data audit this week.

**Services intro H2:** Three ways we turn your data into ₹

**Process H2:** How we work — no jargon, no surprises

**Stat strip:** 5+ tools · 48hr turnaround · 100% money-back · 1-on-1 with the founder

**CTA H2:** Get your free data audit. Limited to 3 clients this month.

**CTA sub:** We'll spend 90 minutes inside your analytics, then send you a 2-page report telling you exactly what's broken and what's making you money.

**Footer tagline:** Continuity for the data that runs your business.

---

*End of PRD — v1.0*
