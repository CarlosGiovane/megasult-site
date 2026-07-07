import { Calculator, Lightbulb, MonitorCog, ShieldCheck, type LucideIcon } from "lucide-react";

export type ServiceItem = { title: string; desc?: string };
export type ServiceGroup = { title: string; items: ServiceItem[] };
export type Segment = { title: string; intro?: string; bullets: string[] };

export type Division = {
  slug: string;
  path: "/contabilidade" | "/consultoria" | "/sistemas" | "/marcas";
  icon: LucideIcon;
  title: string;
  tagline: string;
  short: string;
  intro: string;
  highlights: { title: string; desc: string }[];
  services?: ServiceItem[];
  serviceGroups?: ServiceGroup[];
  segments?: { label: string; items: Segment[] }[];
  cta: string;
  accent: "primary" | "accent";
};

export const divisions: Division[] = [
  {
    slug: "contabilidade",
    path: "/contabilidade",
    icon: Calculator,
    title: "Contabilidade",
    tagline: "Contabilidade que simplifica a vida da sua empresa",
    short: "Escritório contábil completo: fiscal, trabalhista e tributário com agilidade e conformidade.",
    intro:
      "A Megasult oferece soluções contábeis, fiscais e trabalhistas para empresas de todos os portes — com agilidade, segurança e conformidade com a legislação brasileira.",
    highlights: [
      { title: "Agilidade e segurança", desc: "Rotinas contábeis conduzidas por times especializados e prazos rigorosamente cumpridos." },
      { title: "Conformidade total", desc: "Obrigações fiscais, trabalhistas e previdenciárias sempre em dia." },
      { title: "Suporte próximo", desc: "Consultoria contínua para apoiar as decisões do seu negócio." },
    ],
    services: [
      {
        title: "Constituição, alteração e legalização de empresas",
        desc: "Ltda., EIRELI, Empresário Individual, S/A, Holdings, SPEs e entidades sem fins lucrativos. Alterações contratuais, distratos, certidões negativas e legalização junto aos órgãos competentes.",
      },
      {
        title: "Contabilidade fiscal",
        desc: "Planejamento, assessoria e escrituração contábil, relatórios e análise de balanço, SPED Contábil, livros diário e razão, declarações obrigatórias.",
      },
      {
        title: "Escrituração fiscal digital",
        desc: "SPED Fiscal, SPED Contribuições, análise e enquadramento tributário, apuração e emissão de guias, informações ao Fisco Federal, Estadual e Municipal.",
      },
      {
        title: "Folha de pagamento",
        desc: "Rotinas trabalhistas, admissões, férias, rescisões, enquadramento por CCT, apuração de encargos, eSocial, declarações obrigatórias e auxílio em benefícios.",
      },
      {
        title: "Controle de ativos imobilizados",
        desc: "Controle do patrimônio, bens adquiridos e alienados, cálculo da depreciação e apuração do ganho de capital.",
      },
      {
        title: "Auditoria e perícias",
        desc: "Trabalhos nas áreas financeira, contábil e trabalhista, além de assessoria na implantação e manutenção de auditoria interna e controladoria.",
      },
    ],
    cta: "Simplificar minha contabilidade",
    accent: "primary",
  },
  {
    slug: "consultoria",
    path: "/consultoria",
    icon: Lightbulb,
    title: "Consultoria",
    tagline: "Gestão, estratégia e planejamento para crescer com previsibilidade",
    short: "Consultoria de gestão, societária e tributária para destravar resultados.",
    intro:
      "Ajudamos empresários a organizar a operação, planejar tributos e implantar rotinas de gestão que fazem o negócio crescer com segurança e previsibilidade.",
    highlights: [
      { title: "Gestão empresarial", desc: "Planejamento, controles internos, indicadores e desenvolvimento de equipes." },
      { title: "Societária", desc: "Proteção patrimonial, sucessão, reorganização e M&A." },
      { title: "Tributária", desc: "Planejamento, revisão e recuperação de tributos dentro da lei." },
    ],
    serviceGroups: [
      {
        title: "Consultoria de gestão empresarial",
        items: [
          { title: "Planejamento Estratégico", desc: "Definição das diretrizes de ação da empresa para os próximos anos, alinhando objetivos e estratégia." },
          { title: "Diagnóstico e Análise de Viabilidade", desc: "Capacidade da empresa gerar lucros, Ponto de Equilíbrio Econômico e Financeiro e necessidade de Capital de Giro." },
          { title: "Análise e Estruturação de Controles Internos", desc: "Ambiente de controle, qualidade da informação, gestão de compras e gestão de estoque." },
          { title: "Apuração, Análise de Balanço e DRE", desc: "Demonstrativos gerenciais, comparativos gráficos e indicadores de resultado e desempenho para apoiar decisões." },
          { title: "Formação do Preço de Venda — Markup", desc: "Cálculo do preço de venda de produtos e serviços com simulações de descontos e visão do ganho real." },
          { title: "Planejamento Econômico e Financeiro", desc: "Orçamentos, previsões de resultado, captação de recursos e melhoria do fluxo de caixa." },
          { title: "Análise de Valor da Empresa", desc: "Avaliação do valor real considerando capital intelectual, branding e mercado de atuação." },
          { title: "Auditoria", desc: "Exames de documentos, livros, registros financeiros e inspeções relacionadas ao controle do patrimônio." },
          { title: "Liderança e Desenvolvimento de Equipe", desc: "Desenvolvimento da liderança para melhores relações e comprometimento com resultados." },
          { title: "Avaliação de Desempenho", desc: "Objetivos, fatores, ferramentas e planejamento do processo de avaliação — antes, durante e pós." },
          { title: "Remuneração", desc: "Critérios de salário, comissões, prêmios, PLR e benefícios conforme Legislação Trabalhista e CCT." },
          { title: "Rotatividade", desc: "Plano de ação para reduzir turnover e seus impactos financeiros e de produtividade." },
        ],
      },
      {
        title: "Consultoria societária",
        items: [
          { title: "Proteção Patrimonial", desc: "Estruturação da destinação dos bens patrimoniais na pessoa física ou jurídica." },
          { title: "Planejamento Sucessório", desc: "Organização da sucessão familiar para transferência do patrimônio e continuidade da organização." },
          { title: "Reorganização Societária", desc: "Estruturação e adequação de tipos jurídicos — Ltda., EIRELI, S/A, Holdings e SPEs." },
          { title: "Aquisições, Fusões, Cisões e Incorporações", desc: "Acompanhamento das negociações, elaboração da documentação e registros junto aos órgãos competentes." },
        ],
      },
      {
        title: "Consultoria tributária",
        items: [
          { title: "Planejamento Tributário", desc: "Identificação e sugestão de procedimentos legais para reduzir a carga tributária e maximizar resultados." },
          { title: "Consultoria Fiscal para Exportadoras/Importadoras", desc: "Habilitação nos órgãos competentes, enquadramento tributário e formação de custos e preço de venda." },
          { title: "Consultoria Fiscal", desc: "Redução de riscos de autuação e de pagamento indevido, apuração de tributos e aplicação do planejamento fiscal vigente." },
          { title: "Revisão e Recuperação de Tributos", desc: "Identificação de créditos não aproveitados, retificação de declarações e pedidos de ressarcimento, restituição ou compensação." },
        ],
      },
    ],
    cta: "Falar com um consultor",
    accent: "accent",
  },
  {
    slug: "sistemas",
    path: "/sistemas",
    icon: MonitorCog,
    title: "Sistemas",
    tagline: "ERP e sistemas de gestão especializados por segmento",
    short: "Soluções ERP (Infoecia) para indústria e distribuição, e sistemas Linx/Totvs para varejo.",
    intro:
      "Trabalhamos com duas linhas de produto: ERP Infoecia, com foco em indústria e distribuição, e Linx/Totvs, especialistas em varejo e moda — sempre com consultoria de implantação e boas práticas para o seu segmento.",
    highlights: [
      { title: "Especialistas por segmento", desc: "Implantação e consultoria com expertise do seu mercado." },
      { title: "Integração ponta a ponta", desc: "Engenharia, produção, estoque, vendas, fiscal e financeiro em uma única plataforma." },
      { title: "Dados em tempo real", desc: "Dashboards e indicadores para decisões mais rápidas e assertivas." },
    ],
    segments: [
      {
        label: "ERP Infoecia — Indústria e Distribuição",
        items: [
          {
            title: "Indústria Metalmecânica",
            intro: "Gestão inteligente com integração CAD e máquinas de corte para conectar engenharia e chão de fábrica.",
            bullets: [
              "Integração entre engenharia e produção via CAD",
              "PCP com ordens, prazos e capacidade produtiva",
              "Gestão de chapas, perfis, componentes e insumos",
              "Otimização de cortes e redução de desperdícios",
              "Rastreabilidade completa da produção",
              "Automação e integração com equipamentos industriais",
            ],
          },
          {
            title: "Indústria Metalúrgica",
            intro: "Processos integrados, controle rigoroso e alta produtividade para toda a operação metalúrgica.",
            bullets: [
              "Gestão integrada de produção e etapas produtivas",
              "Integração Engenharia × Fábrica",
              "Planejamento e Controle da Produção (PCP)",
              "Controle de materiais, insumos e estoques",
              "Otimização de cortes e aproveitamento de matéria-prima",
              "Indicadores de desempenho em tempo real",
            ],
          },
          {
            title: "Indústria de Alimentos e Bebidas",
            intro: "Qualidade, segurança alimentar e rastreabilidade em cada etapa da produção.",
            bullets: [
              "Controle de qualidade e segurança alimentar",
              "Rastreabilidade e controle de lotes",
              "Engenharia de produto: BOM, fórmulas e fichas técnicas",
              "Controle de validade e vencimentos",
              "PCP e controle de armazenagem",
              "Dashboards de produção, perdas e custos",
            ],
          },
          {
            title: "Indústria Química e Cosmética",
            intro: "Gestão de formulações, conformidade regulatória e rastreabilidade de lotes.",
            bullets: [
              "Gestão de formulações e engenharia de produto",
              "Controle de qualidade e conformidade regulatória",
              "Rastreabilidade completa de lotes",
              "Controle de matérias-primas e custos industriais",
              "PCP e logística especializada",
              "Sustentabilidade e redução de desperdícios",
            ],
          },
          {
            title: "Indústria de Plástico e Borracha",
            intro: "Controle de custos, redução de desperdícios e eficiência produtiva no setor.",
            bullets: [
              "Controle de resinas, polímeros e compostos",
              "PCP com programação de máquinas e capacidade",
              "Consumo planejado × real e índices de refugo",
              "Engenharia de produto e fichas técnicas",
              "Gestão da qualidade industrial",
              "Integração com automação e Indústria 4.0",
            ],
          },
          {
            title: "Indústria de Alumínio e Utilidades Domésticas",
            intro: "Gestão integrada com foco em custo, qualidade e sustentabilidade.",
            bullets: [
              "Controle de custos e ligas metálicas",
              "PCP e capacidade produtiva",
              "Reaproveitamento e redução de desperdícios",
              "Engenharia de produtos e BOM",
              "Gestão de qualidade e padronização",
              "Controle de estoque e logística",
            ],
          },
          {
            title: "Blocos, Pavers e Pré-Moldados",
            intro: "Gestão integrada da fábrica: da compra dos insumos à entrega do produto final.",
            bullets: [
              "Controle de cimento, areia, brita e aditivos",
              "PCP alinhado à demanda e à capacidade",
              "Controle de qualidade e rastreabilidade de lotes",
              "Gestão do processo de cura",
              "Controle de estoque e pátio",
              "Logística, roteirização e entregas",
            ],
          },
          {
            title: "Móveis e Madeireiras",
            intro: "Integração entre projeto e fabricação para eliminar erros e desperdícios.",
            bullets: [
              "Controle de MDF, MDP, chapas e ferragens",
              "PCP e sequenciamento de fabricação",
              "Engenharia de produtos e integração com projetos",
              "Aproveitamento de madeira e redução de refugos",
              "Gestão de qualidade e padronização",
              "Integração com máquinas e automação",
            ],
          },
          {
            title: "Atacado e Distribuição",
            intro: "Grandes volumes, alta movimentação e logística complexa sob controle.",
            bullets: [
              "Controle inteligente de estoque e giro",
              "Compras estratégicas e gestão de fornecedores",
              "Gestão comercial, margens e rentabilidade",
              "Logística, expedição e roteirização",
              "Controle fiscal e tributário automatizado",
              "Integração com e-commerce e canais comerciais",
            ],
          },
        ],
      },
      {
        label: "Linx / Totvs — Varejo e Moda",
        items: [
          {
            title: "Indústria Têxtil e de Confecção",
            intro: "Software especialista com integração total da produção às vendas.",
            bullets: [
              "Produção de semi-acabados e produtos acabados",
              "Venda representante (off-line e on-line)",
              "Portal B2B para clientes de atacado",
              "Lojas de atacado e varejo integradas",
              "E-commerce com estoque unificado",
              "RFID para rastreabilidade e agilidade",
            ],
          },
          {
            title: "Varejo de Moda e Acessórios",
            intro: "Vestuário, calçados, acessórios, artigos esportivos, joias e relógios.",
            bullets: [
              "Acelerador de giro com curva ABC e TIE",
              "Inteligência promocional",
              "Fidelização de clientes e crediário",
              "Gestão de consignado",
              "Mobilidade e dashboards",
              "Software em nuvem",
            ],
          },
          {
            title: "Lojas de Calçados",
            intro: "Multimarcas, marcas próprias e franquias com melhores práticas do segmento.",
            bullets: [
              "Sugestão de compras por grade e sazonalidade",
              "Caixa fácil em menos de 20 segundos",
              "Motor promocional com +2.000 regras",
              "Gestão de consignado e crediário",
              "E-commerce integrado às lojas físicas",
              "Dashboards intuitivos",
            ],
          },
          {
            title: "Gestão de Redes de Lojas e Franquias",
            intro: "Padrões, indicadores e ativação ágil de novas lojas.",
            bullets: [
              "Portal Modelo de regras de negócio",
              "Cadastro centralizado de clientes e produtos",
              "Conciliador de cartão",
              "Indicadores de varejo (PA, TM, cobertura)",
              "Desempenho da rede e comparativos",
              "Ativação de novas lojas em poucas horas",
            ],
          },
          {
            title: "RFID — Etiquetas Inteligentes",
            intro: "Agilidade, segurança e rastreabilidade em todos os estágios do estoque.",
            bullets: [
              "Contagem de grandes volumes em segundos",
              "Conferência rápida e precisa",
              "Maior acuracidade dos estoques",
              "Rastreabilidade completa dos produtos",
            ],
          },
          {
            title: "Óticas",
            intro: "PDV com venda consultiva de lentes, óculos e tratamentos.",
            bullets: [
              "Atendimento ágil e consultivo",
              "Acelerador de giro (curva ABC, TIE)",
              "Inteligência promocional",
              "Fidelização de clientes",
              "Dashboards e mobilidade",
              "Gestão financeira/contábil",
            ],
          },
          {
            title: "Perfumaria e Cosméticos",
            intro: "Software especialista para o varejo de perfumaria e cosméticos.",
            bullets: [
              "Acelerador de giro",
              "Inteligência promocional",
              "Fidelização de clientes",
              "Desempenho de vendedores",
              "Dashboards e mobilidade",
              "Gestão financeira/contábil em nuvem",
            ],
          },
          {
            title: "Utilidades, Presentes e Brinquedos",
            intro: "Lojas de utilidades, presentes, brinquedos, livrarias e papelarias.",
            bullets: [
              "Acelerador de giro",
              "Inteligência promocional",
              "Fidelização de clientes",
              "Desempenho da rede",
              "Dashboards intuitivos",
              "Software em nuvem",
            ],
          },
        ],
      },
    ],
    cta: "Agendar demonstração",
    accent: "primary",
  },
  {
    slug: "marcas",
    path: "/marcas",
    icon: ShieldCheck,
    title: "Marcas & Patentes",
    tagline: "Proteja o patrimônio intelectual do seu negócio",
    short: "Registro de marcas, patentes, direito autoral, software e código de barras.",
    intro:
      "Cuidamos de todo o processo de registro e acompanhamento da propriedade intelectual da sua empresa, garantindo exclusividade e segurança jurídica.",
    highlights: [
      { title: "Exclusividade", desc: "Direito de uso exclusivo em todo o território nacional." },
      { title: "Segurança jurídica", desc: "Processos conduzidos por especialistas junto aos órgãos competentes." },
      { title: "Acompanhamento contínuo", desc: "Prazos, renovações e defesa da sua marca." },
    ],
    services: [
      {
        title: "Registro de marcas",
        desc: "A marca é a representação simbólica de uma entidade ou produto. O registro assegura o direito de propriedade e uso exclusivo em todo o território nacional, coibindo imitações ou reproduções — totais ou parciais — em produtos ou serviços semelhantes.",
      },
      {
        title: "Registro de patentes",
        desc: "Concessão pública que garante ao titular a exclusividade na exploração comercial da criação: Privilégio de Invenção (PI), Modelo de Utilidade (MU) e Desenho Industrial (DI), este último para formas plásticas ornamentais.",
      },
      {
        title: "Código de barras",
        desc: "Identificação individual de produtos dentro da cadeia de suprimentos. Códigos com 8 a 14 dígitos, conforme o tipo de embalagem e a quantidade de itens por caixa.",
      },
      {
        title: "Direito autoral",
        desc: "Registro de obras literárias, desenhos, gravuras, obras de arte, letras e partituras, filmes, comerciais, documentários e vídeos — com validade de 70 anos contados da morte do autor.",
      },
      {
        title: "Registro de software",
        desc: "Proteção da propriedade intelectual de programas de computador e aplicativos móveis, com validade de 50 anos a partir de 1º de janeiro do ano subsequente à publicação ou criação.",
      },
    ],
    cta: "Proteger minha marca",
    accent: "accent",
  },
];

export const getDivision = (slug: string) => divisions.find((d) => d.slug === slug);
