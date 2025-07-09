
import PrivacyPolicyPage from "@/components/privacy/privacy-policy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - EservOne",
  description: "Learn how EservOne collects, uses, and protects your personal information.",
};

export default function Page() {
  return <PrivacyPolicyPage />;
} 