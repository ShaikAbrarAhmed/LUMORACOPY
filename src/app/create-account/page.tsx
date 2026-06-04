"use client";

import React, { useState, useEffect, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSession, signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { 
  Mail, 
  Lock, 
  User, 
  ArrowRight, 
  Check, 
  AlertCircle, 
  CheckCircle2,
  Sparkles,
  Users,
  Rocket,
  TrendingUp,
  Paintbrush,
  Zap,
  Ruler,
  Cpu,
  Smartphone,
  Box
} from "lucide-react";

// ---------------------------------------------------------
// Interactive SVG Ecosystem Graph (4 Nodes matching Signup Cards)
// ---------------------------------------------------------
interface EcosystemSVGProps {
  activeBenefit: number | null;
  setActiveBenefit: (index: number | null) => void;
}

function EcosystemSVG({ activeBenefit, setActiveBenefit }: EcosystemSVGProps) {
  const nodes = [
    { id: 0, label: "Early Access", x: 110, y: 90, color: "#4F46E5", icon: Sparkles },
    { id: 1, label: "Community", x: 390, y: 100, color: "#F59E0B", icon: Users },
    { id: 2, label: "Cohorts", x: 100, y: 290, color: "#818CF8", icon: Rocket },
    { id: 3, label: "Growth", x: 380, y: 280, color: "#4F46E5", icon: TrendingUp },
  ];

  return (
    <div className="relative w-full aspect-[4/3] max-w-[400px] mx-auto mb-8 bg-background/40 rounded-3xl border border-slate-200/50 backdrop-blur-sm p-4 overflow-hidden shadow-[0_8px_30px_rgba(91,95,239,0.02)]">
      {/* Decorative inner gradient blobs */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(91,95,239,0.1),transparent_70%)]" />
      
      <svg className="w-full h-full" viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Orbit Lines */}
        {nodes.map((node) => {
          const isActive = activeBenefit === node.id;
          return (
            <g key={`path-${node.id}`}>
              <line
                x1="240"
                y1="180"
                x2={node.x}
                y2={node.y}
                stroke={isActive ? "url(#gradient-active)" : "#E5E7EB"}
                strokeWidth={isActive ? "2.5" : "1.5"}
                strokeDasharray={isActive ? "none" : "6,6"}
                className="transition-all duration-500"
              />
              {isActive && (
                <motion.line
                  x1="240"
                  y1="180"
                  x2={node.x}
                  y2={node.y}
                  stroke={node.color}
                  strokeWidth="2.5"
                  strokeDasharray="10, 15"
                  initial={{ strokeDashoffset: 50 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  filter="url(#glow)"
                />
              )}
            </g>
          );
        })}

        <defs>
          <linearGradient id="gradient-active" x1="240" y1="180" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4F46E5" />
            <stop offset="1" stopColor="#F59E0B" />
          </linearGradient>
        </defs>

        {/* Pulsing Core Rings */}
        <motion.circle
          cx="240"
          cy="180"
          r="48"
          stroke="#4F46E5"
          strokeWidth="1.5"
          strokeOpacity="0.2"
          animate={{ r: [48, 64, 48], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="240"
          cy="180"
          r="32"
          stroke="#818CF8"
          strokeWidth="1"
          strokeOpacity="0.3"
          animate={{ r: [32, 44, 32] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />

        {/* Central Core */}
        <g className="cursor-pointer" onMouseEnter={() => setActiveBenefit(null)}>
          <circle cx="240" cy="180" r="22" fill="#0F172A" />
          <circle cx="240" cy="180" r="22" fill="url(#core-gradient)" />
          <circle cx="240" cy="180" r="22" stroke="#4F46E5" strokeWidth="2" strokeOpacity="0.4" />
          <motion.circle
            cx="240"
            cy="180"
            r="6"
            fill="#FFFFFF"
            filter="url(#glow)"
            animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </g>
        <radialGradient id="core-gradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(240 180) rotate(90) scale(22)">
          <stop stopColor="#4F46E5" />
          <stop offset="1" stopColor="#0F172A" />
        </radialGradient>

        {/* Orbiting Nodes */}
        {nodes.map((node) => {
          const isActive = activeBenefit === node.id;
          return (
            <g
              key={node.id}
              className="cursor-pointer"
              onMouseEnter={() => setActiveBenefit(node.id)}
              onMouseLeave={() => setActiveBenefit(null)}
            >
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={isActive ? "28" : "20"}
                fill={node.color}
                fillOpacity={isActive ? "0.15" : "0.03"}
                stroke={node.color}
                strokeWidth="1"
                strokeOpacity={isActive ? "0.4" : "0.1"}
                className="transition-all duration-300"
                animate={isActive ? { r: [28, 36, 28] } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <circle
                cx={node.x}
                cy={node.y}
                r="18"
                fill="#FFFFFF"
                stroke={isActive ? node.color : "#E5E7EB"}
                strokeWidth={isActive ? "2.5" : "1.5"}
                className="transition-all duration-300 shadow-sm"
              />
              <svg
                x={node.x - 8}
                y={node.y - 8}
                width="16"
                height="16"
                className="select-none pointer-events-none"
              >
                <node.icon className="w-4 h-4 text-slate-700" />
              </svg>
            </g>
          );
        })}
      </svg>

      {/* Floating Labels */}
      {nodes.map((node) => {
        const isActive = activeBenefit === node.id;
        return (
          <div
            key={`label-${node.id}`}
            style={{
              position: "absolute",
              left: `${(node.x / 480) * 100}%`,
              top: `${(node.y / 360) * 100}%`,
              transform: "translate(-50%, -40px)",
            }}
            className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase transition-all duration-300 select-none pointer-events-none border ${
              isActive
                ? "bg-foreground border-transparent text-background scale-105 shadow-md shadow-primary/10"
                : "bg-white/90 border-slate-200/60 text-slate-500 scale-95 opacity-80"
            }`}
          >
            {node.label}
          </div>
        );
      })}
    </div>
  );
}

// ---------------------------------------------------------
// Confetti Effect for Welcome Onboarding
// ---------------------------------------------------------
function WelcomeConfetti() {
  const [pieces, setPieces] = useState<Array<{ id: number; x: number; y: number; size: number; color: string; delay: number; duration: number; angle: number }>>([]);

  useEffect(() => {
    const colors = ["#4F46E5", "#818CF8", "#C7D2FE", "#F59E0B", "#FBBF24", "#EF4444"];
    const generated = Array.from({ length: 80 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: -10 - Math.random() * 20,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 2.5,
      duration: Math.random() * 3 + 2.5,
      angle: Math.random() * 360,
    }));
    setPieces(generated);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {pieces.map((p) => (
        <motion.div
          key={p.id}
          initial={{ y: "-10%", x: `${p.x}%`, rotate: p.angle, opacity: 1 }}
          animate={{ 
            y: "110%", 
            x: `${p.x + (Math.random() * 20 - 10)}%`, 
            rotate: p.angle + 360,
            opacity: [1, 1, 0.8, 0]
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            ease: "easeOut",
            repeat: 0
          }}
          className="absolute rounded-[2px]"
          style={{
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
          }}
        />
      ))}
    </div>
  );
}

// ---------------------------------------------------------
// Inner Client Content component
// ---------------------------------------------------------
function CreateAccountContent() {
  const { status } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // States
  const [mode, setMode] = useState<"signup" | "welcome">("signup");
  const [activeBenefit, setActiveBenefit] = useState<number | null>(null);
  
  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  
  // Onboarding profiling states (Welcome Experience)
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

  // Create Account Floating Value Cards (Redesigned matching specifications)
  const benefits = [
    {
      id: 0,
      icon: Sparkles,
      title: "Early Access",
      desc: "Secure priority slots in newly released tracks and community products."
    },
    {
      id: 1,
      icon: Users,
      title: "Community",
      desc: "Connect directly with active peers, senior developers, and mentors."
    },
    {
      id: 2,
      icon: Rocket,
      title: "Future Cohorts",
      desc: "Skip long waitlists for high-demand engineering cohorts."
    },
    {
      id: 3,
      icon: TrendingUp,
      title: "Growth Opportunities",
      desc: "Leverage group accountability challenges, standups, and reviews."
    }
  ];

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

    if (!email || !password || !name) {
      setErrorMsg("Please fill out all fields.");
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

  // Profile preferences
  const interestsList = [
    { id: "frontend", name: "Frontend Mastery", icon: Paintbrush },
    { id: "backend", name: "Backend Engineering", icon: Zap },
    { id: "uiux", name: "UI/UX & Design Systems", icon: Ruler },
    { id: "ai", name: "AI & Neural Networks", icon: Cpu },
    { id: "mobile", name: "Mobile App Architectures", icon: Smartphone },
    { id: "pm", name: "Product Engineering", icon: Box }
  ];

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
    <div className="relative min-h-screen grid grid-cols-1 lg:grid-cols-12 bg-background text-foreground font-sans selection:bg-primary/10">
      
      {/* Ambient background glows (Indigo with subtle gold highlights - Optimism & Opportunity) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[5%] left-[5%] w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-accent/3 blur-[130px] rounded-full" />
      </div>

      {/* =========================================================
          LEFT SIDE: Storytelling & 4 Value Cards
          ========================================================= */}
      <div className="relative z-10 hidden lg:flex lg:col-span-5 flex-col justify-between p-8 md:p-12 lg:p-16 bg-muted/40 border-r border-slate-200/50">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3 group">
            <Logo size="sm" className="transition-transform duration-300 group-hover:scale-105" />
            <span className="font-heading font-bold text-lg tracking-tight text-foreground">
              Lumora
            </span>
          </Link>
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/15">
            Ecosystem
          </span>
        </div>

        {/* Storytelling & SVG Graphic */}
        <div className="my-10 md:my-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 mb-8"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-black tracking-tight leading-[1.05] text-headings">
              Your Journey <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Starts Here.
              </span>
            </h1>
            <p className="text-slate-600 text-sm md:text-base max-w-sm leading-relaxed font-light">
              Join students, builders, and dreamers building their future together.
            </p>
          </motion.div>

          {/* SVG Orbit Visualizer */}
          <EcosystemSVG activeBenefit={activeBenefit} setActiveBenefit={setActiveBenefit} />

          {/* Floating cards */}
          <div className="space-y-3.5 max-w-[400px] mx-auto">
            {benefits.map((benefit) => {
              const isHovered = activeBenefit === benefit.id;
              return (
                <div
                  key={benefit.id}
                  onMouseEnter={() => setActiveBenefit(benefit.id)}
                  onMouseLeave={() => setActiveBenefit(null)}
                  className={`p-4 rounded-2xl border transition-all duration-300 select-none cursor-pointer flex items-start gap-4 ${
                    isHovered
                      ? "bg-white border-primary/50 shadow-[0_12px_32px_rgba(79,70,229,0.06)] translate-x-1.5"
                      : "bg-background/60 border-slate-200/50 hover:bg-white/80 hover:border-slate-300"
                  }`}
                >
                  <div className={`p-2 rounded-xl border flex items-center justify-center shrink-0 transition-colors ${
                    isHovered ? "bg-primary/10 border-primary/20 text-primary" : "bg-muted border-slate-200/60 text-slate-500"
                  }`}>
                    <benefit.icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className={`text-xs font-semibold tracking-tight transition-colors ${
                      isHovered ? "text-primary" : "text-headings"
                    }`}>
                      {benefit.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 font-light leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between text-[11px] text-slate-400 font-medium pt-4 border-t border-slate-200/40">
          <span>&copy; {new Date().getFullYear()} Lumora Space</span>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-slate-600 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-600 transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>

      {/* =========================================================
          RIGHT SIDE: Welcome Selector or Account Creation Card
          ========================================================= */}
      <div className="relative z-10 lg:col-span-7 flex items-center justify-center p-6 md:p-12 lg:p-20 overflow-hidden pt-20 lg:pt-12">
        
        {/* Brand logo header (Mobile/Tablet only) */}
        <div className="absolute top-6 left-6 lg:hidden z-20">
          <Link href="/" className="flex items-center gap-2.5 group">
            <Logo size="sm" className="transition-transform duration-300 group-hover:scale-105" />
            <span className="font-heading font-semibold text-foreground text-base tracking-tight">Lumora</span>
          </Link>
        </div>
        
        {/* Background Grid */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.01)_1px,transparent_1px)] bg-[size:32px_32px] opacity-60" />

        <AnimatePresence mode="wait">
          
          {/* Welcome Screen */}
          {mode === "welcome" && (
            <motion.div
              key="welcome-screen"
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="relative w-full max-w-[480px] bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-[32px] p-8 md:p-12 shadow-[0_32px_96px_rgba(15,23,42,0.07)] z-10 text-center flex flex-col items-center overflow-hidden"
            >
              <WelcomeConfetti />

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, type: "spring", damping: 15 }}
                className="relative w-20 h-20 rounded-3xl bg-gradient-to-br from-primary to-accent/80 flex items-center justify-center shadow-lg shadow-primary/25 mb-8"
              >
                <Sparkles className="w-10 h-10 text-white animate-pulse" />
              </motion.div>

              <div className="space-y-3 mb-8">
                <h2 className="text-3xl font-heading font-black tracking-tight text-headings">
                  Welcome To Lumora
                </h2>
                <p className="text-sm text-slate-500 font-light max-w-sm mx-auto">
                  You're officially part of the ecosystem. Customize your learning focus profile.
                </p>
              </div>

              {/* Interests select */}
              <div className="w-full bg-muted border border-slate-200/50 rounded-2xl p-6 mb-8 text-left space-y-4">
                <span className="text-[10px] font-bold tracking-wider text-primary uppercase flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                  Select Interest Areas (Complete Profile)
                </span>
                
                {profileSaved ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-6 text-center space-y-2"
                  >
                    <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                    <h5 className="text-sm font-semibold text-slate-800">Profile Configured!</h5>
                    <p className="text-xs text-slate-500">Redirecting to your home workspace...</p>
                  </motion.div>
                ) : (
                  <>
                    <div className="grid grid-cols-2 gap-2.5">
                      {interestsList.map((interest) => {
                        const isSelected = selectedInterests.includes(interest.name);
                        return (
                          <button
                            key={interest.id}
                            type="button"
                            onClick={() => handleToggleInterest(interest.name)}
                            className={`px-3 py-2.5 rounded-xl border text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                              isSelected
                                ? "bg-white border-primary text-primary"
                                : "bg-white/60 border-slate-200/60 text-slate-600 hover:border-slate-300"
                            }`}
                          >
                            <interest.icon className={`w-3.5 h-3.5 shrink-0 ${isSelected ? "text-primary" : "text-slate-500"}`} />
                            <span className="truncate">{interest.name}</span>
                            {isSelected && <Check className="w-3.5 h-3.5 text-primary shrink-0 ml-auto" />}
                          </button>
                        );
                      })}
                    </div>

                    <button
                      type="button"
                      disabled={profileSaving}
                      onClick={handleSaveProfile}
                      className="w-full btn-primary rounded-xl py-3 text-xs flex items-center justify-center gap-2 disabled:opacity-75 shadow-none"
                    >
                      {profileSaving ? (
                        <>
                          <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Saving...
                        </>
                      ) : (
                        "Save Profile & Set Off"
                      )}
                    </button>
                  </>
                )}
              </div>

              {!profileSaved && (
                <div className="flex flex-col sm:flex-row gap-3 w-full mt-2">
                  <button
                    onClick={() => router.push("/")}
                    className="flex-1 btn-primary rounded-2xl py-4 flex items-center justify-center gap-1.5 shadow-none"
                  >
                    Explore Lumora
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleSaveProfile}
                    className="flex-1 btn-secondary rounded-2xl py-4 flex items-center justify-center gap-1.5"
                  >
                    Complete Profile
                  </button>
                </div>
              )}
            </motion.div>
          )}

          {/* Registration Form Card */}
          {mode === "signup" && (
            <motion.div
              key="signup-card"
              initial={{ opacity: 0, scale: 0.97, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="relative w-full max-w-[480px] bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-[32px] p-8 md:p-10 shadow-[0_32px_96px_rgba(15,23,42,0.05)] z-10 overflow-hidden"
            >
              {/* Loader blocker */}
              {loadingStep !== null && (
                <motion.div
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   className="absolute inset-0 bg-white/95 backdrop-blur-md z-40 flex flex-col items-center justify-center p-8 text-center"
                >
                  <div className="relative w-16 h-16 mb-6">
                    <div className="absolute inset-0 border-4 border-primary/10 rounded-full" />
                    <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                  </div>
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={loadingStep}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="text-sm font-semibold text-slate-700 font-heading"
                    >
                      {loadingMessages[loadingStep]}
                    </motion.p>
                  </AnimatePresence>
                </motion.div>
              )}

              {/* Header */}
              <div className="text-center mb-8 space-y-2">
                <span className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase">
                  Join the Lumora Community
                </span>
                <h3 className="text-2xl font-heading font-black tracking-tight text-headings">
                  Create Your Account
                </h3>
                <p className="text-xs text-slate-500 font-light leading-relaxed">
                  Enter details below to claim your digital key to the ecosystem.
                </p>
              </div>

              {/* Errors */}
              {errorMsg && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3.5 mb-5 bg-red-50 border border-red-100 text-red-600 rounded-xl text-xs font-semibold flex items-start gap-2.5"
                >
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{errorMsg}</span>
                </motion.div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 text-sm rounded-xl border border-slate-200/80 bg-white/70 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 text-sm rounded-xl border border-slate-200/80 bg-white/70 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="password"
                      required
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 text-sm rounded-xl border border-slate-200/80 bg-white/70 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                </div>

                {/* Primary Button */}
                <button
                  type="submit"
                  className="w-full mt-2 btn-primary rounded-xl py-3.5 flex items-center justify-center gap-1.5 cursor-pointer shadow-none"
                >
                  Create Account
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              {/* Social Login */}
              <div className="relative my-6 text-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200/60" />
                </div>
                <span className="relative px-3 text-[10px] font-bold text-slate-400 uppercase bg-white select-none">
                  Or Connect Instantly
                </span>
              </div>

              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="w-full btn-secondary rounded-xl py-3 flex items-center justify-center gap-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.01)] cursor-pointer"
              >
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                  <path
                    fill="#EA4335"
                    d="M12.24 10.285V14.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.859-3.578-7.859-8s3.529-8 7.859-8c2.46 0 4.105 1.025 5.047 1.926l3.227-3.107C18.29 1.905 15.42 1 12.24 1 6.033 1 12.24s5.033 11.24 11.24 11.24c6.478 0 10.793-4.537 10.793-10.985 0-.74-.08-1.302-.177-1.854H12.24z"
                  />
                </svg>
                Continue with Google
              </button>

              {/* Redirect to signin */}
              <div className="mt-8 text-center">
                <Link
                  href="/signin"
                  className="text-xs text-slate-500 font-medium hover:text-primary transition-colors"
                >
                  Already a member? <span className="font-bold underline text-primary">Sign In →</span>
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
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <CreateAccountContent />
    </Suspense>
  );
}
