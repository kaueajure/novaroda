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
    titulo: "Veículos completos",
    descricao:
      "Carros e motos com preço, km, status, câmbio, combustível, imagem, descrição e destaque.",
    icone: <CarFront className="size-5" aria-hidden="true" />,
  },
  {
    titulo: "Filtros úteis",
    descricao:
      "Busca por marca ou modelo, filtros por tipo/status e ordenação por preço, ano ou cadastro.",
    icone: <Filter className="size-5" aria-hidden="true" />,
  },
  {
    titulo: "Edição sem atrito",
    descricao:
      "Altere dados, status e detalhes importantes sem refazer cadastros do zero.",
    icone: <FilePenLine className="size-5" aria-hidden="true" />,
  },
  {
    titulo: "Clientes interessados",
    descricao:
      "Centralize contato, origem do lead, status de atendimento e veículo de interesse.",
    icone: <MessageSquareText className="size-5" aria-hidden="true" />,
  },
  {
    titulo: "Funil comercial",
    descricao:
      "Acompanhe novo interesse, atendimento, proposta, negociação, fechamento e perdas.",
    icone: <Workflow className="size-5" aria-hidden="true" />,
  },
  {
    titulo: "Indicadores reais",
    descricao:
      "Analise estoque, vendas, conversão, oportunidades, tipos de veículo e valor imobilizado.",
    icone: <BarChart3 className="size-5" aria-hidden="true" />,
  },
];

export function SecaoFuncionalidades() {
  return (
    <section id="funcionalidades" className="border-b border-linha bg-fundo px-4 py-20 sm:px-6 lg:px-8">
      <SecaoTitulo
        etiqueta="Sistema completo"
        titulo="O painel certo para operar estoque, leads e vendas no mesmo lugar."
        descricao="Cada módulo foi pensado para uma loja de veículos trabalhar com mais clareza e menos passos manuais."
      />
      <div className="mx-auto mt-12 grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-3">
        {funcionalidades.map((funcionalidade) => (
          <CardFuncionalidade key={funcionalidade.titulo} {...funcionalidade} />
        ))}
      </div>
    </section>
  );
}
