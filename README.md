# Nova Roda

Site institucional e painel operacional para lojas de veículos, focado em carros e motos. O projeto apresenta a marca Nova Roda em páginas públicas completas e oferece um sistema de gestão para controlar pátio, estoque, leads, propostas e indicadores comerciais.

## Stack utilizada

- Next.js com App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Zustand
- React Hook Form
- Zod
- Lucide React
- Recharts

Essa stack foi escolhida por performance, componentização, boa DX, suporte a rotas modernas, animações discretas, estado local simples e evolução natural para backend/API em produção.

## Como rodar

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

Para validar produção:

```bash
npm run lint
npm run build
```

## Páginas públicas institucionais

- `/` - Página inicial institucional da Nova Roda.
- `/sobre` - Propósito da plataforma e visão operacional.
- `/solucoes` - Módulos para estoque, atendimento, painel e rotina comercial.
- `/recursos` - Recursos implementados e possíveis evoluções.
- `/contato` - Contato institucional para interessados.

O site público usa navegação por páginas e paginação institucional no rodapé de cada rota pública. A experiência não depende de uma página única de venda nem de elemento 3D no hero.

## Painel do lojista

- `/login` - Login de avaliação com validação e redirecionamento para o painel.
- `/painel` - Mesa operacional do lojista.
- `/painel/veiculos` - Estoque com lista, filtros, ordenação, edição de status e exclusão.
- `/painel/veiculos/novo` - Inventário de veículo.
- `/painel/veiculos/[id]` - Ficha detalhada do veículo.
- `/painel/veiculos/[id]/editar` - Edição da ficha do veículo.
- `/painel/clientes` - Leads/interessados com busca, filtro e cadastro local.
- `/painel/oportunidades` - Propostas e negociações em kanban.
- `/painel/estatisticas` - Relatórios e indicadores da loja.
- `/painel/perfil` - Configuração do perfil do lojista e dados básicos da loja.

## Funcionalidades

- Login e logout de avaliação.
- Cadastro, edição, exclusão e visualização de veículos.
- Filtros por busca, placa, tipo, status e ordenação.
- Alteração de status de veículo.
- Cadastro e filtro de leads interessados.
- Mudança de etapa de propostas.
- Toasts de feedback.
- Sidebar desktop recolhível em trilho compacto.
- Alternador global entre tema claro e escuro.
- Dados persistidos localmente via Zustand persist.

## Dados locais

O sistema inicia sem veículos, clientes ou oportunidades pré-carregados. Os registros criados pelo usuário ficam no estado local do navegador e podem ser substituídos por chamadas de API quando o projeto evoluir.

## Evoluções futuras

- Autenticação real com sessão segura.
- API e banco de dados para estoque, leads e oportunidades.
- Upload e otimização de imagens dos veículos.
- Integração com WhatsApp, CRM, financiamento e portais de anúncio.
- Permissões por usuário e histórico de atividades.
- Publicação pública de vitrine de veículos por loja.
