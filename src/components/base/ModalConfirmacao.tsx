"use client";

import { AnimatePresence, motion } from "framer-motion";
import { AlertTriangle, X } from "lucide-react";
import { BotaoPrimario } from "@/components/base/BotaoPrimario";
import { BotaoSecundario } from "@/components/base/BotaoSecundario";

type ModalConfirmacaoProps = {
  aberto: boolean;
  titulo: string;
  descricao: string;
  textoConfirmar?: string;
  textoCancelar?: string;
  aoConfirmar: () => void;
  aoFechar: () => void;
};

export function ModalConfirmacao({
  aberto,
  titulo,
  descricao,
  textoConfirmar = "Confirmar",
  textoCancelar = "Cancelar",
  aoConfirmar,
  aoFechar,
}: ModalConfirmacaoProps) {
  return (
    <AnimatePresence>
      {aberto ? (
        <motion.div
          className="fixed inset-0 z-50 grid place-items-center bg-black/76 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-confirmacao-titulo"
        >
          <motion.div
            className="w-full max-w-md rounded-lg border border-linha bg-card p-5 shadow-[0_30px_100px_rgba(0,0,0,0.45)]"
            initial={{ opacity: 0, y: 14, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.18 }}
          >
            <div className="flex items-start justify-between gap-4 border-b border-linha pb-4">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-md border border-erro/25 bg-erro/12 text-erro">
                  <AlertTriangle className="size-5" aria-hidden="true" />
                </span>
                <h2
                  id="modal-confirmacao-titulo"
                  className="font-display text-2xl font-semibold text-texto"
                >
                  {titulo}
                </h2>
              </div>
              <button
                type="button"
                onClick={aoFechar}
                className="foco-visivel grid size-10 place-items-center rounded-md text-texto-fraco transition hover:bg-card-solido hover:text-texto"
                aria-label="Fechar modal"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>
            <p className="mt-4 text-sm leading-6 text-texto-suave">{descricao}</p>
            <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <BotaoSecundario type="button" onClick={aoFechar}>
                {textoCancelar}
              </BotaoSecundario>
              <BotaoPrimario
                type="button"
                onClick={aoConfirmar}
                className="border-erro/25 bg-erro text-white shadow-none hover:bg-[#d97878]"
              >
                {textoConfirmar}
              </BotaoPrimario>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
