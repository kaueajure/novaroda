"use client";

import { useRouter } from "next/navigation";
import { ContainerPagina } from "@/components/layout/ContainerPagina";
import { FormularioVeiculo } from "@/components/veiculos/FormularioVeiculo";
import { useLojaStore } from "@/store/useLojaStore";
import type { DadosVeiculo } from "@/types/Veiculo";

export function CadastroVeiculo() {
  const router = useRouter();
  const adicionarVeiculo = useLojaStore((state) => state.adicionarVeiculo);

  function salvar(dados: DadosVeiculo) {
    const id = adicionarVeiculo(dados);
    router.push(`/painel/veiculos/${id}`);
  }

  return (
    <ContainerPagina
      titulo="Inventariar veículo"
      subtitulo="Abra uma ficha de entrada com placa, KM, versão, preço anunciado, status e observações de venda."
    >
      <FormularioVeiculo modo="cadastro" aoSalvar={salvar} />
    </ContainerPagina>
  );
}
