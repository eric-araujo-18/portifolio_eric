"use client";

import { useEffect } from "react";

export function usePortfolioInteractions() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const scrollTopButton = target.closest<HTMLElement>("[data-scroll-top='true']");
      if (scrollTopButton) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const anchor = target.closest<HTMLAnchorElement>('a[href^="#"]');
      if (!anchor) return;
      const targetId = anchor.getAttribute("href")?.slice(1);
      if (!targetId) return;
      const element = document.getElementById(targetId);
      if (!element) return;

      event.preventDefault();
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    };

    const onSubmit = (event: SubmitEvent) => {
      const form = event.target as HTMLFormElement;
      if (form?.id !== "contact-form") return;
      event.preventDefault();
      document.getElementById("form-feedback")?.classList.remove("hidden");
      form.reset();
    };

    document.addEventListener("click", onClick);
    document.addEventListener("submit", onSubmit);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("submit", onSubmit);
    };
  }, []);
}
