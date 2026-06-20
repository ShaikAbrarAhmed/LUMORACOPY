import { Metadata } from "next";
import JoinPage from "./JoinClient";

export const metadata: Metadata = {
  title: "Join a Cohort",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "/cohorts/join",
  },
};

export default function Page() {
  return <JoinPage />;
}
