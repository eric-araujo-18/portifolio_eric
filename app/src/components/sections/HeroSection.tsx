import { ArrowRight, Contact, Cpu, FolderOpen, Layers, Mail, MemoryStick, Verified } from "lucide-react";

export function HeroSection() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[360px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-60 -right-24 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[140px] pointer-events-none" />

      <section className="relative max-w-7xl mx-auto px-margin-mobile lg:px-margin pt-space-xl pb-space-3xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          {/* Coluna de texto */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-space-sm px-space-md py-1.5 rounded-full bg-surface-container-high shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
              </span>

              <span className="font-label-caps text-label-caps text-primary tracking-wider uppercase">
                Disponível para novos desafios e projetos
              </span>
            </div>

            <div className="mt-space-lg">
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest block mb-2 font-semibold">
                Engenheiro de Software & Full Stack
              </span>

              <h1 className="font-display-lg text-display-lg text-on-surface tracking-tight leading-tight">
                Olá, me chamo <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-fixed to-secondary">
                  Eric Araújo
                </span>
              </h1>
            </div>

            <p className="mt-space-md font-headline-sm text-headline-sm text-on-surface-variant font-normal">
              Desenvolvedor Full Stack apaixonado por criar soluções robustas,
              escaláveis e eficientes.
            </p>

            <p className="mt-space-md font-body-base text-body-base text-on-surface-variant max-w-xl">
              Especialista no desenvolvimento de aplicações modernas,
              arquitetura de sistemas, modelagem relacional e algoritmos de alto
              desempenho. Transformando desafios complexos em produtos digitais
              de impacto com TypeScript, C#, Python e JavaScript.
            </p>

            {/* CTAs */}
            <div className="mt-space-xl flex flex-wrap items-center gap-space-md">
              <a
                className="inline-flex items-center justify-center gap-space-xs px-space-xl py-3.5 rounded-lg bg-primary text-on-primary font-body-bold text-body-base shadow-[0_0_24px_rgba(16,185,129,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all"
                href="#projetos"
              >
                <span>Explorar Projetos</span>

                <span className="material-symbols-outlined text-headline-sm leading-none">
                  <ArrowRight className="w-5 h-5" />
                </span>
              </a>

              <a
                className="inline-flex items-center justify-center gap-space-xs px-space-lg py-3.5 rounded-lg bg-surface-container-high text-on-surface font-body-bold text-body-base hover:bg-surface-bright transition-all shadow-sm"
                href="#contato"
              >
                <span className="material-symbols-outlined text-headline-sm leading-none text-secondary">
                  <Contact className="w-5 h-5" />
                </span>

                <span>Entrar em Contato</span>
              </a>

              <div className="flex items-center gap-space-xs ml-2">
                <a
                  aria-label="GitHub Profile"
                  className="p-3 rounded-lg bg-surface-container-low text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-colors"
                  href="https://github.com/eric-araujo-18"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>

                <a
                  aria-label="LinkedIn Profile"
                  className="p-3 rounded-lg bg-surface-container-low text-on-surface-variant hover:text-secondary hover:bg-surface-container-high transition-colors"
                  href="https://www.linkedin.com/in/eric-albuquerque-b08087218/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Terminal */}
          <div className="lg:col-span-5 w-full">
            <div className="w-full rounded-xl bg-surface-container-low shadow-2xl p-space-md relative overflow-hidden">
              <div className="flex items-center justify-between pb-space-sm mb-space-sm bg-surface-container px-space-md py-2.5 rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-error inline-block" />
                  <span className="w-3 h-3 rounded-full bg-secondary-container inline-block" />
                  <span className="w-3 h-3 rounded-full bg-primary inline-block" />
                </div>

                <div className="flex items-center gap-1.5 font-code-mono text-label-caps text-on-surface-variant">
                  <span className="material-symbols-outlined text-body-sm text-primary">
                    terminal
                  </span>

                  <span>eric-araujo.config.ts</span>
                </div>

                <div className="flex items-center text-on-surface-variant opacity-60">
                  <span className="font-code-mono text-label-caps">UTF-8</span>
                </div>
              </div>

              <div className="p-space-md font-code-mono text-code-mono leading-relaxed bg-surface-container-lowest rounded-lg overflow-x-auto selection:bg-primary/30">
                <p>
                  <span className="text-tertiary">const</span>{" "}
                  <span className="text-primary font-semibold">developer</span>{" "}
                  {"= {"}
                </p>

                <p className="pl-4">
                  <span className="text-on-surface-variant">name</span>:{" "}
                  <span className="text-secondary">"Eric Araújo"</span>,
                </p>

                <p className="pl-4">
                  <span className="text-on-surface-variant">role</span>:{" "}
                  <span className="text-secondary">"Full Stack Engineer"</span>,
                </p>

                <p className="pl-4">
                  <span className="text-on-surface-variant">location</span>:{" "}
                  <span className="text-secondary">"Brasil // Remoto"</span>,
                </p>

                <p className="pl-4">
                  <span className="text-on-surface-variant">coreStack</span>: [
                </p>

                <p className="pl-8 text-primary-fixed-dim">
                  "TypeScript", "C# / .NET",
                </p>

                <p className="pl-8 text-primary-fixed-dim">
                  "Python", "Node.js", "PostgreSQL"
                </p>

                <p className="pl-4">],</p>

                <p className="pl-4">
                  <span className="text-on-surface-variant">passions</span>: [
                </p>

                <p className="pl-8 text-secondary-fixed">
                  "Algoritmos de Alta Eficiência",
                </p>

                <p className="pl-8 text-secondary-fixed">
                  "Arquitetura Limpa (Clean Code)",
                </p>

                <p className="pl-8 text-secondary-fixed">
                  "Modelagem de Dados & Grafos"
                </p>

                <p className="pl-4">],</p>

                <p className="pl-4">
                  <span className="text-on-surface-variant">openToWork</span>:{" "}
                  <span className="text-primary font-bold">true</span>,
                </p>

                <p className="pl-4">
                  <span className="text-tertiary">execute</span>: () {"=>"}{" "}
                  <span className="text-primary">
                    developer.buildHighImpactSoftware()
                  </span>
                </p>

                <p>{"};"}</p>
              </div>

              <div className="mt-space-sm flex items-center justify-between px-space-sm pt-space-xs font-code-mono text-label-caps text-on-surface-variant">
                <span className="flex items-center gap-1.5 text-primary">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                  <span>System Status: Optimal (200 OK)</span>
                </span>

                <span className="text-outline">Node v20.x // Git 2.4+</span>
              </div>
            </div>
          </div>
        </div>

        {/* Métricas */}
        <div className="mt-space-2xl grid grid-cols-2 md:grid-cols-4 gap-space-md">
          <div className="p-space-lg rounded-xl bg-surface-container-low shadow-sm flex flex-col justify-between hover:scale-[1.01] transition-transform">
            <div className="flex items-center justify-between">
              <span className="font-label-caps text-label-caps text-primary uppercase font-bold">
                GitHub Repos
              </span>

              <span className="material-symbols-outlined text-on-surface-variant text-headline-sm">
                <FolderOpen className="w-5 h-5" />
              </span>
            </div>

            <div className="mt-space-md">
              <span className="font-stat-lg text-stat-lg text-on-surface font-bold">
                24+
              </span>

              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Repositórios públicos com código versionado
              </p>
            </div>
          </div>

          <div className="p-space-lg rounded-xl bg-surface-container-low shadow-sm flex flex-col justify-between hover:scale-[1.01] transition-transform">
            <div className="flex items-center justify-between">
              <span className="font-label-caps text-label-caps text-secondary uppercase font-bold">
                Arquitetura
              </span>

              <span className="material-symbols-outlined text-on-surface-variant text-headline-sm">
                <Layers className="w-5 h-5" />
              </span>
            </div>

            <div className="mt-space-md">
              <span className="font-stat-lg text-stat-lg text-on-surface font-bold">
                Full-Stack
              </span>

              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Do banco de dados relacional ao frontend reativo
              </p>
            </div>
          </div>

          {/* <div className="p-space-lg rounded-xl bg-surface-container-low shadow-sm flex flex-col justify-between hover:scale-[1.01] transition-transform">
            <div className="flex items-center justify-between">
              <span className="font-label-caps text-label-caps text-tertiary uppercase font-bold">
                Engenharia
              </span>

              <span className="material-symbols-outlined text-on-surface-variant text-headline-sm">
                <Cpu className="w-5 h-5" />
              </span>
            </div>

            <div className="mt-space-md">
              <span className="font-stat-lg text-stat-lg text-on-surface font-bold">
                Baixo Nível
              </span>

              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Linguagem C, memória e estruturas de dados
              </p>
            </div>
          </div> */}

          <div className="p-space-lg rounded-xl bg-surface-container-low shadow-sm flex flex-col justify-between hover:scale-[1.01] transition-transform">
            <div className="flex items-center justify-between">
              <span className="font-label-caps text-label-caps text-primary uppercase font-bold">
                Metodologia
              </span>

              <span className="material-symbols-outlined text-on-surface-variant text-headline-sm">
                <Verified className="w-5 h-5" />
              </span>
            </div>

            <div className="mt-space-md">
              <span className="font-stat-lg text-stat-lg text-on-surface font-bold">
                Clean Code
              </span>

              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Padrões de design, POO e código manutenível
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}