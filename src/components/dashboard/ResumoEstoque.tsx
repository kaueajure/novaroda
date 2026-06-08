"use client";

import { rotuloStatusVeiculo, rotuloTipoVeiculo } from "@/utils/rotulos";
import type { Veiculo } from "@/types/Veiculo";

export function ResumoEstoque({ veiculos }: { veiculos: Veiculo[] }) {
  const total = Math.max(veiculos.length, 1);
  const tipos = (["carro", "moto"] as const).map((tipo) => ({
    nome: rotuloTipoVeiculo[tipo],
    valor: veiculos.filter((veiculo) => veiculo.tipo === tipo).length,
  }));
  const status = (["disponivel", "reservado", "vendido"] as const).map((item) => ({
    nome: rotuloStatusVeiculo[item],
    valor: veiculos.filter((veiculo) => veiculo.status === item).length,
  }));

  return (
    <section className="rounded-xl border border-linha bg-card p-5">
      <h2 className="font-display text-2xl font-semibold text-texto">
        Resumo do estoque
      </h2>
      <div className="mt-5 space-y-5">
        {[...tipos, ...status].map((item) => {
          const percentual = Math.round((item.valor / total) * 100);
          return (
            <div key={item.nome}>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="font-semibold text-texto-suave">{item.nome}</span>
                <span className="text-texto-fraco">{item.valor} itens</span>
              </div>
              <div className="h-2 rounded-full bg-white/[0.06]">
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
