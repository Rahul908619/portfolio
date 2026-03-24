import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

function OrbitRing({ radius, duration, color, dotCount = 3 }: { radius: number; duration: number; color: string; dotCount?: number }) {
  return (
    <>
      {Array.from({ length: dotCount }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 8,
            height: 8,
            background: color,
            boxShadow: `0 0 8px ${color}, 0 0 16px ${color}`,
            top: "50%",
            left: "50%",
            marginTop: -4,
            marginLeft: -4,
          }}
          animate={{
            x: [
              Math.cos((i / dotCount) * Math.PI * 2) * radius,
              Math.cos((i / dotCount + 0.5) * Math.PI * 2) * radius,
              Math.cos((i / dotCount + 1) * Math.PI * 2) * radius,
            ],
            y: [
              Math.sin((i / dotCount) * Math.PI * 2) * radius * 0.4,
              Math.sin((i / dotCount + 0.5) * Math.PI * 2) * radius * 0.4,
              Math.sin((i / dotCount + 1) * Math.PI * 2) * radius * 0.4,
            ],
          }}
          transition={{ duration, repeat: Infinity, ease: "linear", delay: (i / dotCount) * duration }}
        />
      ))}
    </>
  );
}

function FloatingParticle({ x, y, color, size, delay }: { x: number; y: number; color: string; size: number; delay: number }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        background: color,
        boxShadow: `0 0 ${size * 2}px ${color}`,
        left: `${x}%`,
        top: `${y}%`,
      }}
      animate={{
        y: [0, -12, 0],
        opacity: [0.4, 1, 0.4],
        scale: [1, 1.3, 1],
      }}
      transition={{ duration: 2.5 + delay, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

export function ThreeScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = (canvas.width = 200);
    const H = (canvas.height = 200);
    const cx = W / 2;
    const cy = H / 2;
    let frame = 0;
    let animId: number;

    function drawSphere(t: number) {
      if (!ctx) return;
      ctx.clearRect(0, 0, W, H);

      const rings = 6;
      for (let r = 0; r < rings; r++) {
        const theta = (r / rings) * Math.PI;
        const ringRadius = Math.sin(theta) * 60;
        const yOff = Math.cos(theta) * 60;
        const dots = Math.max(4, Math.round(ringRadius / 8));

        for (let d = 0; d < dots; d++) {
          const phi = (d / dots) * Math.PI * 2 + t * (r % 2 === 0 ? 1 : -1);
          const px = cx + Math.cos(phi) * ringRadius;
          const py = cy + yOff * 0.5 + Math.sin(phi) * ringRadius * 0.3;
          const depth = (Math.cos(phi) + 1) / 2;
          const color = r % 2 === 0 ? `rgba(0,255,255,${0.2 + depth * 0.8})` : `rgba(168,85,247,${0.2 + depth * 0.8})`;
          const size = 1.5 + depth * 2.5;

          ctx.beginPath();
          ctx.arc(px, py, size, 0, Math.PI * 2);
          ctx.fillStyle = color;
          ctx.shadowBlur = 10;
          ctx.shadowColor = color;
          ctx.fill();
        }
      }

      ctx.shadowBlur = 0;
    }

    function animate() {
      frame++;
      drawSphere(frame * 0.012);
      animId = requestAnimationFrame(animate);
    }
    animate();

    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className="relative w-56 h-56 flex items-center justify-center" style={{ perspective: "800px" }}>
      {/* Canvas dot-sphere */}
      <canvas
        ref={canvasRef}
        width={200}
        height={200}
        className="absolute inset-0 m-auto"
        style={{ filter: "drop-shadow(0 0 12px rgba(0,255,255,0.4))" }}
      />

      {/* Orbit rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <OrbitRing radius={90} duration={5} color="#00ffff" dotCount={2} />
        <OrbitRing radius={70} duration={7} color="#a855f7" dotCount={2} />
        <OrbitRing radius={110} duration={9} color="#3b82f6" dotCount={1} />
      </div>

      {/* Floating particles around */}
      <FloatingParticle x={5} y={10} color="#00ffff" size={4} delay={0} />
      <FloatingParticle x={85} y={15} color="#a855f7" size={3} delay={0.6} />
      <FloatingParticle x={10} y={75} color="#3b82f6" size={3.5} delay={1.2} />
      <FloatingParticle x={80} y={80} color="#00ffff" size={2.5} delay={0.9} />
      <FloatingParticle x={50} y={5} color="#a855f7" size={2} delay={1.8} />
      <FloatingParticle x={90} y={50} color="#00ffff" size={3} delay={0.3} />

      {/* Rotating tech labels */}
      {["JS", "PY", "JAVA", "SQL"].map((label, i) => (
        <motion.div
          key={label}
          className="absolute text-[9px] font-mono font-bold"
          style={{
            color: i % 2 === 0 ? "#00ffff" : "#a855f7",
            textShadow: `0 0 8px ${i % 2 === 0 ? "#00ffff" : "#a855f7"}`,
          }}
          animate={{
            rotate: 360,
            x: [
              Math.cos((i / 4) * Math.PI * 2) * 100,
              Math.cos((i / 4 + 0.5) * Math.PI * 2) * 100,
              Math.cos((i / 4 + 1) * Math.PI * 2) * 100,
            ],
            y: [
              Math.sin((i / 4) * Math.PI * 2) * 50,
              Math.sin((i / 4 + 0.5) * Math.PI * 2) * 50,
              Math.sin((i / 4 + 1) * Math.PI * 2) * 50,
            ],
          }}
          transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "linear" }}
        >
          {label}
        </motion.div>
      ))}
    </div>
  );
}
