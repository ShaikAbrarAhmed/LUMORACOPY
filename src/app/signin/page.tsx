"use client";

import React, { useState, useEffect, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { 
  Compass, 
  Rocket, 
  Users, 
  Mail, 
  Lock, 
  ArrowRight, 
  AlertCircle,
  ArrowLeft,
  Sparkles
} from "lucide-react";

// ---------------------------------------------------------
// Interactive SVG Ecosystem Graph for Sign In (3 Nodes)
// ---------------------------------------------------------
interface EcosystemSVGProps {
  activeCard: number | null;
  setActiveCard: (index: number | null) => void;
}

function EcosystemSVG({ activeCard, setActiveCard }: EcosystemSVGProps) {
  const nodes = [
    { id: 0, label: "Direction", x: 120, y: 100, color: "#4F46E5", icon: Compass },
    { id: 1, label: "Confidence", x: 360, y: 110, color: "#4F46E5", icon: Rocket },
    { id: 2, label: "Together", x: 240, y: 280, color: "#F59E0B", icon: Users },
  ];

  return (
    <div className="relative w-full aspect-[4/3] max-w-[400px] mx-auto mb-8 bg-background/40 rounded-3xl border border-slate-200/50 backdrop-blur-sm p-4 overflow-hidden shadow-[0_8px_30px_rgba(91,95,239,0.02)]">
      {/* Ambient center radial glow */}
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
          const isActive = activeCard === node.id;
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
          stroke="#F59E0B"
          strokeWidth="1"
          strokeOpacity="0.3"
          animate={{ r: [32, 44, 32] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />

        {/* Central Core */}
        <g className="cursor-pointer" onMouseEnter={() => setActiveCard(null)}>
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

        {/* Nodes */}
        {nodes.map((node) => {
          const isActive = activeCard === node.id;
          return (
            <g
              key={node.id}
              className="cursor-pointer"
              onMouseEnter={() => setActiveCard(node.id)}
              onMouseLeave={() => setActiveCard(null)}
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

      {/* Node Labels */}
      {nodes.map((node) => {
        const isActive = activeCard === node.id;
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
// Main SignIn Client Component
// ---------------------------------------------------------
function SignInContent() {
  const { status } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();

  // States
  const [activeCard, setActiveCard] = useState<number | null>(null);
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

  // Sign In Floating Value Cards
  const valueCards = [
    {
      id: 0,
      icon: Compass,
      title: "Find Direction",
      desc: "Re-align with personalized career tracks and milestone roadmaps."
    },
    {
      id: 1,
      icon: Rocket,
      title: "Build Confidence",
      desc: "Track your engineering progress through concrete, real-world portfolio tasks."
    },
    {
      id: 2,
      icon: Users,
      title: "Grow Together",
      desc: "Re-engage with cohort peers, accountability partners, and active mentors."
    }
  ];

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
    <div className="relative min-h-screen grid grid-cols-1 lg:grid-cols-12 bg-background text-foreground font-sans selection:bg-primary/10">
      
      {/* Ambient background glows (Indigo dominant - Calm & familiar) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[5%] left-[5%] w-[500px] h-[500px] bg-primary/4 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-primary/3 blur-[140px] rounded-full" />
      </div>

      {/* =========================================================
          LEFT SIDE: Storytelling & Floating Cards
          ========================================================= */}
      <div className="relative z-10 hidden lg:flex lg:col-span-5 flex-col justify-between p-8 md:p-12 lg:p-16 bg-muted/40 border-r border-slate-200/50">
        
        {/* Header Logo */}
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

        {/* Headline, SVG Visualizer, and Floating Value Cards */}
        <div className="my-10 md:my-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 mb-8"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-black tracking-tight leading-[1.05] text-headings">
              Welcome Back, <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Builder.
              </span>
            </h1>
            <p className="text-slate-600 text-sm md:text-base max-w-sm leading-relaxed font-light">
              Continue your journey with Lumora.
            </p>
          </motion.div>

          {/* Interactive SVG visualization */}
          <EcosystemSVG activeCard={activeCard} setActiveCard={setActiveCard} />

          {/* Floating Glass Value Cards */}
          <div className="space-y-3.5 max-w-[400px] mx-auto">
            {valueCards.map((card) => {
              const isHovered = activeCard === card.id;
              return (
                <div
                  key={card.id}
                  onMouseEnter={() => setActiveCard(card.id)}
                  onMouseLeave={() => setActiveCard(null)}
                  className={`p-4 rounded-2xl border transition-all duration-300 select-none cursor-pointer flex items-start gap-4 ${
                    isHovered
                      ? "bg-white border-primary/50 shadow-[0_12px_32px_rgba(79,70,229,0.06)] translate-x-1.5"
                      : "bg-background/60 border-slate-200/50 hover:bg-white/80 hover:border-slate-300"
                  }`}
                >
                  <div className={`p-2 rounded-xl border flex items-center justify-center shrink-0 transition-colors ${
                    isHovered ? "bg-primary/10 border-primary/20 text-primary" : "bg-muted border-slate-200/60 text-slate-500"
                  }`}>
                    <card.icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className={`text-xs font-semibold tracking-tight transition-colors ${
                      isHovered ? "text-primary" : "text-headings"
                    }`}>
                      {card.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 font-light leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex items-center justify-between text-[11px] text-slate-400 font-medium pt-4 border-t border-slate-200/40">
          <span>&copy; {new Date().getFullYear()} Lumora Space</span>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-slate-600 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-600 transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>

      {/* =========================================================
          RIGHT SIDE: Premium Authentication Card
          ========================================================= */}
      <div className="relative z-10 lg:col-span-7 flex items-center justify-center p-6 md:p-12 lg:p-20 overflow-hidden pt-20 lg:pt-12">
        
        {/* Brand logo header (Mobile/Tablet only) */}
        <div className="absolute top-6 left-6 lg:hidden z-20">
          <Link href="/" className="flex items-center gap-2.5 group">
            <Logo size="sm" className="transition-transform duration-300 group-hover:scale-105" />
            <span className="font-heading font-semibold text-foreground text-base tracking-tight">Lumora</span>
          </Link>
        </div>
        
        {/* Grid pattern background */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.01)_1px,transparent_1px)] bg-[size:32px_32px] opacity-60" />

        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 220 }}
          className="relative w-full max-w-[480px] bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-[32px] p-8 md:p-10 shadow-[0_32px_96px_rgba(15,23,42,0.05)] z-10 overflow-hidden"
        >
          {/* Simulated Onboarding Progress Blocker */}
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

          {/* Form Header */}
          <div className="text-center mb-8 space-y-2">
            <span className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase">
              Access Your Space
            </span>
            <h3 className="text-2xl font-heading font-black tracking-tight text-headings">
              Sign In to Lumora
            </h3>
            <p className="text-xs text-slate-500 font-light leading-relaxed">
              Enter your authentication credentials to synchronize with the ecosystem.
            </p>
          </div>

          {/* Error message */}
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

          {/* Sign In Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
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
              <div className="flex justify-between items-center">
                <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">Password</label>
                <Link 
                  href="/signin?mode=forgot"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("A password reset email has been simulated. Check your local logs!");
                  }}
                  className="text-[10px] font-semibold text-primary hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>
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

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-2 btn-primary rounded-xl py-3.5 flex items-center justify-center gap-1.5 cursor-pointer shadow-none"
            >
              Sign In
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Social login divider */}
          <div className="relative my-6 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200/60" />
            </div>
            <span className="relative px-3 text-[10px] font-bold text-slate-400 uppercase bg-white select-none">
              Or Connect Instantly
            </span>
          </div>

          {/* Google Login */}
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

          {/* Redirect to signup */}
          <div className="mt-8 text-center">
            <Link
              href="/create-account"
              className="text-xs text-slate-500 font-medium hover:text-primary transition-colors"
            >
              New to Lumora? <span className="font-bold underline text-primary">Create Account →</span>
            </Link>
          </div>

        </motion.div>

      </div>
    </div>
  );
}

export default function SignInPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <SignInContent />
    </Suspense>
  );
}
