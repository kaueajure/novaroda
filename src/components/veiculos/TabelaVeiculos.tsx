"use client";

import Link from "next/link";
import Image from "next/image";
import { Edit3, Eye, Trash2 } from "lucide-react";
import { BadgeStatus } from "@/components/veiculos/BadgeStatus";
import { CardVeiculo } from "@/components/veiculos/CardVeiculo";
import { TabelaResponsiva } from "@/components/base/TabelaResponsiva";
import { formatarData } from "@/utils/formatarData";
import { formatarMoeda } from "@/utils/formatarMoeda";
import { rotuloTipoVeiculo } from "@/utils/rotulos";
import type { StatusVeiculo, Veiculo } from "@/types/Veiculo";

type TabelaVeiculosProps = {
  veiculos: Veiculo[];
  aoExcluir: (veiculo: Veiculo) => void;
  aoAlterarStatus: (id: string, status: StatusVeiculo) => void;
};

export function TabelaVeiculos({
  veiculos,
  aoExcluir,
  aoAlterarStatus,
}: TabelaVeiculosProps) {
  return (
    <>
      <div className="grid gap-4 md:hidden">
        {veiculos.map((veiculo) => (
          <CardVeiculo
            key={veiculo.id}
            veiculo={veiculo}
            aoExcluir={aoExcluir}
            aoAlterarStatus={aoAlterarStatus}
          />
        ))}
      </div>

      <TabelaResponsiva className="hidden md:block">
        <table className="w-full min-w-[1080px] text-left text-sm">
          <thead className="text-xs uppercase tracking-[0.14em] text-texto-fraco">
            <tr className="border-b border-linha bg-card">
              <th className="px-4 py-3 font-semibold">Veículo</th>
              <th className="px-4 py-3 font-semibold">Placa</th>
              <th className="px-4 py-3 font-semibold">Situação</th>
              <th className="px-4 py-3 font-semibold">Preço</th>
              <th className="px-4 py-3 font-semibold">Ano / KM</th>
              <th className="px-4 py-3 font-semibold">Entrada</th>
              <th className="px-4 py-3 text-right font-semibold">Ações</th>
            </tr>
          </thead>
          <tbody>
            {veiculos.map((veiculo) => (
              <tr key={veiculo.id} className="border-b border-linha/70 last:border-b-0">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <Image
                      src={veiculo.imagem}
                      alt={`${veiculo.marca} ${veiculo.modelo}`}
                      width={160}
                      height={112}
                      className="h-14 w-20 rounded-md border border-linha object-cover"
                    />
                    <div className="min-w-0">
                      <p className="font-semibold text-texto">
                        {veiculo.marca} {veiculo.modelo}
                      </p>
                      <p className="truncate text-texto-fraco">
                        {rotuloTipoVeiculo[veiculo.tipo]} · {veiculo.versao}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className="placa-tecnica">{veiculo.placa ?? "SEM PLACA"}</span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <BadgeStatus status={veiculo.status} />
                    <select
                      value={veiculo.status}
                      onChange={(event) =>
                        aoAlterarStatus(veiculo.id, event.target.value as StatusVeiculo)
                      }
                      className="foco-visivel min-h-9 rounded-md border border-linha bg-fundo px-2 text-xs font-semibold text-texto-suave"
                      aria-label={`Alterar status de ${veiculo.marca} ${veiculo.modelo}`}
                    >
                      <option value="disponivel">Disponível</option>
                      <option value="reservado">Reservado</option>
                      <option value="vendido">Vendido</option>
                    </select>
                  </div>
                </td>
                <td className="numero-tecnico px-4 py-3 font-semibold text-texto">
                  {formatarMoeda(veiculo.preco)}
                </td>
                <td className="px-4 py-3 text-texto-suave">
                  <span className="numero-tecnico">{veiculo.ano}</span>
                  <span className="text-texto-fraco"> · </span>
                  <span className="numero-tecnico">
                    {veiculo.quilometragem.toLocaleString("pt-BR")} km
                  </span>
                </td>
                <td className="px-4 py-3 text-texto-fraco">
                  {formatarData(veiculo.dataCadastro)}
                </td>
                <td className="px-4 py-3">
                  <div className="flex justify-end gap-2">
                    <Link
                      href={`/painel/veiculos/${veiculo.id}`}
                      className="foco-visivel grid size-10 place-items-center rounded-md border border-linha text-texto-fraco transition hover:border-linha-forte hover:bg-card hover:text-texto"
                      aria-label={`Ver ${veiculo.marca} ${veiculo.modelo}`}
                    >
                      <Eye className="size-4" aria-hidden="true" />
                    </Link>
                    <Link
                      href={`/painel/veiculos/${veiculo.id}/editar`}
                      className="foco-visivel grid size-10 place-items-center rounded-md border border-linha text-texto-fraco transition hover:border-linha-forte hover:bg-card hover:text-texto"
                      aria-label={`Editar ${veiculo.marca} ${veiculo.modelo}`}
                    >
                      <Edit3 className="size-4" aria-hidden="true" />
                    </Link>
                    <button
                      type="button"
                      onClick={() => aoExcluir(veiculo)}
                      className="foco-visivel grid size-10 place-items-center rounded-md border border-erro/25 text-erro transition hover:bg-erro/10"
                      aria-label={`Excluir ${veiculo.marca} ${veiculo.modelo}`}
                    >
                      <Trash2 className="size-4" aria-hidden="true" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </TabelaResponsiva>
    </>
  );
}
