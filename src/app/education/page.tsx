import type { Metadata } from "next";
import Education from "@/components/Education";

export const metadata: Metadata = {
  title: "Education — Chin Hei Wu",
  description: "Education background of Chin Hei Wu, Mechanical Design Engineer.",
};

export default function EducationPage() {
  return <Education />;
}
