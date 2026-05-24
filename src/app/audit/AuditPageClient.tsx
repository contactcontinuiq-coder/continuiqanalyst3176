"use client";

import * as React from "react";
import { motion } from "motion/react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, Send, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/toast";

const industries = [
  "D2C / Ecommerce",
  "Retail",
  "Manufacturing",
  "Logistics",
  "Healthcare",
  "Other",
] as const;

const revenueRanges = [
  "Under ₹15L / month",
  "₹15L – ₹50L / month",
  "₹50L – ₹2Cr / month",
  "₹2Cr – ₹5Cr / month",
  "₹5Cr+ / month",
  "Prefer not to say",
] as const;

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().min(2, "Company name is required"),
  website: z.string().min(2, "Website / Shopify URL is required"),
  industry: z.string().min(1, "Please select an industry"),
  revenue: z.string().min(1, "Please select your revenue range"),
  question: z
    .string()
    .min(10, "Please describe your question in a bit more detail")
    .max(500, "Please keep this under 500 characters"),
  phone: z.string().min(6, "Phone / WhatsApp is required"),
  email: z.string().email("Please enter a valid email address"),
});

type FormData = z.infer<typeof formSchema>;

const nextSteps = [
  {
    label: "Submit the form below",
    sub: "Takes 2 minutes.",
  },
  {
    label: "We review your business and confirm fit",
    sub: "Within 24 hours.",
  },
  {
    label: "We schedule a 30-min discovery call",
    sub: "At a time that works for you.",
  },
  {
    label: "You receive your audit report",
    sub: "Within 5 business days.",
  },
];

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p role="alert" aria-live="polite" className="text-[var(--accent-danger)] text-xs mt-1">
      {message}
    </p>
  );
}

export function AuditPageClient() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = (await res.json().catch(() => ({}))) as {
        success?: boolean;
        message?: string;
      };

      if (!res.ok || !result.success) {
        toast({
          title: "Something went wrong",
          description:
            result.message ??
            "Please try again, or email contactcontinuiq@gmail.com directly.",
          variant: "destructive",
        });
        return;
      }

      setSubmitted(true);
      reset();
      toast({
        title: "Audit request received",
        description: "We'll review and reply within 24 hours.",
        variant: "success",
      });
    } catch {
      toast({
        title: "Couldn't reach the server",
        description:
          "Please check your connection or email contactcontinuiq@gmail.com directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden"
        style={{ backgroundColor: "#0A0F1E" }}
      >
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0 animate-mesh"
            style={{
              background:
                "linear-gradient(135deg, #0A0F1E 0%, #0F1E3D 30%, #0A0F1E 60%, #1E3A8A 100%)",
              opacity: 0.5,
            }}
          />
          <div className="absolute inset-0 grid-overlay opacity-50" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--accent-warning)]/30 bg-[var(--accent-warning)]/10 mb-6"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-warning)] animate-pulse-dot" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[var(--accent-warning)]">
              Limited — 10 slots this month
            </span>
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-bold text-white leading-[1.05] tracking-tight mb-5"
            style={{
              fontSize: "clamp(2.25rem, 4.5vw + 0.5rem, 3.75rem)",
              fontFamily: "var(--font-outfit, sans-serif)",
            }}
          >
            Free Data Audit.{" "}
            <span className="text-[#60A5FA]">Worth ₹20,000.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto"
          >
            We&apos;ll review your sales, customer, and inventory data and show
            you exactly where you&apos;re losing money — and where the next ₹10L
            is hiding.
          </motion.p>
        </div>
      </section>

      {/* What happens next */}
      <section className="py-20 bg-[var(--bg-secondary)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-mono font-semibold uppercase tracking-[0.18em] text-[var(--accent-primary)] mb-3 text-center">
            What happens next
          </p>
          <h2
            className="text-center font-bold text-[var(--text-primary)] leading-tight tracking-tight mb-12"
            style={{
              fontSize: "clamp(1.75rem, 3vw + 0.5rem, 2.5rem)",
              fontFamily: "var(--font-outfit, sans-serif)",
            }}
          >
            Four short steps. No surprises.
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {nextSteps.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-muted)] p-5"
              >
                <span className="text-xs font-mono font-bold text-[var(--accent-primary)] mb-3 block">
                  STEP {String(i + 1).padStart(2, "0")}
                </span>
                <p
                  className="text-base font-semibold text-[var(--text-primary)] mb-1.5 leading-snug tracking-tight"
                  style={{ fontFamily: "var(--font-outfit, sans-serif)" }}
                >
                  {step.label}
                </p>
                <p className="text-xs text-[var(--text-secondary)]">{step.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 lg:py-24 bg-[var(--bg-muted)]" id="form">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl border border-[var(--accent-success)]/30 bg-[var(--accent-success)]/5 p-10 text-center"
            >
              <div className="h-14 w-14 rounded-full bg-[var(--accent-success)]/20 flex items-center justify-center mx-auto mb-5">
                <Check className="h-7 w-7 text-[var(--accent-success)]" strokeWidth={3} />
              </div>
              <h2
                className="text-2xl font-bold text-[var(--text-primary)] mb-3 tracking-tight"
                style={{ fontFamily: "var(--font-outfit, sans-serif)" }}
              >
                Audit request received.
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed max-w-md mx-auto">
                We&apos;ll review your business and reply within 24 hours with
                next steps. In the meantime, check your inbox — we&apos;ve sent
                you a short list of what to prepare for the call.
              </p>
            </motion.div>
          ) : (
            <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] p-6 sm:p-8 lg:p-10 shadow-sm">
              <div className="mb-7">
                <h2
                  className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-2 tracking-tight"
                  style={{ fontFamily: "var(--font-outfit, sans-serif)" }}
                >
                  Request your audit
                </h2>
                <p className="text-sm text-[var(--text-secondary)]">
                  Takes about 2 minutes. All fields required unless noted.
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <Label htmlFor="name">Your name</Label>
                    <Input
                      id="name"
                      placeholder="Anish Kumar"
                      {...register("name")}
                      aria-invalid={!!errors.name}
                    />
                    <FieldError message={errors.name?.message} />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      placeholder="Priya Essentials"
                      {...register("company")}
                      aria-invalid={!!errors.company}
                    />
                    <FieldError message={errors.company?.message} />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="website">Business website / Shopify URL</Label>
                  <Input
                    id="website"
                    placeholder="brand.com or yourbrand.myshopify.com"
                    {...register("website")}
                    aria-invalid={!!errors.website}
                  />
                  <FieldError message={errors.website?.message} />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <Label htmlFor="industry">Industry</Label>
                    <Controller
                      control={control}
                      name="industry"
                      render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger id="industry" aria-invalid={!!errors.industry}>
                            <SelectValue placeholder="Select industry..." />
                          </SelectTrigger>
                          <SelectContent>
                            {industries.map((opt) => (
                              <SelectItem key={opt} value={opt}>
                                {opt}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    />
                    <FieldError message={errors.industry?.message} />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="revenue">Monthly revenue</Label>
                    <Controller
                      control={control}
                      name="revenue"
                      render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger id="revenue" aria-invalid={!!errors.revenue}>
                            <SelectValue placeholder="Select range..." />
                          </SelectTrigger>
                          <SelectContent>
                            {revenueRanges.map((opt) => (
                              <SelectItem key={opt} value={opt}>
                                {opt}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    />
                    <FieldError message={errors.revenue?.message} />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="question">
                    What&apos;s the #1 question you wish your data could answer?
                  </Label>
                  <Textarea
                    id="question"
                    placeholder="e.g. Which marketing channel is actually profitable after returns and shipping?"
                    rows={4}
                    {...register("question")}
                    aria-invalid={!!errors.question}
                    maxLength={500}
                  />
                  <FieldError message={errors.question?.message} />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <Label htmlFor="phone">Phone / WhatsApp</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      {...register("phone")}
                      aria-invalid={!!errors.phone}
                    />
                    <FieldError message={errors.phone?.message} />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="anish@brand.com"
                      {...register("email")}
                      aria-invalid={!!errors.email}
                    />
                    <FieldError message={errors.email?.message} />
                  </div>
                </div>

                <div className="pt-3">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-[var(--accent-primary)] hover:brightness-110 text-white font-bold shadow-lg shadow-[var(--accent-primary)]/30 gap-2 text-base"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin h-4 w-4 border-2 border-white/30 border-t-white rounded-full inline-block" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Request My Free Audit
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>
              </form>

              <p className="mt-6 text-xs text-[var(--text-muted)] text-center leading-relaxed">
                We read every submission personally. Not all applicants are
                accepted — we only take businesses we can genuinely help.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
