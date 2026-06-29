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
      <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center bg-[#0B0B0C] px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-[#111214] p-10 rounded-[12px] shadow-2xl max-w-md w-full text-center border border-[#1E1E22]"
        >
          <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/20">
            <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-heading font-semibold text-[#E7E7E7] mb-4">Application Received!</h2>
          <p className="text-[#A1A1AA] mb-8 font-light">
            Thank you for applying to the {formData.cohort} cohort. We have sent an email notification to our team and we will get back to you shortly!
          </p>
          <button 
            onClick={() => window.location.href = "/"}
            className="w-full py-3 bg-gradient-to-r from-[#7C3AED] to-[#A855F7] hover:opacity-90 text-white rounded-[12px] font-medium transition-all cursor-pointer"
          >
            Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-[#0B0B0C] px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-[#E7E7E7] tracking-tight mb-4">
            Join a Cohort
          </h1>
          <p className="text-lg text-[#A1A1AA] font-light">
            Take the first step towards building real tech skills. Fill out the form below and we'll get in touch.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-[#111214] p-8 md:p-10 rounded-[12px] shadow-2xl border border-[#1E1E22]"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#A1A1AA]">Full Name</label>
                <input 
                  required
                  type="text" 
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-[12px] border border-[#232326] focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/50 bg-[#141417] text-[#E7E7E7] placeholder-[#6B7280] transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#A1A1AA]">Email Address</label>
                <input 
                  required
                  type="email" 
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-[12px] border border-[#232326] focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/50 bg-[#141417] text-[#E7E7E7] placeholder-[#6B7280] transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#A1A1AA]">College / University</label>
                <input 
                  required
                  type="text" 
                  value={formData.college}
                  onChange={e => setFormData({...formData, college: e.target.value})}
                  className="w-full px-4 py-3 rounded-[12px] border border-[#232326] focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/50 bg-[#141417] text-[#E7E7E7] placeholder-[#6B7280] transition-all"
                  placeholder="E.g. IIT, NIT..."
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#A1A1AA]">Phone Number</label>
                <input 
                  required
                  type="tel" 
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 rounded-[12px] border border-[#232326] focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/50 bg-[#141417] text-[#E7E7E7] placeholder-[#6B7280] transition-all"
                  placeholder="+91 XXXXXXXXXX"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-[#A1A1AA]">Select Cohort</label>
              <select 
                value={formData.cohort}
                onChange={e => setFormData({...formData, cohort: e.target.value})}
                className="w-full px-4 py-3 rounded-[12px] border border-[#232326] focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/50 bg-[#141417] text-[#E7E7E7] transition-all"
              >
                <option value="Frontend Mastery" className="bg-[#141417] text-[#E7E7E7]">Frontend Mastery</option>
                <option value="Backend Deep Dive" className="bg-[#141417] text-[#E7E7E7]">Backend Deep Dive</option>
                <option value="Fullstack Bootcamp" className="bg-[#141417] text-[#E7E7E7]">Fullstack Bootcamp</option>
                <option value="UI/UX Design" className="bg-[#141417] text-[#E7E7E7]">UI/UX Design</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-[#A1A1AA]">Why do you want to join?</label>
              <textarea 
                rows={4}
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-3 rounded-[12px] border border-[#232326] focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/50 bg-[#141417] text-[#E7E7E7] placeholder-[#6B7280] resize-none transition-all"
                placeholder="Tell us a little bit about your goals..."
              />
            </div>

            {submitStatus === "error" && (
              <div className="p-4 bg-red-950/20 border border-red-900/30 text-red-400 rounded-[12px] text-sm font-medium">
                Something went wrong. Please try again.
              </div>
            )}

            <button 
              type="submit"
              disabled={submitStatus === "loading"}
              className="w-full py-4 bg-gradient-to-r from-[#7C3AED] to-[#A855F7] hover:opacity-90 text-white rounded-[12px] font-semibold text-lg transition-all shadow-[0_10px_20px_rgba(124,58,237,0.2)] disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
            >
              {submitStatus === "loading" ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
