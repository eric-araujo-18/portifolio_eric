import { GraduationCap } from "lucide-react";

export function ExperienceSection() {
  return (
    <section
      className="relative max-w-7xl mx-auto px-margin-mobile lg:px-margin py-space-3xl"
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
        <div className="lg:col-span-8 flex flex-col space-y-space-xl relative mt-6">
          <div className="absolute top-4 bottom-4 left-4 w-0.5 bg-surface-container-high -z-0" />

          {/* Milestone 1 */}
          <div className="relative pl-12 flex flex-col">
            <span className="absolute left-2.5 top-1.5 w-3.5 h-3.5 rounded-full bg-primary shadow-[0_0_12px_rgba(16,185,129,0.8)] -translate-x-1/2" />

            <div className="p-space-xl rounded-xl bg-surface-container shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-space-xs mb-space-xs">
                <span className="font-headline-sm text-headline-sm text-on-surface">
                  Analista de Qualidade
                </span>

                <span className="font-code-mono text-label-caps text-tertiary bg-surface-container-high px-2 py-0.5 rounded">
                  inativo // 2023 - 2024
                </span>
              </div>

              <p className="font-label-caps text-label-caps text-secondary uppercase mb-space-sm">
                Fitbank 450
              </p>

              <p className="font-body-base text-body-sm text-on-surface-variant leading-relaxed">
                Atuando no desenvolvimento e garantia de qualidade de sistemas
                Web, APIs e microsserviços em produtos do ramo bancário,
                utilizando C#, .NET, ASP.NET, JavaScript e SQL Server.

                Desenvolvimento de procedimentos armazenados (Stored
                Procedures) no SQL Server, realização de testes para garantir a
                corretude do sistema, utilização de ferramentas como Playwright
                para testes automatizados e comunicação em equipe para
                resolução de problemas e ajustes.
              </p>
            </div>
          </div>
        </div>

        {/* FORMAÇÃO ACADÊMICA */}
        <div className="lg:col-span-4 flex flex-col gap-space-md">
          <div className="flex items-center gap-space-sm mb-space-xs">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
              <GraduationCap className="w-5 h-5 text-primary" />
            </div>

            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                Formação Acadêmica
              </h3>
            </div>
          </div>

          {/* Formação 1 */}
          <div className="p-space-xl rounded-xl bg-surface-container shadow-sm">
            <div className="flex flex-col gap-space-xs">
              <span className="font-headline-sm text-headline-sm text-on-surface">
                Ciência da Computação
              </span>

              <p className="font-label-caps text-label-caps text-secondary uppercase">
                Universidade / Faculdade
              </p>

              <span className="w-fit font-code-mono text-label-caps text-tertiary bg-surface-container-high px-2 py-0.5 rounded">
                2022 - 2026
              </span>

              <p className="font-body-base text-body-sm text-on-surface-variant leading-relaxed mt-space-sm">
                Bacharelado em Ciência da Computação com foco em desenvolvimento
                de software, banco de dados, inteligência artificial, análise de
                dados e engenharia de software.
              </p>
            </div>
          </div>

          {/* Formação 2 - opcional
          <div className="p-space-xl rounded-xl bg-surface-container-low shadow-sm">
            <div className="flex flex-col gap-space-xs">
              <span className="font-headline-sm text-headline-sm text-on-surface">
                Cursos & Certificações
              </span>

              <p className="font-body-base text-body-sm text-on-surface-variant leading-relaxed">
                Espaço para adicionar cursos complementares, certificações e
                outras formações relevantes.
              </p>
            </div>
          </div> */}

          
        </div>
      </div>
    </section>
  );
}