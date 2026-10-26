import {
  Bug,
  ClipboardCheck,
  Compass,
  Database,
  FlaskConical,
  MonitorCheck,
  RotateCcw,
  Webhook,
  Workflow,
} from "lucide-react";
import type { ComponentType, CSSProperties } from "react";
import { DiMongodb, DiMsqlServer } from "react-icons/di";
import {
  SiDocker,
  SiGit,
  SiGithubactions,
  SiJavascript,
  SiMysql,
  SiPostgresql,
  SiPython,
  SiTypescript,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { VscAzureDevops, VscVscode } from "react-icons/vsc";

type Icon = ComponentType<{
  className?: string;
  style?: CSSProperties;
  "aria-hidden"?: boolean | "true" | "false";
}>;

type Tech = {
  name: string;
  icon: Icon;
  /** Cor da marca. Sem cor, o ícone usa a cor do texto (bom para logos pretos). */
  color?: string;
};

type SkillGroup = {
  title: string;
  description: string;
  icon: Icon;
  accent: string;
  techs: Tech[];
};

// Cores das marcas, clareadas quando necessário para ter contraste no fundo escuro.
const groups: SkillGroup[] = [
  {
    title: "Tipos de Teste",
    description:
      "Cobertura do fluxo do usuário à API, validando regras de negócio e prevenindo regressões.",
    icon: ClipboardCheck,
    accent: "text-primary",
    techs: [
      { name: "Funcional", icon: ClipboardCheck, color: "#4edea3" },
      { name: "Regressão", icon: RotateCcw, color: "#adc6ff" },
      { name: "End-to-End", icon: MonitorCheck, color: "#4edea3" },
      { name: "API", icon: Webhook, color: "#adc6ff" },
      { name: "Exploratório", icon: Compass, color: "#4edea3" },
      { name: "Integração", icon: Workflow, color: "#adc6ff" },
    ],
  },
  {
    title: "Automação",
    description:
      "Testes automatizados end-to-end, cenários reutilizáveis e scripts de teste manuteníveis.",
    icon: FlaskConical,
    accent: "text-secondary",
    techs: [
      { name: "Playwright", icon: FlaskConical, color: "#45ba4b" },
      { name: "TypeScript", icon: SiTypescript, color: "#4a9ae6" },
      { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
      { name: "C#", icon: TbBrandCSharp, color: "#b77fdc" },
      { name: "Python", icon: SiPython, color: "#6ba4d9" },
    ],
  },
  {
    title: "Dados & Validação",
    description:
      "Consultas SQL para validar a consistência dos dados e apoiar a preparação de cenários de teste.",
    icon: Database,
    accent: "text-tertiary",
    techs: [
      { name: "SQL Server", icon: DiMsqlServer, color: "#e8514e" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#6c8ef0" },
      { name: "MySQL", icon: SiMysql, color: "#5d9bd0" },
      { name: "MongoDB", icon: DiMongodb, color: "#50cf07" },
    ],
  },
  {
    title: "Gestão & CI/CD",
    description:
      "Gestão de bugs, versionamento e execução de testes em pipelines de entrega contínua.",
    icon: Bug,
    accent: "text-primary",
    techs: [
      { name: "Azure DevOps", icon: VscAzureDevops, color: "#3b9bee" },
      { name: "Git", icon: SiGit, color: "#f05032" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "#2088ff" },
      { name: "Docker", icon: SiDocker, color: "#2496ed" },
      { name: "VS Code", icon: VscVscode, color: "#23a8f2" },

      // Para voltar com Linux & Bash:
      // import { SiLinux, SiGnubash } from "react-icons/si";
      // { name: "Linux", icon: SiLinux, color: "#fcc624" },
      // { name: "Bash", icon: SiGnubash, color: "#8fd16b" },
    ],
  },
];

export function SkillsSection() {
  return (
    <section
      className="relative max-w-7xl mx-auto px-margin-mobile lg:px-margin py-space-3xl scroll-mt-24"
      id="habilidades-e-stack"
    >
      <div className="flex items-center gap-space-sm mb-space-sm">
        <span className="font-code-mono text-label-caps text-primary font-bold">
          03 //
        </span>

        <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
          Ferramentas & Competências
        </span>
      </div>

      <h2 className="font-headline-md text-headline-md text-on-surface mb-space-2xl">
        Qualidade de Software & Testes
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
        {groups.map(({ title, description, icon: GroupIcon, accent, techs }) => (
          <article
            key={title}
            className="flex flex-col p-space-xl rounded-xl bg-surface-container-low shadow-sm"
          >
            <div className="flex items-center gap-space-sm mb-space-md">
              <span className={`inline-flex p-2 rounded-lg bg-surface-container ${accent}`}>
                <GroupIcon aria-hidden="true" className="w-5 h-5" />
              </span>

              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                {title}
              </h3>
            </div>

            <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-lg">
              {description}
            </p>

            <ul
              aria-label={`Tecnologias de ${title}`}
              className="mt-auto grid grid-cols-3 gap-space-sm"
            >
              {techs.map(({ name, icon: TechIcon, color }) => (
                <li
                  key={name}
                  className="group flex flex-col items-center justify-start gap-1.5 px-1 py-space-sm rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors"
                  title={name}
                >
                  <TechIcon
                    aria-hidden="true"
                    className="w-7 h-7 text-on-surface motion-safe:transition-transform motion-safe:group-hover:scale-110"
                    style={color ? { color } : undefined}
                  />
                  <span className="font-code-mono text-[11px] leading-tight text-center text-on-surface-variant group-hover:text-on-surface transition-colors">
                    {name}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}