import TermsOfService from "@/components/privacy/terms-of-service";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - EservOne",
  description: "Learn about the terms of service for EservOne.",
};

export default function Page() {
  return <TermsOfService />;
}