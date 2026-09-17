import { projects } from "../../lib/projects";
import { ProjectCard } from "../../components/projects/ProjectCard";
import { Braces, ExternalLink } from "lucide-react";

export function ProjectsSection() {
  return (
    <section
      className="relative max-w-7xl mx-auto px-margin-mobile lg:px-margin py-space-3xl"
      id="projetos"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-2xl">
        <div>
          <div className="flex items-center gap-space-sm mb-space-sm">
            <span className="font-code-mono text-label-caps text-primary font-bold">
              02 //
            </span>

            <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
              Repositórios & Código Fonte
            </span>
          </div>

          <h2 className="font-headline-md text-headline-md text-on-surface">
            Projetos em Destaque
          </h2>
        </div>

        <a
          className="inline-flex items-center gap-space-xs font-code-mono text-code-mono text-primary hover:text-primary-fixed-dim transition-colors group"
          href="https://github.com/eric-araujo-18?tab=repositories"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span>Ver todos os repositórios no GitHub</span>

          <span className="material-symbols-outlined text-body-sm group-hover:translate-x-1 transition-transform">
            <ExternalLink className="w-5 h-5" />
          </span>
        </a>
      </div>

      {/* Projetos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
        {projects.map((project) => (
          <ProjectCard
            key={project.github}
            project={project}
          />
        ))}
      </div>

      {/* GitHub Banner */}
      <div className="mt-space-xl p-space-xl rounded-xl bg-surface-container-low shadow-sm flex flex-col sm:flex-row items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-md">
          <span className="material-symbols-outlined text-display-lg text-primary">
            <Braces className="w-16 h-16" />
          </span>

          <div>
            <h4 className="font-headline-sm text-headline-sm text-on-surface">
              Quer explorar o histórico completo de commits?
            </h4>

            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Confira branches, pull requests e contribuições ativas diretamente
              no meu perfil.
            </p>
          </div>
        </div>

        <a
          className="px-space-lg py-space-xs rounded-lg bg-surface-container-high text-primary font-body-bold text-body-sm hover:bg-surface-bright transition-colors whitespace-nowrap"
          href="https://github.com/eric-araujo-18"
          rel="noopener noreferrer"
          target="_blank"
        >
          Acessar @eric-araujo-18
        </a>
      </div>
    </section>
  );
}