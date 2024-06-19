import * as React from "react";
import { Column, Container, Link, Row, Section } from "@react-email/components";

import { Rectangle } from "@/app/canvas/page";

interface BannerProps {
  rectangles?: Rectangle[];
}

export const Banner = (props: BannerProps) => {
  const {
    rectangles = [
      {
        id: "33abac15-868a-41ec-a6a7-416258886239",
        x: 32.00347137451172,
        y: 28.00347137451172,
        width: 149,
        height: 97,
        url: "https://colourpop.com/",
        color: "red",
      },
    ],
  } = props;

  return (
    <Section
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "300px",
        height: "300px",

        position: "relative",
        borderRadius: "10px",
        borderCollapse: "collapse",
        backgroundImage:
          "url(https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
      }}
    >
      {rectangles.map((rect) => (
        <Row key={rect.id}>
          <Column
            style={{
              padding: 0,
              margin: 0,
              width: `${rect.x}px`,
              height: "100%",
              display: rect.y === 0 ? "none" : "table-cell",
            }}
          ></Column>
          <Column>
            <Link
              href={rect.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                width: `${rect.width}px`,
                height: `${rect.height}px`,
                textDecoration: "none",
                position: "absolute",
                top: `${rect.y}px`,
                left: `${rect.x}px`,
                border: "none",
              }}
            ></Link>
          </Column>
          <Column
            style={{
              padding: 0,
              margin: 0,
              width: `${600 - rect.x - rect.width}px`,
              height: "100%",
              display: rect.y === 0 ? "none" : "table-cell",
            }}
          ></Column>
        </Row>
      ))}
    </Section>
  );
};

export default Banner;
