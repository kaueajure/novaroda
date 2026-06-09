"use client";

import Link from "next/link";
import Image from "next/image";
import { Edit3, Eye, Trash2 } from "lucide-react";
import { BadgeStatus } from "@/components/veiculos/BadgeStatus";
import { formatarMoeda } from "@/utils/formatarMoeda";
import { rotuloTipoVeiculo } from "@/utils/rotulos";
import type { StatusVeiculo, Veiculo } from "@/types/Veiculo";

type CardVeiculoProps = {
  veiculo: Veiculo;
  aoExcluir?: (veiculo: Veiculo) => void;
  aoAlterarStatus?: (id: string, status: StatusVeiculo) => void;
};

export function CardVeiculo({
  veiculo,
  aoExcluir,
  aoAlterarStatus,
}: CardVeiculoProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-linha bg-card transition hover:border-principal/35">
      <div className="relative aspect-[16/10] overflow-hidden bg-card-solido">
        <Image
          src={veiculo.imagem}
          alt={`${veiculo.marca} ${veiculo.modelo}`}
          width={720}
          height={450}
          className="h-full w-full object-cover transition duration-300 hover:scale-[1.02]"
        />
        <div className="absolute inset-x-3 top-3 flex items-start justify-between gap-2">
          <BadgeStatus status={veiculo.status} />
          <span className="placa-tecnica bg-fundo/90">{veiculo.placa ?? "SEM PLACA"}</span>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-texto-fraco">
              {rotuloTipoVeiculo[veiculo.tipo]}
            </p>
            <h3 className="mt-1 truncate font-display text-2xl font-semibold leading-tight text-texto">
              {veiculo.marca} {veiculo.modelo}
            </h3>
            <p className="truncate text-sm text-texto-fraco">
              {veiculo.ano} · {veiculo.versao}
            </p>
          </div>
          {veiculo.destaque ? (
            <span className="rounded-md border border-principal/30 bg-principal/10 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-principal">
              Vitrine
            </span>
          ) : null}
        </div>

        <p className="numero-tecnico mt-4 text-2xl font-semibold text-texto">
          {formatarMoeda(veiculo.preco)}
        </p>

        <div className="mt-4 grid grid-cols-3 gap-2 text-sm">
          <div className="rounded-md border border-linha bg-card-solido p-2">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-texto-fraco">KM</p>
            <p className="numero-tecnico mt-1 font-semibold text-texto">
              {veiculo.quilometragem.toLocaleString("pt-BR")}
            </p>
          </div>
          <div className="rounded-md border border-linha bg-card-solido p-2">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-texto-fraco">
              Câmbio
            </p>
            <p className="mt-1 truncate font-semibold text-texto">{veiculo.cambio}</p>
          </div>
          <div className="rounded-md border border-linha bg-card-solido p-2">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-texto-fraco">Cor</p>
            <p className="mt-1 truncate font-semibold text-texto">{veiculo.cor}</p>
          </div>
        </div>

        {aoAlterarStatus ? (
          <label className="mt-4 block text-sm font-semibold text-texto-suave">
            Situação comercial
            <select
              value={veiculo.status}
              onChange={(event) => aoAlterarStatus(veiculo.id, event.target.value as StatusVeiculo)}
              className="foco-visivel mt-2 min-h-10 w-full rounded-md border border-linha bg-card-solido px-3 text-sm text-texto"
            >
              <option value="disponivel">Disponível</option>
              <option value="reservado">Reservado</option>
              <option value="vendido">Vendido</option>
            </select>
          </label>
        ) : null}

        <div className="mt-4 grid grid-cols-3 gap-2">
          <Link
            href={`/painel/veiculos/${veiculo.id}`}
            className="foco-visivel inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-linha bg-card-solido text-sm font-semibold text-texto-suave transition hover:border-linha-forte hover:text-texto"
          >
            <Eye className="size-4" aria-hidden="true" />
            Ver
          </Link>
          <Link
            href={`/painel/veiculos/${veiculo.id}/editar`}
            className="foco-visivel inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-linha bg-card-solido text-sm font-semibold text-texto-suave transition hover:border-linha-forte hover:text-texto"
          >
            <Edit3 className="size-4" aria-hidden="true" />
            Editar
          </Link>
          <button
            type="button"
            onClick={() => aoExcluir?.(veiculo)}
            className="foco-visivel inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-erro/25 bg-erro/8 text-sm font-semibold text-erro transition hover:bg-erro/13"
          >
            <Trash2 className="size-4" aria-hidden="true" />
            Excluir
          </button>
        </div>
      </div>
    </article>
  );
}
