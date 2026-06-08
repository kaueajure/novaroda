export type EtapaOportunidade =
  | "novo_interesse"
  | "em_atendimento"
  | "proposta_enviada"
  | "negociacao"
  | "fechado"
  | "perdido";

export type Oportunidade = {
  id: string;
  cliente: string;
  veiculoInteresse: string;
  valorEstimado: number;
  etapa: EtapaOportunidade;
  data: string;
  responsavel: string;
};
