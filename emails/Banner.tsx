import * as React from "react";
import { Button, Container } from "@react-email/components";

import { Rectangle } from "@/app/canvas/page";

interface BannerProps {
  rectangles: Rectangle[];
}

export const Banner = (props: BannerProps) => {
  const { rectangles } = props;

  console.log("### rectangles", rectangles);
  return (
    <Container className="bg-red-100 w-14 h-14">
      <Button
        href="https://example.com"
        style={{ background: "#000", color: "#fff", padding: "12px 20px" }}
      >
        Click me
      </Button>
    </Container>
  );
};

export default Banner;
