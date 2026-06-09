import type { Oportunidade } from "@/types/Oportunidade";
import type { Veiculo } from "@/types/Veiculo";

function mesesRecentes(quantidade = 6) {
  const hoje = new Date();

  return Array.from({ length: quantidade })
    .map((_, index) => {
      const data = new Date(hoje.getFullYear(), hoje.getMonth() - index, 1);
      return {
        chave: `${data.getFullYear()}-${String(data.getMonth() + 1).padStart(2, "0")}`,
        nome: new Intl.DateTimeFormat("pt-BR", { month: "short" })
          .format(data)
          .replace(".", ""),
      };
    })
    .reverse();
}

function chaveMes(dataIso: string) {
  const data = new Date(dataIso);
  return `${data.getFullYear()}-${String(data.getMonth() + 1).padStart(2, "0")}`;
}

export function gerarEvolucaoComercial(
  veiculos: Veiculo[],
  oportunidades: Oportunidade[],
) {
  return mesesRecentes().map((mes) => ({
    mes: mes.nome,
    vendas: veiculos.filter(
      (veiculo) =>
        veiculo.status === "vendido" && chaveMes(veiculo.dataCadastro) === mes.chave,
    ).length,
    oportunidades: oportunidades.filter(
      (oportunidade) => chaveMes(oportunidade.data) === mes.chave,
    ).length,
  }));
}

export function gerarCadastrosMensais(veiculos: Veiculo[]) {
  return mesesRecentes().map((mes) => ({
    nome: mes.nome,
    valor: veiculos.filter((veiculo) => chaveMes(veiculo.dataCadastro) === mes.chave)
      .length,
  }));
}
