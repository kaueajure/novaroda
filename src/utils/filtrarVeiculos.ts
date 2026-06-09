import type { StatusVeiculo, TipoVeiculo, Veiculo } from "@/types/Veiculo";

export type OrdenacaoVeiculo = "recentes" | "preco_asc" | "preco_desc" | "ano_desc";

export type FiltrosVeiculosValor = {
  busca: string;
  tipo: "todos" | TipoVeiculo;
  status: "todos" | StatusVeiculo;
  ordenacao: OrdenacaoVeiculo;
};

export function filtrarVeiculos(
  veiculos: Veiculo[],
  filtros: FiltrosVeiculosValor,
) {
  const busca = filtros.busca.trim().toLowerCase();

  return [...veiculos]
    .filter((veiculo) => {
      const correspondeBusca = busca
        ? `${veiculo.marca} ${veiculo.modelo} ${veiculo.versao} ${veiculo.placa ?? ""}`
            .toLowerCase()
            .includes(busca)
        : true;
      const correspondeTipo =
        filtros.tipo === "todos" ? true : veiculo.tipo === filtros.tipo;
      const correspondeStatus =
        filtros.status === "todos" ? true : veiculo.status === filtros.status;

      return correspondeBusca && correspondeTipo && correspondeStatus;
    })
    .sort((a, b) => {
      if (filtros.ordenacao === "preco_asc") return a.preco - b.preco;
      if (filtros.ordenacao === "preco_desc") return b.preco - a.preco;
      if (filtros.ordenacao === "ano_desc") return b.ano - a.ano;
      return (
        new Date(b.dataCadastro).getTime() - new Date(a.dataCadastro).getTime()
      );
    });
}
