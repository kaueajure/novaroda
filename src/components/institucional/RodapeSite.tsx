import Link from "next/link";
import { CarFront } from "lucide-react";
import { paginasInstitucionais } from "@/components/institucional/dadosInstitucionais";

export function RodapeSite() {
  return (
    <footer className="border-t border-linha bg-fundo-elevado px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_1fr] lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-md border border-principal/35 bg-card-solido text-principal">
              <CarFront className="size-5" aria-hidden="true" />
            </span>
            <div>
              <p className="font-display text-2xl font-extrabold leading-none text-texto">
                Nova Roda
              </p>
              <p className="etiqueta-metal mt-1 border-0 text-[0.62rem]">pátio e venda consultiva</p>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm leading-6 text-texto-suave">
            Sistema para lojas que precisam controlar pátio, valor em estoque,
            atendimento e proposta sem depender de conferência manual.
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
              Painel operacional
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
