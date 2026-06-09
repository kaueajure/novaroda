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
        "overflow-hidden rounded-lg border border-linha bg-card-solido",
        className,
      )}
    >
      <div className="overflow-x-auto">{children}</div>
    </div>
  );
}
