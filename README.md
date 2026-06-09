# Nova Roda

Site institucional e sistema SaaS para lojas de automóveis, focado em carros e motos. O objetivo é apresentar a plataforma em páginas públicas completas e manter um painel administrativo funcional para gestão de estoque, clientes e oportunidades.

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

Essa stack foi escolhida por performance, componentização, boa DX, suporte a rotas modernas, animações suaves, estado local simples e evolução natural para backend/API em produção.

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
- `/solucoes` - Módulos para estoque, atendimento, painel e rotina escalável.
- `/recursos` - Recursos implementados e possíveis evoluções.
- `/contato` - Contato demonstrativo para interessados.

O site público usa navegação por páginas e paginação institucional no rodapé de cada rota pública. A experiência não depende de uma landing page única nem de elemento 3D no hero.

## Painel do lojista

- `/login` - Login demo com validação e redirecionamento para o painel.
- `/painel` - Dashboard principal do lojista.
- `/painel/veiculos` - Lista, filtros, ordenação, edição de status e exclusão.
- `/painel/veiculos/novo` - Cadastro de veículo.
- `/painel/veiculos/[id]` - Detalhes do veículo.
- `/painel/veiculos/[id]/editar` - Edição do veículo.
- `/painel/clientes` - Clientes/interessados com busca, filtro e cadastro local.
- `/painel/oportunidades` - Funil de oportunidades em kanban.
- `/painel/estatisticas` - Indicadores e gráficos da loja.

## Funcionalidades

- Login e logout demonstrativos.
- Cadastro, edição, exclusão e visualização de veículos.
- Filtros por busca, tipo, status e ordenação.
- Alteração de status de veículo.
- Cadastro e filtro de clientes interessados.
- Mudança de etapa de oportunidades.
- Toasts de feedback.
- Sidebar desktop recolhível no painel.
- Alternador global entre tema claro e escuro.
- Dados persistidos localmente via Zustand persist.

## Dados locais

O sistema inicia sem veículos, clientes ou oportunidades pré-carregados. Os registros criados pelo usuário ficam no estado local do navegador e podem ser substituídos por chamadas de API quando o projeto evoluir.

## Evoluções futuras

- Autenticação real com sessão segura.
- API e banco de dados para estoque, clientes e oportunidades.
- Upload e otimização de imagens dos veículos.
- Integração com WhatsApp, CRM e portais de anúncio.
- Permissões por usuário e histórico de atividades.
- Publicação pública de vitrine de veículos por loja.
