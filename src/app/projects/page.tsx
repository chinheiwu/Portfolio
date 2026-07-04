import type { Metadata } from "next";
import Projects from "@/components/Projects";

export const metadata: Metadata = {
  title: "Projects — Chin Hei Wu",
  description: "Selected product design case studies by Chin Hei Wu.",
};

export default function ProjectsPage() {
  return <Projects />;
}
