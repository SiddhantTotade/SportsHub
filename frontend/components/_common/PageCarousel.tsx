import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./styles/CarouselButtons.css";
import { responsive } from "../collectionSpotlight/data/carouselSettings";

interface Props {
  children: React.ReactNode;
}

export default function PageCarousel({ children }: Props) {
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      responsive={responsive}
      infinite={true}
      containerClass="carousel-container"
    >
      {children}
    </Carousel>
  );
}
