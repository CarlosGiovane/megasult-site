import { createFileRoute } from "@tanstack/react-router";
import { DivisionPage } from "@/components/DivisionPage";
import { getDivision } from "@/lib/divisions";

export const Route = createFileRoute("/marcas")({
  component: () => <DivisionPage division={getDivision("marcas")!} />,
  head: () => ({
    meta: [
      { title: "Marcas & Patentes — Megasult" },
      { name: "description", content: "Registro de marcas, patentes e propriedade intelectual no INPI com acompanhamento por especialistas." },
      { property: "og:title", content: "Divisão Marcas & Patentes — Megasult" },
      { property: "og:description", content: "Proteja o patrimônio intelectual da sua empresa." },
    ],
  }),
});
