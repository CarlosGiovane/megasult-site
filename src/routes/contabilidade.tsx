import { createFileRoute } from "@tanstack/react-router";
import { DivisionPage } from "@/components/DivisionPage";
import { getDivision } from "@/lib/divisions";

export const Route = createFileRoute("/contabilidade")({
  component: () => <DivisionPage division={getDivision("contabilidade")!} />,
  head: () => ({
    meta: [
      { title: "Contabilidade — Megasult" },
      { name: "description", content: "Contabilidade especializada por atividade: fiscal, tributário, departamento pessoal e relatórios gerenciais." },
      { property: "og:title", content: "Divisão Contabilidade — Megasult" },
      { property: "og:description", content: "Escrituração, fiscal, tributário e DP com atendimento especializado por segmento." },
    ],
  }),
});
