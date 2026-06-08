import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Car, CircleDollarSign, Users, Workflow } from "lucide-react";
import { veiculosMock } from "@/data/veiculosMock";
import { formatarMoeda } from "@/utils/formatarMoeda";
import { SecaoTitulo } from "@/components/marketing/SecaoTitulo";

export function PreviaDashboard() {
  const valorEstoque = veiculosMock.reduce((total, veiculo) => total + veiculo.preco, 0);
  const destaques = veiculosMock.filter((veiculo) => veiculo.destaque).slice(0, 3);

  return (
    <section id="preview" className="border-b border-linha bg-[#080b12] px-4 py-20 sm:px-6 lg:px-8">
      <SecaoTitulo
        etiqueta="Prévia do painel"
        titulo="Uma operação visual o suficiente para decidir rápido."
        descricao="Cards de resumo, estoque recente, gráficos e funil comercial aparecem com hierarquia clara e sem poluição visual."
      />

      <div className="mx-auto mt-12 max-w-7xl rounded-2xl border border-linha bg-[#0c111b] p-3 shadow-[0_30px_100px_rgba(0,0,0,0.42)]">
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
            {[
              { label: "Veículos", valor: veiculosMock.length, icon: Car },
              { label: "Valor em estoque", valor: formatarMoeda(valorEstoque), icon: CircleDollarSign },
              { label: "Clientes", valor: "48", icon: Users },
              { label: "Oportunidades", valor: "29", icon: Workflow },
            ].map((item) => {
              const Icone = item.icon;
              return (
                <div key={item.label} className="rounded-xl border border-linha bg-white/[0.03] p-4">
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
            <div className="rounded-xl border border-linha bg-white/[0.025] p-4">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-texto">Destaques em estoque</p>
                <p className="text-sm text-principal">Atualizado agora</p>
              </div>
              <div className="mt-4 grid gap-3 md:grid-cols-3">
                {destaques.map((veiculo) => (
                  <article key={veiculo.id} className="overflow-hidden rounded-lg border border-linha bg-[#101521]">
                    <Image
                      src={veiculo.imagem}
                      alt={`${veiculo.marca} ${veiculo.modelo}`}
                      width={420}
                      height={260}
                      className="h-28 w-full object-cover"
                    />
                    <div className="p-3">
                      <p className="font-semibold text-texto">
                        {veiculo.marca} {veiculo.modelo}
                      </p>
                      <p className="text-sm text-texto-fraco">
                        {veiculo.ano} · {formatarMoeda(veiculo.preco)}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-linha bg-white/[0.025] p-4">
              <p className="font-semibold text-texto">Funil da semana</p>
              <div className="mt-5 space-y-4">
                {[
                  ["Novo interesse", "78%"],
                  ["Proposta enviada", "52%"],
                  ["Negociação", "34%"],
                  ["Fechado", "18%"],
                ].map(([label, largura]) => (
                  <div key={label}>
                    <div className="mb-2 flex justify-between text-sm">
                      <span className="text-texto-suave">{label}</span>
                      <span className="text-texto-fraco">{largura}</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/[0.06]">
                      <div
                        className="h-full rounded-full bg-principal"
                        style={{ width: largura }}
                      />
                    </div>
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
