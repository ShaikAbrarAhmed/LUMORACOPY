"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";
import type { Program } from "@/data/programs";

interface JoinProgramModalProps {
  isOpen: boolean;
  onClose: () => void;
  program: Program;
}

export function JoinProgramModal({ isOpen, onClose, program }: JoinProgramModalProps) {
  const [mounted, setMounted] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    year: "",
    currentStatus: "",
    paymentPlan: "",
    message: "",
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.paymentPlan) {
      setErrorMsg("Please select a preferred payment plan.");
      return;
    }
    
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          college: formData.college,
          year: formData.year,
          status: formData.currentStatus,
          paymentPlan: formData.paymentPlan,
          programSlug: program.slug,
          message: formData.message,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || "Submission failed");
      }

      setStatus("success");
    } catch (err: unknown) {
      console.error(err);
      setStatus("error");
      const errorMessage = err instanceof Error ? err.message : "An unexpected error occurred.";
      setErrorMsg(errorMessage);
    }
  };

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="relative w-full max-w-[560px] bg-[#0a0a0a] border border-white/10 rounded-xl shadow-lg z-10"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors z-20"
            >
              <X className="w-5 h-5 text-slate-400" />
            </button>

            {status === "success" ? (
              <div className="p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
                  <Check className="w-8 h-8 text-emerald-500" />
                </div>
                <h3 className="text-2xl font-fancy text-white mb-4">Request received.</h3>
                <p className="text-slate-400 leading-relaxed max-w-md">
                  Thank you for your interest in LumoraSpace. Our program coordinator will contact you shortly to confirm your enrollment and guide you through the next steps.
                </p>
                <button
                  onClick={onClose}
                  className="mt-8 px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-slate-200 transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              <div className="p-6 md:p-8">
                <div className="mb-6">
                  <p className="text-[10px] font-semibold tracking-widest text-slate-400 uppercase mb-1.5">
                    Join Program
                  </p>
                  <h2 className="text-xl font-medium text-white tracking-tight leading-snug">
                    {program.title}
                  </h2>
                  <p className="mt-1.5 text-xs text-slate-400">
                    {program.duration} &nbsp;&bull;&nbsp; {program.fee}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-medium text-slate-400">Full Name *</label>
                      <input
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full h-10 bg-[#111111] border border-white/10 rounded-md px-3 text-sm text-white focus:outline-none focus:border-white/30"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-medium text-slate-400">Email Address *</label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full h-10 bg-[#111111] border border-white/10 rounded-md px-3 text-sm text-white focus:outline-none focus:border-white/30"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-medium text-slate-400">Phone Number *</label>
                      <input
                        required
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full h-10 bg-[#111111] border border-white/10 rounded-md px-3 text-sm text-white focus:outline-none focus:border-white/30"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-medium text-slate-400">College / University *</label>
                      <input
                        required
                        type="text"
                        name="college"
                        value={formData.college}
                        onChange={handleChange}
                        className="w-full h-10 bg-[#111111] border border-white/10 rounded-md px-3 text-sm text-white focus:outline-none focus:border-white/30"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-medium text-slate-400">Current Year *</label>
                      <select
                        required
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                        className="w-full h-10 bg-[#111111] border border-white/10 rounded-md px-3 text-sm text-white focus:outline-none focus:border-white/30 appearance-none"
                      >
                        <option value="" disabled>Select Year</option>
                        <option value="1st Year">1st Year</option>
                        <option value="2nd Year">2nd Year</option>
                        <option value="3rd Year">3rd Year</option>
                        <option value="4th Year">4th Year</option>
                        <option value="Graduated">Graduated</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-medium text-slate-400">Current Status *</label>
                      <select
                        required
                        name="currentStatus"
                        value={formData.currentStatus}
                        onChange={handleChange}
                        className="w-full h-10 bg-[#111111] border border-white/10 rounded-md px-3 text-sm text-white focus:outline-none focus:border-white/30 appearance-none"
                      >
                        <option value="" disabled>Select Status</option>
                        <option value="Student">Student</option>
                        <option value="Working Professional">Working Professional</option>
                        <option value="Looking for Job">Looking for Job</option>
                        <option value="Freelancer">Freelancer</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <label className="text-[11px] font-medium text-slate-400">
                      Payment Plan
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {program.paymentPlans.map((plan) => (
                        <label
                          key={plan.type}
                          className={`relative flex flex-col p-3 border rounded-lg cursor-pointer transition-colors ${
                            formData.paymentPlan === plan.type
                              ? "bg-white/5 border-white/30"
                              : "bg-[#111111] border-white/10 hover:border-white/20 hover:bg-[#161616]"
                          }`}
                        >
                          <input
                            type="radio"
                            name="paymentPlan"
                            value={plan.type}
                            checked={formData.paymentPlan === plan.type}
                            onChange={handleChange}
                            className="sr-only"
                          />
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-semibold text-white tracking-wide uppercase">
                              {plan.type === "SPLIT PAYMENT" ? "PARTIAL PAYMENT" : plan.type}
                            </span>
                            <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-colors ${
                              formData.paymentPlan === plan.type ? "border-white bg-white" : "border-white/20 bg-transparent"
                            }`}>
                              {formData.paymentPlan === plan.type && (
                                <div className="w-1.5 h-1.5 rounded-full bg-black" />
                              )}
                            </div>
                          </div>
                          <span className="text-xs font-medium text-white mb-0.5 mt-1">
                            {plan.type === "SPLIT PAYMENT" ? "₹2,499 while enrolling the course" : plan.amount}
                          </span>
                          <span className="text-[10px] text-slate-400 leading-snug">
                            {plan.type === "SPLIT PAYMENT" ? "₹2,499 after 25 days of joining" : plan.description}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-medium text-slate-400">
                      Any doubts regarding the program? feel free to ask our coordinator wil help you. (Optional)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={2}
                      className="w-full bg-[#111111] border border-white/10 rounded-md p-3 text-sm text-white focus:outline-none focus:border-white/30 resize-none"
                    />
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                      {errorMsg}
                    </div>
                  )}

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full h-11 bg-white text-black text-sm font-semibold rounded-md hover:bg-slate-200 transition-colors disabled:opacity-50"
                    >
                      {status === "submitting" ? "Submitting..." : "Submit Application"}
                    </button>
                    <p className="text-center text-[11px] text-slate-500 mt-3">
                      Payment is not required at this step. Our coordinator will contact you for the next steps.
                    </p>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  if (!mounted) return null;
  return createPortal(modalContent, document.body);
}
