import Link from "next/link";
import { ArrowRight, Car, CircleDollarSign, Users, Workflow } from "lucide-react";
import { SecaoTitulo } from "@/components/marketing/SecaoTitulo";
import { formatarMoeda } from "@/utils/formatarMoeda";

const indicadoresIniciais = [
  { label: "Veículos", valor: "0", icon: Car },
  { label: "Valor em estoque", valor: formatarMoeda(0), icon: CircleDollarSign },
  { label: "Clientes", valor: "0", icon: Users },
  { label: "Oportunidades", valor: "0", icon: Workflow },
];

const etapasFunil = [
  "Novo interesse",
  "Em atendimento",
  "Proposta enviada",
  "Negociação",
  "Fechado",
];

export function PreviaDashboard() {
  return (
    <section id="preview" className="border-b border-linha bg-fundo-elevado px-4 py-20 sm:px-6 lg:px-8">
      <SecaoTitulo
        etiqueta="Prévia do painel"
        titulo="Uma operação visual o suficiente para decidir rápido."
        descricao="Cards de resumo, estoque recente, gráficos e funil comercial aparecem com hierarquia clara e sem poluição visual."
      />

      <div className="mx-auto mt-12 max-w-7xl rounded-2xl border border-linha bg-card p-3 shadow-[0_30px_100px_rgba(0,0,0,0.22)]">
        <div className="rounded-xl border border-linha bg-fundo p-4">
          <div className="flex flex-col gap-3 border-b border-linha pb-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-display text-3xl font-semibold text-texto">
                Prime Motors
              </p>
              <p className="text-sm text-texto-fraco">Dashboard operacional</p>
            </div>
            <Link
              href="/login"
              className="foco-visivel inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-principal px-4 text-sm font-bold text-[#051113] transition hover:bg-[#76eadc]"
            >
              Acessar painel
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-4">
            {indicadoresIniciais.map((item) => {
              const Icone = item.icon;
              return (
                <div key={item.label} className="rounded-xl border border-linha bg-card p-4">
                  <Icone className="size-5 text-principal" aria-hidden="true" />
                  <p className="mt-4 font-display text-3xl font-semibold text-texto">
                    {item.valor}
                  </p>
                  <p className="text-sm text-texto-fraco">{item.label}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-xl border border-linha bg-card p-4">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-texto">Estoque recente</p>
                <p className="text-sm text-principal">Pronto para cadastrar</p>
              </div>
              <div className="mt-4 rounded-lg border border-dashed border-linha-forte p-8 text-center">
                <span className="mx-auto grid size-12 place-items-center rounded-xl border border-principal/20 bg-principal/10 text-principal">
                  <Car className="size-5" aria-hidden="true" />
                </span>
                <p className="mt-4 font-semibold text-texto">
                  Nenhum veículo cadastrado ainda.
                </p>
                <p className="mt-2 text-sm leading-6 text-texto-fraco">
                  O painel começa limpo para a loja alimentar o estoque com dados próprios.
                </p>
              </div>
            </div>
            <div className="rounded-xl border border-linha bg-card p-4">
              <p className="font-semibold text-texto">Funil comercial</p>
              <div className="mt-5 space-y-3">
                {etapasFunil.map((label) => (
                  <div key={label} className="flex items-center justify-between rounded-lg border border-linha bg-fundo-elevado px-3 py-2 text-sm">
                    <span className="text-texto-suave">{label}</span>
                    <span className="rounded-full border border-linha px-2 py-1 text-xs font-semibold text-texto-fraco">
                      0
                    </span>
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
