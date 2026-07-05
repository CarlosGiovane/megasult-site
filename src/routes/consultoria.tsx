import { createFileRoute } from "@tanstack/react-router";
import { DivisionPage } from "@/components/DivisionPage";
import { getDivision } from "@/lib/divisions";

export const Route = createFileRoute("/consultoria")({
  component: () => <DivisionPage division={getDivision("consultoria")!} />,
  head: () => ({
    meta: [
      { title: "Consultoria — Megasult" },
      { name: "description", content: "Diagnóstico, planejamento estratégico e tributário e governança para o seu negócio crescer com previsibilidade." },
      { property: "og:title", content: "Divisão Consultoria — Megasult" },
      { property: "og:description", content: "Estratégia, gestão e crescimento sob medida para a sua empresa." },
    ],
  }),
});
