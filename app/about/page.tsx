import { AboutPage } from "@/components/about";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - EservOne",
  description: "About EservOne",
};

export default function Page() {
  return (
    <AboutPage />
  )
}