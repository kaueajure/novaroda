"use client";

import { FormEvent, useMemo, useState } from "react";
import { Building2, Mail, Save, UserRound } from "lucide-react";
import { BotaoPrimario } from "@/components/base/BotaoPrimario";
import { CampoTexto } from "@/components/base/CampoTexto";
import { ContainerPagina } from "@/components/layout/ContainerPagina";
import { useLojaStore } from "@/store/useLojaStore";

function normalizarAvatar(valor: string) {
  return valor
    .replace(/[^a-zA-ZÀ-ÿ]/g, "")
    .slice(0, 2)
    .toUpperCase();
}

export function ConfiguracaoPerfil() {
  const usuario = useLojaStore((state) => state.usuario);
  const loja = useLojaStore((state) => state.loja);
  const atualizarPerfil = useLojaStore((state) => state.atualizarPerfil);

  const [nome, setNome] = useState(usuario.nome);
  const [cargo, setCargo] = useState(usuario.cargo);
  const [email, setEmail] = useState(usuario.email);
  const [avatar, setAvatar] = useState(usuario.avatar);
  const [nomeLoja, setNomeLoja] = useState(loja.nome);
  const [cidade, setCidade] = useState(loja.cidade);

  const avatarPreview = useMemo(
    () => normalizarAvatar(avatar || nome || "LR") || "LR",
    [avatar, nome],
  );

  function salvarPerfil(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    atualizarPerfil({
      usuario: {
        nome: nome.trim() || "Lojista",
        cargo: cargo.trim() || "Administrador",
        email: email.trim(),
        avatar: avatarPreview,
      },
      loja: {
        nome: nomeLoja.trim() || "Minha loja",
        cidade: cidade.trim() || "Cidade não definida",
      },
    });
  }

  return (
    <ContainerPagina
      titulo="Configurar perfil"
      subtitulo="Atualize os dados do lojista e as informações básicas exibidas no painel."
    >
      <form onSubmit={salvarPerfil} className="grid gap-5 xl:grid-cols-[0.75fr_1.25fr]">
        <aside className="rounded-xl border border-linha bg-card p-5">
          <div className="flex items-center gap-4">
            <span className="grid size-16 place-items-center rounded-2xl border border-principal/25 bg-principal/12 font-display text-2xl font-bold text-principal">
              {avatarPreview}
            </span>
            <div>
              <p className="font-display text-2xl font-semibold text-texto">
                {nome || "Lojista"}
              </p>
              <p className="text-sm text-texto-fraco">{cargo || "Administrador"}</p>
            </div>
          </div>

          <div className="mt-6 grid gap-3 text-sm text-texto-suave">
            <p className="flex items-center gap-3 rounded-lg border border-linha bg-white/[0.03] p-3">
              <Mail className="size-4 text-principal" aria-hidden="true" />
              {email || "E-mail não informado"}
            </p>
            <p className="flex items-center gap-3 rounded-lg border border-linha bg-white/[0.03] p-3">
              <Building2 className="size-4 text-principal" aria-hidden="true" />
              {nomeLoja || "Minha loja"}
            </p>
          </div>
        </aside>

        <section className="rounded-xl border border-linha bg-card p-5">
          <div className="flex items-center gap-3 border-b border-linha pb-4">
            <span className="grid size-11 place-items-center rounded-xl border border-principal/25 bg-principal/10 text-principal">
              <UserRound className="size-5" aria-hidden="true" />
            </span>
            <div>
              <h2 className="font-display text-2xl font-semibold text-texto">
                Dados do perfil
              </h2>
              <p className="text-sm text-texto-fraco">
                Essas informações aparecem no painel e na sidebar.
              </p>
            </div>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <CampoTexto
              label="Nome do lojista"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
            />
            <CampoTexto
              label="Cargo"
              value={cargo}
              onChange={(event) => setCargo(event.target.value)}
            />
            <CampoTexto
              label="E-mail"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <CampoTexto
              label="Iniciais da foto"
              maxLength={2}
              value={avatar}
              onChange={(event) => setAvatar(normalizarAvatar(event.target.value))}
              ajuda="Use até 2 letras para o avatar do painel."
            />
            <CampoTexto
              label="Nome da loja"
              value={nomeLoja}
              onChange={(event) => setNomeLoja(event.target.value)}
            />
            <CampoTexto
              label="Cidade"
              value={cidade}
              onChange={(event) => setCidade(event.target.value)}
            />
          </div>

          <div className="mt-6 flex justify-end">
            <BotaoPrimario type="submit" icone={<Save className="size-4" aria-hidden="true" />}>
              Salvar perfil
            </BotaoPrimario>
          </div>
        </section>
      </form>
    </ContainerPagina>
  );
}
