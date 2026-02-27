"use client";
import { useEffect, useRef } from "react";

export default function GlobeVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    canvas.width = 400;
    canvas.height = 400;

    const cx = 200, cy = 200, r = 150;
    let angle = 0;
    let animId: number;
    let running = true;
    const c = ctx; // non-null reference for use inside draw()

    // Fewer points
    const points: { lat: number; lng: number; active: boolean }[] = [];
    for (let i = 0; i < 80; i++) {
      points.push({
        lat: (Math.random() - 0.5) * Math.PI,
        lng: Math.random() * Math.PI * 2,
        active: Math.random() > 0.85,
      });
    }

    // Fewer connections
    const connections: number[][] = [];
    for (let i = 0; i < 15; i++) {
      connections.push([
        Math.floor(Math.random() * points.length),
        Math.floor(Math.random() * points.length),
      ]);
    }

    function project(lat: number, lng: number, rot: number) {
      const x3d = Math.cos(lat) * Math.sin(lng + rot);
      const y3d = Math.sin(lat);
      const z3d = Math.cos(lat) * Math.cos(lng + rot);
      return { x: cx + r * x3d, y: cy - r * y3d, z: z3d };
    }

    let frame = 0;
    function draw() {
      if (!running) return;
      frame++;
      c.clearRect(0, 0, 400, 400);

      // Fewer meridians and parallels
      for (let lng = 0; lng < Math.PI * 2; lng += Math.PI / 4) {
        c.beginPath();
        let started = false;
        for (let lat = -Math.PI / 2; lat <= Math.PI / 2; lat += 0.08) {
          const p = project(lat, lng, angle);
          if (p.z > 0) {
            if (!started) { c.moveTo(p.x, p.y); started = true; }
            else c.lineTo(p.x, p.y);
          } else { started = false; }
        }
        c.strokeStyle = "rgba(0,245,255,0.07)";
        c.lineWidth = 0.5;
        c.stroke();
      }

      for (let lat = -Math.PI / 2; lat <= Math.PI / 2; lat += Math.PI / 4) {
        c.beginPath();
        let started = false;
        for (let lng2 = 0; lng2 <= Math.PI * 2; lng2 += 0.08) {
          const p = project(lat, lng2, angle);
          if (p.z > 0) {
            if (!started) { c.moveTo(p.x, p.y); started = true; }
            else c.lineTo(p.x, p.y);
          } else { started = false; }
        }
        c.strokeStyle = "rgba(0,245,255,0.07)";
        c.lineWidth = 0.5;
        c.stroke();
      }

      // Connections — every other frame
      if (frame % 2 === 0) {
        connections.forEach(([a, b]) => {
          const pa = project(points[a].lat, points[a].lng, angle);
          const pb = project(points[b].lat, points[b].lng, angle);
          if (pa.z > 0 && pb.z > 0) {
            c.beginPath();
            c.moveTo(pa.x, pa.y);
            c.lineTo(pb.x, pb.y);
            c.strokeStyle = "rgba(0,200,255,0.12)";
            c.lineWidth = 0.5;
            c.stroke();
          }
        });
      }

      // Points
      points.forEach((pt) => {
        const p = project(pt.lat, pt.lng, angle);
        if (p.z > 0.1) {
          c.beginPath();
          c.arc(p.x, p.y, pt.active ? 2.5 : 1, 0, Math.PI * 2);
          c.fillStyle = pt.active
            ? `rgba(0,245,255,${0.5 + p.z * 0.5})`
            : `rgba(0,150,200,${0.15 + p.z * 0.2})`;
          c.fill();
        }
      });

      angle += 0.004;
      animId = requestAnimationFrame(draw);
    }

    draw();
    return () => {
      running = false;
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full max-w-[400px] opacity-75"
      style={{ filter: "drop-shadow(0 0 30px rgba(0,245,255,0.15))" }}
    />
  );
}
