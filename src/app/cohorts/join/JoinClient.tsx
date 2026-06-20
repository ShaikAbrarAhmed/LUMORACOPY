"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useMembership } from "@/components/auth/MembershipContext";
import { AuthFormSkeleton } from "@/components/ui/Skeleton";

export default function JoinCohortPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { showModal } = useMembership();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cohort: "Frontend Mastery",
    college: "",
    phone: "",
    message: "",
  });
  
  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/cohorts");
      showModal("apply_cohort");
    }
  }, [status, router, showModal]);

  useEffect(() => {
    if (session?.user) {
      setFormData(prev => ({
        ...prev,
        name: session.user?.name || "",
        email: session.user?.email || "",
      }));
    }
  }, [session]);

  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  if (status === "loading" || status === "unauthenticated") {
    return (
      <div className="min-h-screen pt-32 pb-20 bg-background px-6 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-2xl mx-auto relative z-10">
          <AuthFormSkeleton />
        </div>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("loading");

    try {
      const res = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to submit");
      
      setSubmitStatus("success");
    } catch (err) {
      console.error(err);
      setSubmitStatus("error");
    }
  };

  if (submitStatus === "success") {
    return (
      <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center bg-background px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-10 rounded-3xl shadow-xl max-w-md w-full text-center border border-border/50"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-headings mb-4">Application Received!</h2>
          <p className="text-slate-600 mb-8">
            Thank you for applying to the {formData.cohort} cohort. We have sent an email notification to our team and we will get back to you shortly!
          </p>
          <button 
            onClick={() => window.location.href = "/"}
            className="w-full py-3 bg-primary hover:bg-primary/95 text-white rounded-xl font-medium transition-colors"
          >
            Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-background px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-headings tracking-tight mb-4">
            Join a Cohort
          </h1>
          <p className="text-lg text-slate-600">
            Take the first step towards building real tech skills. Fill out the form below and we'll get in touch.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/80 backdrop-blur-xl p-8 md:p-10 rounded-[32px] shadow-[0_20px_80px_rgba(79,70,229,0.06)] border border-border/50"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Full Name</label>
                <input 
                  required
                  type="text" 
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Email Address</label>
                <input 
                  required
                  type="email" 
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">College / University</label>
                <input 
                  required
                  type="text" 
                  value={formData.college}
                  onChange={e => setFormData({...formData, college: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white"
                  placeholder="E.g. IIT, NIT..."
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Phone Number</label>
                <input 
                  required
                  type="tel" 
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white"
                  placeholder="+91 98765 43210"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Select Cohort</label>
              <select 
                value={formData.cohort}
                onChange={e => setFormData({...formData, cohort: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white"
              >
                <option value="Frontend Mastery">Frontend Mastery</option>
                <option value="Backend Deep Dive">Backend Deep Dive</option>
                <option value="Fullstack Bootcamp">Fullstack Bootcamp</option>
                <option value="UI/UX Design">UI/UX Design</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Why do you want to join?</label>
              <textarea 
                rows={4}
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white resize-none"
                placeholder="Tell us a little bit about your goals..."
              />
            </div>

            {submitStatus === "error" && (
              <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium">
                Something went wrong. Please try again.
              </div>
            )}

            <button 
              type="submit"
              disabled={submitStatus === "loading"}
              className="w-full py-4 bg-primary hover:bg-primary/95 text-white rounded-xl font-semibold text-lg transition-all shadow-[0_10px_20px_rgba(79,70,229,0.2)] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {submitStatus === "loading" ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
