"use client";

import * as React from "react";
import { motion } from "motion/react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, MessageCircle, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/toast";

const sellsOnOptions = ["Shopify", "Amazon", "Website", "Other"] as const;

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  businessName: z.string().min(2, "Business name is required"),
  email: z.string().email("Please enter a valid email address"),
  whatsapp: z.string().optional(),
  sellsOn: z.array(z.string()).min(1, "Please select at least one option"),
  biggestHeadache: z.string().max(280, "Please keep this under 280 characters").optional(),
  revenueRange: z.string().min(1, "Please select your revenue range"),
});

type FormData = z.infer<typeof formSchema>;

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p role="alert" aria-live="polite" className="text-red-500 text-xs mt-1">
      {message}
    </p>
  );
}

export function CTASection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [charCount, setCharCount] = React.useState(0);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      sellsOn: [],
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1200));
    console.log("Audit form submission:", data);
    setIsSubmitting(false);
    reset();
    setCharCount(0);
    toast({
      title: "Audit slot requested!",
      description: "We'll reply within 12 hours. Check your inbox.",
      variant: "success",
    });
  };

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 animate-mesh"
          style={{
            background:
              "linear-gradient(135deg, #0F2A5C 0%, #1E40AF 30%, #0F2A5C 60%, #1E3A8A 100%)",
          }}
        />
        <div className="absolute inset-0 grid-overlay opacity-30" />
        <div
          className="absolute -top-32 -right-32 h-96 w-96 rounded-full animate-orb opacity-15"
          style={{
            background: "radial-gradient(circle, #60A5FA 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/10 text-sm font-medium text-blue-100 mb-5">
            Limited spots available
          </span>
          <h2
            id="cta-heading"
            className="font-bold text-white leading-tight mb-4"
            style={{
              fontSize: "clamp(2rem, 3vw + 1rem, 3rem)",
              fontFamily: "var(--font-outfit, sans-serif)",
            }}
          >
            Get your free data audit.{" "}
            <span className="text-blue-300">Limited to 3 clients this month.</span>
          </h2>
          <p className="text-blue-100/80 text-lg max-w-2xl mx-auto leading-relaxed">
            We&apos;ll spend 90 minutes inside your analytics, then send you a
            2-page report telling you exactly what&apos;s broken and what&apos;s
            making you money.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8"
        >
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
            {/* Row 1 */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <Label htmlFor="name" className="text-white/90">
                  Your name <span className="text-red-400">*</span>
                </Label>
                <Input
                  id="name"
                  placeholder="Anish Kumar"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus-visible:ring-white/40 focus-visible:border-white/40"
                  {...register("name")}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                <div id="name-error">
                  <FieldError message={errors.name?.message} />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="businessName" className="text-white/90">
                  Business name <span className="text-red-400">*</span>
                </Label>
                <Input
                  id="businessName"
                  placeholder="Priya Essentials"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus-visible:ring-white/40 focus-visible:border-white/40"
                  {...register("businessName")}
                  aria-invalid={!!errors.businessName}
                  aria-describedby={errors.businessName ? "businessName-error" : undefined}
                />
                <div id="businessName-error">
                  <FieldError message={errors.businessName?.message} />
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-white/90">
                  Work email <span className="text-red-400">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="anish@brand.com"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus-visible:ring-white/40 focus-visible:border-white/40"
                  {...register("email")}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                <div id="email-error">
                  <FieldError message={errors.email?.message} />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="whatsapp" className="text-white/90">
                  WhatsApp / phone{" "}
                  <span className="text-blue-300/60 text-xs font-normal">(optional but recommended)</span>
                </Label>
                <Input
                  id="whatsapp"
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus-visible:ring-white/40 focus-visible:border-white/40"
                  {...register("whatsapp")}
                />
              </div>
            </div>

            {/* Where do you sell */}
            <div className="space-y-2">
              <Label className="text-white/90">
                Where do you sell? <span className="text-red-400">*</span>
              </Label>
              <Controller
                control={control}
                name="sellsOn"
                render={({ field }) => (
                  <div className="flex flex-wrap gap-3">
                    {sellsOnOptions.map((option) => (
                      <label
                        key={option}
                        className="flex items-center gap-2 cursor-pointer group"
                      >
                        <Checkbox
                          checked={field.value.includes(option)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              field.onChange([...field.value, option]);
                            } else {
                              field.onChange(field.value.filter((v) => v !== option));
                            }
                          }}
                          className="border-white/30 data-[state=checked]:bg-[var(--brand-accent)] data-[state=checked]:border-[var(--brand-accent)]"
                        />
                        <span className="text-sm text-white/80 group-hover:text-white transition-colors">
                          {option}
                        </span>
                      </label>
                    ))}
                  </div>
                )}
              />
              <FieldError message={errors.sellsOn?.message} />
            </div>

            {/* Biggest headache */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <Label htmlFor="biggestHeadache" className="text-white/90">
                  What&apos;s your one biggest data headache right now?
                </Label>
                <span className="text-xs text-white/40 font-mono">
                  {charCount}/280
                </span>
              </div>
              <Textarea
                id="biggestHeadache"
                placeholder="e.g. I have no idea which marketing channel is actually driving revenue..."
                rows={4}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus-visible:ring-white/40 focus-visible:border-white/40"
                {...register("biggestHeadache", {
                  onChange: (e) => setCharCount(e.target.value.length),
                })}
                maxLength={280}
                aria-invalid={!!errors.biggestHeadache}
              />
              <FieldError message={errors.biggestHeadache?.message} />
            </div>

            {/* Revenue range */}
            <div className="space-y-1.5">
              <Label htmlFor="revenueRange" className="text-white/90">
                Monthly revenue range <span className="text-red-400">*</span>
              </Label>
              <Controller
                control={control}
                name="revenueRange"
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger
                      id="revenueRange"
                      className="bg-white/10 border-white/20 text-white focus:ring-white/40 focus:border-white/40 [&>span]:text-white data-[placeholder]:text-white/40"
                      aria-invalid={!!errors.revenueRange}
                    >
                      <SelectValue placeholder="Select range..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="lt-5l">&lt; ₹5L / month</SelectItem>
                      <SelectItem value="5-25l">₹5L – ₹25L / month</SelectItem>
                      <SelectItem value="25l-1cr">₹25L – ₹1Cr / month</SelectItem>
                      <SelectItem value="1cr-plus">₹1Cr+ / month</SelectItem>
                      <SelectItem value="prefer-not">Prefer not to say</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              <FieldError message={errors.revenueRange?.message} />
            </div>

            {/* Submit */}
            <div className="pt-2">
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-white text-[var(--brand-primary)] font-bold hover:brightness-95 transition-all shadow-lg shadow-black/20 gap-2 text-base"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin h-4 w-4 border-2 border-[var(--brand-primary)]/30 border-t-[var(--brand-primary)] rounded-full inline-block" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send me my audit slot
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </form>

          {/* Below form */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
            <p className="text-sm text-blue-100/60 text-center sm:text-left">
              We reply within 12 hours. No spam, ever.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-green-400 hover:text-green-300 transition-colors font-medium"
                aria-label="Contact via WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href="mailto:contactcontinuiq@gmail.com"
                className="flex items-center gap-2 text-sm text-blue-300 hover:text-blue-200 transition-colors font-medium"
                aria-label="Send email to contactcontinuiq@gmail.com"
              >
                <Mail className="h-4 w-4" />
                contactcontinuiq@gmail.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
