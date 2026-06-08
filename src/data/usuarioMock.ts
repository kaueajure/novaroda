import type { Loja, UsuarioLojista } from "@/types/Loja";

export const usuarioMock: UsuarioLojista = {
  nome: "Paulo Mendes",
  cargo: "Gestor comercial",
  email: "paulo@autogestorpro.demo",
  avatar: "PM",
};

export const lojaMock: Loja = {
  nome: "Prime Motors",
  cidade: "São Paulo, SP",
  plano: "Pro",
  metaMensal: 18,
};
