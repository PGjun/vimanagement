"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    router.push("/notification"); // /notification으로 리다이렉션
  }, []);

  return null; // 리다이렉션 중에는 아무 내용도 표시하지 않음
}
