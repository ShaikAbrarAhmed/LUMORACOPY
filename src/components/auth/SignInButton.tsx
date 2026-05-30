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
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          {session.user.image && (
            <img
              src={session.user.image}
              alt="Profile"
              className="w-8 h-8 rounded-full border border-sky-200"
            />
          )}
          <span className="text-sm font-medium text-slate-700 hidden md:inline-block">
            {session.user.name}
          </span>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => signOut()}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-slate-800 rounded-full hover:bg-slate-900 transition-colors"
        >
          <LogOut className="w-4 h-4" />
          Sign Out
        </motion.button>
      </div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => signIn("google")}
      className="flex items-center gap-2 px-5 py-2 text-sm font-medium text-white bg-sky-500 rounded-full hover:bg-sky-600 shadow-md shadow-sky-200 transition-colors"
    >
      <LogIn className="w-4 h-4" />
      Sign In
    </motion.button>
  );
}
