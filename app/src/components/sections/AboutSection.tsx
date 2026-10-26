import { BookOpenIcon, CalendarSync, CircleStar, Focus, MapPin } from "lucide-react";

export function AboutSection() {
  return (
    <section
      className="relative max-w-7xl mx-auto px-margin-mobile lg:px-margin py-space-3xl"
      id="sobre-mim"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
        {/* Texto principal */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="flex items-center gap-space-sm mb-space-sm">
            <span className="font-code-mono text-label-caps text-primary font-bold">
              01 //
            </span>

            <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
              Sobre Mim & Propósito
            </span>
          </div>

          <h2 className="font-headline-md text-headline-md text-on-surface">
            Encontrando falhas antes que elas cheguem ao usuário.
          </h2>

          <div className="mt-space-lg space-y-space-md font-body-base text-body-base text-on-surface-variant">
            <p>
              Minha trajetória em tecnologia é guiada pela curiosidade em
              entender como os sistemas funcionam e, principalmente, como eles
              podem falhar. Acredito que um software excepcional não apenas
              atende às especificações de negócio, mas também é confiável,
              consistente e seguro para quem o utiliza.
            </p>

            <p>
              Com formação em{" "}
              <strong className="text-on-surface">Ciência da Computação</strong>,
              atuei como Analista de Qualidade no setor bancário, testando
              sistemas web, APIs e microsserviços. Combino testes funcionais e
              de regressão com automação end-to-end em{" "}
              <strong className="text-primary">Playwright</strong> e validação
              de dados em{" "}
              <strong className="text-secondary">SQL Server</strong>. Minha base
              em desenvolvimento com{" "}
              <strong className="text-tertiary">TypeScript & C#</strong> me
              ajuda a ler o código, investigar a causa raiz dos problemas e
              falar a mesma língua do time de desenvolvimento.
            </p>

            <p>
              Minha rotina prioriza critérios de aceite claros, reports de bugs
              bem documentados e colaboração próxima com desenvolvimento e
              produto.
            </p>
          </div>

          {/* Gráfico de complexidade
          <div className="mt-space-xl p-space-md rounded-xl bg-surface-container-low shadow-sm">
            <div className="flex items-center justify-between mb-space-sm">
              <span className="font-code-mono text-label-caps text-on-surface-variant">
                Graph Complexity & Algorithmic Efficiency
              </span>

              <span className="font-code-mono text-label-caps text-primary">
                O(V + E)
              </span>
            </div>

            <svg
              className="w-full h-16 text-primary"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 600 80"
            >
              <path
                d="M0,60 C80,65 140,40 200,45 C260,50 320,15 400,25 C480,35 520,10 600,8"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2.5"
              />

              <circle cx="200" cy="45" fill="currentColor" r="4" />
              <circle cx="400" cy="25" fill="currentColor" r="4" />
              <circle cx="600" cy="8" fill="currentColor" r="4" />

              <path
                d="M0,60 C80,65 140,40 200,45 C260,50 320,15 400,25 C480,35 520,10 600,8 L600,80 L0,80 Z"
                fill="currentColor"
                fillOpacity="0.06"
              />
            </svg>
          </div> */}
        </div>

        {/* Card lateral */}
        <div className="lg:col-span-5 flex flex-col gap-space-md">
          <div className="p-space-xl rounded-xl bg-surface-container shadow-md">
            <div className="flex items-center gap-space-md mb-space-lg">
              <img
                alt="Eric Araújo"
                className="w-16 h-16 rounded-xl object-cover shadow-sm"
                src="https://media.licdn.com/dms/image/v2/D4E03AQHa17g9g8aW7A/profile-displayphoto-scale_200_200/B4EaCtZVhLG4Ag-/0/1789615498910?e=1794441600&v=beta&t=Tv9rzViDCGXCvCvUvFsyMwOg9NtfligT2lropHZZco0"
              />

              <div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  Eric Araújo
                </h3>

                <p className="font-code-mono text-code-mono text-primary">
                  @eric-araujo-18
                </p>
              </div>
            </div>

            <div className="space-y-space-md">
              {/* Localização */}
              <div className="flex items-start gap-space-sm">
                <span className="material-symbols-outlined text-primary text-body-sm mt-0.5">
                  <MapPin className="w-5 h-5" />
                </span>

                <div>
                  <span className="font-label-caps text-label-caps text-on-surface-variant block uppercase">
                    Localização
                  </span>

                  <span className="font-body-bold text-body-sm text-on-surface">
                    Brasil (Disponível para Remoto e Híbrido)
                  </span>
                </div>
              </div>

              {/* Foco */}
              <div className="flex items-start gap-space-sm">
                <span className="material-symbols-outlined text-secondary text-body-sm mt-0.5">
                  <Focus className="w-5 h-5" />
                </span>

                <div>
                  <span className="font-label-caps text-label-caps text-on-surface-variant block uppercase">
                    Foco Profissional
                  </span>

                  <span className="font-body-bold text-body-sm text-on-surface">
                    Qualidade de Software • Testes Manuais, Automatizados & de API
                  </span>
                </div>
              </div>

              {/* Metodologias */}
              <div className="flex items-start gap-space-sm">
                <span className="material-symbols-outlined text-tertiary text-body-sm mt-0.5">
                  <CalendarSync className="w-5 h-5" />
                </span>

                <div>
                  <span className="font-label-caps text-label-caps text-on-surface-variant block uppercase">
                    Metodologias
                  </span>

                  <span className="font-body-bold text-body-sm text-on-surface">
                    Scrum, Testes de Regressão, Gestão de Bugs & CI/CD
                  </span>
                </div>
              </div>

              {/* Aprendizado */}
              <div className="flex items-start gap-space-sm">
                <span className="material-symbols-outlined text-primary text-body-sm mt-0.5">
                  <BookOpenIcon className="w-5 h-5" />
                </span>

                <div>
                  <span className="font-label-caps text-label-caps text-on-surface-variant block uppercase">
                    Aprendizado Ativo
                  </span>

                  <span className="font-body-bold text-body-sm text-on-surface">
                    Testes de Performance, BDD & Testes em Pipelines CI/CD
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* GitHub */}
          <div className="p-space-lg rounded-xl bg-surface-container-low flex items-center justify-between">
            <div className="flex items-center gap-space-sm">
              <span className="material-symbols-outlined text-primary">
                <CircleStar className="w-5 h-5" />
              </span>

              <div>
                <p className="font-body-bold text-body-sm text-on-surface">
                  GitHub Pull Shark
                </p>

                <p className="font-label-caps text-label-caps text-on-surface-variant">
                  Reconhecimento oficial de colaboração contínua
                </p>
              </div>
            </div>

            <span className="px-space-sm py-1 rounded-md bg-surface-container-high font-code-mono text-label-caps text-primary">
              Conquista Ativa
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}