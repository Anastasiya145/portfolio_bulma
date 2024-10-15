import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

type CarouselProps = {
  imagesSrc: any[];
};

const Carousel: React.FC<CarouselProps> = ({ imagesSrc }) => {
  return (
    <section className="hero is-medium">
      <div className="hero-carousel">
        <Splide
          options={{
            type: "loop",
            autoplay: true,
            pauseOnHover: true,
            interval: 5000,
            perPage: 1,
            perMove: 1,
          }}
        >
          {/* <SplideSlide>
            <video controls>
              <source src="your-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </SplideSlide> */}
          {imagesSrc.map((image, index) => (
            <SplideSlide>
              <img src={image} alt={`Project ${index}`} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default Carousel;
