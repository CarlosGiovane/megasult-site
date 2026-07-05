import { createFileRoute } from "@tanstack/react-router";
import { DivisionPage } from "@/components/DivisionPage";
import { getDivision } from "@/lib/divisions";

export const Route = createFileRoute("/sistemas")({
  component: () => <DivisionPage division={getDivision("sistemas")!} />,
  head: () => ({
    meta: [
      { title: "Sistemas ERP — Megasult" },
      { name: "description", content: "ERP completo, automação fiscal e Business Intelligence para tornar sua empresa mais rentável e produtiva." },
      { property: "og:title", content: "Divisão Sistemas — Megasult" },
      { property: "og:description", content: "ERP, PDV, fiscal e BI integrados para operar com eficiência." },
    ],
  }),
});
