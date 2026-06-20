import { Metadata } from "next";
import CreateAccountPage from "./CreateAccountClient";

export const metadata: Metadata = {
  title: "Create Account",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "/create-account",
  },
};

export default function Page() {
  return <CreateAccountPage />;
}
