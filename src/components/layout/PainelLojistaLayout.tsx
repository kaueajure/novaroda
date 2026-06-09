"use client";

import { useState, type ReactNode } from "react";
import { AnimatePresence } from "framer-motion";
import { BarraLateral } from "@/components/layout/BarraLateral";
import { CabecalhoPainel } from "@/components/layout/CabecalhoPainel";
import { MenuMobile } from "@/components/layout/MenuMobile";
import { ToastSistema } from "@/components/layout/ToastSistema";
import { cn } from "@/utils/cn";

export function PainelLojistaLayout({ children }: { children: ReactNode }) {
  const [menuAberto, setMenuAberto] = useState(false);
  const [sidebarDesktopAberta, setSidebarDesktopAberta] = useState(true);

  return (
    <div className="min-h-dvh bg-fundo pb-20 lg:pb-0">
      <AnimatePresence>
        <BarraLateral
          abertoMobile={menuAberto}
          aoFecharMobile={() => setMenuAberto(false)}
          abertoDesktop={sidebarDesktopAberta}
          aoFecharDesktop={() => setSidebarDesktopAberta(false)}
        />
      </AnimatePresence>
      <CabecalhoPainel
        aoAbrirMenu={() => setMenuAberto(true)}
        sidebarDesktopAberta={sidebarDesktopAberta}
        aoAbrirSidebarDesktop={() => setSidebarDesktopAberta(true)}
      />
      <div
        className={cn(
          "min-w-0 transition-[margin] duration-200",
          sidebarDesktopAberta && "lg:ml-[280px]",
        )}
      >
        {children}
      </div>
      <MenuMobile />
      <ToastSistema />
    </div>
  );
}
