import type { Cliente } from "@/types/Cliente";
import type { Oportunidade } from "@/types/Oportunidade";
import type { Veiculo } from "@/types/Veiculo";

export function calcularValorEstoque(veiculos: Veiculo[]) {
  return veiculos
    .filter((veiculo) => veiculo.status !== "vendido")
    .reduce((total, veiculo) => total + veiculo.preco, 0);
}

export function calcularResumoLoja(
  veiculos: Veiculo[],
  clientes: Cliente[],
  oportunidades: Oportunidade[],
) {
  const oportunidadesAbertas = oportunidades.filter(
    (item) => !["fechado", "perdido"].includes(item.etapa),
  ).length;
  const oportunidadesFechadas = oportunidades.filter(
    (item) => item.etapa === "fechado",
  ).length;
  const taxaConversao =
    oportunidades.length > 0
      ? Math.round((oportunidadesFechadas / oportunidades.length) * 100)
      : 0;

  return {
    totalVeiculos: veiculos.length,
    carrosDisponiveis: veiculos.filter(
      (veiculo) => veiculo.tipo === "carro" && veiculo.status === "disponivel",
    ).length,
    motosDisponiveis: veiculos.filter(
      (veiculo) => veiculo.tipo === "moto" && veiculo.status === "disponivel",
    ).length,
    valorEstoque: calcularValorEstoque(veiculos),
    oportunidadesAbertas,
    vendidosMes: veiculos.filter((veiculo) => veiculo.status === "vendido")
      .length,
    clientesInteressados: clientes.length,
    taxaConversao,
  };
}
