"use client";
// components/CanvasComponent.tsx

import { useEffect, useRef } from "react";

const CanvasComponent: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.style.width = "300px";
      canvas.style.height = "400px";
      canvas.style.border = "1px solid black";
      canvas.style.backgroundColor = "white";
      const context = canvas.getContext("2d");
      if (context) {
        // Example drawing: A red rectangle
        context.fillStyle = "red";
        context.fillRect(10, 10, 150, 100);

        // Example drawing: A blue circle
        context.beginPath();
        context.arc(200, 200, 50, 0, 2 * Math.PI);
        context.fillStyle = "blue";
        context.fill();
      }
    }
  }, []);

  return (
    <>
      <canvas ref={canvasRef} width={500} height={500} />
    </>
  );
};

export default CanvasComponent;
