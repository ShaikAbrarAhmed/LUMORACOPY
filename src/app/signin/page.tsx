"use client";

import React, { useState, useEffect, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Mail, Lock, AlertCircle } from "lucide-react";
import { Logo } from "@/components/Logo";

function SignInContent() {
  const { status } = useSession();
  const router = useRouter();

  // States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  
  // Loading Step Simulation
  const [loadingStep, setLoadingStep] = useState<number | null>(null);
  const loadingMessages = [
    "Establishing secure network link...",
    "Re-syncing sandbox workspace...",
    "Authenticating builder profile...",
    "Welcome Back!"
  ];

  // Redirect if already authenticated
  useEffect(() => {
    if (status === "authenticated") {
      const pendingAction = localStorage.getItem("pending_action");
      if (pendingAction === "apply_cohort") {
        router.push("/cohorts/join");
      } else {
        router.push("/");
      }
    }
  }, [status, router]);

  // Submit Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!email || !password) {
      setErrorMsg("Please fill in both fields.");
      return;
    }

    setLoadingStep(0);
    const interval = setInterval(() => {
      setLoadingStep((prev) => {
        if (prev === null) return 0;
        if (prev < loadingMessages.length - 1) {
          return prev + 1;
        }
        clearInterval(interval);
        return prev;
      });
    }, 1000);

    try {
      const authRes = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      clearInterval(interval);
      setLoadingStep(null);

      if (authRes?.error) {
        setErrorMsg("Invalid email or password. Please try again.");
      } else {
        const pendingAction = localStorage.getItem("pending_action");
        if (pendingAction === "apply_cohort") {
          router.push("/cohorts/join");
        } else {
          router.push("/");
        }
      }
    } catch (err) {
      clearInterval(interval);
      setLoadingStep(null);
      console.error(err);
      setErrorMsg("An unexpected server error occurred. Please try again later.");
    }
  };

  const handleGoogleSignIn = () => {
    const pendingAction = localStorage.getItem("pending_action");
    signIn("google", { 
      callbackUrl: pendingAction ? "/cohorts/join" : "/" 
    });
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#050505] text-[#FFFFFF] px-6 py-12 relative overflow-hidden font-sans select-none">
      {/* Background soft gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.015)_0%,transparent_80%)] pointer-events-none" />

      {/* Simulated Onboarding Progress Blocker */}
      <AnimatePresence>
        {loadingStep !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[#050505]/95 z-50 flex flex-col items-center justify-center p-8 text-center"
          >
            <div className="relative w-12 h-12 mb-6">
              <div className="absolute inset-0 border-2 border-white/5 rounded-full" />
              <div className="absolute inset-0 border-2 border-white border-t-transparent rounded-full animate-spin" />
            </div>
            <AnimatePresence mode="wait">
              <motion.p
                key={loadingStep}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="text-xs tracking-widest font-heading font-medium text-[#A1A1AA] uppercase"
              >
                {loadingMessages[loadingStep]}
              </motion.p>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-full max-w-sm flex flex-col items-center space-y-8 z-10">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <Logo
            variant="primary"
            size="md"
            flat
            className="transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </Link>

        {/* Title & Copy */}
        <div className="text-center space-y-2.5">
          <h1 className="text-3xl md:text-4xl font-fancy font-light text-white tracking-normal leading-none">
            Welcome Back
          </h1>
          <p className="text-xs text-[#A1A1AA] leading-relaxed max-w-[280px] mx-auto font-sans font-light">
            Continue building alongside students, mentors, and builders who are growing together.
          </p>
        </div>

        {/* Form Container (No giant cards, flat, minimal layout) */}
        <div className="w-full space-y-6">
          {errorMsg && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-3 bg-red-950/20 border border-red-900/30 text-red-400 rounded-lg text-xs font-sans flex items-start gap-2.5"
            >
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{errorMsg}</span>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Email Address */}
            <div className="space-y-2">
              <label className="text-[9px] font-semibold text-[#A1A1AA] uppercase tracking-[0.15em] font-heading block">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A1A1AA]/50" />
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 text-xs rounded-lg border border-white/[0.08] bg-[#111214] text-white placeholder-[#A1A1AA]/30 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/10 transition-all font-sans font-light"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-[9px] font-semibold text-[#A1A1AA] uppercase tracking-[0.15em] font-heading block">
                  Password
                </label>
                <Link 
                  href="/signin?mode=forgot"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("A password reset email has been simulated. Check your local logs!");
                  }}
                  className="text-[9px] font-medium text-[#A1A1AA]/60 hover:text-white uppercase tracking-wider transition-colors font-heading"
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A1A1AA]/50" />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 text-xs rounded-lg border border-white/[0.08] bg-[#111214] text-white placeholder-[#A1A1AA]/30 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/10 transition-all font-sans font-light"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-2 bg-white hover:bg-[#F5F5F5] text-black font-heading font-semibold text-[10px] tracking-wider uppercase py-3.5 rounded-lg flex items-center justify-center gap-1.5 transition-all duration-200 active:translate-y-px cursor-pointer"
            >
              Continue
            </button>
          </form>

          {/* Social login divider */}
          <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-white/[0.06]" />
            <span className="flex-shrink mx-4 text-[9px] font-semibold text-[#A1A1AA]/40 uppercase tracking-widest font-heading">
              Or
            </span>
            <div className="flex-grow border-t border-white/[0.06]" />
          </div>

          {/* Google Login */}
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="w-full bg-[#111214] hover:bg-white/[0.03] border border-white/[0.08] text-white font-heading font-semibold text-[10px] tracking-wider uppercase py-3.5 rounded-lg flex items-center justify-center gap-2.5 transition-all duration-200 active:translate-y-px cursor-pointer"
          >
            <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12.24 10.285V14.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.859-3.578-7.859-8s3.529-8 7.859-8c2.46 0 4.105 1.025 5.047 1.926l3.227-3.107C18.29 1.905 15.42 1 12.24 1 6.033 1 12.24s5.033 11.24 11.24 11.24c6.478 0 10.793-4.537 10.793-10.985 0-.74-.08-1.302-.177-1.854H12.24z"
              />
            </svg>
            Continue with Google
          </button>
        </div>

        {/* Redirect to signup */}
        <div className="text-center pt-2">
          <Link
            href="/create-account"
            className="text-xs text-[#A1A1AA] hover:text-white transition-colors font-sans font-light"
          >
            Don't have an account? <span className="font-bold underline">Join Lumora</span>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default function SignInPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-white/10 border-t-white rounded-full animate-spin" />
      </div>
    }>
      <SignInContent />
    </Suspense>
  );
}
