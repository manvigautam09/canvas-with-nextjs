// components/RectangleInputs.tsx

import { Rectangle } from "@/app/canvas/page";
import React from "react";

interface RectangleInputsProps {
  rectangles: Rectangle[];
  onUrlChange: (index: number, url: string) => void;
}

const RectangleInputs: React.FC<RectangleInputsProps> = ({
  rectangles,
  onUrlChange,
}) => {
  return (
    <div className="flex-col space-y-2 text-black">
      {rectangles.map((rect, index) => (
        <div key={rect.id} className="flex space-x-2 items-center">
          <label>Rectangle {index + 1} URL:</label>
          <input
            type="text"
            value={rect.url}
            className="border border-gray-400 rounded-md h-10 focus:outline-none px-2 text-black w-48"
            onChange={(e) => onUrlChange(index, e.target.value)}
            style={{ borderColor: rect.color }}
          />
        </div>
      ))}
    </div>
  );
};

export default RectangleInputs;
