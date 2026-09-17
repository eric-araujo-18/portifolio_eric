export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 w-full mx-auto px-margin-mobile lg:px-margin flex items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-lg">
          <a
            className="group flex items-center gap-space-sm"
            data-path="sobre-mim"
            href="#sobre-mim"
          >
            <div className="px-space-sm py-space-xs rounded-lg bg-surface-container-high transition-transform duration-200 group-hover:scale-105">
              <span className="font-code-mono text-code-mono text-primary font-bold">
                {"<EA />"}
              </span>
            </div>

            <div className="hidden sm:flex flex-col">
              <span className="font-headline-sm text-headline-sm tracking-tight text-on-surface leading-none">
                Eric Araújo
              </span>

              <span className="font-label-caps text-label-caps text-on-surface-variant leading-none mt-1">
                Full-Stack // Dev
              </span>
            </div>
          </a>

          <div className="hidden xl:flex items-center gap-space-xs px-space-md py-1.5 rounded-full bg-surface-container-low">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>

            <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
              Disponível para novos projetos
            </span>
          </div>
        </div>

        <nav
          className="hidden lg:flex items-center gap-space-xs p-1 rounded-xl bg-surface-container-lowest/60"
          data-active-classes="bg-primary-container text-on-primary-container rounded-lg"
        >
          <a
            aria-current="page"
            className="px-space-md py-space-xs font-body-base transition-colors bg-primary-container text-on-primary-container rounded-lg"
            data-path="sobre-mim"
            href="#sobre-mim"
          >
            Sobre mim
          </a>

          <a
            className="px-space-md py-space-xs rounded-lg font-body-base text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
            data-path="projetos"
            href="#projetos"
          >
            Projetos
          </a>

          <a
            className="px-space-md py-space-xs rounded-lg font-body-base text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
            data-path="habilidades-e-stack"
            href="#habilidades-e-stack"
          >
            Habilidades & Stack
          </a>

          <a
            className="px-space-md py-space-xs rounded-lg font-body-base text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
            data-path="experiencia-e-formacao"
            href="#experiencia-e-formacao"
          >
            Experiência & Formação
          </a>

          <a
            className="px-space-md py-space-xs rounded-lg font-body-base text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
            data-path="contato"
            href="#contato"
          >
            Contato
          </a>
        </nav>

        <div className="flex items-center gap-space-md">
          <a
            className="hidden sm:inline-flex items-center justify-center px-space-lg py-space-xs rounded-lg bg-primary-container text-on-primary-container font-body-bold text-body-sm hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(16,185,129,0.25)]"
            data-path="contato"
            href="#contato"
          >
            Fale Comigo
          </a>

          <div className="flex items-center pl-space-xs">
            <img
              alt="Eric Araújo Profile"
              className="w-8 h-8 rounded-full object-cover"
              src="https://media.licdn.com/dms/image/v2/D4E03AQHsfW5qMsxu3g/profile-displayphoto-scale_100_100/B4EZxfz9J5GwAc-/0/1771133983037?e=1791417600&v=beta&t=jJ03xirq9f7B_1jTheN2eO-ARu669BiISlUfc-2SmPY"
            />
          </div>
        </div>
      </div>
    </header>
  );
}