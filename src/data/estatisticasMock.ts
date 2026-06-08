import type { ItemGrafico, VendaMensal } from "@/types/Estatistica";

export const evolucaoVendasMock: VendaMensal[] = [
  { mes: "Jan", vendas: 8, oportunidades: 22 },
  { mes: "Fev", vendas: 10, oportunidades: 27 },
  { mes: "Mar", vendas: 7, oportunidades: 24 },
  { mes: "Abr", vendas: 12, oportunidades: 31 },
  { mes: "Mai", vendas: 14, oportunidades: 34 },
  { mes: "Jun", vendas: 9, oportunidades: 29 },
];

export const veiculosCadastradosMesMock: ItemGrafico[] = [
  { nome: "Jan", valor: 12 },
  { nome: "Fev", valor: 14 },
  { nome: "Mar", valor: 9 },
  { nome: "Abr", valor: 18 },
  { nome: "Mai", valor: 22 },
  { nome: "Jun", valor: 16 },
];
