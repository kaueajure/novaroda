"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { FilePlus2 } from "lucide-react";
import { ModalConfirmacao } from "@/components/base/ModalConfirmacao";
import { ContainerPagina } from "@/components/layout/ContainerPagina";
import { FiltrosVeiculos } from "@/components/veiculos/FiltrosVeiculos";
import { TabelaVeiculos } from "@/components/veiculos/TabelaVeiculos";
import { useLojaStore } from "@/store/useLojaStore";
import { filtrarVeiculos, type FiltrosVeiculosValor } from "@/utils/filtrarVeiculos";
import type { StatusVeiculo, Veiculo } from "@/types/Veiculo";

const filtrosIniciais: FiltrosVeiculosValor = {
  busca: "",
  tipo: "todos",
  status: "todos",
  ordenacao: "recentes",
};

export function ListaVeiculos() {
  const [filtros, setFiltros] = useState(filtrosIniciais);
  const [veiculoParaExcluir, setVeiculoParaExcluir] = useState<Veiculo | null>(null);
  const veiculos = useLojaStore((state) => state.veiculos);
  const excluirVeiculo = useLojaStore((state) => state.excluirVeiculo);
  const alterarStatusVeiculo = useLojaStore((state) => state.alterarStatusVeiculo);

  const veiculosFiltrados = useMemo(
    () => filtrarVeiculos(veiculos, filtros),
    [veiculos, filtros],
  );

  function confirmarExclusao() {
    if (!veiculoParaExcluir) return;
    excluirVeiculo(veiculoParaExcluir.id);
    setVeiculoParaExcluir(null);
  }

  return (
    <ContainerPagina
      titulo="Gerenciamento de veículos"
      subtitulo="Liste, filtre, cadastre, edite e acompanhe carros e motos disponíveis na loja."
      acao={
        <Link
          href="/painel/veiculos/novo"
          className="foco-visivel inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-principal px-4 py-2 text-sm font-semibold text-[#051113] shadow-[0_10px_30px_rgba(97,214,200,0.18)] transition duration-200 hover:bg-[#76eadc]"
        >
          <FilePlus2 className="size-4" aria-hidden="true" />
          Cadastrar veículo
        </Link>
      }
    >
      <div className="space-y-5">
        <FiltrosVeiculos filtros={filtros} aoAlterar={setFiltros} />

        {veiculosFiltrados.length > 0 ? (
          <TabelaVeiculos
            veiculos={veiculosFiltrados}
            aoExcluir={setVeiculoParaExcluir}
            aoAlterarStatus={(id: string, status: StatusVeiculo) =>
              alterarStatusVeiculo(id, status)
            }
          />
        ) : (
          <section className="rounded-xl border border-dashed border-linha-forte bg-card p-10 text-center">
            <p className="font-display text-3xl font-semibold text-texto">
              Nenhum veículo encontrado.
            </p>
            <p className="mx-auto mt-2 max-w-md text-texto-suave">
              Ajuste os filtros ou cadastre seu primeiro veículo para começar a
              organizar seu estoque.
            </p>
            <Link href="/painel/veiculos/novo" className="mt-6 inline-flex">
              <span className="foco-visivel inline-flex min-h-11 items-center justify-center rounded-lg bg-principal px-4 py-2 text-sm font-semibold text-[#051113] transition hover:bg-[#76eadc]">
                Cadastrar veículo
              </span>
            </Link>
          </section>
        )}
      </div>

      <ModalConfirmacao
        aberto={Boolean(veiculoParaExcluir)}
        titulo="Excluir veículo?"
        descricao={`Esta ação remove ${
          veiculoParaExcluir
            ? `${veiculoParaExcluir.marca} ${veiculoParaExcluir.modelo}`
            : "este veículo"
        } do estoque da loja.`}
        textoConfirmar="Excluir"
        aoConfirmar={confirmarExclusao}
        aoFechar={() => setVeiculoParaExcluir(null)}
      />
    </ContainerPagina>
  );
}
