"use client";

import { useState, useEffect } from "react";
import { Logo } from "@/components/Logo";

export function IntroScreen() {
  const [step, setStep] = useState<number>(0);
  const [isMounted, setIsMounted] = useState<boolean>(true);

  useEffect(() => {
    // 1. Immediately check sessionStorage to prevent flicker
    const shown = typeof window !== "undefined" && sessionStorage.getItem("lumora_intro_shown");
    if (shown) {
      document.documentElement.classList.add("skip-intro");
      setTimeout(() => {
        setStep(6);
        setIsMounted(false);
      }, 0);
      return;
    }

    // 2. Begin timing sequence
    // Step 1: Logo fades in (0.0s)
    setTimeout(() => setStep(1), 0);

    // Step 2: Glow appears (0.5s)
    const t2 = setTimeout(() => setStep(2), 500);

    // Step 3: Tagline appears (1.0s)
    const t3 = setTimeout(() => setStep(3), 1000);

    // Step 4: Secondary text appears (1.4s)
    const t4 = setTimeout(() => setStep(4), 1400);

    // Step 5: Transition begins (1.8s) - Add skip-intro to HTML to fade in home
    const t5 = setTimeout(() => {
      setStep(5);
      document.documentElement.classList.add("skip-intro");
    }, 1800);

    // Step 6: Complete (2.2s) - Set item and unmount
    const t6 = setTimeout(() => {
      setStep(6);
      sessionStorage.setItem("lumora_intro_shown", "true");
      setIsMounted(false);
    }, 2200);

    return () => {
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
    };
  }, []);

  if (!isMounted || step === 6) return null;

  // Derive styles based on step timing
  const isDissolving = step >= 5;
  const isLogoVisible = step >= 1;
  const isGlowVisible = step >= 2;
  const isTaglineVisible = step >= 3;
  const isSecondaryVisible = step >= 4;

  return (
    <div
      className={`fixed inset-0 z-[99999] bg-[#070A13] flex flex-col items-center justify-center transition-opacity duration-[400ms] ease-in-out pointer-events-none select-none ${
        isDissolving ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* 1. Ambient Glow (Lumora Indigo - Soft and Premium) */}
      <div
        className={`absolute w-72 h-72 md:w-[350px] md:h-[350px] rounded-full bg-[#574964]/12 blur-[80px] md:blur-[100px] pointer-events-none transition-all duration-[1000ms] ease-out ${
          isGlowVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
        } ${isDissolving ? "scale-[1.15] opacity-0" : ""}`}
      />

      {/* 2. Logo Container (Soft Fade and Gentle Scale) */}
      <div
        className={`relative z-10 transition-all duration-[2200ms] ease-out ${
          isLogoVisible ? "opacity-100 scale-[1.03]" : "opacity-0 scale-95"
        } ${isDissolving ? "opacity-0 scale-105 blur-sm" : ""}`}
      >
        <Logo size="xl" className="bg-[#2D2433]/80 border-white/10 shadow-2xl" />
      </div>

      {/* 3. Typography Content Wrapper */}
      <div className="relative z-10 mt-10 flex flex-col items-center">
        {/* Tagline: FROM CONFUSED TO CONFIDENT */}
        <div
          className={`text-center transition-all duration-700 ease-out ${
            isTaglineVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2"
          } ${isDissolving ? "opacity-0 -translate-y-2 blur-xs" : ""}`}
        >
          <h1 className="font-heading font-black text-xl md:text-2xl tracking-[0.25em] text-white uppercase leading-none">
            From Confused
          </h1>
          <h1 className="font-heading font-black text-xl md:text-2xl tracking-[0.25em] text-[#C8AAAA] uppercase mt-1 leading-none">
            To Confident
          </h1>
        </div>

        {/* Secondary: Learn • Build • Grow • Belong */}
        <p
          className={`text-center mt-4 transition-all duration-700 ease-out font-sans text-[10px] md:text-xs tracking-[0.22em] text-slate-400 font-light ${
            isSecondaryVisible
              ? "opacity-80 translate-y-0"
              : "opacity-0 translate-y-2"
          } ${isDissolving ? "opacity-0 -translate-y-2 blur-xs" : ""}`}
        >
          Learn &bull; Build &bull; Grow &bull; Belong
        </p>
      </div>
    </div>
  );
}
