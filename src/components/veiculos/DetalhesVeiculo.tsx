"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Edit3, Trash2 } from "lucide-react";
import { BotaoSecundario } from "@/components/base/BotaoSecundario";
import { ModalConfirmacao } from "@/components/base/ModalConfirmacao";
import { ContainerPagina } from "@/components/layout/ContainerPagina";
import { BadgeStatus } from "@/components/veiculos/BadgeStatus";
import { useLojaStore } from "@/store/useLojaStore";
import { formatarData } from "@/utils/formatarData";
import { formatarMoeda } from "@/utils/formatarMoeda";
import { rotuloTipoVeiculo } from "@/utils/rotulos";

export function DetalhesVeiculo() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const [confirmarExclusao, setConfirmarExclusao] = useState(false);
  const veiculos = useLojaStore((state) => state.veiculos);
  const excluirVeiculo = useLojaStore((state) => state.excluirVeiculo);
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
            className="foco-visivel mt-5 inline-flex min-h-11 items-center justify-center rounded-md bg-principal px-4 py-2 text-sm font-semibold text-[var(--principal-contraste)] transition hover:bg-principal-forte"
          >
            Voltar para estoque
          </Link>
        </section>
      </ContainerPagina>
    );
  }

  function excluir() {
    if (!veiculo) return;
    excluirVeiculo(veiculo.id);
    setConfirmarExclusao(false);
    router.push("/painel/veiculos");
  }

  const detalhes = [
    ["Tipo", rotuloTipoVeiculo[veiculo.tipo]],
    ["Ano", veiculo.ano],
    ["Versão", veiculo.versao],
    ["Cor", veiculo.cor],
    ["Quilometragem", `${veiculo.quilometragem.toLocaleString("pt-BR")} km`],
    ["Câmbio", veiculo.cambio],
    ["Combustível", veiculo.combustivel],
    ["Placa", veiculo.placa ?? "Não informada"],
    ["Entrada no pátio", formatarData(veiculo.dataCadastro)],
    ["Vitrine", veiculo.destaque ? "Sim" : "Não"],
  ];

  return (
    <ContainerPagina
      titulo={`${veiculo.marca} ${veiculo.modelo}`}
      subtitulo={veiculo.descricao}
      acao={
        <div className="flex gap-2">
          <Link
            href="/painel/veiculos"
            className="foco-visivel inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-linha bg-card-solido px-4 py-2 text-sm font-semibold text-texto-suave transition hover:border-linha-forte hover:text-texto"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Voltar
          </Link>
          <Link
            href={`/painel/veiculos/${veiculo.id}/editar`}
            className="foco-visivel inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-principal px-4 py-2 text-sm font-semibold text-[var(--principal-contraste)] transition hover:bg-principal-forte"
          >
            <Edit3 className="size-4" aria-hidden="true" />
            Editar ficha
          </Link>
        </div>
      }
    >
      <div className="grid gap-5 xl:grid-cols-[1.15fr_0.85fr]">
        <section className="overflow-hidden rounded-lg border border-linha bg-card">
          <div className="relative">
            <Image
              src={veiculo.imagem}
              alt={`${veiculo.marca} ${veiculo.modelo}`}
              width={1200}
              height={675}
              className="aspect-[16/9] w-full object-cover"
            />
            <div className="absolute left-4 top-4 flex flex-wrap gap-2">
              <BadgeStatus status={veiculo.status} />
              <span className="placa-tecnica bg-fundo/90">{veiculo.placa ?? "SEM PLACA"}</span>
            </div>
          </div>
          <div className="flex flex-col gap-4 border-t border-linha p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="etiqueta-metal">Preço anunciado</p>
              <p className="numero-tecnico mt-2 text-4xl font-semibold text-texto">
                {formatarMoeda(veiculo.preco)}
              </p>
            </div>
            <BotaoSecundario
              type="button"
              onClick={() => setConfirmarExclusao(true)}
              icone={<Trash2 className="size-4" aria-hidden="true" />}
              className="border-erro/25 text-erro hover:bg-erro/10 hover:text-erro"
            >
              Remover
            </BotaoSecundario>
          </div>
        </section>

        <section className="rounded-lg border border-linha bg-card p-5">
          <p className="etiqueta-metal">Laudo comercial</p>
          <h2 className="mt-3 font-display text-2xl font-semibold text-texto">
            Ficha técnica
          </h2>
          <dl className="mt-5 grid gap-3 sm:grid-cols-2">
            {detalhes.map(([label, valor]) => (
              <div key={label} className="rounded-md border border-linha bg-card-solido p-3">
                <dt className="text-xs font-bold uppercase tracking-[0.14em] text-texto-fraco">
                  {label}
                </dt>
                <dd className="mt-1 font-semibold text-texto">{valor}</dd>
              </div>
            ))}
          </dl>
        </section>
      </div>

      <ModalConfirmacao
        aberto={confirmarExclusao}
        titulo="Remover veículo do pátio?"
        descricao={`Esta ação remove ${veiculo.marca} ${veiculo.modelo} do estoque operacional da loja.`}
        textoConfirmar="Remover"
        aoConfirmar={excluir}
        aoFechar={() => setConfirmarExclusao(false)}
      />
    </ContainerPagina>
  );
}
