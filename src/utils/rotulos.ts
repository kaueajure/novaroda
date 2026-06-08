import type { StatusAtendimento } from "@/types/Cliente";
import type { EtapaOportunidade } from "@/types/Oportunidade";
import type { StatusVeiculo, TipoVeiculo } from "@/types/Veiculo";

export const rotuloTipoVeiculo: Record<TipoVeiculo, string> = {
  carro: "Carro",
  moto: "Moto",
};

export const rotuloStatusVeiculo: Record<StatusVeiculo, string> = {
  disponivel: "Disponível",
  reservado: "Reservado",
  vendido: "Vendido",
};

export const rotuloStatusAtendimento: Record<StatusAtendimento, string> = {
  novo: "Novo",
  em_atendimento: "Em atendimento",
  proposta: "Proposta",
  sem_resposta: "Sem resposta",
  convertido: "Convertido",
};

export const rotuloEtapaOportunidade: Record<EtapaOportunidade, string> = {
  novo_interesse: "Novo interesse",
  em_atendimento: "Em atendimento",
  proposta_enviada: "Proposta enviada",
  negociacao: "Negociação",
  fechado: "Fechado",
  perdido: "Perdido",
};
