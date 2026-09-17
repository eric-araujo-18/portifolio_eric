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
        Experiência & Formação Acadêmica
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
                  Projetos Integradores em Engenharia de Software
                </span>

                <span className="font-code-mono text-label-caps text-primary bg-surface-container-high px-2 py-0.5 rounded">
                  Ativo // 2023 - Presente
                </span>
              </div>

              <p className="font-label-caps text-label-caps text-secondary uppercase mb-space-sm">
                Desenvolvimento de Aplicações End-to-End
              </p>

              <p className="font-body-base text-body-sm text-on-surface-variant leading-relaxed">
                Liderança e atuação técnica no desenvolvimento do projeto{" "}
                <strong>DiskEntulho (PI4)</strong> e aplicações correlatas.
                Implementação de módulos de autenticação, persistência
                estruturada com PostgreSQL, endpoints performáticos em
                Node/TypeScript e interfaces responsivas.
              </p>

              <div className="mt-space-md flex flex-wrap gap-2">
                <span className="px-2 py-0.5 rounded bg-surface-container-low text-on-surface font-code-mono text-label-caps">
                  Arquitetura de Software
                </span>

                <span className="px-2 py-0.5 rounded bg-surface-container-low text-on-surface font-code-mono text-label-caps">
                  Scrum & Git Flow
                </span>

                <span className="px-2 py-0.5 rounded bg-surface-container-low text-on-surface font-code-mono text-label-caps">
                  Modelagem Relacional
                </span>
              </div>
            </div>
          </div>

          {/* Milestone 2 */}
          <div className="relative pl-12 flex flex-col">
            <span className="absolute left-2.5 top-1.5 w-3.5 h-3.5 rounded-full bg-secondary shadow-[0_0_12px_rgba(76,215,246,0.8)] -translate-x-1/2" />

            <div className="p-space-xl rounded-xl bg-surface-container shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-space-xs mb-space-xs">
                <span className="font-headline-sm text-headline-sm text-on-surface">
                  Especialização .NET & C# Moderno
                </span>

                <span className="font-code-mono text-label-caps text-secondary bg-surface-container-high px-2 py-0.5 rounded">
                  DIO Certificado // 2023
                </span>
              </div>

              <p className="font-label-caps text-label-caps text-secondary uppercase mb-space-sm">
                Desenvolvimento Backend Orientado a Objetos
              </p>

              <p className="font-body-base text-body-sm text-on-surface-variant leading-relaxed">
                Resolução de cenários corporativos práticos utilizando a stack
                .NET Core. Modelagem de domínios com Clean Code, abstração
                através de interfaces, consumo de APIs com Entity Framework e
                automação de testes com xUnit.
              </p>
            </div>
          </div>

          {/* Milestone 3 */}
          <div className="relative pl-12 flex flex-col">
            <span className="absolute left-2.5 top-1.5 w-3.5 h-3.5 rounded-full bg-tertiary shadow-[0_0_12px_rgba(173,198,255,0.8)] -translate-x-1/2" />

            <div className="p-space-xl rounded-xl bg-surface-container shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-space-xs mb-space-xs">
                <span className="font-headline-sm text-headline-sm text-on-surface">
                  Pesquisa & Implementação de Algoritmos
                </span>

                <span className="font-code-mono text-label-caps text-tertiary bg-surface-container-high px-2 py-0.5 rounded">
                  Fundamentos da Computação
                </span>
              </div>

              <p className="font-label-caps text-label-caps text-tertiary uppercase mb-space-sm">
                Alocação Dinâmica, Vetores e Teoria dos Grafos
              </p>

              <p className="font-body-base text-body-sm text-on-surface-variant leading-relaxed">
                Criação de projetos práticos de manipulação direta de ponteiros
                em C para simulação de buffers de fila, além de análise de
                complexidade temporal e espacial em scripts Python dedicados à
                busca de menor caminho e árvores geradoras mínimas.
              </p>
            </div>
          </div>
        </div>

        {/* Distinções */}
        <div className="lg:col-span-4 flex flex-col gap-space-md">


          {/* Quote */}
          <div className="p-space-lg rounded-xl bg-surface-container-low flex flex-col gap-space-sm">
            <span className="font-code-mono text-label-caps text-primary uppercase">
              Compromisso com o Código
            </span>

            <p className="font-body-sm text-body-sm text-on-surface-variant">
              &quot;Qualquer tolo pode escrever código que um computador
              entenda. Bons programadores escrevem código que humanos podem
              entender.&quot;
            </p>

            <span className="font-label-caps text-label-caps text-outline text-right">
              — Martin Fowler
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}