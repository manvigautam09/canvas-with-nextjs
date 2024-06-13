// components/RectangleInputs.tsx

import React from "react";

interface Rectangle {
  x: number;
  y: number;
  width: number;
  height: number;
  url: string;
}

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
        <div key={index} className="flex space-x-2 items-center">
          <label>Rectangle {index + 1} URL:</label>
          <input
            type="text"
            value={rect.url}
            className="border border-gray-400 rounded-md h-10 focus:outline-none px-2 text-black w-48"
            onChange={(e) => onUrlChange(index, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};

export default RectangleInputs;
