"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  BarChart3,
  Car,
  Gauge,
  LogOut,
  Settings,
  Users,
  X,
  Workflow,
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { useLojaStore } from "@/store/useLojaStore";

const itensMenu = [
  { href: "/painel", label: "Dashboard", icon: Gauge },
  { href: "/painel/veiculos", label: "Veículos", icon: Car },
  { href: "/painel/clientes", label: "Clientes", icon: Users },
  { href: "/painel/oportunidades", label: "Oportunidades", icon: Workflow },
  { href: "/painel/estatisticas", label: "Estatísticas", icon: BarChart3 },
  { href: "/painel#configuracoes", label: "Configurações", icon: Settings },
];

type BarraLateralProps = {
  abertoMobile?: boolean;
  aoFecharMobile?: () => void;
};

export function BarraLateral({
  abertoMobile = false,
  aoFecharMobile,
}: BarraLateralProps) {
  const pathname = usePathname();
  const router = useRouter();
  const sair = useLojaStore((state) => state.sair);

  function encerrarSessao() {
    sair();
    router.push("/");
  }

  const conteudo = (
    <aside className="flex h-full w-[280px] flex-col border-r border-linha bg-[#080c14]/96 px-4 py-5 backdrop-blur-xl">
      <div className="flex items-center justify-between gap-3">
        <Link href="/" className="foco-visivel rounded-lg" aria-label="AutoGestor Pro">
          <div className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-xl border border-principal/30 bg-principal/12 text-principal">
              <Car className="size-5" aria-hidden="true" />
            </span>
            <div>
              <p className="font-display text-2xl font-bold leading-none text-texto">
                AutoGestor
              </p>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-principal">
                Pro
              </p>
            </div>
          </div>
        </Link>
        <button
          type="button"
          onClick={aoFecharMobile}
          className="foco-visivel grid size-10 place-items-center rounded-lg text-texto-fraco hover:bg-white/[0.06] hover:text-texto lg:hidden"
          aria-label="Fechar menu"
        >
          <X className="size-5" aria-hidden="true" />
        </button>
      </div>

      <nav className="mt-8 space-y-1" aria-label="Navegação principal">
        {itensMenu.map((item) => {
          const ativo =
            item.href === "/painel"
              ? pathname === "/painel"
              : pathname.startsWith(item.href.replace("#configuracoes", ""));
          const Icone = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={aoFecharMobile}
              className={cn(
                "foco-visivel flex min-h-11 items-center gap-3 rounded-lg px-3 text-sm font-semibold text-texto-suave transition duration-200 hover:bg-white/[0.06] hover:text-texto",
                ativo &&
                  "border border-principal/20 bg-principal/10 text-principal shadow-[inset_0_0_24px_rgba(97,214,200,0.05)]",
              )}
            >
              <Icone className="size-5" aria-hidden="true" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto rounded-xl border border-linha bg-white/[0.03] p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-texto-fraco">
          Plano ativo
        </p>
        <p className="mt-2 text-lg font-semibold text-texto">Pro Operação</p>
        <p className="mt-1 text-sm leading-5 text-texto-suave">
          Mocks locais, pronto para plugar API, CRM e publicação de anúncios.
        </p>
      </div>

      <button
        type="button"
        onClick={encerrarSessao}
        className="foco-visivel mt-4 flex min-h-11 items-center gap-3 rounded-lg px-3 text-sm font-semibold text-texto-suave transition hover:bg-erro/10 hover:text-erro"
      >
        <LogOut className="size-5" aria-hidden="true" />
        Sair
      </button>
    </aside>
  );

  return (
    <>
      <div className="fixed inset-y-0 left-0 z-30 hidden lg:block">{conteudo}</div>
      {abertoMobile ? (
        <motion.div
          className="fixed inset-0 z-50 bg-black/65 backdrop-blur-sm lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={aoFecharMobile}
        >
          <motion.div
            initial={{ x: -290 }}
            animate={{ x: 0 }}
            exit={{ x: -290 }}
            transition={{ duration: 0.22 }}
            onClick={(event) => event.stopPropagation()}
            className="h-full"
          >
            {conteudo}
          </motion.div>
        </motion.div>
      ) : null}
    </>
  );
}
