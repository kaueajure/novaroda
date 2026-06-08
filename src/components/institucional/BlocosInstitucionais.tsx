import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { FundoAnimado } from "@/components/marketing/FundoAnimado";

export function HeroInstitucional({
  etiqueta,
  titulo,
  descricao,
  imagem,
  alt,
  acaoPrimaria,
  acaoSecundaria,
}: {
  etiqueta: string;
  titulo: string;
  descricao: string;
  imagem: string;
  alt: string;
  acaoPrimaria?: { href: string; label: string };
  acaoSecundaria?: { href: string; label: string };
}) {
  return (
    <section className="relative overflow-hidden border-b border-linha px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <FundoAnimado />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="min-w-0">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-principal">
            {etiqueta}
          </p>
          <h1 className="text-balance mt-4 font-display text-5xl font-bold leading-[0.98] text-texto sm:text-6xl">
            {titulo}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-texto-suave">
            {descricao}
          </p>
          {(acaoPrimaria || acaoSecundaria) ? (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {acaoPrimaria ? (
                <Link
                  href={acaoPrimaria.href}
                  className="foco-visivel inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-principal px-5 text-sm font-bold text-[#051113] transition hover:bg-[#76eadc]"
                >
                  {acaoPrimaria.label}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              ) : null}
              {acaoSecundaria ? (
                <Link
                  href={acaoSecundaria.href}
                  className="foco-visivel inline-flex min-h-12 items-center justify-center rounded-lg border border-linha bg-white/[0.04] px-5 text-sm font-bold text-texto-suave transition hover:bg-white/[0.08] hover:text-texto"
                >
                  {acaoSecundaria.label}
                </Link>
              ) : null}
            </div>
          ) : null}
        </div>

        <div className="relative min-h-[320px] overflow-hidden rounded-2xl border border-linha bg-card shadow-[0_28px_90px_rgba(0,0,0,0.34)]">
          <Image
            src={imagem}
            alt={alt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,9,15,0.08),rgba(7,9,15,0.62))]" />
          <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-linha bg-[#0b1019]/82 p-4 backdrop-blur-xl">
            <p className="font-display text-2xl font-semibold text-texto">
              Operação integrada
            </p>
            <p className="mt-1 text-sm leading-6 text-texto-suave">
              Estoque, atendimento e funil comercial conectados para o lojista
              decidir com velocidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SecaoInstitucional({
  etiqueta,
  titulo,
  descricao,
  children,
}: {
  etiqueta: string;
  titulo: string;
  descricao: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-b border-linha px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-principal">
            {etiqueta}
          </p>
          <h2 className="text-balance mt-3 font-display text-4xl font-semibold leading-tight text-texto sm:text-5xl">
            {titulo}
          </h2>
          <p className="mt-4 text-lg leading-8 text-texto-suave">{descricao}</p>
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

export function GradeCards({
  itens,
}: {
  itens: Array<{ titulo: string; descricao: string; icone: LucideIcon }>;
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {itens.map((item) => {
        const Icone = item.icone;
        return (
          <article key={item.titulo} className="rounded-xl border border-linha bg-card p-5">
            <span className="grid size-11 place-items-center rounded-lg bg-principal/10 text-principal">
              <Icone className="size-5" aria-hidden="true" />
            </span>
            <h3 className="mt-5 font-display text-2xl font-semibold text-texto">
              {item.titulo}
            </h3>
            <p className="mt-2 text-sm leading-6 text-texto-suave">{item.descricao}</p>
          </article>
        );
      })}
    </div>
  );
}

export function ListaVerificada({ itens }: { itens: string[] }) {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {itens.map((item) => (
        <div key={item} className="flex items-start gap-3 rounded-xl border border-linha bg-card p-4">
          <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-verde" aria-hidden="true" />
          <p className="text-sm font-semibold leading-6 text-texto-suave">{item}</p>
        </div>
      ))}
    </div>
  );
}
