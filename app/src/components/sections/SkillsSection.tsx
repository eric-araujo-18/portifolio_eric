import { Database, Laptop, SquareTerminal } from "lucide-react";

export function SkillsSection() {
  return (
    <section
      className="relative max-w-7xl mx-auto px-margin-mobile lg:px-margin py-space-3xl"
      id="habilidades-e-stack"
    >
      <div className="flex items-center gap-space-sm mb-space-sm">
        <span className="font-code-mono text-label-caps text-primary font-bold">
          03 //
        </span>

        <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
          Tecnologias & Especialidades
        </span>
      </div>

      <h2 className="font-headline-md text-headline-md text-on-surface mb-space-2xl">
        Stack Tecnológica & Domínio Técnico
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
        {/* Backend */}
        <div className="p-space-xl rounded-xl bg-surface-container-low shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-space-sm mb-space-md">
              <span className="p-2 rounded-lg bg-surface-container text-primary">
                <span className="material-symbols-outlined"><Database className="w-5 h-5" /> </span>
              </span>

              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                Backend
              </h3>
            </div>

            <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
              Arquiteturas resilientes, APIs RESTful, modelagem orientada a
              objetos e microsserviços.
            </p>

            <ul className="space-y-space-sm font-code-mono text-code-mono text-on-surface">
              <li className="flex items-center justify-between p-2 rounded bg-surface-container">
                <span>C# / .NET Core</span>
                <span className="text-primary text-label-caps">Avançado</span>
              </li>

              <li className="flex items-center justify-between p-2 rounded bg-surface-container">
                <span>Node.js & Express</span>
                <span className="text-primary text-label-caps">Robusto</span>
              </li>

              <li className="flex items-center justify-between p-2 rounded bg-surface-container">
                <span>Python</span>
                <span className="text-secondary text-label-caps">
                  Scripts/Dados
                </span>
              </li>

              <li className="flex items-center justify-between p-2 rounded bg-surface-container">
                <span>Linguagem C</span>
                <span className="text-tertiary text-label-caps">
                  Memória/Buffer
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Frontend */}
        <div className="p-space-xl rounded-xl bg-surface-container-low shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-space-sm mb-space-md">
              <span className="p-2 rounded-lg bg-surface-container text-secondary">
                <span className="material-symbols-outlined">
                  <Laptop className="w-5 h-5" />
                </span>
              </span>

              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                Frontend
              </h3>
            </div>

            <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
              Interfaces fluidas, alta performance, acessibilidade e design
              systems modulares.
            </p>

            <ul className="space-y-space-sm font-code-mono text-code-mono text-on-surface">
              <li className="flex items-center justify-between p-2 rounded bg-surface-container">
                <span>TypeScript</span>
                <span className="text-secondary text-label-caps">Foco</span>
              </li>

              <li className="flex items-center justify-between p-2 rounded bg-surface-container">
                <span>JavaScript (ES6+)</span>
                <span className="text-secondary text-label-caps">Nativo</span>
              </li>

              <li className="flex items-center justify-between p-2 rounded bg-surface-container">
                <span>React & Componentes</span>
                <span className="text-primary text-label-caps">Moderno</span>
              </li>

              <li className="flex items-center justify-between p-2 rounded bg-surface-container">
                <span>Tailwind CSS</span>
                <span className="text-secondary text-label-caps">
                  Tokens/Dark
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Dados & Algoritmos */}
        <div className="p-space-xl rounded-xl bg-surface-container-low shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-space-sm mb-space-md">
              <span className="p-2 rounded-lg bg-surface-container text-tertiary">
                <span className="material-symbols-outlined">
                  <Database className="w-5 h-5" />
                </span>
              </span>

              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                Dados & Teoria
              </h3>
            </div>

            <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
              Bancos relacionais, modelagem de tabelas, estruturas complexas e
              grafos.
            </p>

            <ul className="space-y-space-sm font-code-mono text-code-mono text-on-surface">
              <li className="flex items-center justify-between p-2 rounded bg-surface-container">
                <span>PostgreSQL & MySQL</span>
                <span className="text-tertiary text-label-caps">
                  Queries/DDL
                </span>
              </li>

              <li className="flex items-center justify-between p-2 rounded bg-surface-container">
                <span>Modelagem Relacional</span>
                <span className="text-tertiary text-label-caps">
                  Normalização
                </span>
              </li>

              <li className="flex items-center justify-between p-2 rounded bg-surface-container">
                <span>Teoria dos Grafos</span>
                <span className="text-primary text-label-caps">
                  Dijkstra/Busca
                </span>
              </li>

              <li className="flex items-center justify-between p-2 rounded bg-surface-container">
                <span>Filas, Pilhas & Árvores</span>
                <span className="text-secondary text-label-caps">
                  Otimizado
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* DevOps */}
        <div className="p-space-xl rounded-xl bg-surface-container-low shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-space-sm mb-space-md">
              <span className="p-2 rounded-lg bg-surface-container text-primary">
                <span className="material-symbols-outlined">
                  <SquareTerminal className="w-5 h-5" />
                </span>
              </span>

              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                Ambiente & Ops
              </h3>
            </div>

            <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
              Controle de versão rigoroso, ambientes isolados e práticas de
              entrega contínua.
            </p>

            <ul className="space-y-space-sm font-code-mono text-code-mono text-on-surface">
              <li className="flex items-center justify-between p-2 rounded bg-surface-container">
                <span>Git & GitHub Actions</span>
                <span className="text-primary text-label-caps">
                  Colaboração
                </span>
              </li>

              <li className="flex items-center justify-between p-2 rounded bg-surface-container">
                <span>Docker & Containers</span>
                <span className="text-secondary text-label-caps">
                  Isolamento
                </span>
              </li>

              <li className="flex items-center justify-between p-2 rounded bg-surface-container">
                <span>Linux & Bash</span>
                <span className="text-on-surface-variant text-label-caps">
                  CLI Fluente
                </span>
              </li>

              <li className="flex items-center justify-between p-2 rounded bg-surface-container">
                <span>VS Code & Insomnia</span>
                <span className="text-primary text-label-caps">
                  Produtividade
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}