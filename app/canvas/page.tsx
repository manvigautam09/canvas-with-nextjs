"use client";

import { useEffect, useRef, useState, MouseEvent } from "react";

interface Rectangle {
  x: number;
  y: number;
  width: number;
  height: number;
}

const CanvasComponent: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const [startPos, setStartPos] = useState<{ x: number; y: number } | null>(
    null
  );
  const [backgroundImage, setBackgroundImage] =
    useState<HTMLImageElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [rectangles, setRectangles] = useState<Rectangle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        setContext(ctx);
      }
    }
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src =
      "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"; // Replace with a public image URL
    img.crossOrigin = "anonymous"; // Needed if the image is hosted on a different origin
    img.onload = () => {
      setBackgroundImage(img);
      const canvas = canvasRef.current;
      if (canvas && context) {
        context.drawImage(img, 0, 0, canvas.width, canvas.height);
        rectangles.forEach((rect) => {
          context.strokeStyle = "white";
          context.lineWidth = 2;
          context.strokeRect(rect.x, rect.y, rect.width, rect.height);
        });
      }
    };
  }, [context, rectangles]);

  const handleMouseDown = (event: MouseEvent) => {
    const rect = canvasRef.current!.getBoundingClientRect();
    setStartPos({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
    setIsDrawing(true);
  };

  const handleMouseUp = (event: MouseEvent) => {
    const canvas = canvasRef.current;

    if (canvas && startPos && context) {
      const rect = canvas.getBoundingClientRect();
      const endPos = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };
      const width = endPos.x - startPos.x;
      const height = endPos.y - startPos.y;
      const newRect: Rectangle = {
        x: startPos.x,
        y: startPos.y,
        width,
        height,
      };

      if (!isOverlapping(newRect, rectangles)) {
        setRectangles([...rectangles, newRect]);
      }

      context.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
      context.drawImage(backgroundImage!, 0, 0, canvas.width, canvas.height); // Redraw the background image
      rectangles.forEach((rect) => {
        context.strokeStyle = "white";
        context.lineWidth = 2;
        context.strokeRect(rect.x, rect.y, rect.width, rect.height);
      });
      setStartPos(null);
      setIsDrawing(false);
    }
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (startPos && context && isDrawing) {
      const rect = canvasRef.current!.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      context.clearRect(
        0,
        0,
        canvasRef.current!.width,
        canvasRef.current!.height
      ); // Clear the canvas
      context.drawImage(
        backgroundImage!,
        0,
        0,
        canvasRef.current!.width,
        canvasRef.current!.height
      ); // Redraw the background image
      rectangles.forEach((rect) => {
        context.strokeStyle = "white";
        context.lineWidth = 2;
        context.strokeRect(rect.x, rect.y, rect.width, rect.height);
      });

      // Draw the new rectangle
      const width = mouseX - startPos.x;
      const height = mouseY - startPos.y;
      context.strokeStyle = "white";
      context.lineWidth = 2;
      context.strokeRect(startPos.x, startPos.y, width, height);
    }
  };

  const isOverlapping = (newRect: Rectangle, rectangles: Rectangle[]) => {
    return rectangles.some(
      (rect) =>
        !(
          newRect.x + newRect.width <= rect.x ||
          newRect.x >= rect.x + rect.width ||
          newRect.y + newRect.height <= rect.y ||
          newRect.y >= rect.y + rect.height
        )
    );
  };

  return (
    <div className="w-screen h-screen bg-white">
      <canvas
        ref={canvasRef}
        width={300}
        height={300}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{
          border: "2px solid black",
          borderRadius: "10px",
          backgroundColor: "white",
          cursor: "crosshair",
        }}
      />
    </div>
  );
};

export default CanvasComponent;
