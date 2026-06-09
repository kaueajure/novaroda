"use client";

import { CalendarDays, UserRound } from "lucide-react";
import { CampoSelect } from "@/components/base/CampoSelect";
import { formatarData } from "@/utils/formatarData";
import { formatarMoeda } from "@/utils/formatarMoeda";
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

export function CardOportunidade({
  oportunidade,
  aoMover,
}: {
  oportunidade: Oportunidade;
  aoMover: (id: string, etapa: EtapaOportunidade) => void;
}) {
  return (
    <article className="rounded-xl border border-linha bg-card-solido p-4 shadow-[0_12px_30px_rgba(0,0,0,0.12)]">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-semibold text-texto">{oportunidade.cliente}</h3>
          <p className="mt-1 text-sm leading-5 text-texto-fraco">
            {oportunidade.veiculoInteresse}
          </p>
        </div>
        <p className="shrink-0 font-display text-xl font-semibold text-principal">
          {formatarMoeda(oportunidade.valorEstimado)}
        </p>
      </div>
      <div className="mt-4 grid gap-2 text-sm text-texto-suave">
        <span className="flex items-center gap-2">
          <CalendarDays className="size-4 text-texto-fraco" aria-hidden="true" />
          {formatarData(oportunidade.data)}
        </span>
        <span className="flex items-center gap-2">
          <UserRound className="size-4 text-texto-fraco" aria-hidden="true" />
          {oportunidade.responsavel}
        </span>
      </div>
      <div className="mt-4">
        <CampoSelect
          label="Etapa"
          value={oportunidade.etapa}
          onChange={(event) =>
            aoMover(oportunidade.id, event.target.value as EtapaOportunidade)
          }
        >
          {etapas.map((etapa) => (
            <option key={etapa} value={etapa}>
              {rotuloEtapaOportunidade[etapa]}
            </option>
          ))}
        </CampoSelect>
      </div>
    </article>
  );
}
