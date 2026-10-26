"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

const navItems = [
  { id: "sobre-mim", label: "Sobre mim" },
  { id: "projetos", label: "Projetos" },
  { id: "habilidades-e-stack", label: "Habilidades & Ferramentas" },
  { id: "experiencia-e-formacao", label: "Experiência & Formação" },
  { id: "contato", label: "Contato" },
] as const;

type SectionId = (typeof navItems)[number]["id"];

export function Header() {
  const [active, setActive] = useState<SectionId>("sobre-mim");
  const [pill, setPill] = useState({ left: 0, width: 0, ready: false });

  const linkRefs = useRef<Partial<Record<SectionId, HTMLAnchorElement | null>>>({});
  // Enquanto a página rola até a seção clicada, a rolagem não deve mudar o destaque.
  const lockedByClick = useRef(false);

  // Posiciona o fundo verde embaixo do link ativo.
  const movePill = useCallback(() => {
    const link = linkRefs.current[active];
    if (!link) return;
    setPill({ left: link.offsetLeft, width: link.offsetWidth, ready: true });
  }, [active]);

  useLayoutEffect(() => {
    movePill();
  }, [movePill]);

  useEffect(() => {
    window.addEventListener("resize", movePill);
    return () => window.removeEventListener("resize", movePill);
  }, [movePill]);

  // Atualiza o destaque conforme a pessoa rola a página.
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        if (lockedByClick.current) return;
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive(visible.target.id as SectionId);
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  function handleClick(id: SectionId) {
    setActive(id);
    lockedByClick.current = true;

    const unlock = () => {
      lockedByClick.current = false;
      window.removeEventListener("scrollend", unlock);
    };

    // "scrollend" avisa quando a rolagem suave termina; o timeout cobre navegadores sem suporte.
    window.addEventListener("scrollend", unlock, { once: true });
    window.setTimeout(unlock, 1200);
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 w-full mx-auto px-margin-mobile lg:px-margin flex items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-lg">
          <a
            className="group flex items-center gap-space-sm"
            data-path="sobre-mim"
            href="#sobre-mim"
            onClick={() => handleClick("sobre-mim")}
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
                QA // Analista de Qualidade
              </span>
            </div>
          </a>

          <div className="hidden xl:flex items-center gap-space-xs px-space-md py-1.5 rounded-full bg-surface-container-low">
            <span className="relative flex h-2 w-2">
              <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>

            <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
              Disponível para vagas de QA
            </span>
          </div>
        </div>

        <nav
          aria-label="Seções"
          className="relative hidden lg:flex items-center gap-space-xs p-1 rounded-xl bg-surface-container-lowest/60"
        >
          {/* Fundo verde que desliza até o item ativo */}
          <span
            aria-hidden="true"
            className={`absolute top-1 bottom-1 left-0 rounded-lg bg-primary-container shadow-[0_0_16px_rgba(16,185,129,0.25)] motion-safe:transition-[transform,width] motion-safe:duration-300 motion-safe:ease-out ${
              pill.ready ? "opacity-100" : "opacity-0"
            }`}
            style={{ width: pill.width, transform: `translateX(${pill.left}px)` }}
          />

          {navItems.map((item) => {
            const isActive = active === item.id;

            return (
              <a
                key={item.id}
                ref={(el) => {
                  linkRefs.current[item.id] = el;
                }}
                aria-current={isActive ? "location" : undefined}
                className={`relative z-10 px-space-md py-space-xs rounded-lg font-body-base text-body-sm transition-colors duration-300 ${
                  isActive
                    ? "text-on-primary-container"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
                data-path={item.id}
                href={`#${item.id}`}
                onClick={() => handleClick(item.id)}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-space-md">
          <a
            className="hidden sm:inline-flex items-center justify-center px-space-lg py-space-xs rounded-lg bg-primary-container text-on-primary-container font-body-bold text-body-sm hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(16,185,129,0.25)]"
            data-path="contato"
            href="#contato"
            onClick={() => handleClick("contato")}
          >
            Fale Comigo
          </a>

          <div className="flex items-center pl-space-xs">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Eric Araújo Profile"
              className="w-8 h-8 rounded-full object-cover"
              src="https://media.licdn.com/dms/image/v2/D4E03AQHa17g9g8aW7A/profile-displayphoto-scale_200_200/B4EaCtZVhLG4Ag-/0/1789615498910?e=1794441600&v=beta&t=Tv9rzViDCGXCvCvUvFsyMwOg9NtfligT2lropHZZco0"
            />
          </div>
        </div>
      </div>
    </header>
  );
}