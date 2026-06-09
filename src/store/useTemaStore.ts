"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type TemaSistema = "escuro" | "claro";

type TemaState = {
  tema: TemaSistema;
  alternarTema: () => void;
  definirTema: (tema: TemaSistema) => void;
};

export const useTemaStore = create<TemaState>()(
  persist(
    (set) => ({
      tema: "escuro",
      alternarTema: () =>
        set((state) => ({ tema: state.tema === "escuro" ? "claro" : "escuro" })),
      definirTema: (tema) => set({ tema }),
    }),
    {
      name: "autogestor-pro-tema",
    },
  ),
);
