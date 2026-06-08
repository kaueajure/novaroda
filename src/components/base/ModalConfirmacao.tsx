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
          className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-confirmacao-titulo"
        >
          <motion.div
            className="superficie w-full max-w-md rounded-xl p-5"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-lg bg-erro/12 text-erro">
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
                className="foco-visivel grid size-10 place-items-center rounded-lg text-texto-fraco transition hover:bg-white/[0.06] hover:text-texto"
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
                className="bg-erro text-white shadow-none hover:bg-[#ff91a0]"
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
