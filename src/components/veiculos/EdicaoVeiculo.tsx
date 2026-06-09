"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { ContainerPagina } from "@/components/layout/ContainerPagina";
import { FormularioVeiculo } from "@/components/veiculos/FormularioVeiculo";
import { useLojaStore } from "@/store/useLojaStore";
import type { DadosVeiculo } from "@/types/Veiculo";

export function EdicaoVeiculo() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const veiculos = useLojaStore((state) => state.veiculos);
  const editarVeiculo = useLojaStore((state) => state.editarVeiculo);
  const veiculo = veiculos.find((item) => item.id === params.id);

  if (!veiculo) {
    return (
      <ContainerPagina titulo="Veículo não encontrado">
        <section className="rounded-lg border border-linha bg-card p-8 text-center">
          <p className="text-texto-suave">
            Este item não está mais no estoque operacional da loja.
          </p>
          <Link
            href="/painel/veiculos"
            className="foco-visivel mt-5 inline-flex min-h-11 items-center justify-center rounded-md bg-principal px-4 py-2 text-sm font-semibold text-[#14110a] transition hover:bg-principal-forte"
          >
            Voltar para estoque
          </Link>
        </section>
      </ContainerPagina>
    );
  }

  function salvar(dados: DadosVeiculo) {
    if (!veiculo) return;
    editarVeiculo(veiculo.id, dados);
    router.push(`/painel/veiculos/${veiculo.id}`);
  }

  return (
    <ContainerPagina
      titulo="Editar ficha do veículo"
      subtitulo={`Revise preço, status, KM e observações comerciais de ${veiculo.marca} ${veiculo.modelo}.`}
    >
      <FormularioVeiculo modo="edicao" veiculo={veiculo} aoSalvar={salvar} />
    </ContainerPagina>
  );
}
