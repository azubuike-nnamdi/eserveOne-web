import { Career } from "@/components/career";
import { Metadata } from "next";

export const metadata: Metadata = {

  title: "Careers",
  description: "At EservOne, we’re building more than a service marketplace—we’re creating a platform that empowers people, connects communities, and transforms how services are delivered. Our team is passionate, innovative, and driven by a mission to bring skills, security, and independence to service providers and customers everywhere.",
}
export default function Page() {
  return <Career />;
}