export type Project = {
  title: string;
  description: string;
  github: string;
  color: "primary" | "secondary" | "tertiary";
  technologies: {
    name: string;
    color?: "primary" | "secondary" | "tertiary" | "default";
  }[];
};

export const projects: Project[] = [
  {
    title: "DiskEntulho_PI4",
    description:
      "Plataforma de gerenciamento logístico sob demanda para aluguel de caçambas e descarte sustentável de entulho. Controle de rotas, inventário e fluxo de agendamentos.",
    github: "https://github.com/eric-araujo-18/DiskEntulho_PI4",
    color: "primary",

    technologies: [
      {
        name: "TypeScript",
        color: "primary",
      },
      {
        name: "React",
        color: "secondary",
      },
      {
        name: "PostgreSQL",
        color: "default",
      },
    ],
  },

  {
    title: "Honey_Flow",
    description:
      "Sistema voltado à automação de fluxos de trabalho e controle de rotinas operacionais. Interface reativa para rastreamento de tarefas com atualização de estado em tempo real.",
    github: "https://github.com/eric-araujo-18/Honey_Flow",
    color: "secondary",

    technologies: [
      {
        name: "JavaScript",
        color: "secondary",
      },
      {
        name: "Node.js",
        color: "default",
      },
      {
        name: "State Management",
        color: "primary",
      },
    ],
  },

];