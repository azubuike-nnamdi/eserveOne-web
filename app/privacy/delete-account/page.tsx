import DeleteAccountPage from "@/components/privacy/delete-account";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delete Account Request",
  description: "Delete your account",
};


export default function Page() {
  return <DeleteAccountPage />;
}

