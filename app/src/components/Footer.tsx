"use client";

import { ArrowUp, Code, Mail, Share } from "lucide-react";

export function Footer() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer className="w-full bg-surface-container-lowest mt-space-3xl">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin py-space-2xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-space-xl">
          <div className="flex flex-col items-center md:items-start gap-space-xs">
            <div className="flex items-center gap-space-sm">
              <span className="font-code-mono text-code-mono text-primary font-bold">
                {"<EA />"}
              </span>

              <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                Eric Araújo
              </span>
            </div>

            <p className="font-body-sm text-body-sm text-on-surface-variant text-center md:text-left max-w-sm">
              Engenharia de software de alta performance, arquitetura escalável
              e interfaces elegantes.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-space-lg">
            <a
              className="group flex items-center gap-space-xs font-code-mono text-code-mono text-on-surface-variant hover:text-primary transition-colors"
              href="https://github.com/eric-araujo-18"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-body-sm">
                <Code className="w-5 h-5" />
              </span>

              <span>github.com/eric-araujo-18</span>
            </a>

            <a
              className="group flex items-center gap-space-xs font-code-mono text-code-mono text-on-surface-variant hover:text-secondary transition-colors"
              href="https://linkedin.com/in/eric-albuquerque-b08087218"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-body-sm">
                <Share className="w-5 h-5" />
              </span>

              <span>linkedin.com/in/eric-albuquerque</span>
            </a>

            <a
              className="group flex items-center gap-space-xs font-code-mono text-code-mono text-on-surface-variant hover:text-tertiary transition-colors"
              href="mailto:contato@ericaraujo.dev"
            >
              <span className="material-symbols-outlined text-body-sm">
                <Mail className="w-5 h-5" />
              </span>

              <span>E-mail</span>
            </a>
          </div>

          <div className="flex items-center gap-space-md">
            <button
              aria-label="Voltar ao topo"
              className="flex items-center justify-center p-space-sm rounded-lg bg-surface-container-high text-on-surface-variant hover:text-primary hover:bg-surface-bright transition-all"
              onClick={scrollToTop}
              type="button"
            >
              <span className="material-symbols-outlined">
                <ArrowUp className="w-5 h-5 cursor-pointer" />
              </span>
            </button>
          </div>
        </div>

        <div className="mt-space-xl pt-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-sm text-center sm:text-left">
          <p className="font-label-caps text-label-caps text-on-surface-variant">
            © 2025 Eric Araújo. Todos os direitos reservados.
          </p>

          <p className="font-label-caps text-label-caps text-on-surface-variant">
            Crafted with Obsessive Engineering & Modern Precision
          </p>
        </div>
      </div>
    </footer>
  );
}