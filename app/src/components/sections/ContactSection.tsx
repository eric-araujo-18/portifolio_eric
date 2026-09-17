"use client";

import { Mail, MessageCircle, MessagesCircle, Send, Terminal } from "lucide-react";
import { FormEvent } from "react";

export function ContactSection() {
  const whatsappNumber = "5588997670377";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    const subjectLabels: Record<string, string> = {
      projeto: "Novo Projeto / Contratação",
      consultoria: "Consultoria Técnica / Arquitetura",
      networking: "Networking & Tecnologia",
      outro: "Outro assunto",
    };

    const subjectText =
      subjectLabels[String(subject)] ?? String(subject);

    const whatsappMessage = `
Olá Eric! Vi seu portfólio e gostaria de entrar em contato.

Nome: ${name}
E-mail: ${email}
Assunto: ${subjectText}

Mensagem:
${message}
    `.trim();

    const encodedMessage = encodeURIComponent(whatsappMessage);

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <section
      className="relative max-w-7xl mx-auto px-margin-mobile lg:px-margin py-space-3xl mb-space-2xl"
      id="contato"
    >
      <div className="rounded-2xl bg-surface-container shadow-2xl p-space-xl lg:p-space-3xl relative overflow-hidden">
        {/* Glow de fundo */}
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl relative z-10">
          {/* Informações de contato */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-space-sm mb-space-sm">
                <span className="font-code-mono text-label-caps text-primary font-bold">
                  05 //
                </span>

                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
                  Comunicação Direta
                </span>
              </div>

              <h2 className="font-headline-md text-headline-md text-on-surface">
                Vamos Construir Algo Excepcional Juntos?
              </h2>

              <p className="mt-space-md font-body-base text-body-base text-on-surface-variant leading-relaxed">
                Tem um projeto em mente, uma oportunidade de engenharia ou deseja
                bater um papo sobre sistemas de alto desempenho? Preencha o
                formulário e a mensagem será enviada diretamente pelo WhatsApp.
              </p>
            </div>

            <div className="mt-space-xl space-y-space-md">
              {/* E-mail */}
              <a
                className="flex items-center gap-space-md p-space-md rounded-lg bg-surface-container-low hover:bg-surface-container-high transition-colors group"
                href="mailto:ericalbuquerque8@hotmail.com"
              >
                <div className="p-2.5 rounded-md bg-surface-container-highest text-primary group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-headline-sm">
                    <Mail className="w-5 h-5" />
                  </span>
                </div>

                <div className="min-w-0">
                  <span className="font-label-caps text-label-caps text-on-surface-variant uppercase block">
                    E-mail Direto
                  </span>

                  <span className="font-code-mono text-code-mono text-on-surface truncate block">
                    ericalbuquerque8@hotmail.com
                  </span>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                className="flex items-center gap-space-md p-space-md rounded-lg bg-surface-container-low hover:bg-surface-container-high transition-colors group"
                href="https://wa.me/5588997670377"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="p-2.5 rounded-md bg-surface-container-highest text-primary group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-headline-sm">
                    <MessagesCircle className="w-5 h-5" />
                  </span>
                </div>

                <div className="min-w-0">
                  <span className="font-label-caps text-label-caps text-on-surface-variant uppercase block">
                    WhatsApp
                  </span>

                  <span className="font-code-mono text-code-mono text-on-surface truncate block">
                    (88) 99767-0377
                  </span>
                </div>
              </a>

              {/* GitHub */}
              <a
                className="flex items-center gap-space-md p-space-md rounded-lg bg-surface-container-low hover:bg-surface-container-high transition-colors group"
                href="https://github.com/eric-araujo-18"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="p-2.5 rounded-md bg-surface-container-highest text-tertiary group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-headline-sm">
                    <Terminal className="w-5 h-5" />
                  </span>
                </div>

                <div className="min-w-0">
                  <span className="font-label-caps text-label-caps text-on-surface-variant uppercase block">
                    GitHub Workspace
                  </span>

                  <span className="font-code-mono text-code-mono text-on-surface truncate block">
                    github.com/eric-araujo-18
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Formulário */}
          <div className="lg:col-span-7">
            <form
              className="p-space-xl rounded-xl bg-surface-container-low shadow-md space-y-space-md"
              id="contact-form"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  className="block font-label-caps text-label-caps text-on-surface-variant uppercase mb-2"
                  htmlFor="name"
                >
                  Seu Nome Completo
                </label>

                <input
                  className="w-full px-space-md py-3 rounded-lg bg-surface-dim text-on-surface font-body-base placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-secondary/40 transition-all"
                  id="name"
                  name="name"
                  placeholder="Ex: Alexandre Fonseca"
                  required
                  type="text"
                />
              </div>

              <div>
                <label
                  className="block font-label-caps text-label-caps text-on-surface-variant uppercase mb-2"
                  htmlFor="email"
                >
                  Seu E-mail Corporativo ou Pessoal
                </label>

                <input
                  className="w-full px-space-md py-3 rounded-lg bg-surface-dim text-on-surface font-body-base placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-secondary/40 transition-all"
                  id="email"
                  name="email"
                  placeholder="alexandre@empresa.com"
                  required
                  type="email"
                />
              </div>

              <div>
                <label
                  className="block font-label-caps text-label-caps text-on-surface-variant uppercase mb-2"
                  htmlFor="subject"
                >
                  Assunto Principal
                </label>

                <select
                  className="w-full px-space-md py-3 rounded-lg bg-surface-dim text-on-surface font-body-base focus:outline-none focus:ring-2 focus:ring-secondary/40 transition-all"
                  id="subject"
                  name="subject"
                  defaultValue="projeto"
                >
                  <option value="projeto">
                    Novo Projeto / Contratação
                  </option>

                  <option value="consultoria">
                    Consultoria Técnica / Arquitetura
                  </option>

                  <option value="networking">
                    Networking & Tecnologia
                  </option>

                  <option value="outro">
                    Outro assunto
                  </option>
                </select>
              </div>

              <div>
                <label
                  className="block font-label-caps text-label-caps text-on-surface-variant uppercase mb-2"
                  htmlFor="message"
                >
                  Mensagem
                </label>

                <textarea
                  className="w-full px-space-md py-3 rounded-lg bg-surface-dim text-on-surface font-body-base placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-secondary/40 transition-all resize-none"
                  id="message"
                  name="message"
                  placeholder="Conte detalhes sobre a demanda, escopo ou ideia..."
                  required
                  rows={4}
                />
              </div>

              <button
                className="w-full inline-flex items-center justify-center gap-space-xs px-space-xl py-3.5 rounded-lg bg-primary text-on-primary font-body-bold text-body-base shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
                type="submit"
              >
                <span>Enviar pelo WhatsApp</span>

                <span className="material-symbols-outlined text-body-sm">
                  <Send className="w-5 h-5" />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}