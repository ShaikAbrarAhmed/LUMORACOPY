"use client";

import { SessionProvider } from "next-auth/react";
import { MembershipProvider } from "./MembershipContext";

export default function AuthSessionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <MembershipProvider>{children}</MembershipProvider>
    </SessionProvider>
  );
}
