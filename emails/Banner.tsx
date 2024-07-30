import * as React from "react";
import { Column, Link, Row, Section } from "@react-email/components";

import { Rectangle } from "@/app/canvas/page";

interface BannerProps {
  rectangles?: Rectangle[];
}

export const Banner = (props: BannerProps) => {
  const { rectangles = [] } = props;

  const cumulativeHeight = (index: number, rectangles: Rectangle[]) => {
    var maxHeight = 0;
    // Kadane's Algorithm
    for (var i = 0; i < index; i++) {
      maxHeight = Math.max(rectangles[i].height + rectangles[i].y, maxHeight);
    }

    return maxHeight;
  };

  return (
    <Section style={{ width: "300px", height: "300px" }}>
      <Row>
        <Column
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "300px",
            height: "300px",
            borderRadius: "10px",
            display: "block",
            backgroundImage:
              "url(https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
          }}
        >
          {rectangles.map((rect, index) => (
            <Section key={rect.id}>
              <Link
                href={rect.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  marginTop: rect.y - cumulativeHeight(index, rectangles),
                  marginLeft: `${rect.x}px`,
                  width: `${rect.width}px`,
                  height: `${rect.height}px`,
                  border: "none",
                  backgroundColor: rect.color,
                }}
              ></Link>
            </Section>
          ))}
        </Column>
      </Row>
    </Section>
  );
};

export default Banner;
