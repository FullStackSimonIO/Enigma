"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CryptographyRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/learning-path/design");
  }, [router]);

  return null;
}
