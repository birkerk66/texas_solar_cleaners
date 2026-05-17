import { useEffect, useRef } from "react";

/**
 * Attach to any container whose direct children should fade+rise on scroll.
 * Each child gets a staggered delay based on its index.
 */
export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const children = Array.from(el.children) as HTMLElement[];

    // Set initial hidden state
    children.forEach((child, i) => {
      child.style.opacity = "0";
      child.style.transform = "translateY(24px)";
      child.style.transition = `opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.15}s, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.15}s`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            children.forEach((child) => {
              child.style.opacity = "1";
              child.style.transform = "translateY(40px)";
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
