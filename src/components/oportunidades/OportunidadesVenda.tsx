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
      titulo="Oportunidades de venda"
      subtitulo="Acompanhe negociações por etapa, responsável e valor estimado em um funil simples."
    >
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <CardResumo
          titulo="Oportunidades"
          valor={oportunidades.length}
          descricao="Total no funil comercial."
          icone={<Workflow className="size-5" aria-hidden="true" />}
        />
        <CardResumo
          titulo="Em aberto"
          valor={abertas.length}
          descricao="Ainda dependem de atendimento."
          icone={<Target className="size-5" aria-hidden="true" />}
          destaque="azul"
        />
        <CardResumo
          titulo="Valor em negociação"
          valor={formatarMoeda(valorAberto)}
          descricao="Soma estimada de oportunidades abertas."
          icone={<CircleDollarSign className="size-5" aria-hidden="true" />}
          destaque="roxo"
        />
        <CardResumo
          titulo="Conversão"
          valor={`${taxa}%`}
          descricao="Fechamentos no funil."
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
