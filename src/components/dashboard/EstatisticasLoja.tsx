"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Area,
  AreaChart,
} from "recharts";
import { Bike, Car, CircleDollarSign, TrendingUp } from "lucide-react";
import { CardResumo } from "@/components/dashboard/CardResumo";
import { GraficoResumo } from "@/components/dashboard/GraficoResumo";
import { ContainerPagina } from "@/components/layout/ContainerPagina";
import { useLojaStore } from "@/store/useLojaStore";
import { calcularValorEstoque } from "@/utils/calcularEstatisticas";
import { formatarMoeda } from "@/utils/formatarMoeda";
import { gerarCadastrosMensais, gerarEvolucaoComercial } from "@/utils/gerarSeries";
import {
  rotuloEtapaOportunidade,
  rotuloStatusVeiculo,
  rotuloTipoVeiculo,
} from "@/utils/rotulos";

const cores = ["#61d6c8", "#74a9ff", "#a78bfa", "#77df9c", "#f4bf75", "#ff7b8d"];

const tooltip = {
  background: "var(--fundo-card-solido)",
  border: "1px solid rgba(148,163,184,0.22)",
  borderRadius: 12,
  color: "var(--texto)",
};

export function EstatisticasLoja() {
  const veiculos = useLojaStore((state) => state.veiculos);
  const oportunidades = useLojaStore((state) => state.oportunidades);
  const valorEstoque = calcularValorEstoque(veiculos);
  const evolucaoComercial = gerarEvolucaoComercial(veiculos, oportunidades);
  const cadastrosMensais = gerarCadastrosMensais(veiculos);

  const porTipo = (["carro", "moto"] as const).map((tipo) => ({
    nome: rotuloTipoVeiculo[tipo],
    valor: veiculos.filter((veiculo) => veiculo.tipo === tipo).length,
  }));

  const porStatus = (["disponivel", "reservado", "vendido"] as const).map((status) => ({
    nome: rotuloStatusVeiculo[status],
    valor: veiculos.filter((veiculo) => veiculo.status === status).length,
  }));

  const porEtapa = (
    [
      "novo_interesse",
      "em_atendimento",
      "proposta_enviada",
      "negociacao",
      "fechado",
      "perdido",
    ] as const
  ).map((etapa) => ({
    nome: rotuloEtapaOportunidade[etapa],
    valor: oportunidades.filter((oportunidade) => oportunidade.etapa === etapa).length,
  }));

  const vendidos = veiculos.filter((veiculo) => veiculo.status === "vendido").length;

  return (
    <ContainerPagina
      titulo="Estatísticas da loja"
      subtitulo="Indicadores calculados com os dados locais da loja."
    >
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <CardResumo
          titulo="Valor total em estoque"
          valor={formatarMoeda(valorEstoque)}
          descricao="Veículos disponíveis e reservados."
          icone={<CircleDollarSign className="size-5" aria-hidden="true" />}
        />
        <CardResumo
          titulo="Carros no estoque"
          valor={porTipo[0].valor}
          descricao="Unidades cadastradas como carro."
          icone={<Car className="size-5" aria-hidden="true" />}
          destaque="azul"
        />
        <CardResumo
          titulo="Motos no estoque"
          valor={porTipo[1].valor}
          descricao="Unidades cadastradas como moto."
          icone={<Bike className="size-5" aria-hidden="true" />}
          destaque="verde"
        />
        <CardResumo
          titulo="Vendidos"
          valor={vendidos}
          descricao="Itens marcados como vendidos."
          icone={<TrendingUp className="size-5" aria-hidden="true" />}
          destaque="alerta"
        />
      </section>

      <section className="mt-6 grid gap-4 xl:grid-cols-2">
        <GraficoResumo titulo="Veículos por tipo" descricao="Distribuição entre carros e motos.">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={porTipo} dataKey="valor" nameKey="nome" innerRadius={58} outerRadius={96} paddingAngle={4} isAnimationActive={false}>
                {porTipo.map((_, index) => (
                  <Cell key={index} fill={cores[index]} />
                ))}
              </Pie>
              <Tooltip contentStyle={tooltip} />
            </PieChart>
          </ResponsiveContainer>
        </GraficoResumo>

        <GraficoResumo titulo="Veículos por status" descricao="Disponíveis, reservados e vendidos.">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={porStatus} margin={{ left: -18, right: 8, top: 10 }}>
              <CartesianGrid stroke="rgba(148,163,184,0.12)" vertical={false} />
              <XAxis dataKey="nome" stroke="#7d89a6" tickLine={false} axisLine={false} />
              <YAxis stroke="#7d89a6" tickLine={false} axisLine={false} />
              <Tooltip contentStyle={tooltip} />
              <Bar dataKey="valor" radius={[8, 8, 0, 0]} isAnimationActive={false}>
                {porStatus.map((_, index) => (
                  <Cell key={index} fill={cores[index]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </GraficoResumo>

        <GraficoResumo titulo="Evolução de vendas" descricao="Vendas e oportunidades por mês.">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={evolucaoComercial} margin={{ left: -18, right: 8, top: 10 }}>
              <defs>
                <linearGradient id="estatisticaVendas" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#61d6c8" stopOpacity={0.42} />
                  <stop offset="95%" stopColor="#61d6c8" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="rgba(148,163,184,0.12)" vertical={false} />
              <XAxis dataKey="mes" stroke="#7d89a6" tickLine={false} axisLine={false} />
              <YAxis stroke="#7d89a6" tickLine={false} axisLine={false} />
              <Tooltip contentStyle={tooltip} />
              <Area type="monotone" dataKey="vendas" stroke="#61d6c8" fill="url(#estatisticaVendas)" strokeWidth={2} isAnimationActive={false} />
              <Area type="monotone" dataKey="oportunidades" stroke="#74a9ff" fill="transparent" strokeWidth={2} isAnimationActive={false} />
            </AreaChart>
          </ResponsiveContainer>
        </GraficoResumo>

        <GraficoResumo titulo="Oportunidades por etapa" descricao="Volume atual do funil comercial.">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={porEtapa} layout="vertical" margin={{ left: 36, right: 8, top: 10 }}>
              <CartesianGrid stroke="rgba(148,163,184,0.12)" horizontal={false} />
              <XAxis type="number" stroke="#7d89a6" tickLine={false} axisLine={false} allowDecimals={false} />
              <YAxis type="category" dataKey="nome" stroke="#7d89a6" tickLine={false} axisLine={false} width={118} />
              <Tooltip contentStyle={tooltip} />
              <Bar dataKey="valor" radius={[0, 8, 8, 0]} isAnimationActive={false}>
                {porEtapa.map((_, index) => (
                  <Cell key={index} fill={cores[index % cores.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </GraficoResumo>

        <div className="xl:col-span-2">
          <GraficoResumo titulo="Veículos cadastrados por mês" descricao="Crescimento do estoque ao longo do tempo.">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={cadastrosMensais} margin={{ left: -18, right: 8, top: 10 }}>
                <CartesianGrid stroke="rgba(148,163,184,0.12)" vertical={false} />
                <XAxis dataKey="nome" stroke="#7d89a6" tickLine={false} axisLine={false} />
                <YAxis stroke="#7d89a6" tickLine={false} axisLine={false} />
                <Tooltip contentStyle={tooltip} />
                <Bar dataKey="valor" fill="#61d6c8" radius={[8, 8, 0, 0]} isAnimationActive={false} />
              </BarChart>
            </ResponsiveContainer>
          </GraficoResumo>
        </div>
      </section>
    </ContainerPagina>
  );
}
