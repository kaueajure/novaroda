"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Info, XCircle } from "lucide-react";
import { useLojaStore } from "@/store/useLojaStore";

export function ToastSistema() {
  const notificacao = useLojaStore((state) => state.notificacao);
  const limparNotificacao = useLojaStore((state) => state.limparNotificacao);

  useEffect(() => {
    if (!notificacao) return;
    const timer = window.setTimeout(limparNotificacao, 3600);
    return () => window.clearTimeout(timer);
  }, [notificacao, limparNotificacao]);

  const Icone =
    notificacao?.tipo === "erro"
      ? XCircle
      : notificacao?.tipo === "info"
        ? Info
        : CheckCircle2;

  return (
    <AnimatePresence>
      {notificacao ? (
        <motion.div
          key={notificacao.id}
          initial={{ opacity: 0, y: 18, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.98 }}
          className="fixed bottom-24 right-4 z-[60] flex w-[calc(100vw-2rem)] max-w-sm gap-3 rounded-lg border border-linha bg-card-solido p-4 shadow-[0_24px_80px_rgba(0,0,0,0.36)] lg:bottom-6"
          role="status"
        >
          <span className="grid size-9 shrink-0 place-items-center rounded-md border border-principal/25 bg-principal/10 text-principal">
            <Icone className="size-5" aria-hidden="true" />
          </span>
          <div>
            <p className="text-sm font-semibold text-texto">{notificacao.titulo}</p>
            {notificacao.descricao ? (
              <p className="mt-1 text-sm text-texto-suave">
                {notificacao.descricao}
              </p>
            ) : null}
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
