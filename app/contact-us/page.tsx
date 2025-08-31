import { Contact } from "@/components/contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - EservOne",
  description: "At EservOne, we believe getting help and offering help should be easy, trusted and efficient. That’s why we created a platform that brings together people who need services with the skilled professionals who provide them",
}
export default function Page() {


  return <Contact />;
}