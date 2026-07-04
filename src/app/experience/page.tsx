import type { Metadata } from "next";
import Experience from "@/components/Experience";

export const metadata: Metadata = {
  title: "Experience — Chin Hei Wu",
  description: "Work experience as a Mechanical Design Engineer.",
};

export default function ExperiencePage() {
  return <Experience />;
}
