import Link from "next/link";
import { ArrowRight, Car, CircleDollarSign, Users, Workflow } from "lucide-react";
import { SecaoTitulo } from "@/components/marketing/SecaoTitulo";
import { formatarMoeda } from "@/utils/formatarMoeda";

const indicadoresIniciais = [
  { label: "Veículos em pátio", valor: "0", icon: Car },
  { label: "Valor parado", valor: formatarMoeda(0), icon: CircleDollarSign },
  { label: "Leads ativos", valor: "0", icon: Users },
  { label: "Propostas", valor: "0", icon: Workflow },
];

const etapasFunil = [
  "Novo lead",
  "Atendimento",
  "Proposta",
  "Financiamento",
  "Fechado",
];

export function PreviaDashboard() {
  return (
    <section id="preview" className="border-b border-linha bg-fundo-elevado px-4 py-20 sm:px-6 lg:px-8">
      <SecaoTitulo
        etiqueta="painel operacional"
        titulo="Uma mesa de controle para estoque, lead e proposta."
        descricao="A prévia do painel usa linguagem de inventário: valor em estoque, pátio, funil comercial e ações rápidas sem enfeite desnecessário."
      />

      <div className="mx-auto mt-12 max-w-7xl rounded-lg border border-linha bg-card p-3 shadow-[0_30px_90px_rgba(0,0,0,0.38)]">
        <div className="rounded-md border border-linha bg-fundo p-4">
          <div className="flex flex-col gap-3 border-b border-linha pb-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="etiqueta-metal">showroom / operação</p>
              <p className="mt-2 font-display text-3xl font-bold text-texto">
                Prime Motors
              </p>
            </div>
            <Link
              href="/login"
              className="foco-visivel inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-principal/40 bg-principal px-4 text-sm font-bold text-[var(--principal-contraste)] transition hover:bg-principal-forte"
            >
              Acessar painel
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-4">
            {indicadoresIniciais.map((item) => {
              const Icone = item.icon;
              return (
                <div key={item.label} className="rounded-md border border-linha bg-card p-4">
                  <div className="flex items-center justify-between">
                    <Icone className="size-5 text-principal" aria-hidden="true" />
                    <span className="placa-tecnica">00</span>
                  </div>
                  <p className="numero-tecnico mt-4 text-3xl font-bold text-texto">
                    {item.valor}
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-texto-fraco">{item.label}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-md border border-linha bg-card p-4">
              <div className="flex items-center justify-between">
                <p className="font-bold text-texto">Estoque recente</p>
                <p className="etiqueta-metal border-0">pronto para inventário</p>
              </div>
              <div className="mt-4 rounded-md border border-dashed border-linha-forte p-8 text-center">
                <span className="mx-auto grid size-12 place-items-center rounded-md border border-principal/25 bg-card-solido text-principal">
                  <Car className="size-5" aria-hidden="true" />
                </span>
                <p className="mt-4 font-bold text-texto">
                  Nenhum veículo cadastrado ainda.
                </p>
                <p className="mt-2 text-sm leading-6 text-texto-fraco">
                  O pátio começa limpo para a loja alimentar o estoque com placa, KM, preço e status real.
                </p>
              </div>
            </div>
            <div className="rounded-md border border-linha bg-card p-4">
              <p className="font-bold text-texto">Funil comercial</p>
              <div className="mt-5 space-y-2">
                {etapasFunil.map((label) => (
                  <div key={label} className="flex items-center justify-between rounded-md border border-linha bg-fundo-elevado px-3 py-2 text-sm">
                    <span className="text-texto-suave">{label}</span>
                    <span className="numero-tecnico text-xs font-bold text-texto-fraco">0</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
