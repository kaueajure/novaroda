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
        <section className="rounded-xl border border-linha bg-card p-8 text-center">
          <p className="text-texto-suave">
            O veículo solicitado não está mais no estoque da loja.
          </p>
          <Link
            href="/painel/veiculos"
            className="foco-visivel mt-5 inline-flex min-h-11 items-center justify-center rounded-lg bg-principal px-4 py-2 text-sm font-semibold text-[#051113] transition hover:bg-[#76eadc]"
          >
            Voltar para veículos
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
    ["Cadastro", formatarData(veiculo.dataCadastro)],
    ["Destaque", veiculo.destaque ? "Sim" : "Não"],
  ];

  return (
    <ContainerPagina
      titulo={`${veiculo.marca} ${veiculo.modelo}`}
      subtitulo={veiculo.descricao}
      acao={
        <div className="flex gap-2">
          <Link
            href="/painel/veiculos"
            className="foco-visivel inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-linha bg-white/[0.03] px-4 py-2 text-sm font-semibold text-texto-suave transition hover:bg-white/[0.07] hover:text-texto"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Voltar
          </Link>
          <Link
            href={`/painel/veiculos/${veiculo.id}/editar`}
            className="foco-visivel inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-principal px-4 py-2 text-sm font-semibold text-[#051113] transition hover:bg-[#76eadc]"
          >
            <Edit3 className="size-4" aria-hidden="true" />
            Editar
          </Link>
        </div>
      }
    >
      <div className="grid gap-5 xl:grid-cols-[1.15fr_0.85fr]">
        <section className="overflow-hidden rounded-xl border border-linha bg-card">
          <Image
            src={veiculo.imagem}
            alt={`${veiculo.marca} ${veiculo.modelo}`}
            width={1200}
            height={675}
            className="aspect-[16/9] w-full object-cover"
          />
          <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <BadgeStatus status={veiculo.status} />
              <p className="mt-3 font-display text-4xl font-semibold text-texto">
                {formatarMoeda(veiculo.preco)}
              </p>
            </div>
            <BotaoSecundario
              type="button"
              onClick={() => setConfirmarExclusao(true)}
              icone={<Trash2 className="size-4" aria-hidden="true" />}
              className="border-erro/20 text-erro hover:bg-erro/10 hover:text-erro"
            >
              Excluir
            </BotaoSecundario>
          </div>
        </section>

        <section className="rounded-xl border border-linha bg-card p-5">
          <h2 className="font-display text-2xl font-semibold text-texto">
            Ficha técnica
          </h2>
          <dl className="mt-5 grid gap-3 sm:grid-cols-2">
            {detalhes.map(([label, valor]) => (
              <div key={label} className="rounded-lg border border-linha bg-white/[0.03] p-3">
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
        titulo="Excluir veículo?"
        descricao={`Esta ação remove ${veiculo.marca} ${veiculo.modelo} do estoque da loja.`}
        textoConfirmar="Excluir"
        aoConfirmar={excluir}
        aoFechar={() => setConfirmarExclusao(false)}
      />
    </ContainerPagina>
  );
}
