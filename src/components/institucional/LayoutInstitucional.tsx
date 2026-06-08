import type { ReactNode } from "react";
import { CabecalhoSite } from "@/components/institucional/CabecalhoSite";
import { PaginacaoInstitucional } from "@/components/institucional/PaginacaoInstitucional";
import { RodapeSite } from "@/components/institucional/RodapeSite";

export function LayoutInstitucional({
  atual,
  children,
}: {
  atual: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-dvh bg-fundo text-texto">
      <CabecalhoSite />
      <main>{children}</main>
      <PaginacaoInstitucional atual={atual} />
      <RodapeSite />
    </div>
  );
}
