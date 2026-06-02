"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { motion } from "framer-motion";
import { LogOut, LogIn } from "lucide-react";

export default function SignInButton() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="w-24 h-10 bg-slate-200 animate-pulse rounded-full" />
    );
  }

  if (session && session.user) {
    return (
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          {session.user.image && (
            <img
              src={session.user.image}
              alt="Profile"
              className="w-7 h-7 rounded-full border border-border"
            />
          )}
          <span className="text-sm font-medium text-muted-foreground hidden lg:inline-block">
            {session.user.name}
          </span>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => signOut()}
          className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          <LogOut className="w-3.5 h-3.5" />
          Logout
        </motion.button>
      </div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => signIn("google")}
      className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
    >
      <LogIn className="w-3.5 h-3.5" />
      Login
    </motion.button>
  );
}
