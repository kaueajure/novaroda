import {
  BarChart3,
  CarFront,
  FilePenLine,
  Filter,
  MessageSquareText,
  Workflow,
} from "lucide-react";
import { CardFuncionalidade } from "@/components/marketing/CardFuncionalidade";
import { SecaoTitulo } from "@/components/marketing/SecaoTitulo";

const funcionalidades = [
  {
    titulo: "Ficha de veículo",
    descricao:
      "Carros e motos com preço, KM, placa, status, câmbio, combustível, imagem, descrição e destaque.",
    icone: <CarFront className="size-5" aria-hidden="true" />,
  },
  {
    titulo: "Filtro de pátio",
    descricao:
      "Busca por marca, modelo ou placa, filtros por tipo/status e ordenação por preço, ano ou cadastro.",
    icone: <Filter className="size-5" aria-hidden="true" />,
  },
  {
    titulo: "Edição de estoque",
    descricao:
      "Altere preço, status e detalhes de venda sem refazer cadastro nem duplicar informação.",
    icone: <FilePenLine className="size-5" aria-hidden="true" />,
  },
  {
    titulo: "Leads vinculados",
    descricao:
      "Centralize contato, origem do lead, status de atendimento e veículo de interesse.",
    icone: <MessageSquareText className="size-5" aria-hidden="true" />,
  },
  {
    titulo: "Funil comercial",
    descricao:
      "Acompanhe novo lead, atendimento, proposta, negociação, fechamento e perdas.",
    icone: <Workflow className="size-5" aria-hidden="true" />,
  },
  {
    titulo: "Valor imobilizado",
    descricao:
      "Analise estoque, conversão, oportunidades, tipos de veículo e valor parado.",
    icone: <BarChart3 className="size-5" aria-hidden="true" />,
  },
];

export function SecaoFuncionalidades() {
  return (
    <section id="funcionalidades" className="border-b border-linha bg-fundo px-4 py-20 sm:px-6 lg:px-8">
      <SecaoTitulo
        etiqueta="sistema completo"
        titulo="O painel certo para operar estoque, lead e venda no mesmo lugar."
        descricao="Cada módulo foi pensado para uma loja de veículos trabalhar com mais clareza e menos passos manuais."
      />
      <div className="mx-auto mt-12 grid max-w-7xl gap-3 md:grid-cols-2 xl:grid-cols-3">
        {funcionalidades.map((funcionalidade) => (
          <CardFuncionalidade key={funcionalidade.titulo} {...funcionalidade} />
        ))}
      </div>
    </section>
  );
}
