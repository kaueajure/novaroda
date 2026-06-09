"use client";

import { useMemo } from "react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, Save } from "lucide-react";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import { BotaoPrimario } from "@/components/base/BotaoPrimario";
import { CampoSelect } from "@/components/base/CampoSelect";
import { CampoTexto } from "@/components/base/CampoTexto";
import { BadgeStatus } from "@/components/veiculos/BadgeStatus";
import { formatarMoeda } from "@/utils/formatarMoeda";
import type { DadosVeiculo, StatusVeiculo, Veiculo } from "@/types/Veiculo";

const schemaVeiculo = z.object({
  tipo: z.enum(["carro", "moto"]),
  marca: z.string().min(2, "Informe a marca."),
  modelo: z.string().min(2, "Informe o modelo."),
  ano: z.number().int().min(1950, "Ano inválido.").max(2027, "Ano inválido."),
  versao: z.string().min(2, "Informe a versão."),
  cor: z.string().min(2, "Informe a cor."),
  quilometragem: z.number().min(0, "Quilometragem não pode ser negativa."),
  preco: z.number().min(1000, "Informe um preço válido."),
  status: z.enum(["disponivel", "reservado", "vendido"]),
  cambio: z.enum(["Automático", "Manual", "CVT", "Automatizado"]),
  combustivel: z.enum(["Flex", "Gasolina", "Diesel", "Elétrico", "Híbrido"]),
  placa: z.string().optional(),
  imagem: z.string().url("Informe uma URL de imagem válida."),
  descricao: z.string().min(12, "Adicione uma descrição mais completa."),
  destaque: z.boolean(),
});

type DadosFormularioVeiculo = z.infer<typeof schemaVeiculo>;

const imagemPadrao =
  "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1400&auto=format&fit=crop";

function valoresIniciais(veiculo?: Veiculo): DadosFormularioVeiculo {
  if (veiculo) {
    return {
      tipo: veiculo.tipo,
      marca: veiculo.marca,
      modelo: veiculo.modelo,
      ano: veiculo.ano,
      versao: veiculo.versao,
      cor: veiculo.cor,
      quilometragem: veiculo.quilometragem,
      preco: veiculo.preco,
      status: veiculo.status,
      cambio: veiculo.cambio,
      combustivel: veiculo.combustivel,
      placa: veiculo.placa ?? "",
      imagem: veiculo.imagem,
      descricao: veiculo.descricao,
      destaque: veiculo.destaque,
    };
  }

  return {
    tipo: "carro",
    marca: "",
    modelo: "",
    ano: 2026,
    versao: "",
    cor: "",
    quilometragem: 0,
    preco: 100000,
    status: "disponivel",
    cambio: "Automático",
    combustivel: "Flex",
    placa: "",
    imagem: imagemPadrao,
    descricao: "",
    destaque: false,
  };
}

type FormularioVeiculoProps = {
  veiculo?: Veiculo;
  modo: "cadastro" | "edicao";
  aoSalvar: (dados: DadosVeiculo) => void;
};

export function FormularioVeiculo({
  veiculo,
  modo,
  aoSalvar,
}: FormularioVeiculoProps) {
  const defaults = useMemo(() => valoresIniciais(veiculo), [veiculo]);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<DadosFormularioVeiculo>({
    resolver: zodResolver(schemaVeiculo),
    defaultValues: defaults,
  });

  const imagem = useWatch({ control, name: "imagem" });
  const marca = useWatch({ control, name: "marca" });
  const modelo = useWatch({ control, name: "modelo" });
  const ano = useWatch({ control, name: "ano" });
  const versao = useWatch({ control, name: "versao" });
  const preco = useWatch({ control, name: "preco" });
  const placa = useWatch({ control, name: "placa" });
  const quilometragem = useWatch({ control, name: "quilometragem" });
  const status = useWatch({ control, name: "status" }) as StatusVeiculo;

  function enviar(dados: DadosFormularioVeiculo) {
    aoSalvar({
      ...dados,
      marca: dados.marca.trim(),
      modelo: dados.modelo.trim(),
      versao: dados.versao.trim(),
      cor: dados.cor.trim(),
      descricao: dados.descricao.trim(),
      placa: dados.placa?.trim() || undefined,
    });
  }

  return (
    <form onSubmit={handleSubmit(enviar)} className="grid gap-5 xl:grid-cols-[1fr_360px]" noValidate>
      <section className="rounded-lg border border-linha bg-card p-5">
        <div className="border-b border-linha pb-4">
          <p className="etiqueta-metal">Ficha comercial</p>
          <h2 className="mt-3 font-display text-2xl font-semibold text-texto">
            {modo === "cadastro" ? "Entrada de veículo" : "Revisão da ficha"}
          </h2>
          <p className="mt-1 text-sm leading-6 text-texto-fraco">
            Quanto mais completa a ficha, menos retrabalho no balcão e no atendimento.
          </p>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <CampoSelect label="Tipo" erro={errors.tipo?.message} {...register("tipo")}>
            <option value="carro">Carro</option>
            <option value="moto">Moto</option>
          </CampoSelect>
          <CampoSelect label="Situação comercial" erro={errors.status?.message} {...register("status")}>
            <option value="disponivel">Disponível</option>
            <option value="reservado">Reservado</option>
            <option value="vendido">Vendido</option>
          </CampoSelect>
          <CampoTexto label="Marca" erro={errors.marca?.message} {...register("marca")} />
          <CampoTexto label="Modelo" erro={errors.modelo?.message} {...register("modelo")} />
          <CampoTexto
            label="Ano"
            type="number"
            erro={errors.ano?.message}
            {...register("ano", { valueAsNumber: true })}
          />
          <CampoTexto label="Versão" erro={errors.versao?.message} {...register("versao")} />
          <CampoTexto label="Cor" erro={errors.cor?.message} {...register("cor")} />
          <CampoTexto
            label="KM"
            type="number"
            erro={errors.quilometragem?.message}
            {...register("quilometragem", { valueAsNumber: true })}
          />
          <CampoTexto
            label="Preço anunciado"
            type="number"
            erro={errors.preco?.message}
            {...register("preco", { valueAsNumber: true })}
          />
          <CampoTexto label="Placa" erro={errors.placa?.message} {...register("placa")} />
          <CampoSelect label="Câmbio" erro={errors.cambio?.message} {...register("cambio")}>
            <option value="Automático">Automático</option>
            <option value="Manual">Manual</option>
            <option value="CVT">CVT</option>
            <option value="Automatizado">Automatizado</option>
          </CampoSelect>
          <CampoSelect
            label="Combustível"
            erro={errors.combustivel?.message}
            {...register("combustivel")}
          >
            <option value="Flex">Flex</option>
            <option value="Gasolina">Gasolina</option>
            <option value="Diesel">Diesel</option>
            <option value="Elétrico">Elétrico</option>
            <option value="Híbrido">Híbrido</option>
          </CampoSelect>
        </div>

        <div className="mt-4">
          <CampoTexto
            label="Imagem"
            type="url"
            ajuda="Use uma URL pública de imagem do veículo."
            erro={errors.imagem?.message}
            {...register("imagem")}
          />
        </div>

        <div className="mt-4 space-y-2">
          <label htmlFor="descricao" className="block text-sm font-semibold text-texto-suave">
            Observações de venda
          </label>
          <textarea
            id="descricao"
            rows={5}
            className="foco-visivel w-full rounded-md border border-linha bg-card-solido px-3 py-2 text-base text-texto placeholder:text-texto-fraco transition duration-200 hover:border-linha-forte"
            placeholder="Histórico, revisão, laudo, financiamento, troca ou qualquer detalhe que ajude a venda consultiva."
            {...register("descricao")}
          />
          {errors.descricao?.message ? (
            <p className="text-sm text-erro">{errors.descricao.message}</p>
          ) : null}
        </div>

        <label className="mt-4 flex min-h-11 items-center gap-3 rounded-md border border-linha bg-card-solido px-3 text-sm font-semibold text-texto-suave">
          <input
            type="checkbox"
            className="size-4 rounded border-linha accent-[#c7a76a]"
            {...register("destaque")}
          />
          Marcar como vitrine da loja
        </label>

        <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <Link
            href="/painel/veiculos"
            className="foco-visivel inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-linha bg-card-solido px-4 py-2 text-sm font-semibold text-texto-suave transition duration-200 hover:border-linha-forte hover:text-texto"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Voltar
          </Link>
          <BotaoPrimario
            type="submit"
            carregando={isSubmitting}
            icone={<Save className="size-4" aria-hidden="true" />}
          >
            {modo === "cadastro" ? "Salvar entrada" : "Salvar ficha"}
          </BotaoPrimario>
        </div>
      </section>

      <aside className="rounded-lg border border-linha bg-card p-5">
        <p className="etiqueta-metal">Prévia no estoque</p>
        <div className="mt-4 overflow-hidden rounded-lg border border-linha bg-card-solido">
          {/* O preview aceita qualquer URL pública que o lojista colar, por isso usa img nativo. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imagem || imagemPadrao}
            alt="Prévia do veículo"
            className="aspect-[16/10] w-full object-cover"
          />
          <div className="p-4">
            <div className="mb-3 flex items-center justify-between gap-2">
              <BadgeStatus status={status} />
              <span className="placa-tecnica">{placa || "SEM PLACA"}</span>
            </div>
            <p className="font-display text-2xl font-semibold text-texto">
              {marca || "Marca"} {modelo || "Modelo"}
            </p>
            <p className="text-sm text-texto-fraco">
              {ano} · {versao || "Versão"}
            </p>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <div className="rounded-md border border-linha bg-fundo p-3">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-texto-fraco">Preço</p>
                <p className="numero-tecnico mt-1 font-semibold text-texto">
                  {formatarMoeda(Number(preco || 0))}
                </p>
              </div>
              <div className="rounded-md border border-linha bg-fundo p-3">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-texto-fraco">KM</p>
                <p className="numero-tecnico mt-1 font-semibold text-texto">
                  {Number(quilometragem || 0).toLocaleString("pt-BR")}
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-4 text-sm leading-6 text-texto-suave">
          A ficha completa aproxima a equipe de vendas do pátio real: placa,
          quilometragem, condição, valor e contexto comercial em um só lugar.
        </p>
      </aside>
    </form>
  );
}
