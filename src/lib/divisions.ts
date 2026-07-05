import { Calculator, Lightbulb, MonitorCog, ShieldCheck, type LucideIcon } from "lucide-react";

export type Division = {
  slug: string;
  path: "/contabilidade" | "/consultoria" | "/sistemas" | "/marcas";
  icon: LucideIcon;
  title: string;
  tagline: string;
  short: string;
  intro: string;
  highlights: { title: string; desc: string }[];
  services: string[];
  cta: string;
  accent: "primary" | "accent";
};

export const divisions: Division[] = [
  {
    slug: "contabilidade",
    path: "/contabilidade",
    icon: Calculator,
    title: "Contabilidade",
    tagline: "Contabilidade especializada por atividade",
    short: "Escrituração, fiscal, tributário e departamento pessoal com foco no seu segmento.",
    intro:
      "Uma contabilidade que vai além da obrigação: entregamos indicadores, planejamento tributário e suporte próximo para que sua empresa cresça com segurança fiscal.",
    highlights: [
      { title: "Especialista por segmento", desc: "Times dedicados por atividade, do comércio à indústria." },
      { title: "Relatórios gerenciais", desc: "Indicadores mensais para apoiar a tomada de decisão." },
      { title: "Compliance total", desc: "Obrigações fiscais e trabalhistas sempre em dia." },
    ],
    services: [
      "Abertura, alteração e encerramento de empresas",
      "Escrituração contábil e fiscal",
      "Departamento pessoal e eSocial",
      "Apuração de impostos e SPED",
      "Demonstrações contábeis e balanço",
      "Consultoria tributária",
    ],
    cta: "Solicitar diagnóstico contábil",
    accent: "primary",
  },
  {
    slug: "consultoria",
    path: "/consultoria",
    icon: Lightbulb,
    title: "Consultoria",
    tagline: "Estratégia, gestão e crescimento sob medida",
    short: "Diagnóstico, planejamento e plano de ação para destravar resultados.",
    intro:
      "Ajudamos empresários a organizar a operação, planejar tributos e implantar rotinas de gestão que fazem o negócio crescer com previsibilidade.",
    highlights: [
      { title: "Diagnóstico 360°", desc: "Mapeamos processos, finanças e riscos." },
      { title: "Planejamento tributário", desc: "Economize impostos dentro da lei." },
      { title: "Governança", desc: "Rotinas, indicadores e cultura de resultado." },
    ],
    services: [
      "Diagnóstico empresarial",
      "Planejamento estratégico",
      "Planejamento tributário",
      "Reestruturação societária",
      "Gestão financeira e de custos",
      "Implantação de indicadores (KPIs)",
    ],
    cta: "Falar com um consultor",
    accent: "accent",
  },
  {
    slug: "sistemas",
    path: "/sistemas",
    icon: MonitorCog,
    title: "Sistemas",
    tagline: "ERP e automação para operar com eficiência",
    short: "Sistemas de gestão para tornar sua empresa mais rentável e produtiva.",
    intro:
      "Nossa suíte ERP integra vendas, financeiro, estoque, fiscal e BI em uma única plataforma, com implantação assistida por especialistas Megasult.",
    highlights: [
      { title: "ERP completo", desc: "Financeiro, estoque, vendas e fiscal integrados." },
      { title: "Automação fiscal", desc: "NF-e, NFC-e, CT-e e SPED sem retrabalho." },
      { title: "Business Intelligence", desc: "Painéis para decidir com dados em tempo real." },
    ],
    services: [
      "ERP para comércio, indústria e serviços",
      "Emissor fiscal e retaguarda",
      "Frente de caixa (PDV)",
      "Gestão de estoque e compras",
      "Business Intelligence e dashboards",
      "Integração com marketplaces e bancos",
    ],
    cta: "Agendar demonstração",
    accent: "primary",
  },
  {
    slug: "marcas",
    path: "/marcas",
    icon: ShieldCheck,
    title: "Marcas & Patentes",
    tagline: "Proteja o seu patrimônio intelectual",
    short: "Registro de marcas, patentes e propriedade intelectual no INPI.",
    intro:
      "Cuidamos de todo o processo de registro e acompanhamento da sua marca junto ao INPI, garantindo exclusividade e segurança jurídica ao seu negócio.",
    highlights: [
      { title: "Busca prévia", desc: "Análise de viabilidade antes do depósito." },
      { title: "Registro completo", desc: "Do depósito à concessão, acompanhado por especialistas." },
      { title: "Monitoramento", desc: "Acompanhamos prazos e possíveis conflitos." },
    ],
    services: [
      "Busca prévia de marca",
      "Registro de marca no INPI",
      "Registro de patentes",
      "Desenho industrial",
      "Renovação e prorrogação",
      "Monitoramento e defesa de marca",
    ],
    cta: "Proteger minha marca",
    accent: "accent",
  },
];

export const getDivision = (slug: string) => divisions.find((d) => d.slug === slug);
