import type { Metadata } from "next";
import Products from "@/components/Products";

export const metadata: Metadata = {
  title: "Products — Chin Hei Wu",
  description: "Products by Chin Hei Wu.",
};

export default function ProductsPage() {
  return <Products />;
}
