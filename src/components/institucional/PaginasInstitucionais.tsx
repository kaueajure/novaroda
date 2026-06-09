import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone, Send } from "lucide-react";
import {
  GradeCards,
  HeroInstitucional,
  ListaVerificada,
  SecaoInstitucional,
} from "@/components/institucional/BlocosInstitucionais";
import { LayoutInstitucional } from "@/components/institucional/LayoutInstitucional";
import {
  linhaDoTempoInstitucional,
  pilaresInstitucionais,
  recursosInstitucionais,
  solucoesInstitucionais,
} from "@/components/institucional/dadosInstitucionais";
import { PreviaDashboard } from "@/components/marketing/PreviaDashboard";

const imagemHome =
  "https://images.unsplash.com/photo-1562141961-fd74b7a6981d?q=80&w=1500&auto=format&fit=crop";
const imagemSobre =
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1500&auto=format&fit=crop";
const imagemSolucoes =
  "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1500&auto=format&fit=crop";
const imagemRecursos =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1500&auto=format&fit=crop";
const imagemContato =
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1500&auto=format&fit=crop";

export function PaginaHomeInstitucional() {
  return (
    <LayoutInstitucional atual="/">
      <HeroInstitucional
        etiqueta="software para pátio e venda"
        titulo="Controle o estoque antes que ele vire retrabalho."
        descricao="A Nova Roda organiza placa, KM, preço, reserva, lead e proposta em uma operação única para lojas que vendem carros e motos com método."
        imagem={imagemHome}
        alt="Showroom automotivo premium com veículos alinhados no pátio"
        acaoPrimaria={{ href: "/login", label: "Entrar no painel" }}
        acaoSecundaria={{ href: "/solucoes", label: "Ver operação" }}
      />

      <SecaoInstitucional
        etiqueta="manifesto"
        titulo="Uma loja profissional não deveria depender de memória, grupo de mensagem e planilha solta."
        descricao="Quando o vendedor pergunta preço, quando o anúncio muda, quando um lead chega de portal ou quando uma reserva cai, todo mundo precisa enxergar a mesma verdade operacional."
      >
        <GradeCards itens={pilaresInstitucionais} />
      </SecaoInstitucional>

      <SecaoInstitucional
        etiqueta="rotina da loja"
        titulo="Do pátio à proposta, cada etapa deixa rastro."
        descricao="A Nova Roda foi pensada para reduzir perguntas repetidas, evitar estoque duplicado e dar cadência para o atendimento comercial."
      >
        <div className="grid gap-3 lg:grid-cols-3">
          {[
            ["01", "Inventariar", "Cadastre placa, versão, KM, preço, status, fotos e observações comerciais."],
            ["02", "Atender", "Conecte interessado, origem do lead, veículo desejado e próxima ação."],
            ["03", "Fechar", "Acompanhe reserva, proposta, financiamento, negociação, perda e fechamento."],
          ].map(([numero, titulo, texto]) => (
            <article key={numero} className="rounded-lg border border-linha bg-card p-5">
              <p className="numero-tecnico text-sm font-bold text-principal">{numero}</p>
              <h3 className="mt-5 font-display text-2xl font-bold text-texto">
                {titulo}
              </h3>
              <p className="mt-2 text-sm leading-6 text-texto-suave">{texto}</p>
            </article>
          ))}
        </div>
      </SecaoInstitucional>
    </LayoutInstitucional>
  );
}

export function PaginaSobreInstitucional() {
  return (
    <LayoutInstitucional atual="/sobre">
      <HeroInstitucional
        etiqueta="sobre"
        titulo="Uma plataforma para colocar ordem no balcão comercial."
        descricao="A Nova Roda foi desenhada para transformar a rotina de loja em um fluxo auditável: inventário, atendimento, proposta e acompanhamento."
        imagem={imagemSobre}
        alt="Equipe comercial analisando dados de operação"
        acaoPrimaria={{ href: "/recursos", label: "Ver recursos" }}
      />

      <SecaoInstitucional
        etiqueta="visão"
        titulo="A informação do veículo precisa estar pronta antes da negociação começar."
        descricao="Preço, KM, versão, placa, status e histórico comercial não podem ficar espalhados. A loja ganha previsibilidade quando o time trabalha sobre a mesma base."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {linhaDoTempoInstitucional.map((item) => {
            const Icone = item.icone;
            return (
              <article key={item.titulo} className="rounded-lg border border-linha bg-card p-5">
                <Icone className="size-6 text-principal" aria-hidden="true" />
                <h3 className="mt-4 font-display text-2xl font-bold text-texto">
                  {item.titulo}
                </h3>
                <p className="mt-2 text-sm leading-6 text-texto-suave">
                  {item.descricao}
                </p>
              </article>
            );
          })}
        </div>
      </SecaoInstitucional>
    </LayoutInstitucional>
  );
}

export function PaginaSolucoesInstitucional() {
  return (
    <LayoutInstitucional atual="/solucoes">
      <HeroInstitucional
        etiqueta="soluções"
        titulo="Módulos para estoque, atendimento e venda consultiva."
        descricao="A plataforma cobre as áreas que mais geram retrabalho: cadastro de veículos, clientes interessados, oportunidades, indicadores e gestão da rotina comercial."
        imagem={imagemSolucoes}
        alt="Veículo premium em ambiente automotivo"
        acaoPrimaria={{ href: "/login", label: "Acessar painel" }}
        acaoSecundaria={{ href: "/recursos", label: "Comparar recursos" }}
      />

      <SecaoInstitucional
        etiqueta="módulos"
        titulo="Cada módulo resolve uma parte concreta da operação."
        descricao="A navegação pública apresenta a proposta. O painel mostra o fluxo funcionando com dados locais criados pelo usuário."
      >
        <GradeCards itens={solucoesInstitucionais} />
      </SecaoInstitucional>

      <PreviaDashboard />
    </LayoutInstitucional>
  );
}

export function PaginaRecursosInstitucional() {
  return (
    <LayoutInstitucional atual="/recursos">
      <HeroInstitucional
        etiqueta="recursos"
        titulo="Ferramentas para controlar o valor parado no estoque."
        descricao="Registre veículos, filtre por disponibilidade, acompanhe interessados e veja indicadores comerciais sem depender de conferência manual."
        imagem={imagemRecursos}
        alt="Dashboard analítico aberto em tela de computador"
        acaoPrimaria={{ href: "/login", label: "Testar painel" }}
      />

      <SecaoInstitucional
        etiqueta="inventário e venda"
        titulo="O que já existe no projeto."
        descricao="Os recursos foram implementados para que a operação pareça usável desde agora, mesmo sem backend real."
      >
        <ListaVerificada itens={recursosInstitucionais} />
      </SecaoInstitucional>

      <SecaoInstitucional
        etiqueta="evolução"
        titulo="Pronto para receber backend, anúncios e CRM."
        descricao="A base foi separada por domínios, com tipos, store, componentes e páginas em estrutura escalável."
      >
        <div className="grid gap-3 lg:grid-cols-3">
          {[
            ["API e banco", "Conectar endpoints, autenticação real e persistência multi-loja."],
            ["Publicação de anúncios", "Enviar veículos para vitrine pública, portais, redes sociais e WhatsApp."],
            ["Equipe e permissões", "Gerenciar vendedores, histórico de ações e responsáveis por oportunidade."],
          ].map(([titulo, descricao]) => (
            <article key={titulo} className="rounded-lg border border-linha bg-card p-5">
              <h3 className="font-display text-2xl font-bold text-texto">
                {titulo}
              </h3>
              <p className="mt-2 text-sm leading-6 text-texto-suave">{descricao}</p>
            </article>
          ))}
        </div>
      </SecaoInstitucional>
    </LayoutInstitucional>
  );
}

export function PaginaContatoInstitucional() {
  return (
    <LayoutInstitucional atual="/contato">
      <HeroInstitucional
        etiqueta="contato"
        titulo="Converse sobre a operação da sua loja."
        descricao="Esta página representa uma frente institucional para interessados em conhecer o sistema e testar o painel."
        imagem={imagemContato}
        alt="Atendimento profissional conversando com cliente"
        acaoPrimaria={{ href: "/login", label: "Entrar no painel" }}
      />

      <SecaoInstitucional
        etiqueta="fale com a equipe"
        titulo="Um ponto de contato para evoluir o projeto."
        descricao="O formulário representa a frente institucional. Em produção, ele pode se conectar a CRM, e-mail transacional ou WhatsApp."
      >
        <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="rounded-lg border border-linha bg-card p-5">
            <h2 className="font-display text-3xl font-bold text-texto">
              Nova Roda
            </h2>
            <div className="mt-5 space-y-4 text-sm text-texto-suave">
              <p className="flex items-center gap-3">
                <Mail className="size-5 text-principal" aria-hidden="true" />
                contato@novaroda.com.br
              </p>
              <p className="flex items-center gap-3">
                <Phone className="size-5 text-principal" aria-hidden="true" />
                (11) 4000-2026
              </p>
              <p className="flex items-center gap-3">
                <MapPin className="size-5 text-principal" aria-hidden="true" />
                São Paulo, SP
              </p>
            </div>
          </aside>

          <form className="rounded-lg border border-linha bg-card p-5">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="space-y-2 text-sm font-semibold text-texto-suave">
                Nome
                <input className="foco-visivel min-h-11 w-full rounded-md border border-linha bg-card-solido px-3 text-base text-texto" />
              </label>
              <label className="space-y-2 text-sm font-semibold text-texto-suave">
                E-mail
                <input type="email" className="foco-visivel min-h-11 w-full rounded-md border border-linha bg-card-solido px-3 text-base text-texto" />
              </label>
              <label className="space-y-2 text-sm font-semibold text-texto-suave md:col-span-2">
                Loja
                <input className="foco-visivel min-h-11 w-full rounded-md border border-linha bg-card-solido px-3 text-base text-texto" />
              </label>
              <label className="space-y-2 text-sm font-semibold text-texto-suave md:col-span-2">
                Mensagem
                <textarea rows={5} className="foco-visivel w-full rounded-md border border-linha bg-card-solido px-3 py-2 text-base text-texto" />
              </label>
            </div>
            <button
              type="button"
              className="foco-visivel mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-principal/40 bg-principal px-4 text-sm font-bold text-[var(--principal-contraste)] transition hover:bg-principal-forte"
            >
              Enviar interesse
              <Send className="size-4" aria-hidden="true" />
            </button>
          </form>
        </div>
      </SecaoInstitucional>

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 rounded-lg border border-principal/25 bg-card p-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-3xl font-bold text-texto">
              Quer ver o painel funcionando?
            </p>
            <p className="mt-2 text-sm leading-6 text-texto-suave">
              O acesso de avaliação leva direto para o painel do lojista.
            </p>
          </div>
          <Link
            href="/login"
            className="foco-visivel inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-principal/40 bg-principal px-4 text-sm font-bold text-[var(--principal-contraste)] transition hover:bg-principal-forte"
          >
            Acessar painel
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </LayoutInstitucional>
  );
}
