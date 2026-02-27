"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX - 4}px`;
        dotRef.current.style.top = `${mouseY - 4}px`;
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = `${ringX - 16}px`;
        ringRef.current.style.top = `${ringY - 16}px`;
      }
      animId = requestAnimationFrame(animate);
    };

    const onMouseEnterLink = () => {
      if (ringRef.current) {
        ringRef.current.style.transform = "scale(2)";
        ringRef.current.style.borderColor = "rgba(0,245,255,0.8)";
      }
      if (dotRef.current) dotRef.current.style.transform = "scale(0)";
    };

    const onMouseLeaveLink = () => {
      if (ringRef.current) {
        ringRef.current.style.transform = "scale(1)";
        ringRef.current.style.borderColor = "rgba(0,245,255,0.5)";
      }
      if (dotRef.current) dotRef.current.style.transform = "scale(1)";
    };

    window.addEventListener("mousemove", onMouseMove);
    animId = requestAnimationFrame(animate);

    const links = document.querySelectorAll("a, button, [role=button]");
    links.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnterLink);
      el.addEventListener("mouseleave", onMouseLeaveLink);
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
