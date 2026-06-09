"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { DadosCliente, Cliente } from "@/types/Cliente";
import type { EtapaOportunidade, Oportunidade } from "@/types/Oportunidade";
import type { Loja, UsuarioLojista } from "@/types/Loja";
import type { DadosVeiculo, StatusVeiculo, Veiculo } from "@/types/Veiculo";

type Notificacao = {
  id: string;
  titulo: string;
  descricao?: string;
  tipo: "sucesso" | "erro" | "info";
};

type LojaState = {
  autenticado: boolean;
  usuario: UsuarioLojista;
  loja: Loja;
  veiculos: Veiculo[];
  clientes: Cliente[];
  oportunidades: Oportunidade[];
  notificacao?: Notificacao;
  autenticar: (email: string) => Promise<void>;
  sair: () => void;
  adicionarVeiculo: (dados: DadosVeiculo) => string;
  editarVeiculo: (id: string, dados: DadosVeiculo) => void;
  excluirVeiculo: (id: string) => void;
  alterarStatusVeiculo: (id: string, status: StatusVeiculo) => void;
  adicionarCliente: (dados: DadosCliente) => void;
  moverOportunidade: (id: string, etapa: EtapaOportunidade) => void;
  limparNotificacao: () => void;
};

function criarId(prefixo: string) {
  return `${prefixo}-${Date.now().toString(36)}-${Math.random()
    .toString(36)
    .slice(2, 7)}`;
}

function notificar(
  titulo: string,
  tipo: Notificacao["tipo"] = "sucesso",
  descricao?: string,
): Notificacao {
  return { id: criarId("ntf"), titulo, tipo, descricao };
}

const usuarioPadrao: UsuarioLojista = {
  nome: "Lojista",
  cargo: "Administrador",
  email: "",
  avatar: "LG",
};

const lojaPadrao: Loja = {
  nome: "Minha loja",
  cidade: "Cidade não definida",
  plano: "Inicial",
  metaMensal: 0,
};

export const useLojaStore = create<LojaState>()(
  persist(
    (set) => ({
      autenticado: false,
      usuario: usuarioPadrao,
      loja: lojaPadrao,
      veiculos: [],
      clientes: [],
      oportunidades: [],
      async autenticar(email) {
        await new Promise((resolve) => setTimeout(resolve, 700));
        set({
          autenticado: true,
          usuario: { ...usuarioPadrao, email },
          notificacao: notificar("Login realizado", "sucesso"),
        });
      },
      sair() {
        set({
          autenticado: false,
          notificacao: notificar("Sessão encerrada", "info"),
        });
      },
      adicionarVeiculo(dados) {
        const id = criarId("vei");
        const novoVeiculo: Veiculo = {
          ...dados,
          id,
          dataCadastro: new Date().toISOString(),
        };
        set((state) => ({
          veiculos: [novoVeiculo, ...state.veiculos],
          notificacao: notificar("Veículo cadastrado", "sucesso"),
        }));
        return id;
      },
      editarVeiculo(id, dados) {
        set((state) => ({
          veiculos: state.veiculos.map((veiculo) =>
            veiculo.id === id ? { ...veiculo, ...dados } : veiculo,
          ),
          notificacao: notificar("Veículo atualizado", "sucesso"),
        }));
      },
      excluirVeiculo(id) {
        set((state) => ({
          veiculos: state.veiculos.filter((veiculo) => veiculo.id !== id),
          notificacao: notificar("Veículo removido", "info"),
        }));
      },
      alterarStatusVeiculo(id, status) {
        set((state) => ({
          veiculos: state.veiculos.map((veiculo) =>
            veiculo.id === id ? { ...veiculo, status } : veiculo,
          ),
          notificacao: notificar("Status atualizado", "sucesso"),
        }));
      },
      adicionarCliente(dados) {
        const novoCliente: Cliente = {
          ...dados,
          id: criarId("cli"),
          dataContato: new Date().toISOString(),
        };
        set((state) => ({
          clientes: [novoCliente, ...state.clientes],
          notificacao: notificar("Interessado cadastrado", "sucesso"),
        }));
      },
      moverOportunidade(id, etapa) {
        set((state) => ({
          oportunidades: state.oportunidades.map((oportunidade) =>
            oportunidade.id === id ? { ...oportunidade, etapa } : oportunidade,
          ),
          notificacao: notificar("Funil atualizado", "sucesso"),
        }));
      },
      limparNotificacao() {
        set({ notificacao: undefined });
      },
    }),
    {
      name: "nova-roda-store-local",
      partialize: (state) => ({
        autenticado: state.autenticado,
        usuario: state.usuario,
        veiculos: state.veiculos,
        clientes: state.clientes,
        oportunidades: state.oportunidades,
      }),
    },
  ),
);
