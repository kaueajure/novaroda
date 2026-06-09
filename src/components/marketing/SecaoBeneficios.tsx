"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  ClipboardList,
  Gauge,
  SearchCheck,
  Table2,
  Target,
} from "lucide-react";
import { CardFuncionalidade } from "@/components/marketing/CardFuncionalidade";
import { SecaoTitulo } from "@/components/marketing/SecaoTitulo";

const beneficios = [
  {
    titulo: "Estoque sempre organizado",
    descricao:
      "Visualize carros e motos por status, preço, ano, tipo e disponibilidade sem depender de planilhas.",
    icone: <Table2 className="size-5" aria-hidden="true" />,
  },
  {
    titulo: "Cadastro rápido",
    descricao:
      "Registre veículos com informações completas, destaque e status comercial em poucos cliques.",
    icone: <ClipboardList className="size-5" aria-hidden="true" />,
  },
  {
    titulo: "Oportunidades no radar",
    descricao:
      "Acompanhe clientes interessados e negociações em andamento em um funil simples de operar.",
    icone: <Target className="size-5" aria-hidden="true" />,
  },
  {
    titulo: "Dashboard inteligente",
    descricao:
      "Veja indicadores importantes da loja em uma interface clara, moderna e fácil de escanear.",
    icone: <Gauge className="size-5" aria-hidden="true" />,
  },
];

export function SecaoBeneficios() {
  return (
    <section id="beneficios" className="border-b border-linha bg-fundo-elevado px-4 py-20 sm:px-6 lg:px-8">
      <SecaoTitulo
        etiqueta="Produtividade"
        titulo="Troque tarefas repetidas por um fluxo de loja mais fluido."
        descricao="O AutoGestor Pro centraliza a rotina do lojista para reduzir retrabalho e acelerar decisões comerciais."
      />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.06 } },
        }}
        className="mx-auto mt-12 grid max-w-7xl gap-4 md:grid-cols-2 lg:grid-cols-4"
      >
        {beneficios.map((beneficio) => (
          <motion.div
            key={beneficio.titulo}
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <CardFuncionalidade {...beneficio} />
          </motion.div>
        ))}
      </motion.div>

      <div className="mx-auto mt-14 grid max-w-7xl gap-4 lg:grid-cols-3">
        {[
          "Menos duplicidade entre atendimento, estoque e anúncios.",
          "Busca rápida por marca, modelo, tipo, preço e status.",
          "Visão limpa para priorizar veículos, leads e negociações.",
        ].map((texto) => (
          <div
            key={texto}
            className="flex items-start gap-3 rounded-xl border border-linha bg-white/[0.025] p-4"
          >
            <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-verde" aria-hidden="true" />
            <p className="text-sm leading-6 text-texto-suave">{texto}</p>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-14 max-w-7xl rounded-2xl border border-linha bg-[linear-gradient(135deg,rgba(97,214,200,0.08),rgba(116,169,255,0.04))] p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-3xl font-semibold text-texto">
              Problemas que ele resolve
            </p>
            <p className="mt-2 max-w-3xl text-texto-suave">
              Cadastro duplicado, estoque desatualizado, atendimento disperso,
              dificuldade de saber o valor parado e pouca clareza sobre oportunidades.
            </p>
          </div>
          <SearchCheck className="size-12 text-principal" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
