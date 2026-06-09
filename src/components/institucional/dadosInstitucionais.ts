import {
  BarChart3,
  CarFront,
  ClipboardCheck,
  DatabaseZap,
  FilePenLine,
  Gauge,
  Headphones,
  LayoutDashboard,
  MessageSquareText,
  ShieldCheck,
  UsersRound,
  Workflow,
} from "lucide-react";

export const paginasInstitucionais = [
  {
    href: "/",
    label: "Início",
    titulo: "Nova Roda",
    descricao: "Operação premium para pátio, estoque e venda consultiva.",
  },
  {
    href: "/sobre",
    label: "Sobre",
    titulo: "Sobre a plataforma",
    descricao: "Como a Nova Roda organiza pátio, atendimento e propostas.",
  },
  {
    href: "/solucoes",
    label: "Soluções",
    titulo: "Soluções para a loja",
    descricao: "Módulos para inventário, atendimento, venda e gestão.",
  },
  {
    href: "/recursos",
    label: "Recursos",
    titulo: "Recursos do sistema",
    descricao: "Ferramentas para controlar placa, KM, preço e negociação.",
  },
  {
    href: "/contato",
    label: "Contato",
    titulo: "Fale com a equipe",
    descricao: "Simule o interesse em conhecer a operação.",
  },
];

export const pilaresInstitucionais = [
  {
    titulo: "Pátio sob controle",
    descricao:
      "Carros e motos organizados por placa, KM, preço, status comercial e disponibilidade real no pátio.",
    icone: CarFront,
  },
  {
    titulo: "Lead sem ruído",
    descricao:
      "Interessados conectados ao veículo certo, origem do portal, atendimento e próxima ação da equipe.",
    icone: UsersRound,
  },
  {
    titulo: "Proposta rastreável",
    descricao:
      "Reserva, financiamento, negociação e fechamento em um funil simples para não perder venda quente.",
    icone: Workflow,
  },
  {
    titulo: "Valor parado visível",
    descricao:
      "Indicadores de valor em estoque, giro, status dos veículos, leads e conversão comercial.",
    icone: BarChart3,
  },
];

export const solucoesInstitucionais = [
  {
    titulo: "Inventário de veículos",
    descricao:
      "Ficha completa por veículo com placa, versão, KM, combustível, câmbio, preço, status e descrição comercial.",
    icone: FilePenLine,
  },
  {
    titulo: "Painel do lojista",
    descricao:
      "Um painel escuro, denso e objetivo para consultar números da loja e agir sem abrir planilhas.",
    icone: LayoutDashboard,
  },
  {
    titulo: "Venda consultiva",
    descricao:
      "Clientes, origem do contato, veículo desejado e etapa de proposta ficam claros para a equipe vender melhor.",
    icone: MessageSquareText,
  },
  {
    titulo: "Rotina escalável",
    descricao:
      "Estrutura pronta para API, permissões, CRM, publicação de anúncios e integração com canais de venda.",
    icone: DatabaseZap,
  },
];

export const recursosInstitucionais = [
  "Ficha completa de carro e moto",
  "Busca por marca, modelo, versão ou placa",
  "Filtros por tipo, status, preço, ano e disponibilidade",
  "Detalhes individuais com KM, câmbio, combustível e preço",
  "Clientes interessados vinculados ao veículo desejado",
  "Funil com reserva, proposta, negociação, fechado e perdido",
  "Indicadores de estoque, valor parado e oportunidades",
  "Interface responsiva para mesa de venda e celular",
  "Feedback visual em ações críticas",
  "Dados locais prontos para conexão com API",
];

export const linhaDoTempoInstitucional = [
  {
    titulo: "Diagnóstico",
    descricao:
      "Mapeie onde a loja perde tempo: planilhas paralelas, anúncios desatualizados, leads dispersos e estoque duplicado.",
    icone: Gauge,
  },
  {
    titulo: "Centralização",
    descricao:
      "Leve veículos, interessados e oportunidades para um painel único, com navegação simples e informação rastreável.",
    icone: ClipboardCheck,
  },
  {
    titulo: "Acompanhamento",
    descricao:
      "Use indicadores para entender valor parado, status de estoque, volume de leads e evolução comercial.",
    icone: ShieldCheck,
  },
  {
    titulo: "Evolução",
    descricao:
      "Conecte integrações, equipe, permissões e publicação multicanal quando a operação precisar crescer.",
    icone: Headphones,
  },
];
