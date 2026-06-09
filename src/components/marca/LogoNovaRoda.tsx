"use client";

import Image from "next/image";
import { useTemaStore } from "@/store/useTemaStore";
import { cn } from "@/utils/cn";

type VarianteLogo = "completa" | "horizontal" | "simbolo";

type AssetLogo = {
  claro: string;
  escuro: string;
  largura: number;
  altura: number;
};

const assets: Record<VarianteLogo, AssetLogo> = {
  completa: {
    claro: "/logos/nova-roda-tema-claro.png",
    escuro: "/logos/nova-roda-tema-escuro.png",
    largura: 867,
    altura: 568,
  },
  horizontal: {
    claro: "/logos/nova-roda-wordmark-claro.png",
    escuro: "/logos/nova-roda-wordmark-escuro.png",
    largura: 839,
    altura: 127,
  },
  simbolo: {
    claro: "/logos/nova-roda-simbolo-claro.png",
    escuro: "/logos/nova-roda-simbolo-escuro.png",
    largura: 539,
    altura: 422,
  },
};

type LogoNovaRodaProps = {
  variante?: VarianteLogo;
  className?: string;
  priority?: boolean;
};

export function LogoNovaRoda({
  variante = "horizontal",
  className,
  priority = false,
}: LogoNovaRodaProps) {
  const tema = useTemaStore((state) => state.tema);
  const asset = assets[variante];

  return (
    <Image
      src={tema === "claro" ? asset.claro : asset.escuro}
      alt="Nova Roda"
      width={asset.largura}
      height={asset.altura}
      priority={priority}
      className={cn("object-contain", className)}
      sizes="(max-width: 768px) 144px, 204px"
    />
  );
}
