export type TipoVeiculo = "carro" | "moto";

export type StatusVeiculo = "disponivel" | "reservado" | "vendido";

export type CambioVeiculo = "Automático" | "Manual" | "CVT" | "Automatizado";

export type CombustivelVeiculo =
  | "Flex"
  | "Gasolina"
  | "Diesel"
  | "Elétrico"
  | "Híbrido";

export type Veiculo = {
  id: string;
  tipo: TipoVeiculo;
  marca: string;
  modelo: string;
  ano: number;
  versao: string;
  cor: string;
  quilometragem: number;
  preco: number;
  status: StatusVeiculo;
  cambio: CambioVeiculo;
  combustivel: CombustivelVeiculo;
  placa?: string;
  imagem: string;
  descricao: string;
  dataCadastro: string;
  destaque: boolean;
};

export type DadosVeiculo = Omit<Veiculo, "id" | "dataCadastro">;
