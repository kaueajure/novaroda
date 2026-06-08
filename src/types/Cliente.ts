export type StatusAtendimento =
  | "novo"
  | "em_atendimento"
  | "proposta"
  | "sem_resposta"
  | "convertido";

export type Cliente = {
  id: string;
  nome: string;
  telefone: string;
  email: string;
  veiculoInteresse: string;
  status: StatusAtendimento;
  origem: "Site" | "WhatsApp" | "Instagram" | "Indicação" | "Loja física";
  dataContato: string;
};

export type DadosCliente = Omit<Cliente, "id" | "dataContato">;
