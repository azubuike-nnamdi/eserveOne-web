import { AboutPage } from "@/components/about";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - EservOne",
  description: "At EservOne, we believe getting help and offering help should be easy, trusted and efficient. That’s why we created a platform that brings together people who need services with the skilled professionals who provide them. From home repairs and beauty services to tech support and event planning, our mission is to make everyday task easier by bridging the gap between service seekers and trusted providers in their community..",
};

export default function Page() {
  return (
    <AboutPage />
  )
}