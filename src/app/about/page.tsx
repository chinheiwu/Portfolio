import type { Metadata } from "next";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About — Chin Hei Wu",
  description:
    "Mechanical Design Engineer specialising in plastics, sheet metal, and prototyping.",
};

export default function AboutPage() {
  return <About />;
}
