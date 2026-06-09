import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, CheckCircle2, ClipboardCheck, Gauge } from "lucide-react";
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
    <section className="relative overflow-hidden border-b border-linha px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
      <FundoAnimado />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
        <div className="min-w-0">
          <p className="etiqueta-metal">{etiqueta}</p>
          <h1 className="text-balance mt-5 font-display text-5xl font-extrabold leading-[0.96] text-texto sm:text-7xl">
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
                  className="foco-visivel inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-principal/40 bg-principal px-5 text-sm font-bold text-[var(--principal-contraste)] transition hover:bg-principal-forte"
                >
                  {acaoPrimaria.label}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              ) : null}
              {acaoSecundaria ? (
                <Link
                  href={acaoSecundaria.href}
                  className="foco-visivel inline-flex min-h-12 items-center justify-center rounded-md border border-linha bg-card-solido px-5 text-sm font-bold text-texto-suave transition hover:border-linha-forte hover:text-texto"
                >
                  {acaoSecundaria.label}
                </Link>
              ) : null}
            </div>
          ) : null}

          <dl className="mt-10 grid max-w-2xl grid-cols-3 border-y border-linha py-4">
            {[
              ["48h", "estoque revisado"],
              ["0", "placa duplicada"],
              ["1", "funil da loja"],
            ].map(([valor, label]) => (
              <div key={label} className="border-r border-linha px-3 first:pl-0 last:border-r-0">
                <dt className="numero-tecnico text-2xl font-bold text-texto">{valor}</dt>
                <dd className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-texto-fraco">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative min-h-[380px] overflow-hidden rounded-lg border border-linha bg-card shadow-[0_34px_90px_rgba(0,0,0,0.46)]">
          <Image
            src={imagem}
            alt={alt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover saturate-[0.82]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.18),rgba(5,5,5,0.72))]" />
          <div className="absolute left-4 top-4 placa-tecnica">PATIO 04</div>
          <div className="absolute bottom-4 left-4 right-4 grid gap-3 rounded-md border border-linha bg-card-solido/92 p-4 md:grid-cols-[1fr_auto]">
            <div>
              <p className="etiqueta-metal">Vistoria comercial</p>
              <p className="mt-3 font-display text-2xl font-bold text-texto">
                Da placa ao fechamento, a operação fica rastreável.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs text-texto-suave">
              <span className="rounded-md border border-linha px-3 py-2">
                <Gauge className="mb-1 size-4 text-principal" aria-hidden="true" />
                KM e preço
              </span>
              <span className="rounded-md border border-linha px-3 py-2">
                <ClipboardCheck className="mb-1 size-4 text-principal" aria-hidden="true" />
                Reserva
              </span>
            </div>
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
        <div className="grid gap-5 border-l border-linha pl-5 lg:grid-cols-[0.72fr_1fr] lg:items-end">
          <div>
            <p className="etiqueta-metal">{etiqueta}</p>
            <h2 className="text-balance mt-3 font-display text-4xl font-bold leading-tight text-texto sm:text-5xl">
              {titulo}
            </h2>
          </div>
          <p className="max-w-3xl text-lg leading-8 text-texto-suave">{descricao}</p>
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
    <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
      {itens.map((item, index) => {
        const Icone = item.icone;
        return (
          <article key={item.titulo} className="group rounded-lg border border-linha bg-card p-5 transition hover:border-principal/45">
            <div className="flex items-center justify-between">
              <span className="grid size-10 place-items-center rounded-md border border-linha bg-card-solido text-principal">
                <Icone className="size-5" aria-hidden="true" />
              </span>
              <span className="numero-tecnico text-xs font-bold text-texto-fraco">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="mt-5 font-display text-xl font-bold text-texto">
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
        <div key={item} className="flex items-start gap-3 rounded-lg border border-linha bg-card p-4">
          <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-principal" aria-hidden="true" />
          <p className="text-sm font-semibold leading-6 text-texto-suave">{item}</p>
        </div>
      ))}
    </div>
  );
}
