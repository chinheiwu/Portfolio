import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact — Chin Hei Wu",
  description: "Get in touch with Chin Hei Wu, Mechanical Design Engineer.",
};

export default function ContactPage() {
  return <Contact />;
}
