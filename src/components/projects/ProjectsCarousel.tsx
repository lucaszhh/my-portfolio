import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";
import styles from "./ProjectsCarousel.module.css";
import ProjectCard, { type ProjectCardProps } from "./ProjectCard";

export type ProjectsCarouselItem = ProjectCardProps & {
  id: string;
};

type Props = {
  items: ProjectsCarouselItem[];
  options?: EmblaOptionsType;
};

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mediaQuery.matches);
    onChange();
    mediaQuery.addEventListener("change", onChange);
    return () => mediaQuery.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

export default function ProjectsCarousel({ items, options }: Props) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const mergedOptions = useMemo<EmblaOptionsType>(
    () => ({
      align: "start",
      containScroll: "trimSnaps",
      duration: prefersReducedMotion ? 0 : 25,
      ...options,
    }),
    [options, prefersReducedMotion],
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(mergedOptions);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const reinitRaf = useRef<number | null>(null);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const onInit = useCallback(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const requestReInit = useCallback(() => {
    if (!emblaApi) return;
    if (reinitRaf.current) {
      cancelAnimationFrame(reinitRaf.current);
    }
    reinitRaf.current = requestAnimationFrame(() => {
      emblaApi.reInit();
      reinitRaf.current = null;
    });
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    onInit();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("reInit", onInit);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
      emblaApi.off("reInit", onInit);
    };
  }, [emblaApi, onInit, onSelect]);

  useEffect(() => {
    return () => {
      if (reinitRaf.current) {
        cancelAnimationFrame(reinitRaf.current);
      }
    };
  }, []);

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollPrev();
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollNext();
    }
  };

  const total = items.length;
  if (total === 0) return null;

  return (
    <div
      className={styles.carousel}
      aria-roledescription="carousel"
      aria-label="Proyectos destacados"
    >
      <div
        className={styles.viewport}
        ref={emblaRef}
        tabIndex={0}
        onKeyDown={onKeyDown}
      >
        <div className={styles.container}>
          {items.map((item, index) => (
            <div
              key={item.id}
              className={styles.slide}
              role="group"
              aria-roledescription="slide"
              aria-label={`Proyecto ${index + 1} de ${total}`}
            >
              <ProjectCard
                title={item.title}
                subtitle={item.subtitle}
                image={item.image}
                stack={item.stack}
                link={item.link}
                onImageLoad={requestReInit}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.controls}>
        <div className={styles.buttons}>
          <button
            className={styles.button}
            type="button"
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            aria-label="Anterior"
          >
            Anterior
          </button>
          <button
            className={styles.button}
            type="button"
            onClick={scrollNext}
            disabled={!canScrollNext}
            aria-label="Siguiente"
          >
            Siguiente
          </button>
        </div>
        <div className={styles.dots} role="tablist" aria-label="Paginación">
          {scrollSnaps.map((_, index) => (
            <button
              key={`dot-${index}`}
              type="button"
              className={`${styles.dot} ${
                index === selectedIndex ? styles.dotSelected : ""
              }`}
              aria-label={`Ir al slide ${index + 1}`}
              aria-current={index === selectedIndex ? "true" : undefined}
              onClick={() => emblaApi?.scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
