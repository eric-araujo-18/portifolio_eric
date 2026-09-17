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
        Experiência 
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
        {/* Timeline */}
        <div className="lg:col-span-8 flex flex-col space-y-space-xl relative">
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
                Atuando no desenvolvimento e garantia de qualidade de sistemas (Web, API e micro serviços)
                em produtos do ramo bancário utilizando C#, .Net, ASP Net, Javascript e SQL Server.
                Desenvolvimento de procedimentos armazenados (procedures) no SQL server, realização de
                testes para garantir a corretude do sistema, utilização de ferramentas como o PlayWright para
                testes automatizados e comunicação efetiva em equipe para resolução de problemas e ajustes
              </p>

              {/* <div className="mt-space-md flex flex-wrap gap-2">
                <span className="px-2 py-0.5 rounded bg-surface-container-low text-on-surface font-code-mono text-label-caps">
                  Arquitetura de Software
                </span>

                <span className="px-2 py-0.5 rounded bg-surface-container-low text-on-surface font-code-mono text-label-caps">
                  Scrum & Git Flow
                </span>

                <span className="px-2 py-0.5 rounded bg-surface-container-low text-on-surface font-code-mono text-label-caps">
                  Modelagem Relacional
                </span>
              </div> */}
            </div>
          </div>
        </div>

        {/* Distinções */}
        <div className="lg:col-span-4 flex flex-col gap-space-md">


        </div>
      </div>
    </section>
  );
}