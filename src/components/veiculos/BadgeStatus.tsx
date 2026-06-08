import { CheckCircle2, Clock3, CircleDollarSign } from "lucide-react";
import { cn } from "@/utils/cn";
import { rotuloStatusVeiculo } from "@/utils/rotulos";
import type { StatusVeiculo } from "@/types/Veiculo";

const estilos = {
  disponivel: "border-verde/30 bg-verde/10 text-verde",
  reservado: "border-alerta/30 bg-alerta/10 text-alerta",
  vendido: "border-azul/30 bg-azul/10 text-azul",
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
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-bold",
        estilos[status],
        className,
      )}
    >
      <Icone className="size-3.5" aria-hidden="true" />
      {rotuloStatusVeiculo[status]}
    </span>
  );
}
