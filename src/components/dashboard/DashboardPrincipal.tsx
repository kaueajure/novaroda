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
import { BadgeStatus } from "@/components/veiculos/BadgeStatus";
import { useLojaStore } from "@/store/useLojaStore";
import { calcularResumoLoja } from "@/utils/calcularEstatisticas";
import { formatarData } from "@/utils/formatarData";
import { formatarMoeda } from "@/utils/formatarMoeda";
import { gerarEvolucaoComercial } from "@/utils/gerarSeries";
import { rotuloTipoVeiculo } from "@/utils/rotulos";

const tooltipOperacional = {
  background: "var(--fundo-card-solido)",
  border: "1px solid rgba(77,163,255,0.28)",
  borderRadius: 8,
  color: "var(--texto)",
};

export function DashboardPrincipal() {
  const veiculos = useLojaStore((state) => state.veiculos);
  const clientes = useLojaStore((state) => state.clientes);
  const oportunidades = useLojaStore((state) => state.oportunidades);
  const loja = useLojaStore((state) => state.loja);
  const resumo = calcularResumoLoja(veiculos, clientes, oportunidades);
  const evolucaoComercial = gerarEvolucaoComercial(veiculos, oportunidades);
  const recentes = [...veiculos]
    .sort(
      (a, b) =>
        new Date(b.dataCadastro).getTime() - new Date(a.dataCadastro).getTime(),
    )
    .slice(0, 6);

  return (
    <ContainerPagina
      titulo="Mesa operacional"
      subtitulo={`Pátio, valor em estoque, leads e propostas da ${loja.nome} em uma leitura única.`}
      acao={
        <Link
          href="/painel/veiculos/novo"
          className="foco-visivel inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-principal px-4 py-2 text-sm font-bold text-[var(--principal-contraste)] transition hover:bg-principal-forte"
        >
          <FilePlus2 className="size-4" aria-hidden="true" />
          Inventariar veículo
        </Link>
      }
    >
      <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <CardResumo
          titulo="Veículos no pátio"
          valor={resumo.totalVeiculos}
          descricao="Carros e motos registrados para venda, reserva ou baixa."
          icone={<Gauge className="size-5" aria-hidden="true" />}
        />
        <CardResumo
          titulo="Carros disponíveis"
          valor={resumo.carrosDisponiveis}
          descricao="Unidades prontas para atendimento e proposta."
          icone={<Car className="size-5" aria-hidden="true" />}
          destaque="azul"
        />
        <CardResumo
          titulo="Motos disponíveis"
          valor={resumo.motosDisponiveis}
          descricao="Motos liberadas para vitrine e negociação."
          icone={<Bike className="size-5" aria-hidden="true" />}
          destaque="verde"
        />
        <CardResumo
          titulo="Valor parado"
          valor={formatarMoeda(resumo.valorEstoque)}
          descricao="Capital imobilizado em veículos ainda não vendidos."
          icone={<CircleDollarSign className="size-5" aria-hidden="true" />}
          destaque="roxo"
        />
        <CardResumo
          titulo="Propostas abertas"
          valor={resumo.oportunidadesAbertas}
          descricao="Negociações que ainda precisam de acompanhamento."
          icone={<Workflow className="size-5" aria-hidden="true" />}
          destaque="principal"
        />
        <CardResumo
          titulo="Vendidos no mês"
          valor={resumo.vendidosMes}
          descricao="Baixas marcadas como venda no período atual."
          icone={<TrendingUp className="size-5" aria-hidden="true" />}
          destaque="alerta"
        />
        <CardResumo
          titulo="Leads ativos"
          valor={resumo.clientesInteressados}
          descricao="Interessados com veículo, origem e contato registrados."
          icone={<Users className="size-5" aria-hidden="true" />}
          destaque="azul"
        />
        <CardResumo
          titulo="Conversão do funil"
          valor={`${resumo.taxaConversao}%`}
          descricao="Percentual de oportunidades que chegaram a fechamento."
          icone={<TrendingUp className="size-5" aria-hidden="true" />}
          destaque="verde"
        />
      </section>

      <section className="mt-5 grid min-w-0 gap-4 xl:grid-cols-[minmax(0,1.45fr)_minmax(0,0.75fr)]">
        <GraficoResumo
          titulo="Ritmo comercial"
          descricao="Oportunidades e vendas por mês, sem decoração: só tendência para tomada de decisão."
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={evolucaoComercial} margin={{ left: -18, right: 8, top: 10 }}>
              <defs>
                <linearGradient id="corVendasPainel" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4da3ff" stopOpacity={0.38} />
                  <stop offset="95%" stopColor="#4da3ff" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="corOportunidadesPainel" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#86d9ff" stopOpacity={0.24} />
                  <stop offset="95%" stopColor="#86d9ff" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="rgba(154,177,205,0.15)" vertical={false} />
              <XAxis dataKey="mes" stroke="#8fa1b5" tickLine={false} axisLine={false} />
              <YAxis stroke="#8fa1b5" tickLine={false} axisLine={false} />
              <Tooltip contentStyle={tooltipOperacional} />
              <Area
                type="monotone"
                dataKey="oportunidades"
                stroke="#86d9ff"
                fill="url(#corOportunidadesPainel)"
                strokeWidth={2}
                isAnimationActive={false}
              />
              <Area
                type="monotone"
                dataKey="vendas"
                stroke="#4da3ff"
                fill="url(#corVendasPainel)"
                strokeWidth={2}
                isAnimationActive={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </GraficoResumo>
        <ResumoEstoque veiculos={veiculos} />
      </section>

      <section className="mt-5 grid min-w-0 gap-4 xl:grid-cols-[minmax(0,1fr)_320px]">
        <div className="min-w-0 rounded-lg border border-linha bg-card p-4 sm:p-5">
          <div className="mb-4 flex items-center justify-between gap-3 border-b border-linha pb-4">
            <div>
              <p className="etiqueta-metal">Inventário</p>
              <h2 className="mt-3 font-display text-xl font-semibold text-texto sm:text-2xl">
                Últimas entradas no pátio
              </h2>
            </div>
            <Link
              href="/painel/veiculos"
              className="foco-visivel hidden min-h-10 items-center gap-2 rounded-md border border-linha bg-card-solido px-3 text-sm font-semibold text-texto-suave transition hover:border-linha-forte hover:text-texto sm:inline-flex"
            >
              Abrir estoque
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="min-w-0 overflow-x-auto">
            {recentes.length > 0 ? (
              <table className="w-full min-w-[760px] text-left text-sm">
                <thead className="text-xs uppercase tracking-[0.14em] text-texto-fraco">
                  <tr className="border-b border-linha">
                    <th className="py-3 pr-3 font-semibold">Veículo</th>
                    <th className="px-3 py-3 font-semibold">Placa</th>
                    <th className="px-3 py-3 font-semibold">Status</th>
                    <th className="px-3 py-3 font-semibold">KM</th>
                    <th className="px-3 py-3 font-semibold">Preço</th>
                    <th className="py-3 pl-3 font-semibold">Entrada</th>
                  </tr>
                </thead>
                <tbody>
                  {recentes.map((veiculo) => (
                    <tr key={veiculo.id} className="border-b border-linha/70 last:border-b-0">
                      <td className="py-3 pr-3">
                        <p className="font-semibold text-texto">
                          {veiculo.marca} {veiculo.modelo}
                        </p>
                        <p className="text-texto-fraco">
                          {rotuloTipoVeiculo[veiculo.tipo]} · {veiculo.ano} · {veiculo.versao}
                        </p>
                      </td>
                      <td className="px-3 py-3">
                        <span className="placa-tecnica">{veiculo.placa ?? "SEM PLACA"}</span>
                      </td>
                      <td className="px-3 py-3">
                        <BadgeStatus status={veiculo.status} />
                      </td>
                      <td className="numero-tecnico px-3 py-3 text-texto-suave">
                        {veiculo.quilometragem.toLocaleString("pt-BR")}
                      </td>
                      <td className="numero-tecnico px-3 py-3 font-semibold text-texto">
                        {formatarMoeda(veiculo.preco)}
                      </td>
                      <td className="py-3 pl-3 text-texto-fraco">
                        {formatarData(veiculo.dataCadastro)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="rounded-md border border-dashed border-linha-forte bg-card-solido p-6 text-center">
                <p className="font-semibold text-texto">Nenhum veículo no pátio ainda.</p>
                <p className="mt-1 text-sm text-texto-fraco">
                  Inventarie o primeiro veículo para liberar os indicadores do painel.
                </p>
              </div>
            )}
          </div>
        </div>

        <aside className="min-w-0 rounded-lg border border-linha bg-card p-4 sm:p-5">
          <p className="etiqueta-metal">Rotina</p>
          <h2 className="mt-3 font-display text-xl font-semibold text-texto sm:text-2xl">
            Atalhos de balcão
          </h2>
          <div className="mt-5 space-y-2">
            {[
              ["/painel/veiculos/novo", "Inventariar veículo", "Abrir ficha com placa, KM, versão e preço."],
              ["/painel/clientes", "Registrar interessado", "Guardar origem, contato e veículo desejado."],
              ["/painel/oportunidades", "Revisar propostas", "Ver negociações paradas por etapa."],
              ["/painel/estatisticas", "Ler indicadores", "Acompanhar valor parado e giro do pátio."],
            ].map(([href, titulo, descricao]) => (
              <Link
                key={href}
                href={href}
                className="foco-visivel block rounded-md border border-linha bg-card-solido p-3 transition hover:border-principal/35 hover:text-texto"
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
