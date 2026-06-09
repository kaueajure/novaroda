"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  BarChart3,
  Car,
  Gauge,
  LogOut,
  PanelLeftClose,
  PanelLeftOpen,
  Settings,
  Users,
  X,
  Workflow,
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { useLojaStore } from "@/store/useLojaStore";

const LARGURA_SIDEBAR_ABERTA = 280;
const LARGURA_SIDEBAR_COMPACTA = 84;

const itensMenu = [
  { href: "/painel", label: "Mesa", icon: Gauge },
  { href: "/painel/veiculos", label: "Estoque", icon: Car },
  { href: "/painel/clientes", label: "Leads", icon: Users },
  { href: "/painel/oportunidades", label: "Propostas", icon: Workflow },
  { href: "/painel/estatisticas", label: "Relatórios", icon: BarChart3 },
  { href: "/painel/perfil", label: "Perfil", icon: Settings },
];

type BarraLateralProps = {
  abertoMobile?: boolean;
  aoFecharMobile?: () => void;
  abertoDesktop?: boolean;
  aoFecharDesktop?: () => void;
  aoAbrirDesktop?: () => void;
};

export function BarraLateral({
  abertoMobile = false,
  aoFecharMobile,
  abertoDesktop = true,
  aoFecharDesktop,
  aoAbrirDesktop,
}: BarraLateralProps) {
  const pathname = usePathname();
  const router = useRouter();
  const sair = useLojaStore((state) => state.sair);
  const usuario = useLojaStore((state) => state.usuario);

  function encerrarSessao() {
    sair();
    router.push("/");
  }

  function renderizarConteudo(compacta = false) {
    return (
      <aside
        className={cn(
          "flex h-full flex-col overflow-hidden border-r border-linha bg-fundo-elevado",
          compacta ? "w-[84px] px-3 py-5" : "w-[280px] px-4 py-5",
        )}
      >
        <div
          className={cn(
            "flex gap-3 border-b border-linha pb-4",
            compacta ? "flex-col items-center" : "items-center justify-between",
          )}
        >
          <Link
            href="/"
            className={cn("foco-visivel rounded-md", compacta && "grid place-items-center")}
            aria-label="Nova Roda"
            title={compacta ? "Nova Roda" : undefined}
          >
            <div className={cn("flex items-center", compacta ? "justify-center" : "gap-3")}>
              <span className="grid size-11 shrink-0 place-items-center rounded-md border border-principal/35 bg-card-solido text-principal">
                <Car className="size-5" aria-hidden="true" />
              </span>
              {!compacta ? (
                <div>
                  <p className="font-display text-2xl font-bold leading-none text-texto">
                    Nova Roda
                  </p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.22em] text-texto-fraco">
                    Operação de pátio
                  </p>
                </div>
              ) : null}
            </div>
          </Link>

          {compacta ? (
            <button
              type="button"
              onClick={aoAbrirDesktop}
              className="foco-visivel grid size-10 place-items-center rounded-md border border-linha bg-card-solido text-texto-fraco transition hover:border-principal/35 hover:text-texto"
              aria-label="Abrir sidebar"
              title="Abrir sidebar"
            >
              <PanelLeftOpen className="size-5" aria-hidden="true" />
            </button>
          ) : (
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={aoFecharMobile}
                className="foco-visivel grid size-10 place-items-center rounded-md text-texto-fraco transition hover:bg-card-solido hover:text-texto lg:hidden"
                aria-label="Fechar menu"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={aoFecharDesktop}
                className="foco-visivel hidden size-10 place-items-center rounded-md border border-linha bg-card-solido text-texto-fraco transition hover:border-principal/35 hover:text-texto lg:grid"
                aria-label="Recolher sidebar"
                title="Recolher sidebar"
              >
                <PanelLeftClose className="size-5" aria-hidden="true" />
              </button>
            </div>
          )}
        </div>

        <nav
          className={cn("mt-5 space-y-1", compacta && "w-full")}
          aria-label="Navegação principal"
        >
          {itensMenu.map((item) => {
            const ativo =
              item.href === "/painel"
                ? pathname === "/painel"
                : pathname.startsWith(item.href);
            const Icone = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={aoFecharMobile}
                title={compacta ? item.label : undefined}
                aria-label={compacta ? item.label : undefined}
                className={cn(
                  "foco-visivel relative flex min-h-11 items-center rounded-md text-sm font-semibold text-texto-suave transition duration-200 hover:bg-card-solido hover:text-texto",
                  compacta ? "justify-center px-0" : "gap-3 px-3",
                  ativo &&
                    "border border-principal/25 bg-card-solido text-principal before:absolute before:inset-y-2 before:left-0 before:w-[2px] before:rounded-full before:bg-principal",
                )}
              >
                <Icone className="size-5 shrink-0" aria-hidden="true" />
                {compacta ? <span className="sr-only">{item.label}</span> : item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/painel/perfil"
          onClick={aoFecharMobile}
          title={compacta ? "Configurar perfil" : undefined}
          aria-label={compacta ? "Configurar perfil" : undefined}
          className={cn(
            "foco-visivel mt-auto rounded-md border border-linha bg-card-solido transition hover:border-principal/35",
            compacta
              ? "grid size-11 place-items-center self-center"
              : "flex min-h-16 items-center gap-3 p-3",
            pathname.startsWith("/painel/perfil") && "border-principal/35",
          )}
        >
          <span className="grid size-10 shrink-0 place-items-center rounded-md border border-principal/25 bg-principal/10 font-display text-sm font-bold text-principal">
            {usuario.avatar}
          </span>
          {!compacta ? (
            <span className="min-w-0">
              <span className="block truncate text-sm font-semibold text-texto">
                {usuario.nome}
              </span>
              <span className="block truncate text-xs text-texto-fraco">
                Configurar perfil
              </span>
            </span>
          ) : null}
        </Link>

        <button
          type="button"
          onClick={encerrarSessao}
          title={compacta ? "Sair" : undefined}
          className={cn(
            "foco-visivel mt-3 min-h-11 rounded-md text-sm font-semibold text-texto-suave transition hover:bg-erro/10 hover:text-erro",
            compacta
              ? "grid size-11 place-items-center self-center"
              : "flex items-center gap-3 px-3",
          )}
        >
          <LogOut className="size-5 shrink-0" aria-hidden="true" />
          {compacta ? <span className="sr-only">Sair</span> : "Sair"}
        </button>
      </aside>
    );
  }

  return (
    <>
      <motion.div
        className="fixed inset-y-0 left-0 z-30 hidden lg:block"
        initial={false}
        animate={{
          width: abertoDesktop ? LARGURA_SIDEBAR_ABERTA : LARGURA_SIDEBAR_COMPACTA,
        }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      >
        {renderizarConteudo(!abertoDesktop)}
      </motion.div>
      {abertoMobile ? (
        <motion.div
          className="fixed inset-0 z-50 bg-black/72 lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={aoFecharMobile}
        >
          <motion.div
            initial={{ x: -290 }}
            animate={{ x: 0 }}
            exit={{ x: -290 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
            className="h-full"
          >
            {renderizarConteudo(false)}
          </motion.div>
        </motion.div>
      ) : null}
    </>
  );
}
