import { FC } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

type CarouselProps = {
  imagesSrc: string[];
};

const Carousel: FC<CarouselProps> = ({ imagesSrc }) => {
  return (
    <section className="hero is-medium">
      <div className="hero-carousel">
        <Splide
          options={{
            type: "loop",
            perPage: 1,
            perMove: 1,
          }}
        >
          {imagesSrc.map((image, index) => (
            <SplideSlide key={index}>
              <img src={image} alt={`Project ${index}`} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default Carousel;
