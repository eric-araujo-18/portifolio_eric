export const siteConfig = {
  name: "Eric Araújo",
  title: "Eric Araújo // Senior Software Engineer",
  description:
    "Engenharia de software de alta performance, arquitetura escalável e interfaces elegantes.",
  links: {
    github: "https://github.com/eric-araujo-18",
    linkedin: "https://www.linkedin.com/in/eric-albuquerque-b08087218/",
    contato:"phone: +55 88 99767-0377",
    email: "mailto:ericalbuquerque8@hotmail.com",
  },
} as const;

export const navigation = [
  { label: "Sobre mim", href: "#sobre-mim" },
  { label: "Projetos", href: "#projetos" },
  { label: "Habilidades & Stack", href: "#habilidades-e-stack" },
  { label: "Experiência & Formação", href: "#experiencia-e-formacao" },
  { label: "Contato", href: "#contato" },
] as const;
