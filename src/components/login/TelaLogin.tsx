"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Gauge, LockKeyhole, Mail, MoveLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { BotaoPrimario } from "@/components/base/BotaoPrimario";
import { CampoTexto } from "@/components/base/CampoTexto";
import { FundoAnimado } from "@/components/marketing/FundoAnimado";
import { useLojaStore } from "@/store/useLojaStore";

const schemaLogin = z.object({
  email: z.string().email("Informe um e-mail válido."),
  senha: z.string().min(6, "A senha precisa ter pelo menos 6 caracteres."),
});

type DadosLogin = z.infer<typeof schemaLogin>;

export function TelaLogin() {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const router = useRouter();
  const autenticar = useLojaStore((state) => state.autenticar);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<DadosLogin>({
    resolver: zodResolver(schemaLogin),
    defaultValues: {
      email: "paulo@autogestorpro.demo",
      senha: "demo123",
    },
  });

  async function aoEntrar(dados: DadosLogin) {
    await autenticar(dados.email);
    router.push("/painel");
  }

  return (
    <main className="relative grid min-h-dvh place-items-center overflow-hidden bg-fundo px-4 py-10 text-texto sm:px-6">
      <FundoAnimado />
      <div className="relative z-10 grid w-full max-w-6xl overflow-hidden rounded-2xl border border-linha bg-card/88 shadow-[0_30px_120px_rgba(0,0,0,0.24)] backdrop-blur-xl lg:grid-cols-[0.9fr_1.1fr]">
        <section className="border-b border-linha bg-[linear-gradient(145deg,rgba(97,214,200,0.11),rgba(116,169,255,0.04))] p-6 sm:p-8 lg:border-b-0 lg:border-r">
          <Link
            href="/"
            className="foco-visivel inline-flex items-center gap-2 rounded-lg text-sm font-semibold text-texto-suave transition hover:text-texto"
          >
            <MoveLeft className="size-4" aria-hidden="true" />
            Voltar à tela inicial
          </Link>
          <div className="mt-14 max-w-md">
            <div className="flex items-center gap-3">
              <span className="grid size-12 place-items-center rounded-xl border border-principal/30 bg-principal/12 text-principal">
                <Gauge className="size-6" aria-hidden="true" />
              </span>
              <div>
                <p className="font-display text-3xl font-bold leading-none text-texto">
                  AutoGestor
                </p>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-principal">
                  Pro
                </p>
              </div>
            </div>
            <h1 className="mt-10 font-display text-5xl font-semibold leading-none text-texto">
              Organize sua loja em poucos cliques.
            </h1>
            <p className="mt-5 text-lg leading-8 text-texto-suave">
              Acesse a demonstração para gerenciar estoque, clientes e
              oportunidades em um painel dark, rápido e responsivo.
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {["Login demo", "Dados locais", "Fluxo completo", "Sem backend"].map((item) => (
              <div key={item} className="rounded-xl border border-linha bg-white/[0.04] p-4">
                <p className="text-sm font-semibold text-texto">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.32 }}
          className="p-6 sm:p-8 lg:p-10"
        >
          <div className="mx-auto max-w-md">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-principal">
              Painel lojista
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-texto">
              Entrar no sistema
            </h2>
            <p className="mt-2 text-texto-suave">
              Use os dados preenchidos ou qualquer e-mail válido com senha de 6 caracteres.
            </p>

            <form onSubmit={handleSubmit(aoEntrar)} className="mt-8 space-y-5" noValidate>
              <div className="relative">
                <CampoTexto
                  label="E-mail"
                  type="email"
                  autoComplete="email"
                  erro={errors.email?.message}
                  {...register("email")}
                  className="pl-10"
                />
                <Mail className="pointer-events-none absolute left-3 top-[42px] size-4 text-texto-fraco" aria-hidden="true" />
              </div>

              <div className="space-y-2">
                <label htmlFor="senha" className="block text-sm font-semibold text-texto-suave">
                  Senha
                </label>
                <div className="relative">
                  <LockKeyhole className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-texto-fraco" aria-hidden="true" />
                  <input
                    id="senha"
                    type={mostrarSenha ? "text" : "password"}
                    autoComplete="current-password"
                    className="foco-visivel min-h-11 w-full rounded-lg border border-linha bg-card-solido px-10 py-2 text-base text-texto placeholder:text-texto-fraco transition duration-200 hover:border-linha-forte"
                    aria-invalid={errors.senha ? "true" : "false"}
                    {...register("senha")}
                  />
                  <button
                    type="button"
                    onClick={() => setMostrarSenha((valor) => !valor)}
                    className="foco-visivel absolute right-1 top-1/2 grid size-9 -translate-y-1/2 place-items-center rounded-md text-texto-fraco transition hover:bg-white/[0.06] hover:text-texto"
                    aria-label={mostrarSenha ? "Ocultar senha" : "Mostrar senha"}
                  >
                    {mostrarSenha ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                  </button>
                </div>
                {errors.senha?.message ? (
                  <p className="text-sm text-erro">{errors.senha.message}</p>
                ) : null}
              </div>

              <BotaoPrimario type="submit" carregando={isSubmitting} className="w-full">
                Entrar no painel
              </BotaoPrimario>
            </form>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
