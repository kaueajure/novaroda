"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Gauge, Menu, X } from "lucide-react";
import { cn } from "@/utils/cn";
import { paginasInstitucionais } from "@/components/institucional/dadosInstitucionais";

export function CabecalhoSite() {
  const pathname = usePathname();
  const [aberto, setAberto] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-linha bg-fundo/88 backdrop-blur-xl">
      <div className="mx-auto flex min-h-16 w-full max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="foco-visivel flex min-w-0 items-center gap-3 rounded-lg">
          <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-principal/30 bg-principal/12 text-principal">
            <Gauge className="size-5" aria-hidden="true" />
          </span>
          <span className="min-w-0">
            <span className="block font-display text-2xl font-bold leading-none text-texto">
              AutoGestor
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-principal">
              Pro
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação institucional">
          {paginasInstitucionais.map((pagina) => {
            const ativo = pathname === pagina.href;
            return (
              <Link
                key={pagina.href}
                href={pagina.href}
                className={cn(
                  "foco-visivel rounded-lg px-3 py-2 text-sm font-semibold text-texto-suave transition hover:bg-white/[0.05] hover:text-texto",
                  ativo && "bg-principal/10 text-principal",
                )}
              >
                {pagina.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            href="/login"
            className="foco-visivel hidden min-h-11 items-center justify-center gap-2 rounded-lg bg-principal px-4 text-sm font-bold text-[#051113] transition hover:bg-[#76eadc] sm:inline-flex"
          >
            Acessar painel
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <button
            type="button"
            onClick={() => setAberto((valor) => !valor)}
            className="foco-visivel grid size-11 place-items-center rounded-lg border border-linha bg-white/[0.03] text-texto-suave lg:hidden"
            aria-label={aberto ? "Fechar menu" : "Abrir menu"}
            aria-expanded={aberto}
          >
            {aberto ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {aberto ? (
        <nav className="border-t border-linha px-4 py-3 lg:hidden" aria-label="Menu mobile">
          <div className="mx-auto grid max-w-7xl gap-2">
            {paginasInstitucionais.map((pagina) => {
              const ativo = pathname === pagina.href;
              return (
                <Link
                  key={pagina.href}
                  href={pagina.href}
                  onClick={() => setAberto(false)}
                  className={cn(
                    "foco-visivel rounded-lg border border-linha bg-white/[0.025] px-3 py-3 text-sm font-semibold text-texto-suave",
                    ativo && "border-principal/25 bg-principal/10 text-principal",
                  )}
                >
                  {pagina.label}
                </Link>
              );
            })}
            <Link
              href="/login"
              onClick={() => setAberto(false)}
              className="foco-visivel inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-principal px-4 text-sm font-bold text-[#051113]"
            >
              Acessar painel
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
