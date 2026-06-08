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
  "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1400&auto=format&fit=crop";
const imagemSobre =
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1400&auto=format&fit=crop";
const imagemSolucoes =
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1400&auto=format&fit=crop";
const imagemRecursos =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop";
const imagemContato =
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1400&auto=format&fit=crop";

export function PaginaHomeInstitucional() {
  return (
    <LayoutInstitucional atual="/">
      <HeroInstitucional
        etiqueta="Site institucional"
        titulo="Tecnologia para organizar lojas de carros e motos."
        descricao="O AutoGestor Pro é um sistema SaaS demonstrativo para lojistas que precisam centralizar estoque, clientes e oportunidades sem depender de processos manuais espalhados."
        imagem={imagemHome}
        alt="Loja moderna de veículos com carros em exposição"
        acaoPrimaria={{ href: "/solucoes", label: "Conhecer soluções" }}
        acaoSecundaria={{ href: "/sobre", label: "Sobre a plataforma" }}
      />

      <SecaoInstitucional
        etiqueta="Institucional"
        titulo="Um produto pensado para a rotina real de uma loja de veículos."
        descricao="A estrutura pública agora é um site completo, com páginas independentes para apresentar empresa, soluções, recursos e contato."
      >
        <GradeCards itens={pilaresInstitucionais} />
      </SecaoInstitucional>

      <SecaoInstitucional
        etiqueta="Operação"
        titulo="Da vitrine ao funil, tudo precisa conversar."
        descricao="Quando o estoque muda, o atendimento precisa saber. Quando um lead avança, a gestão precisa enxergar. A proposta do AutoGestor Pro é reduzir essas quebras."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            ["01", "Organizar estoque", "Ficha completa para veículos, status comercial e visualização rápida."],
            ["02", "Atender melhor", "Interessados conectados ao veículo desejado e ao estágio do atendimento."],
            ["03", "Acompanhar vendas", "Funil simples, indicadores e oportunidades em destaque para a equipe."],
          ].map(([numero, titulo, texto]) => (
            <article key={numero} className="rounded-xl border border-linha bg-card p-5">
              <p className="font-display text-4xl font-bold text-principal">{numero}</p>
              <h3 className="mt-4 font-display text-2xl font-semibold text-texto">
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
        etiqueta="Sobre"
        titulo="Uma plataforma para diminuir atrito operacional."
        descricao="O AutoGestor Pro foi desenhado para transformar tarefas repetitivas em um fluxo claro: cadastrar, consultar, acompanhar e decidir."
        imagem={imagemSobre}
        alt="Equipe analisando indicadores em uma mesa de trabalho"
        acaoPrimaria={{ href: "/recursos", label: "Ver recursos" }}
      />

      <SecaoInstitucional
        etiqueta="Visão"
        titulo="O foco é dar previsibilidade para o lojista."
        descricao="Em muitas lojas, a informação fica dividida entre planilhas, conversas, anúncios e memória da equipe. O sistema concentra os dados essenciais para a loja operar com mais controle."
      >
        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-xl border border-linha bg-card p-5">
            <p className="font-display text-4xl font-semibold text-texto">
              Menos retrabalho, mais cadência comercial.
            </p>
            <p className="mt-4 text-base leading-7 text-texto-suave">
              A proposta institucional do produto é simples: ajudar lojas de
              veículos a reduzirem duplicidade, organizarem informações e
              enxergarem o que precisa de ação.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {linhaDoTempoInstitucional.map((item) => {
              const Icone = item.icone;
              return (
                <article key={item.titulo} className="rounded-xl border border-linha bg-card p-5">
                  <Icone className="size-6 text-principal" aria-hidden="true" />
                  <h3 className="mt-4 font-display text-2xl font-semibold text-texto">
                    {item.titulo}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-texto-suave">
                    {item.descricao}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </SecaoInstitucional>
    </LayoutInstitucional>
  );
}

export function PaginaSolucoesInstitucional() {
  return (
    <LayoutInstitucional atual="/solucoes">
      <HeroInstitucional
        etiqueta="Soluções"
        titulo="Módulos para estoque, atendimento e vendas."
        descricao="A plataforma reúne as áreas que mais geram retrabalho no dia a dia do lojista: veículos, clientes, oportunidades, indicadores e organização da equipe."
        imagem={imagemSolucoes}
        alt="Profissional usando notebook para acompanhar dados de operação"
        acaoPrimaria={{ href: "/login", label: "Acessar demonstração" }}
        acaoSecundaria={{ href: "/recursos", label: "Comparar recursos" }}
      />

      <SecaoInstitucional
        etiqueta="Módulos"
        titulo="Cada módulo resolve uma parte concreta da operação."
        descricao="A navegação pública apresenta a proposta. O painel demonstrativo mostra o fluxo funcionando com dados mockados."
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
        etiqueta="Recursos"
        titulo="Ferramentas prontas para simular a operação completa."
        descricao="A versão atual funciona no front-end com estado local, mocks organizados, validações, filtros, gráficos e feedback visual."
        imagem={imagemRecursos}
        alt="Dashboard analítico aberto em uma tela de computador"
        acaoPrimaria={{ href: "/login", label: "Testar painel" }}
      />

      <SecaoInstitucional
        etiqueta="Funcionalidades"
        titulo="O que já existe no projeto."
        descricao="Os recursos foram implementados para que o sistema pareça operável desde agora, mesmo sem backend real."
      >
        <ListaVerificada itens={recursosInstitucionais} />
      </SecaoInstitucional>

      <SecaoInstitucional
        etiqueta="Evolução"
        titulo="Pronto para receber backend e integrações."
        descricao="A base foi separada por domínios, com tipos, dados, store, componentes e páginas em estrutura escalável."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            ["API e banco", "Substituir mocks por endpoints, autenticação real e persistência multi-loja."],
            ["Publicação de anúncios", "Enviar veículos para vitrine pública, portais, redes sociais e WhatsApp."],
            ["Equipe e permissões", "Gerenciar vendedores, histórico de ações e responsabilidades por oportunidade."],
          ].map(([titulo, descricao]) => (
            <article key={titulo} className="rounded-xl border border-linha bg-card p-5">
              <h3 className="font-display text-2xl font-semibold text-texto">
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
        etiqueta="Contato"
        titulo="Converse sobre a operação da sua loja."
        descricao="Esta página simula uma frente institucional de contato para interessados em conhecer o sistema e testar o painel."
        imagem={imagemContato}
        alt="Atendimento profissional conversando com cliente"
        acaoPrimaria={{ href: "/login", label: "Entrar no painel demo" }}
      />

      <SecaoInstitucional
        etiqueta="Fale com a equipe"
        titulo="Um ponto de contato para evoluir o projeto."
        descricao="O formulário é institucional e demonstrativo. Em produção, ele pode se conectar a CRM, e-mail transacional ou WhatsApp."
      >
        <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="rounded-xl border border-linha bg-card p-5">
            <h2 className="font-display text-3xl font-semibold text-texto">
              AutoGestor Pro
            </h2>
            <div className="mt-5 space-y-4 text-sm text-texto-suave">
              <p className="flex items-center gap-3">
                <Mail className="size-5 text-principal" aria-hidden="true" />
                contato@autogestorpro.demo
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

          <form className="rounded-xl border border-linha bg-card p-5">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="space-y-2 text-sm font-semibold text-texto-suave">
                Nome
                <input className="foco-visivel min-h-11 w-full rounded-lg border border-linha bg-[#0b1019] px-3 text-base text-texto" />
              </label>
              <label className="space-y-2 text-sm font-semibold text-texto-suave">
                E-mail
                <input type="email" className="foco-visivel min-h-11 w-full rounded-lg border border-linha bg-[#0b1019] px-3 text-base text-texto" />
              </label>
              <label className="space-y-2 text-sm font-semibold text-texto-suave md:col-span-2">
                Loja
                <input className="foco-visivel min-h-11 w-full rounded-lg border border-linha bg-[#0b1019] px-3 text-base text-texto" />
              </label>
              <label className="space-y-2 text-sm font-semibold text-texto-suave md:col-span-2">
                Mensagem
                <textarea rows={5} className="foco-visivel w-full rounded-lg border border-linha bg-[#0b1019] px-3 py-2 text-base text-texto" />
              </label>
            </div>
            <button
              type="button"
              className="foco-visivel mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-principal px-4 text-sm font-bold text-[#051113] transition hover:bg-[#76eadc]"
            >
              Enviar interesse
              <Send className="size-4" aria-hidden="true" />
            </button>
          </form>
        </div>
      </SecaoInstitucional>

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 rounded-xl border border-principal/20 bg-principal/10 p-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-3xl font-semibold text-texto">
              Quer ver o sistema funcionando?
            </p>
            <p className="mt-2 text-sm leading-6 text-texto-suave">
              O login demonstrativo leva direto para o painel do lojista.
            </p>
          </div>
          <Link
            href="/login"
            className="foco-visivel inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-principal px-4 text-sm font-bold text-[#051113] transition hover:bg-[#76eadc]"
          >
            Acessar demo
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </LayoutInstitucional>
  );
}
