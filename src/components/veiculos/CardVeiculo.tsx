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
    <article className="overflow-hidden rounded-xl border border-linha bg-card shadow-[0_16px_44px_rgba(0,0,0,0.2)] transition hover:border-linha-forte">
      <div className="relative aspect-[16/10] overflow-hidden bg-card-solido">
        <Image
          src={veiculo.imagem}
          alt={`${veiculo.marca} ${veiculo.modelo}`}
          width={720}
          height={450}
          className="h-full w-full object-cover transition duration-300 hover:scale-[1.03]"
        />
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          <BadgeStatus status={veiculo.status} />
          {veiculo.destaque ? (
            <span className="rounded-full border border-principal/30 bg-principal/12 px-2.5 py-1 text-xs font-bold text-principal">
              Destaque
            </span>
          ) : null}
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-texto-fraco">
              {rotuloTipoVeiculo[veiculo.tipo]}
            </p>
            <h3 className="mt-1 font-display text-2xl font-semibold leading-tight text-texto">
              {veiculo.marca} {veiculo.modelo}
            </h3>
            <p className="text-sm text-texto-fraco">
              {veiculo.ano} · {veiculo.versao}
            </p>
          </div>
          <p className="shrink-0 text-right font-display text-2xl font-semibold text-texto">
            {formatarMoeda(veiculo.preco)}
          </p>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2 text-sm">
          <div className="rounded-lg border border-linha bg-white/[0.03] p-2">
            <p className="text-texto-fraco">Km</p>
            <p className="font-semibold text-texto">{veiculo.quilometragem.toLocaleString("pt-BR")}</p>
          </div>
          <div className="rounded-lg border border-linha bg-white/[0.03] p-2">
            <p className="text-texto-fraco">Câmbio</p>
            <p className="font-semibold text-texto">{veiculo.cambio}</p>
          </div>
          <div className="rounded-lg border border-linha bg-white/[0.03] p-2">
            <p className="text-texto-fraco">Cor</p>
            <p className="font-semibold text-texto">{veiculo.cor}</p>
          </div>
        </div>

        {aoAlterarStatus ? (
          <label className="mt-4 block text-sm font-semibold text-texto-suave">
            Status
            <select
              value={veiculo.status}
              onChange={(event) => aoAlterarStatus(veiculo.id, event.target.value as StatusVeiculo)}
              className="foco-visivel mt-2 min-h-10 w-full rounded-lg border border-linha bg-card-solido px-3 text-sm text-texto"
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
            className="foco-visivel inline-flex min-h-10 items-center justify-center gap-2 rounded-lg border border-linha bg-white/[0.03] text-sm font-semibold text-texto-suave transition hover:bg-white/[0.07] hover:text-texto"
          >
            <Eye className="size-4" aria-hidden="true" />
            Ver
          </Link>
          <Link
            href={`/painel/veiculos/${veiculo.id}/editar`}
            className="foco-visivel inline-flex min-h-10 items-center justify-center gap-2 rounded-lg border border-linha bg-white/[0.03] text-sm font-semibold text-texto-suave transition hover:bg-white/[0.07] hover:text-texto"
          >
            <Edit3 className="size-4" aria-hidden="true" />
            Editar
          </Link>
          <button
            type="button"
            onClick={() => aoExcluir?.(veiculo)}
            className="foco-visivel inline-flex min-h-10 items-center justify-center gap-2 rounded-lg border border-erro/20 bg-erro/8 text-sm font-semibold text-erro transition hover:bg-erro/13"
          >
            <Trash2 className="size-4" aria-hidden="true" />
            Excluir
          </button>
        </div>
      </div>
    </article>
  );
}
