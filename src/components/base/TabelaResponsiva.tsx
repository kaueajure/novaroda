import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

export function TabelaResponsiva({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-linha bg-card-solido/80",
        className,
      )}
    >
      <div className="overflow-x-auto">{children}</div>
    </div>
  );
}
