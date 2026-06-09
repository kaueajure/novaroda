"use client";

import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

type CampoTextoProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  erro?: string;
  ajuda?: string;
};

export const CampoTexto = forwardRef<HTMLInputElement, CampoTextoProps>(
  ({ label, erro, ajuda, className, id, ...props }, ref) => {
    const campoId = id ?? props.name;

    return (
      <div className="space-y-2">
        <label
          htmlFor={campoId}
          className="block text-sm font-semibold text-texto-suave"
        >
          {label}
        </label>
        <input
          id={campoId}
          ref={ref}
          className={cn(
            "foco-visivel min-h-11 w-full rounded-md border border-linha bg-card-solido px-3 py-2 text-base text-texto placeholder:text-texto-fraco transition duration-200 hover:border-linha-forte",
            erro && "border-erro/70",
            className,
          )}
          aria-invalid={erro ? "true" : "false"}
          aria-describedby={erro ? `${campoId}-erro` : ajuda ? `${campoId}-ajuda` : undefined}
          {...props}
        />
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

CampoTexto.displayName = "CampoTexto";
