import { FlaskConical, GraduationCap } from "lucide-react";
import { DiMsqlServer } from "react-icons/di";
import { SiDotnet, SiJavascript } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import type { ComponentType, CSSProperties } from "react";
import { VscAzureDevops } from "react-icons/vsc";

type TechIcon = ComponentType<{
  className?: string;
  style?: CSSProperties;
  "aria-hidden"?: boolean | "true" | "false";
}>;

type Tech = {
  name: string;
  icon: TechIcon;
  color: string;
};

// Cores das marcas, clareadas quando necessário para ter contraste no fundo escuro.
const fitbankStack: Tech[] = [
  { name: "Playwright", icon: FlaskConical, color: "#45ba4b" },
  { name: "AzureDevOps", icon: VscAzureDevops, color: "#0f8ac4" },
  { name: "SQL Server", icon: DiMsqlServer, color: "#e8514e" },
  { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
  { name: "C#", icon: TbBrandCSharp, color: "#b77fdc" },
  { name: ".NET / ASP.NET", icon: SiDotnet, color: "#8b6cef" },
];

function TechStack({ items }: { items: Tech[] }) {
  return (
    <ul aria-label="Tecnologias utilizadas" className="flex flex-wrap gap-space-sm">
      {items.map(({ name, icon: Icon, color }) => (
        <li
          key={name}
          className="group flex flex-col items-center gap-1.5 w-[5.5rem] p-space-sm rounded-lg bg-surface-container-high hover:bg-surface-bright transition-colors"
          title={name}
        >
          <Icon aria-hidden="true" className="w-7 h-7" style={{ color }} />
          <span className="font-code-mono text-[11px] leading-tight text-center text-on-surface-variant group-hover:text-on-surface transition-colors">
            {name}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function ExperienceSection() {
  return (
    <section
      className="relative max-w-7xl mx-auto px-margin-mobile lg:px-margin py-space-3xl scroll-mt-24"
      id="experiencia-e-formacao"
    >
      <div className="flex items-center gap-space-sm mb-space-sm">
        <span className="font-code-mono text-label-caps text-primary font-bold">
          04 //
        </span>

        <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
          Trajetória & Marcos
        </span>
      </div>

      <h2 className="font-headline-md text-headline-md text-on-surface mb-space-2xl">
        Experiência & Formação
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
        {/* EXPERIÊNCIA */}
        <ol className="lg:col-span-8 relative flex flex-col gap-space-xl">
          {/* Linha da timeline, centralizada com os marcadores */}
          <span
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-4 -translate-x-1/2 w-0.5 rounded-full bg-gradient-to-b from-primary/60 via-surface-container-high to-transparent"
          />

          {/* Milestone 1 */}
          <li className="relative pl-12">
            <span
              aria-hidden="true"
              className="absolute left-4 top-8 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-primary ring-4 ring-background shadow-[0_0_12px_rgba(16,185,129,0.8)]"
            />

            <article className="p-space-xl rounded-xl bg-surface-container shadow-sm hover:bg-surface-container-high/60 transition-colors">
              <header className="flex flex-wrap items-start justify-between gap-space-sm mb-space-md">
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    Analista de Qualidade
                  </h3>

                  <p className="mt-1 font-label-caps text-label-caps text-secondary uppercase">
                    Fitbank 450
                  </p>
                </div>

                <span className="font-code-mono text-label-caps text-tertiary bg-surface-container-high px-2.5 py-1 rounded-md">
                  2023 – 2024
                </span>
              </header>

              <p className="font-body-base text-body-sm text-on-surface-variant leading-relaxed">
                Atuei na garantia de qualidade de sistemas web, APIs e
                microsserviços em produtos do ramo bancário.
              </p>

              <ul className="mt-space-md space-y-space-sm font-body-base text-body-sm text-on-surface-variant leading-relaxed">
                <li className="flex gap-space-sm">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Execução de testes para garantir a corretude do sistema e das regras de negócio.
                </li>
                <li className="flex gap-space-sm">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Automação de testes end-to-end com Playwright.
                </li>
                <li className="flex gap-space-sm">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Validação de dados e desenvolvimento de procedimentos armazenados (Stored Procedures) no SQL Server.
                </li>
                <li className="flex gap-space-sm">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Comunicação com o time de desenvolvimento para reporte, acompanhamento e resolução de bugs.
                </li>
              </ul>

              <div className="mt-space-lg pt-space-md border-t border-outline-variant/40">
                <TechStack items={fitbankStack} />
              </div>
            </article>
          </li>
        </ol>

        {/* FORMAÇÃO ACADÊMICA */}
        <div className="lg:col-span-4 flex flex-col gap-space-md">
          <div className="flex items-center gap-space-sm mb-space-xs">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
              <GraduationCap aria-hidden="true" className="w-5 h-5 text-primary" />
            </div>

            <h3 className="font-headline-sm text-headline-sm text-on-surface">
              Formação Acadêmica
            </h3>
          </div>

          {/* Formação 1 */}
          <article className="p-space-xl rounded-xl bg-surface-container shadow-sm">
            <div className="flex flex-col gap-space-xs">
              <h4 className="font-headline-sm text-headline-sm text-on-surface">
                Ciência da Computação
              </h4>

              <p className="font-label-caps text-label-caps text-secondary uppercase">
                Universidade Federal do Ceará · Campus Crateús
              </p>

              <span className="mt-1 w-fit font-code-mono text-label-caps text-tertiary bg-surface-container-high px-2.5 py-1 rounded-md">
                2022 – 2026
              </span>

              <p className="font-body-base text-body-sm text-on-surface-variant leading-relaxed mt-space-sm">
                Bacharelado em Ciência da Computação com foco em engenharia de
                software, desenvolvimento de software, banco de dados,
                inteligência artificial e análise de dados.
              </p>
            </div>
          </article>

          {/* Formação 2 - opcional
          <article className="p-space-xl rounded-xl bg-surface-container-low shadow-sm">
            <div className="flex flex-col gap-space-xs">
              <h4 className="font-headline-sm text-headline-sm text-on-surface">
                Cursos & Certificações
              </h4>

              <p className="font-body-base text-body-sm text-on-surface-variant leading-relaxed">
                Espaço para adicionar cursos complementares, certificações e
                outras formações relevantes.
              </p>
            </div>
          </article> */}
        </div>
      </div>
    </section>
  );
}