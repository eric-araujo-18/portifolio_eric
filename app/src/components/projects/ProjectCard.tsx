import { Code, GlobeCode } from "lucide-react";
import type { Project } from "../../lib/projects";

type ProjectCardProps = {
  project: Project;
};

const colorClasses = {
  primary: {
    icon: "text-primary",
    hover: "group-hover:text-primary",
    link: "hover:text-primary",
  },

  secondary: {
    icon: "text-secondary",
    hover: "group-hover:text-secondary",
    link: "hover:text-secondary",
  },

  tertiary: {
    icon: "text-tertiary",
    hover: "group-hover:text-tertiary",
    link: "hover:text-tertiary",
  },
};

const technologyColors = {
  primary: "text-primary",
  secondary: "text-secondary",
  tertiary: "text-tertiary",
  default: "text-on-surface-variant",
};

export function ProjectCard({ project }: ProjectCardProps) {
  const colors = colorClasses[project.color];

  return (
    <article className="flex flex-col justify-between p-space-xl rounded-xl bg-surface-container hover:bg-surface-bright transition-all shadow-md group">
      <div>
        <div className="flex items-center justify-between mb-space-md">
          <span
            className={`p-2 rounded-lg bg-surface-container-highest ${colors.icon}`}
          >
            <span className="material-symbols-outlined">
            <GlobeCode className="w-5 h-5" />
            </span>
          </span>

          <a
            aria-label={`Ver repositório ${project.title}`}
            className={`p-2 rounded-lg bg-surface-container-high text-on-surface-variant ${colors.link} transition-colors`}
            href={project.github}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-body-sm">
              <Code className="w-5 h-5" />
            </span>
          </a>
        </div>

        <h3
          className={`font-headline-sm text-headline-sm text-on-surface ${colors.hover} transition-colors`}
        >
          {project.title}
        </h3>

        <p className="mt-space-sm font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="mt-space-lg pt-space-md">
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((technology) => (
            <span
              key={technology.name}
              className={`
                px-2.5
                py-1
                rounded-full
                bg-surface-container-low
                font-code-mono
                text-label-caps
                ${
                  technologyColors[
                    technology.color ?? "default"
                  ]
                }
              `}
            >
              {technology.name}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}