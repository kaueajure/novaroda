"use client";

import { rotuloStatusVeiculo, rotuloTipoVeiculo } from "@/utils/rotulos";
import type { Veiculo } from "@/types/Veiculo";

export function ResumoEstoque({ veiculos }: { veiculos: Veiculo[] }) {
  const totalReal = veiculos.length;
  const total = Math.max(totalReal, 1);
  const tipos = (["carro", "moto"] as const).map((tipo) => ({
    nome: rotuloTipoVeiculo[tipo],
    valor: veiculos.filter((veiculo) => veiculo.tipo === tipo).length,
  }));
  const status = (["disponivel", "reservado", "vendido"] as const).map((item) => ({
    nome: rotuloStatusVeiculo[item],
    valor: veiculos.filter((veiculo) => veiculo.status === item).length,
  }));

  return (
    <section className="rounded-lg border border-linha bg-card p-4 sm:p-5">
      <div className="flex items-start justify-between gap-3 border-b border-linha pb-4">
        <div>
          <p className="etiqueta-metal">Pátio</p>
          <h2 className="mt-3 font-display text-xl font-semibold text-texto sm:text-2xl">
            Composição do estoque
          </h2>
        </div>
        <span className="numero-tecnico rounded-md border border-linha bg-card-solido px-3 py-2 text-sm font-semibold text-texto">
          {totalReal} itens
        </span>
      </div>
      <div className="mt-5 space-y-5">
        {[...tipos, ...status].map((item) => {
          const percentual = Math.round((item.valor / total) * 100);
          return (
            <div key={item.nome}>
              <div className="mb-2 flex items-center justify-between gap-3 text-sm">
                <span className="font-semibold text-texto-suave">{item.nome}</span>
                <span className="numero-tecnico text-texto-fraco">
                  {item.valor} / {totalReal}
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-card-solido">
                <div
                  className="h-full rounded-full bg-principal"
                  style={{ width: `${percentual}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
