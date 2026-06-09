"use client";

import { CircleDollarSign, Target, TrendingUp, Workflow } from "lucide-react";
import { CardResumo } from "@/components/dashboard/CardResumo";
import { ContainerPagina } from "@/components/layout/ContainerPagina";
import { KanbanOportunidades } from "@/components/oportunidades/KanbanOportunidades";
import { useLojaStore } from "@/store/useLojaStore";
import { formatarMoeda } from "@/utils/formatarMoeda";

export function OportunidadesVenda() {
  const oportunidades = useLojaStore((state) => state.oportunidades);
  const moverOportunidade = useLojaStore((state) => state.moverOportunidade);
  const abertas = oportunidades.filter(
    (oportunidade) => !["fechado", "perdido"].includes(oportunidade.etapa),
  );
  const fechadas = oportunidades.filter((oportunidade) => oportunidade.etapa === "fechado");
  const valorAberto = abertas.reduce((total, item) => total + item.valorEstimado, 0);
  const taxa = oportunidades.length
    ? Math.round((fechadas.length / oportunidades.length) * 100)
    : 0;

  return (
    <ContainerPagina
      titulo="Propostas e negociações"
      subtitulo="Acompanhe leads por etapa, responsável, veículo desejado e valor estimado antes da negociação esfriar."
    >
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <CardResumo
          titulo="Propostas"
          valor={oportunidades.length}
          descricao="Total registrado no funil comercial."
          icone={<Workflow className="size-5" aria-hidden="true" />}
        />
        <CardResumo
          titulo="Em andamento"
          valor={abertas.length}
          descricao="Ainda dependem de atendimento ou retorno."
          icone={<Target className="size-5" aria-hidden="true" />}
          destaque="azul"
        />
        <CardResumo
          titulo="Valor em mesa"
          valor={formatarMoeda(valorAberto)}
          descricao="Soma estimada das propostas abertas."
          icone={<CircleDollarSign className="size-5" aria-hidden="true" />}
          destaque="roxo"
        />
        <CardResumo
          titulo="Fechamento"
          valor={`${taxa}%`}
          descricao="Propostas concluídas como venda."
          icone={<TrendingUp className="size-5" aria-hidden="true" />}
          destaque="verde"
        />
      </section>

      <section className="mt-6">
        <KanbanOportunidades oportunidades={oportunidades} aoMover={moverOportunidade} />
      </section>
    </ContainerPagina>
  );
}
