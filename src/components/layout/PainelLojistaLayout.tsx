"use client";

import { useState, type ReactNode } from "react";
import { AnimatePresence } from "framer-motion";
import { BarraLateral } from "@/components/layout/BarraLateral";
import { CabecalhoPainel } from "@/components/layout/CabecalhoPainel";
import { MenuMobile } from "@/components/layout/MenuMobile";
import { ToastSistema } from "@/components/layout/ToastSistema";

export function PainelLojistaLayout({ children }: { children: ReactNode }) {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <div className="min-h-dvh bg-fundo pb-20 lg:pb-0">
      <AnimatePresence>
        <BarraLateral
          abertoMobile={menuAberto}
          aoFecharMobile={() => setMenuAberto(false)}
        />
      </AnimatePresence>
      <CabecalhoPainel aoAbrirMenu={() => setMenuAberto(true)} />
      <div className="min-w-0 lg:ml-[280px]">{children}</div>
      <MenuMobile />
      <ToastSistema />
    </div>
  );
}
