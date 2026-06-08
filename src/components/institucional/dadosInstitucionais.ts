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
    titulo: "AutoGestor Pro",
    descricao: "Visão institucional do sistema para lojas de veículos.",
  },
  {
    href: "/sobre",
    label: "Sobre",
    titulo: "Sobre a plataforma",
    descricao: "Como o AutoGestor Pro organiza a rotina comercial da loja.",
  },
  {
    href: "/solucoes",
    label: "Soluções",
    titulo: "Soluções para a loja",
    descricao: "Módulos para estoque, atendimento, vendas e gestão.",
  },
  {
    href: "/recursos",
    label: "Recursos",
    titulo: "Recursos do sistema",
    descricao: "Ferramentas que reduzem retrabalho e dão previsibilidade.",
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
    titulo: "Estoque confiável",
    descricao:
      "Carros e motos centralizados em uma base única, com status, preço, fotos, histórico e dados comerciais.",
    icone: CarFront,
  },
  {
    titulo: "Atendimento organizado",
    descricao:
      "Clientes interessados conectados ao veículo certo, com origem do lead e etapa de atendimento visíveis.",
    icone: UsersRound,
  },
  {
    titulo: "Vendas no radar",
    descricao:
      "Oportunidades acompanhadas em funil para evitar negociações esquecidas e priorizar o que está quente.",
    icone: Workflow,
  },
  {
    titulo: "Indicadores claros",
    descricao:
      "Dashboard com valor em estoque, conversão, veículos vendidos, leads e evolução comercial.",
    icone: BarChart3,
  },
];

export const solucoesInstitucionais = [
  {
    titulo: "Gestão de veículos",
    descricao:
      "Cadastre, edite, filtre e acompanhe carros e motos com uma ficha completa para reduzir perguntas repetidas.",
    icone: FilePenLine,
  },
  {
    titulo: "Painel do lojista",
    descricao:
      "Um painel dark, responsivo e objetivo para consultar números da loja e acessar tarefas importantes rapidamente.",
    icone: LayoutDashboard,
  },
  {
    titulo: "Relacionamento comercial",
    descricao:
      "Clientes interessados, origem do contato e veículo desejado ficam visíveis para a equipe atender melhor.",
    icone: MessageSquareText,
  },
  {
    titulo: "Rotina escalável",
    descricao:
      "Estrutura preparada para evoluir para API, permissões, integrações, publicação de anúncios e CRM.",
    icone: DatabaseZap,
  },
];

export const recursosInstitucionais = [
  "Cadastro completo de carros e motos",
  "Busca por marca, modelo ou versão",
  "Filtros por tipo, status, preço e ano",
  "Detalhes individuais de cada veículo",
  "Clientes interessados vinculados ao atendimento",
  "Funil comercial com etapas de venda",
  "Indicadores de estoque e oportunidades",
  "Interface responsiva para desktop e celular",
  "Feedback visual em ações importantes",
  "Dados mockados prontos para troca por API",
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
