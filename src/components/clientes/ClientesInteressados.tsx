"use client";

import { useMemo, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserPlus } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { BotaoPrimario } from "@/components/base/BotaoPrimario";
import { CampoSelect } from "@/components/base/CampoSelect";
import { CampoTexto } from "@/components/base/CampoTexto";
import { ListaClientes } from "@/components/clientes/ListaClientes";
import { ContainerPagina } from "@/components/layout/ContainerPagina";
import { useLojaStore } from "@/store/useLojaStore";
import type { DadosCliente, StatusAtendimento } from "@/types/Cliente";

const schemaCliente = z.object({
  nome: z.string().min(3, "Informe o nome."),
  telefone: z.string().min(8, "Informe o telefone."),
  email: z.string().email("Informe um e-mail válido."),
  veiculoInteresse: z.string().min(3, "Informe o veículo de interesse."),
  status: z.enum(["novo", "em_atendimento", "proposta", "sem_resposta", "convertido"]),
  origem: z.enum(["Site", "WhatsApp", "Instagram", "Indicação", "Loja física"]),
});

type DadosFormularioCliente = z.infer<typeof schemaCliente>;

export function ClientesInteressados() {
  const [busca, setBusca] = useState("");
  const [status, setStatus] = useState<"todos" | StatusAtendimento>("todos");
  const clientes = useLojaStore((state) => state.clientes);
  const adicionarCliente = useLojaStore((state) => state.adicionarCliente);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<DadosFormularioCliente>({
    resolver: zodResolver(schemaCliente),
    defaultValues: {
      nome: "",
      telefone: "",
      email: "",
      veiculoInteresse: "",
      status: "novo",
      origem: "WhatsApp",
    },
  });

  const clientesFiltrados = useMemo(() => {
    const termo = busca.trim().toLowerCase();
    return clientes.filter((cliente) => {
      const correspondeBusca = termo
        ? `${cliente.nome} ${cliente.email} ${cliente.veiculoInteresse}`
            .toLowerCase()
            .includes(termo)
        : true;
      const correspondeStatus = status === "todos" ? true : cliente.status === status;
      return correspondeBusca && correspondeStatus;
    });
  }, [clientes, busca, status]);

  function cadastrar(dados: DadosFormularioCliente) {
    const cliente: DadosCliente = {
      ...dados,
      nome: dados.nome.trim(),
      telefone: dados.telefone.trim(),
      email: dados.email.trim(),
      veiculoInteresse: dados.veiculoInteresse.trim(),
    };
    adicionarCliente(cliente);
    reset();
  }

  return (
    <ContainerPagina
      titulo="Leads e interessados"
      subtitulo="Organize contatos por origem, veículo desejado e estágio de atendimento antes que o lead esfrie."
    >
      <div className="grid gap-5 xl:grid-cols-[360px_1fr]">
        <aside className="rounded-lg border border-linha bg-card p-5">
          <p className="etiqueta-metal">Entrada de lead</p>
          <h2 className="mt-3 font-display text-2xl font-semibold text-texto">
            Novo interessado
          </h2>
          <form onSubmit={handleSubmit(cadastrar)} className="mt-5 space-y-4" noValidate>
            <CampoTexto label="Nome" erro={errors.nome?.message} {...register("nome")} />
            <CampoTexto
              label="Telefone"
              type="tel"
              erro={errors.telefone?.message}
              {...register("telefone")}
            />
            <CampoTexto
              label="E-mail"
              type="email"
              erro={errors.email?.message}
              {...register("email")}
            />
            <CampoTexto
              label="Veículo de interesse"
              placeholder="Ex.: Corolla XEi 2022"
              erro={errors.veiculoInteresse?.message}
              {...register("veiculoInteresse")}
            />
            <CampoSelect label="Status" erro={errors.status?.message} {...register("status")}>
              <option value="novo">Novo</option>
              <option value="em_atendimento">Em atendimento</option>
              <option value="proposta">Proposta</option>
              <option value="sem_resposta">Sem resposta</option>
              <option value="convertido">Convertido</option>
            </CampoSelect>
            <CampoSelect label="Origem" erro={errors.origem?.message} {...register("origem")}>
              <option value="WhatsApp">WhatsApp</option>
              <option value="Site">Site</option>
              <option value="Instagram">Instagram</option>
              <option value="Indicação">Indicação</option>
              <option value="Loja física">Loja física</option>
            </CampoSelect>
            <BotaoPrimario
              type="submit"
              carregando={isSubmitting}
              icone={<UserPlus className="size-4" aria-hidden="true" />}
              className="w-full"
            >
              Registrar lead
            </BotaoPrimario>
          </form>
        </aside>

        <section className="space-y-5">
          <div className="rounded-lg border border-linha bg-card p-4">
            <div className="grid gap-4 md:grid-cols-[1fr_220px]">
              <CampoTexto
                label="Buscar cliente"
                placeholder="Nome, e-mail ou veículo"
                value={busca}
                onChange={(event) => setBusca(event.target.value)}
              />
              <CampoSelect
                label="Filtrar status"
                value={status}
                onChange={(event) => setStatus(event.target.value as "todos" | StatusAtendimento)}
              >
                <option value="todos">Todos</option>
                <option value="novo">Novo</option>
                <option value="em_atendimento">Em atendimento</option>
                <option value="proposta">Proposta</option>
                <option value="sem_resposta">Sem resposta</option>
                <option value="convertido">Convertido</option>
              </CampoSelect>
            </div>
          </div>
          <ListaClientes clientes={clientesFiltrados} />
        </section>
      </div>
    </ContainerPagina>
  );
}
