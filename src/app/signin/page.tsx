import { Metadata } from "next";
import SignInPage from "./SignInClient";

export const metadata: Metadata = {
  title: "Sign In",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "/signin",
  },
};

export default function Page() {
  return <SignInPage />;
}
