import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  children: React.ReactNode;
  once?: boolean;
}

const FadeInOnScroll: React.FC<Props> = ({ className, children, once = true }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  return (
    <div ref={ref} className={cn(visible ? "animate-fade-in" : "opacity-0", className)}>
      {children}
    </div>
  );
};

export default FadeInOnScroll;
