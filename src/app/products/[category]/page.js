"use client";
import { useRouter } from "next/navigation";

export default function ProductCategory() {
  const router = useRouter();

  return <div>{router.query}</div>;
}
