"use client";

import { CardOportunidade } from "@/components/oportunidades/CardOportunidade";
import { rotuloEtapaOportunidade } from "@/utils/rotulos";
import type { EtapaOportunidade, Oportunidade } from "@/types/Oportunidade";

const etapas: EtapaOportunidade[] = [
  "novo_interesse",
  "em_atendimento",
  "proposta_enviada",
  "negociacao",
  "fechado",
  "perdido",
];

export function KanbanOportunidades({
  oportunidades,
  aoMover,
}: {
  oportunidades: Oportunidade[];
  aoMover: (id: string, etapa: EtapaOportunidade) => void;
}) {
  return (
    <div className="overflow-x-auto pb-2">
      <div className="grid min-w-[1120px] grid-cols-6 gap-3">
        {etapas.map((etapa) => {
          const itens = oportunidades.filter((oportunidade) => oportunidade.etapa === etapa);
          return (
            <section key={etapa} className="rounded-lg border border-linha bg-card p-3">
              <div className="mb-3 flex items-center justify-between gap-3 border-b border-linha px-1 pb-3">
                <h2 className="font-display text-lg font-semibold text-texto">
                  {rotuloEtapaOportunidade[etapa]}
                </h2>
                <span className="numero-tecnico rounded-md border border-linha bg-card-solido px-2 py-0.5 text-xs font-bold text-texto-fraco">
                  {itens.length}
                </span>
              </div>
              <div className="space-y-3">
                {itens.map((oportunidade) => (
                  <CardOportunidade
                    key={oportunidade.id}
                    oportunidade={oportunidade}
                    aoMover={aoMover}
                  />
                ))}
                {itens.length === 0 ? (
                  <div className="rounded-md border border-dashed border-linha p-4 text-center text-sm leading-6 text-texto-fraco">
                    Sem proposta nesta etapa.
                  </div>
                ) : null}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
