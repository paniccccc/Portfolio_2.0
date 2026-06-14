import React, { useEffect, useRef } from "react";

function InteractiveBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let mouse = { x: -1000, y: -1000 };

    // Track mouse coordinate
    const handleMouseMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Resize handler with High DPI (Retina) support
    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    // Dot grid configuration
    const gridSpacing = 28;
    const baseRadius = 1.0;
    const maxRadius = 3.5;
    const influenceRadius = 140;

    // Draw loop
    const render = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      const isDark = document.documentElement.classList.contains("dark");
      
      // Always black dots with opacity scaling
      const dotColor = isDark 
        ? "rgba(0, 0, 0, 0.12)" // faint black in dark mode
        : "rgba(0, 0, 0, 0.07)"; // faint black in light mode

      // Color target for hover magnifying (solid black opacity scaling)
      const glowR = 0;
      const glowG = 0;
      const glowB = 0;

      const cols = Math.ceil(window.innerWidth / gridSpacing) + 1;
      const rows = Math.ceil(window.innerHeight / gridSpacing) + 1;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * gridSpacing;
          const y = j * gridSpacing;

          const dx = x - mouse.x;
          const dy = y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          let r = baseRadius;
          let color = dotColor;
          let drawX = x;
          let drawY = y;

          if (dist < influenceRadius) {
            const factor = 1 - dist / influenceRadius; // 1 at center, 0 at edge
            
            // Magnification (size increase)
            r = baseRadius + (maxRadius - baseRadius) * factor;

            // Opacity & glow styling
            const baseOpacity = isDark ? 0.12 : 0.16;
            const opacity = baseOpacity + (0.75 - baseOpacity) * factor;
            color = `rgba(${glowR}, ${glowG}, ${glowB}, ${opacity})`;

            // Spherical lens refraction displacement (bends coordinates outward)
            // Optical center has 0 displacement. Refraction peaks midway, then drops to 0 at lens edge.
            if (dist > 0.1) {
              const angle = Math.atan2(dy, dx);
              const maxDisplacement = 14; // maximum displacement in pixels
              const displace = maxDisplacement * Math.sin(factor * Math.PI); // peak displacement at factor = 0.5
              drawX = x + Math.cos(angle) * displace;
              drawY = y + Math.sin(angle) * displace;
            }
          }

          ctx.beginPath();
          ctx.arc(drawX, drawY, r, 0, Math.PI * 2);
          ctx.fillStyle = color;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none w-full h-full"
    />
  );
}

export default InteractiveBackground;
