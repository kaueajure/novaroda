"use client";

import { forwardRef, type SelectHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

type CampoSelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  erro?: string;
  ajuda?: string;
};

export const CampoSelect = forwardRef<HTMLSelectElement, CampoSelectProps>(
  ({ label, erro, ajuda, className, id, children, ...props }, ref) => {
    const campoId = id ?? props.name;

    return (
      <div className="space-y-2">
        <label
          htmlFor={campoId}
          className="block text-sm font-semibold text-texto-suave"
        >
          {label}
        </label>
        <select
          id={campoId}
          ref={ref}
          className={cn(
            "foco-visivel min-h-11 w-full rounded-lg border border-linha bg-[#0b1019] px-3 py-2 text-base text-texto transition duration-200 hover:border-linha-forte",
            erro && "border-erro/70",
            className,
          )}
          aria-invalid={erro ? "true" : "false"}
          aria-describedby={erro ? `${campoId}-erro` : ajuda ? `${campoId}-ajuda` : undefined}
          {...props}
        >
          {children}
        </select>
        {ajuda ? (
          <p id={`${campoId}-ajuda`} className="text-xs text-texto-fraco">
            {ajuda}
          </p>
        ) : null}
        {erro ? (
          <p id={`${campoId}-erro`} className="text-sm text-erro">
            {erro}
          </p>
        ) : null}
      </div>
    );
  },
);

CampoSelect.displayName = "CampoSelect";
