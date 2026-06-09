import Link from "next/link";
import { Gauge } from "lucide-react";
import { paginasInstitucionais } from "@/components/institucional/dadosInstitucionais";

export function RodapeSite() {
  return (
    <footer className="border-t border-linha bg-fundo-elevado px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_1fr] lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-xl border border-principal/30 bg-principal/12 text-principal">
              <Gauge className="size-5" aria-hidden="true" />
            </span>
            <div>
              <p className="font-display text-2xl font-bold leading-none text-texto">
                Nova Roda
              </p>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm leading-6 text-texto-suave">
            Site institucional e sistema demonstrativo para lojas que querem
            organizar estoque, atendimento e oportunidades com menos retrabalho.
          </p>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-texto-fraco">
            Páginas
          </p>
          <div className="mt-4 grid gap-2">
            {paginasInstitucionais.map((pagina) => (
              <Link
                key={pagina.href}
                href={pagina.href}
                className="text-sm font-semibold text-texto-suave transition hover:text-principal"
              >
                {pagina.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-texto-fraco">
            Sistema
          </p>
          <div className="mt-4 grid gap-2">
            <Link href="/login" className="text-sm font-semibold text-texto-suave transition hover:text-principal">
              Login do lojista
            </Link>
            <Link href="/painel" className="text-sm font-semibold text-texto-suave transition hover:text-principal">
              Painel demonstrativo
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
