import { Mail, Phone } from "lucide-react";
import { cn } from "@/utils/cn";
import { formatarData } from "@/utils/formatarData";
import { rotuloStatusAtendimento } from "@/utils/rotulos";
import type { Cliente, StatusAtendimento } from "@/types/Cliente";

const estilosStatus: Record<StatusAtendimento, string> = {
  novo: "border-principal/35 bg-principal/10 text-principal",
  em_atendimento: "border-metal/35 bg-metal/10 text-metal",
  proposta: "border-alerta/35 bg-alerta/10 text-alerta",
  sem_resposta: "border-erro/35 bg-erro/10 text-erro",
  convertido: "border-sucesso/35 bg-sucesso/10 text-sucesso",
};

export function CardCliente({ cliente }: { cliente: Cliente }) {
  return (
    <article className="rounded-lg border border-linha bg-card p-5 transition hover:border-principal/30">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-texto-fraco">
            Lead de {cliente.origem}
          </p>
          <h3 className="mt-1 truncate font-display text-2xl font-semibold text-texto">
            {cliente.nome}
          </h3>
          <p className="mt-1 text-sm text-texto-fraco">{cliente.veiculoInteresse}</p>
        </div>
        <span
          className={cn(
            "inline-flex w-fit rounded-md border px-2.5 py-1 text-xs font-bold uppercase tracking-[0.08em]",
            estilosStatus[cliente.status],
          )}
        >
          {rotuloStatusAtendimento[cliente.status]}
        </span>
      </div>
      <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
        <a
          href={`tel:${cliente.telefone}`}
          className="foco-visivel flex min-h-10 items-center gap-2 rounded-md border border-linha bg-card-solido px-3 text-texto-suave transition hover:border-linha-forte hover:text-texto"
        >
          <Phone className="size-4" aria-hidden="true" />
          {cliente.telefone}
        </a>
        <a
          href={`mailto:${cliente.email}`}
          className="foco-visivel flex min-h-10 items-center gap-2 rounded-md border border-linha bg-card-solido px-3 text-texto-suave transition hover:border-linha-forte hover:text-texto"
        >
          <Mail className="size-4" aria-hidden="true" />
          {cliente.email}
        </a>
      </div>
      <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-texto-fraco">
        <span className="rounded-md border border-linha bg-card-solido px-2.5 py-1">
          Origem: {cliente.origem}
        </span>
        <span className="rounded-md border border-linha bg-card-solido px-2.5 py-1">
          Contato: {formatarData(cliente.dataContato)}
        </span>
      </div>
    </article>
  );
}
