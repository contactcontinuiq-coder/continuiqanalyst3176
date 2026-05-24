import type { Metadata } from "next";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { AuditPageClient } from "./AuditPageClient";

export const metadata: Metadata = {
  title: "Free Data Audit | Continuiq — Worth ₹20,000",
  description:
    "Get a free data audit worth ₹20,000. We review your sales, customer, and inventory data and show you exactly where you're losing money. 10 slots/month.",
};

export default function AuditPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <AuditPageClient />
      </main>
      <Footer />
    </>
  );
}
