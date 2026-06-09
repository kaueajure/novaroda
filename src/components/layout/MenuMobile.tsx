"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, Car, Gauge, Users, Workflow } from "lucide-react";
import { cn } from "@/utils/cn";

const itens = [
  { href: "/painel", label: "Mesa", icon: Gauge },
  { href: "/painel/veiculos", label: "Estoque", icon: Car },
  { href: "/painel/clientes", label: "Leads", icon: Users },
  { href: "/painel/oportunidades", label: "Funil", icon: Workflow },
  { href: "/painel/estatisticas", label: "Dados", icon: BarChart3 },
];

export function MenuMobile() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-30 border-t border-linha bg-fundo-elevado px-2 pb-[env(safe-area-inset-bottom)] pt-2 lg:hidden"
      aria-label="Navegação inferior"
    >
      <div className="grid grid-cols-5 gap-1">
        {itens.map((item) => {
          const ativo =
            item.href === "/painel"
              ? pathname === "/painel"
              : pathname.startsWith(item.href);
          const Icone = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "foco-visivel flex min-h-14 flex-col items-center justify-center gap-1 rounded-md text-[11px] font-semibold text-texto-fraco",
                ativo && "border border-principal/25 bg-card-solido text-principal",
              )}
            >
              <Icone className="size-5" aria-hidden="true" />
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
