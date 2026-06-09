"use client";

import { CampoSelect } from "@/components/base/CampoSelect";
import { CampoTexto } from "@/components/base/CampoTexto";
import type { FiltrosVeiculosValor } from "@/utils/filtrarVeiculos";

type FiltrosVeiculosProps = {
  filtros: FiltrosVeiculosValor;
  aoAlterar: (filtros: FiltrosVeiculosValor) => void;
};

export function FiltrosVeiculos({ filtros, aoAlterar }: FiltrosVeiculosProps) {
  return (
    <section className="rounded-lg border border-linha bg-card p-4">
      <div className="mb-4 flex items-center justify-between gap-3 border-b border-linha pb-3">
        <div>
          <p className="etiqueta-metal">Filtro de pátio</p>
          <p className="mt-2 text-sm text-texto-fraco">
            Encontre por placa, modelo, versão, status ou faixa de preço.
          </p>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-[1fr_180px_180px_220px]">
        <CampoTexto
          label="Buscar"
          placeholder="Marca, modelo, versão ou placa"
          value={filtros.busca}
          onChange={(event) => aoAlterar({ ...filtros, busca: event.target.value })}
        />
        <CampoSelect
          label="Tipo"
          value={filtros.tipo}
          onChange={(event) =>
            aoAlterar({
              ...filtros,
              tipo: event.target.value as FiltrosVeiculosValor["tipo"],
            })
          }
        >
          <option value="todos">Todos</option>
          <option value="carro">Carros</option>
          <option value="moto">Motos</option>
        </CampoSelect>
        <CampoSelect
          label="Status"
          value={filtros.status}
          onChange={(event) =>
            aoAlterar({
              ...filtros,
              status: event.target.value as FiltrosVeiculosValor["status"],
            })
          }
        >
          <option value="todos">Todos</option>
          <option value="disponivel">Disponível</option>
          <option value="reservado">Reservado</option>
          <option value="vendido">Vendido</option>
        </CampoSelect>
        <CampoSelect
          label="Ordenar"
          value={filtros.ordenacao}
          onChange={(event) =>
            aoAlterar({
              ...filtros,
              ordenacao: event.target.value as FiltrosVeiculosValor["ordenacao"],
            })
          }
        >
          <option value="recentes">Entradas recentes</option>
          <option value="preco_desc">Maior preço</option>
          <option value="preco_asc">Menor preço</option>
          <option value="ano_desc">Ano mais novo</option>
        </CampoSelect>
      </div>
    </section>
  );
}
