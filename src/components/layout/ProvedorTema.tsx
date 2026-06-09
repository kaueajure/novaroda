"use client";

import { useEffect } from "react";
import { useTemaStore } from "@/store/useTemaStore";

export function ProvedorTema() {
  const tema = useTemaStore((state) => state.tema);

  useEffect(() => {
    document.documentElement.dataset.theme = tema === "claro" ? "light" : "dark";
  }, [tema]);

  return null;
}
