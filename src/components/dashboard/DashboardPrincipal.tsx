"use client";

import Link from "next/link";
import {
  ArrowRight,
  Bike,
  Car,
  CircleDollarSign,
  FilePlus2,
  Gauge,
  TrendingUp,
  Users,
  Workflow,
} from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { CardResumo } from "@/components/dashboard/CardResumo";
import { GraficoResumo } from "@/components/dashboard/GraficoResumo";
import { ResumoEstoque } from "@/components/dashboard/ResumoEstoque";
import { ContainerPagina } from "@/components/layout/ContainerPagina";
import { evolucaoVendasMock } from "@/data/estatisticasMock";
import { useLojaStore } from "@/store/useLojaStore";
import { calcularResumoLoja } from "@/utils/calcularEstatisticas";
import { formatarData } from "@/utils/formatarData";
import { formatarMoeda } from "@/utils/formatarMoeda";
import { rotuloStatusVeiculo } from "@/utils/rotulos";

export function DashboardPrincipal() {
  const veiculos = useLojaStore((state) => state.veiculos);
  const clientes = useLojaStore((state) => state.clientes);
  const oportunidades = useLojaStore((state) => state.oportunidades);
  const loja = useLojaStore((state) => state.loja);
  const resumo = calcularResumoLoja(veiculos, clientes, oportunidades);
  const recentes = [...veiculos]
    .sort(
      (a, b) =>
        new Date(b.dataCadastro).getTime() - new Date(a.dataCadastro).getTime(),
    )
    .slice(0, 5);

  return (
    <ContainerPagina
      titulo="Dashboard principal"
      subtitulo={`Visão operacional da ${loja.nome}: estoque, clientes e oportunidades em tempo real simulado.`}
      acao={
        <Link
          href="/painel/veiculos/novo"
          className="foco-visivel inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-principal px-4 text-sm font-bold text-[#051113] transition hover:bg-[#76eadc]"
        >
          <FilePlus2 className="size-4" aria-hidden="true" />
          Novo veículo
        </Link>
      }
    >
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <CardResumo
          titulo="Total de veículos"
          valor={resumo.totalVeiculos}
          descricao="Carros e motos cadastrados no estoque."
          icone={<Gauge className="size-5" aria-hidden="true" />}
        />
        <CardResumo
          titulo="Carros disponíveis"
          valor={resumo.carrosDisponiveis}
          descricao="Unidades prontas para negociação."
          icone={<Car className="size-5" aria-hidden="true" />}
          destaque="azul"
        />
        <CardResumo
          titulo="Motos disponíveis"
          valor={resumo.motosDisponiveis}
          descricao="Motos ativas no estoque da loja."
          icone={<Bike className="size-5" aria-hidden="true" />}
          destaque="verde"
        />
        <CardResumo
          titulo="Valor em estoque"
          valor={formatarMoeda(resumo.valorEstoque)}
          descricao="Soma de veículos não vendidos."
          icone={<CircleDollarSign className="size-5" aria-hidden="true" />}
          destaque="roxo"
        />
        <CardResumo
          titulo="Oportunidades abertas"
          valor={resumo.oportunidadesAbertas}
          descricao="Negociações ainda em andamento."
          icone={<Workflow className="size-5" aria-hidden="true" />}
          destaque="principal"
        />
        <CardResumo
          titulo="Vendidos no mês"
          valor={resumo.vendidosMes}
          descricao="Simulação baseada no status vendido."
          icone={<TrendingUp className="size-5" aria-hidden="true" />}
          destaque="alerta"
        />
        <CardResumo
          titulo="Clientes interessados"
          valor={resumo.clientesInteressados}
          descricao="Leads cadastrados no atendimento."
          icone={<Users className="size-5" aria-hidden="true" />}
          destaque="azul"
        />
        <CardResumo
          titulo="Taxa de conversão"
          valor={`${resumo.taxaConversao}%`}
          descricao="Oportunidades fechadas no funil."
          icone={<TrendingUp className="size-5" aria-hidden="true" />}
          destaque="verde"
        />
      </section>

      <section className="mt-6 grid min-w-0 gap-4 xl:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)]">
        <GraficoResumo
          titulo="Evolução comercial"
          descricao="Vendas e oportunidades dos últimos meses."
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={evolucaoVendasMock} margin={{ left: -18, right: 8, top: 10 }}>
              <defs>
                <linearGradient id="corVendas" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#61d6c8" stopOpacity={0.42} />
                  <stop offset="95%" stopColor="#61d6c8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="corOportunidades" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#74a9ff" stopOpacity={0.34} />
                  <stop offset="95%" stopColor="#74a9ff" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="rgba(148,163,184,0.12)" vertical={false} />
              <XAxis dataKey="mes" stroke="#7d89a6" tickLine={false} axisLine={false} />
              <YAxis stroke="#7d89a6" tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={{
                  background: "#101521",
                  border: "1px solid rgba(148,163,184,0.22)",
                  borderRadius: 12,
                  color: "#f5f7fb",
                }}
              />
              <Area type="monotone" dataKey="oportunidades" stroke="#74a9ff" fill="url(#corOportunidades)" strokeWidth={2} isAnimationActive={false} />
              <Area type="monotone" dataKey="vendas" stroke="#61d6c8" fill="url(#corVendas)" strokeWidth={2} isAnimationActive={false} />
            </AreaChart>
          </ResponsiveContainer>
        </GraficoResumo>
        <ResumoEstoque veiculos={veiculos} />
      </section>

      <section className="mt-6 grid min-w-0 gap-4 xl:grid-cols-[minmax(0,1fr)_340px]">
        <div className="min-w-0 rounded-xl border border-linha bg-card p-5">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <h2 className="font-display text-2xl font-semibold text-texto">
                Veículos recentes
              </h2>
              <p className="text-sm text-texto-fraco">Últimos cadastros do estoque.</p>
            </div>
            <Link
              href="/painel/veiculos"
              className="foco-visivel hidden min-h-10 items-center gap-2 rounded-lg border border-linha px-3 text-sm font-semibold text-texto-suave transition hover:bg-white/[0.06] hover:text-texto sm:inline-flex"
            >
              Ver todos
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="min-w-0 overflow-x-auto">
            <table className="w-full min-w-[680px] text-left text-sm">
              <thead className="text-xs uppercase tracking-[0.14em] text-texto-fraco">
                <tr className="border-b border-linha">
                  <th className="py-3 font-semibold">Veículo</th>
                  <th className="py-3 font-semibold">Tipo</th>
                  <th className="py-3 font-semibold">Status</th>
                  <th className="py-3 font-semibold">Preço</th>
                  <th className="py-3 font-semibold">Cadastro</th>
                </tr>
              </thead>
              <tbody>
                {recentes.map((veiculo) => (
                  <tr key={veiculo.id} className="border-b border-linha/70 last:border-b-0">
                    <td className="py-3">
                      <p className="font-semibold text-texto">
                        {veiculo.marca} {veiculo.modelo}
                      </p>
                      <p className="text-texto-fraco">{veiculo.ano} · {veiculo.versao}</p>
                    </td>
                    <td className="py-3 capitalize text-texto-suave">{veiculo.tipo}</td>
                    <td className="py-3 text-texto-suave">
                      {rotuloStatusVeiculo[veiculo.status]}
                    </td>
                    <td className="py-3 font-semibold text-texto">
                      {formatarMoeda(veiculo.preco)}
                    </td>
                    <td className="py-3 text-texto-fraco">
                      {formatarData(veiculo.dataCadastro)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <aside className="min-w-0 rounded-xl border border-linha bg-card p-5">
          <h2 className="font-display text-2xl font-semibold text-texto">
            Atalhos rápidos
          </h2>
          <div className="mt-5 space-y-3">
            {[
              ["/painel/veiculos/novo", "Cadastrar veículo", "Adicionar carro ou moto ao estoque."],
              ["/painel/clientes", "Novo interessado", "Registrar lead recebido no atendimento."],
              ["/painel/oportunidades", "Revisar funil", "Mover negociações entre etapas."],
              ["/painel/estatisticas", "Ver estatísticas", "Analisar estoque e conversão."],
            ].map(([href, titulo, descricao]) => (
              <Link
                key={href}
                href={href}
                className="foco-visivel block rounded-lg border border-linha bg-white/[0.025] p-4 transition hover:border-linha-forte hover:bg-white/[0.055]"
              >
                <p className="font-semibold text-texto">{titulo}</p>
                <p className="mt-1 text-sm leading-5 text-texto-fraco">{descricao}</p>
              </Link>
            ))}
          </div>
        </aside>
      </section>
    </ContainerPagina>
  );
}
