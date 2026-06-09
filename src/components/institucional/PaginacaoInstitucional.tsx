import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/utils/cn";
import { paginasInstitucionais } from "@/components/institucional/dadosInstitucionais";

export function PaginacaoInstitucional({ atual }: { atual: string }) {
  const indiceAtual = paginasInstitucionais.findIndex((pagina) => pagina.href === atual);
  const anterior = paginasInstitucionais[indiceAtual - 1];
  const proxima = paginasInstitucionais[indiceAtual + 1];

  return (
    <nav className="border-t border-linha bg-fundo px-4 py-10 sm:px-6 lg:px-8" aria-label="Paginação do site">
      <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
        <div>
          {anterior ? (
            <Link
              href={anterior.href}
              className="foco-visivel inline-flex min-h-11 items-center gap-2 rounded-md border border-linha bg-card-solido px-4 text-sm font-bold text-texto-suave transition hover:border-linha-forte hover:text-texto"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              {anterior.label}
            </Link>
          ) : null}
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {paginasInstitucionais.map((pagina, indice) => (
            <Link
              key={pagina.href}
              href={pagina.href}
              aria-current={pagina.href === atual ? "page" : undefined}
              className={cn(
                "foco-visivel grid size-10 place-items-center rounded-md border border-linha text-sm font-bold text-texto-fraco transition hover:bg-card-solido hover:text-texto",
                pagina.href === atual && "border-principal/35 bg-card-solido text-principal",
              )}
            >
              {indice + 1}
            </Link>
          ))}
        </div>

        <div className="flex justify-start lg:justify-end">
          {proxima ? (
            <Link
              href={proxima.href}
              className="foco-visivel inline-flex min-h-11 items-center gap-2 rounded-md border border-principal/40 bg-principal px-4 text-sm font-bold text-[#12100a] transition hover:bg-principal-forte"
            >
              {proxima.label}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          ) : null}
        </div>
      </div>
    </nav>
  );
}
