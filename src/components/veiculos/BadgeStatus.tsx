import { CheckCircle2, CircleDollarSign, Clock3 } from "lucide-react";
import { cn } from "@/utils/cn";
import { rotuloStatusVeiculo } from "@/utils/rotulos";
import type { StatusVeiculo } from "@/types/Veiculo";

const estilos = {
  disponivel: "border-sucesso/35 bg-sucesso/10 text-sucesso",
  reservado: "border-alerta/35 bg-alerta/10 text-alerta",
  vendido: "border-metal/35 bg-metal/10 text-metal",
};

const icones = {
  disponivel: CheckCircle2,
  reservado: Clock3,
  vendido: CircleDollarSign,
};

export function BadgeStatus({ status, className }: { status: StatusVeiculo; className?: string }) {
  const Icone = icones[status];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs font-bold uppercase tracking-[0.08em]",
        estilos[status],
        className,
      )}
    >
      <Icone className="size-3.5" aria-hidden="true" />
      {rotuloStatusVeiculo[status]}
    </span>
  );
}
