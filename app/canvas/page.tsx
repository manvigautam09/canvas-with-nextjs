"use client";
// components/CanvasComponent.tsx

import { useEffect, useRef } from "react";

const CanvasComponent: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
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
    <div className="w-screen h-screen bg-white">
      <canvas
        ref={canvasRef}
        width={300}
        height={300}
        style={{
          border: "2px solid black",
          borderRadius: "10px",
          backgroundColor: "white",
        }}
      />
    </div>
  );
};

export default CanvasComponent;
