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

const cores = ["#4da3ff", "#86d9ff", "#8f9bff", "#4ade80", "#f5c542", "#ff6b7a"];

const tooltip = {
  background: "var(--fundo-card-solido)",
  border: "1px solid rgba(77,163,255,0.28)",
  borderRadius: 8,
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
      titulo="Relatórios da loja"
      subtitulo="Indicadores práticos para enxergar giro de pátio, valor parado, entradas e andamento das propostas."
    >
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <CardResumo
          titulo="Valor parado"
          valor={formatarMoeda(valorEstoque)}
          descricao="Veículos disponíveis e reservados ainda em estoque."
          icone={<CircleDollarSign className="size-5" aria-hidden="true" />}
        />
        <CardResumo
          titulo="Carros no pátio"
          valor={porTipo[0].valor}
          descricao="Unidades classificadas como carro."
          icone={<Car className="size-5" aria-hidden="true" />}
          destaque="azul"
        />
        <CardResumo
          titulo="Motos no pátio"
          valor={porTipo[1].valor}
          descricao="Unidades classificadas como moto."
          icone={<Bike className="size-5" aria-hidden="true" />}
          destaque="verde"
        />
        <CardResumo
          titulo="Baixas de venda"
          valor={vendidos}
          descricao="Itens marcados como vendidos."
          icone={<TrendingUp className="size-5" aria-hidden="true" />}
          destaque="alerta"
        />
      </section>

      <section className="mt-6 grid gap-4 xl:grid-cols-2">
        <GraficoResumo titulo="Veículos por tipo" descricao="Separação do pátio entre carros e motos.">
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

        <GraficoResumo titulo="Status do estoque" descricao="Disponível, reservado e vendido para leitura rápida de disponibilidade.">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={porStatus} margin={{ left: -18, right: 8, top: 10 }}>
              <CartesianGrid stroke="rgba(154,177,205,0.15)" vertical={false} />
              <XAxis dataKey="nome" stroke="#8fa1b5" tickLine={false} axisLine={false} />
              <YAxis stroke="#8fa1b5" tickLine={false} axisLine={false} allowDecimals={false} />
              <Tooltip contentStyle={tooltip} />
              <Bar dataKey="valor" radius={[4, 4, 0, 0]} isAnimationActive={false}>
                {porStatus.map((_, index) => (
                  <Cell key={index} fill={cores[index]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </GraficoResumo>

        <GraficoResumo titulo="Ritmo de vendas" descricao="Vendas e oportunidades por mês para acompanhar giro comercial.">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={evolucaoComercial} margin={{ left: -18, right: 8, top: 10 }}>
              <defs>
                <linearGradient id="estatisticaVendas" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4da3ff" stopOpacity={0.38} />
                  <stop offset="95%" stopColor="#4da3ff" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="rgba(154,177,205,0.15)" vertical={false} />
              <XAxis dataKey="mes" stroke="#8fa1b5" tickLine={false} axisLine={false} />
              <YAxis stroke="#8fa1b5" tickLine={false} axisLine={false} allowDecimals={false} />
              <Tooltip contentStyle={tooltip} />
              <Area type="monotone" dataKey="vendas" stroke="#4da3ff" fill="url(#estatisticaVendas)" strokeWidth={2} isAnimationActive={false} />
              <Area type="monotone" dataKey="oportunidades" stroke="#86d9ff" fill="transparent" strokeWidth={2} isAnimationActive={false} />
            </AreaChart>
          </ResponsiveContainer>
        </GraficoResumo>

        <GraficoResumo titulo="Propostas por etapa" descricao="Onde o atendimento comercial está acumulando negociação.">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={porEtapa} layout="vertical" margin={{ left: 36, right: 8, top: 10 }}>
              <CartesianGrid stroke="rgba(154,177,205,0.15)" horizontal={false} />
              <XAxis type="number" stroke="#8fa1b5" tickLine={false} axisLine={false} allowDecimals={false} />
              <YAxis type="category" dataKey="nome" stroke="#8fa1b5" tickLine={false} axisLine={false} width={118} />
              <Tooltip contentStyle={tooltip} />
              <Bar dataKey="valor" radius={[0, 4, 4, 0]} isAnimationActive={false}>
                {porEtapa.map((_, index) => (
                  <Cell key={index} fill={cores[index % cores.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </GraficoResumo>

        <div className="xl:col-span-2">
          <GraficoResumo titulo="Entradas no pátio" descricao="Veículos cadastrados por mês para medir crescimento e giro do estoque.">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={cadastrosMensais} margin={{ left: -18, right: 8, top: 10 }}>
                <CartesianGrid stroke="rgba(154,177,205,0.15)" vertical={false} />
                <XAxis dataKey="nome" stroke="#8fa1b5" tickLine={false} axisLine={false} />
                <YAxis stroke="#8fa1b5" tickLine={false} axisLine={false} allowDecimals={false} />
                <Tooltip contentStyle={tooltip} />
                <Bar dataKey="valor" fill="#4da3ff" radius={[4, 4, 0, 0]} isAnimationActive={false} />
              </BarChart>
            </ResponsiveContainer>
          </GraficoResumo>
        </div>
      </section>
    </ContainerPagina>
  );
}
