"use client";

import React, { useState, useEffect, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSession, signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { 
  Mail, 
  Lock, 
  User, 
  AlertCircle, 
  Check, 
  Paintbrush, 
  Zap, 
  Ruler, 
  Cpu, 
  Smartphone, 
  Box 
} from "lucide-react";
import { Logo } from "@/components/Logo";

const interestsList = [
  { id: "frontend", name: "Frontend Mastery", icon: Paintbrush },
  { id: "backend", name: "Backend Engineering", icon: Zap },
  { id: "uiux", name: "UI/UX & Design Systems", icon: Ruler },
  { id: "ai", name: "AI & Neural Networks", icon: Cpu },
  { id: "mobile", name: "Mobile App Architectures", icon: Smartphone },
  { id: "pm", name: "Product Engineering", icon: Box }
];

function CreateAccountContent() {
  const { status } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // States
  const [mode, setMode] = useState<"signup" | "welcome">("signup");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [profileSaving, setProfileSaving] = useState(false);
  const [profileSaved, setProfileSaved] = useState(false);

  // Progressive Loading Simulation
  const [loadingStep, setLoadingStep] = useState<number | null>(null);
  const loadingMessages = [
    "Establishing secure network link...",
    "Provisioning sandbox ecosystem...",
    "Aligning community cohorts...",
    "Welcome to Lumora!"
  ];

  // Sync mode with URL query params
  useEffect(() => {
    const urlMode = searchParams.get("mode");
    if (urlMode === "welcome") {
      setMode("welcome");
    } else {
      setMode("signup");
    }
  }, [searchParams]);

  // If already authenticated and not in welcome page, redirect
  useEffect(() => {
    if (status === "authenticated" && mode !== "welcome") {
      router.push("/");
    }
  }, [status, mode, router]);

  const handleGoogleSignIn = () => {
    const pendingAction = localStorage.getItem("pending_action");
    signIn("google", { 
      callbackUrl: pendingAction ? "/cohorts/join" : "/create-account?mode=welcome" 
    });
  };

  // Form submit handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!email || !password || !name || !confirmPassword) {
      setErrorMsg("Please fill out all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMsg("Passwords do not match.");
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
      const signupRes = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const signupData = await signupRes.json();
      
      if (!signupRes.ok) {
        clearInterval(interval);
        setLoadingStep(null);
        setErrorMsg(signupData.error || "Failed to create account. Please try again.");
        return;
      }

      const authRes = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      clearInterval(interval);
      setLoadingStep(null);

      if (authRes?.error) {
        setErrorMsg("Account created, but sign-in failed. Please login manually.");
        router.push("/signin");
      } else {
        setMode("welcome");
      }
    } catch (err) {
      clearInterval(interval);
      setLoadingStep(null);
      console.error(err);
      setErrorMsg("An unexpected server error occurred. Please try again later.");
    }
  };

  const handleToggleInterest = (interestName: string) => {
    setSelectedInterests(prev => 
      prev.includes(interestName)
        ? prev.filter(i => i !== interestName)
        : [...prev, interestName]
    );
  };

  const handleSaveProfile = async () => {
    setProfileSaving(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1200));
      setProfileSaved(true);
      setProfileSaving(false);
      
      setTimeout(() => {
        router.push("/");
      }, 1000);
    } catch (e) {
      console.error(e);
      setProfileSaving(false);
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#050505] text-[#FFFFFF] px-6 py-12 relative overflow-hidden font-sans select-none">
      {/* Background soft radial gradient */}
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

        <AnimatePresence mode="wait">
          {mode === "welcome" ? (
            <motion.div
              key="welcome-flow"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="w-full flex flex-col items-center space-y-6"
            >
              {/* Title & Copy */}
              <div className="text-center space-y-2.5">
                <h1 className="text-3xl md:text-4xl font-fancy font-light text-white tracking-normal leading-none">
                  Welcome to Lumora
                </h1>
                <p className="text-xs text-[#A1A1AA] leading-relaxed max-w-[280px] mx-auto font-sans font-light">
                  You're officially part of the ecosystem. Customize your learning focus profile.
                </p>
              </div>

              {/* Preferences Form */}
              <div className="w-full space-y-6">
                <div className="space-y-3">
                  <span className="text-[9px] font-semibold text-[#A1A1AA] uppercase tracking-[0.15em] font-heading block">
                    Select Interest Areas
                  </span>
                  
                  {profileSaved ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-8 text-center space-y-3 bg-[#111214] border border-white/[0.08] rounded-lg"
                    >
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <h5 className="text-xs font-semibold font-heading uppercase tracking-wider text-white">Profile Configured!</h5>
                      <p className="text-xs text-[#A1A1AA] font-light">Redirecting to your home workspace...</p>
                    </motion.div>
                  ) : (
                    <div className="grid grid-cols-1 gap-2.5">
                      {interestsList.map((interest) => {
                        const isSelected = selectedInterests.includes(interest.name);
                        return (
                          <button
                            key={interest.id}
                            type="button"
                            onClick={() => handleToggleInterest(interest.name)}
                            className={`w-full px-4 py-3.5 rounded-lg border text-xs flex items-center justify-between transition-all cursor-pointer ${
                              isSelected
                                ? "bg-white border-white text-black font-semibold"
                                : "bg-[#111214] border-white/[0.08] text-[#A1A1AA] font-medium hover:text-white hover:border-white/20"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <interest.icon className={`w-4 h-4 shrink-0 ${isSelected ? "text-black" : "text-[#A1A1AA]/60"}`} />
                              <span className="font-heading tracking-wide uppercase text-[9px]">{interest.name}</span>
                            </div>
                            {isSelected && <Check className="w-3.5 h-3.5 text-black shrink-0" />}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                {!profileSaved && (
                  <div className="flex flex-col gap-3">
                    <button
                      type="button"
                      disabled={profileSaving}
                      onClick={handleSaveProfile}
                      className="w-full bg-white hover:bg-[#F5F5F5] text-black font-heading font-semibold text-[10px] tracking-wider uppercase py-3.5 rounded-lg flex items-center justify-center gap-1.5 transition-all duration-200 active:translate-y-px cursor-pointer disabled:opacity-50"
                    >
                      {profileSaving ? (
                        <div className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      ) : (
                        "Save Profile & Set Off"
                      )}
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => router.push("/")}
                      className="w-full bg-transparent hover:bg-white/[0.03] border border-white/[0.08] text-[#A1A1AA] hover:text-white font-heading font-semibold text-[10px] tracking-wider uppercase py-3.5 rounded-lg transition-all duration-200 active:translate-y-px cursor-pointer"
                    >
                      Skip For Now
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="signup-flow"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="w-full flex flex-col items-center space-y-6"
            >
              {/* Title & Copy */}
              <div className="text-center space-y-2.5">
                <h1 className="text-3xl md:text-4xl font-fancy font-light text-white tracking-normal leading-none">
                  Begin Your Journey
                </h1>
                <p className="text-xs text-[#A1A1AA] leading-relaxed max-w-[280px] mx-auto font-sans font-light">
                  Join builders choosing direction over confusion.
                </p>
              </div>

              {/* Lumora Pillars Badges */}
              <div className="flex flex-wrap items-center justify-center gap-1.5 py-1">
                {["Direction", "Mentorship", "Accountability", "Community"].map((pillar) => (
                  <span 
                    key={pillar}
                    className="px-2.5 py-1 text-[8px] font-semibold tracking-[0.18em] uppercase text-[#A1A1AA] bg-[#111214] border border-white/[0.06] rounded-full font-heading"
                  >
                    {pillar}
                  </span>
                ))}
              </div>

              {/* Form Container */}
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
                  
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-[9px] font-semibold text-[#A1A1AA] uppercase tracking-[0.15em] font-heading block">
                      Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A1A1AA]/50" />
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full pl-11 pr-4 py-3 text-xs rounded-lg border border-white/[0.08] bg-[#111214] text-white placeholder-[#A1A1AA]/30 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/10 transition-all font-sans font-light"
                      />
                    </div>
                  </div>

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
                    <label className="text-[9px] font-semibold text-[#A1A1AA] uppercase tracking-[0.15em] font-heading block">
                      Password
                    </label>
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

                  {/* Confirm Password */}
                  <div className="space-y-2">
                    <label className="text-[9px] font-semibold text-[#A1A1AA] uppercase tracking-[0.15em] font-heading block">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A1A1AA]/50" />
                      <input
                        type="password"
                        required
                        placeholder="••••••••"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full pl-11 pr-4 py-3 text-xs rounded-lg border border-white/[0.08] bg-[#111214] text-white placeholder-[#A1A1AA]/30 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/10 transition-all font-sans font-light"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full mt-2 bg-white hover:bg-[#F5F5F5] text-black font-heading font-semibold text-[10px] tracking-wider uppercase py-3.5 rounded-lg flex items-center justify-center gap-1.5 transition-all duration-200 active:translate-y-px cursor-pointer"
                  >
                    Become An Early Member
                  </button>
                </form>

                {/* Social Login */}
                <div className="relative flex py-2 items-center">
                  <div className="flex-grow border-t border-white/[0.06]" />
                  <span className="flex-shrink mx-4 text-[9px] font-semibold text-[#A1A1AA]/40 uppercase tracking-widest font-heading">
                    Or
                  </span>
                  <div className="flex-grow border-t border-white/[0.06]" />
                </div>

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

              {/* Redirect to signin */}
              <div className="text-center pt-2">
                <Link
                  href="/signin"
                  className="text-xs text-[#A1A1AA] hover:text-white transition-colors font-sans font-light"
                >
                  Already have an account? <span className="font-bold underline">Sign In</span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}

export default function CreateAccountPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-white/10 border-t-white rounded-full animate-spin" />
      </div>
    }>
      <CreateAccountContent />
    </Suspense>
  );
}
