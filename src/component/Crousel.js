import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Slider from "react-slick";
// import { Carousel, Wrap } from "./components/style";
// import { Carousel, Wrap } from './style';
const Wrap = styled.div`
  cursor: pointer;
  height: 50dvh;
  img {
    //border: 4px solid black;
    width: 100%;
    height: 100%;

    transition-duration: 500ms;
    &:hover {
      border: 4px solid rgba (249, 249, 249, 0.8);
    }
  }
`;

const Carousel = styled(Slider)`
  .slick-list {
    overflow: hidden;
  }
  ul li button {
    &:before {
      font-size: 10px;
      color: ${(props) => props.theme.white};
    }
  }
  li.slick-active button:before {
    color: ${(props) => props.theme.white};
  }
  button {
    z-index: 10;
  }
  .slick-dots {
    bottom: 25px;
    padding-right: 20px;
  }
  .slick-dots li button:before {
    font-size: 10px;
  }

  .slick-next {
    right: 10px;
  }
  .slick-prev {
    left: 10px;
  }
  .slick-next:before {
  }
  .slick-prev:before {
  }
`;

const Crousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const [mounted, setmounted] = useState(false);

  useEffect(() => {
    setmounted(true);
  }, []);

  if (!mounted) {
    return;
  }

  return (
    <div className="">
      <Carousel {...settings}>
        <Wrap>
          <img
            alt="img"
            height={1000}
            width={1000}
            style={{ width: "100%", height: "100%" }}
            src={"/images/img1.jpeg"}
          />
        </Wrap>
        <Wrap className="">
          <img
            alt="img"
            height={1000}
            width={1000}
            style={{ width: "100%", height: "100%" }}
            src={"/images/img2.jpeg"}
          />
        </Wrap>
        <Wrap className="">
          <img
            alt="img"
            height={1000}
            width={1000}
            style={{ width: "100%", height: "100%" }}
            src={"/images/img4.jpeg"}
          />
        </Wrap>
        <Wrap className="">
          <img
            src={"/images/img4.jpeg"}
            height={1000}
            width={1000}
            style={{ width: "100%", height: "100%" }}
            alt="scale"
          />
        </Wrap>
        <Wrap className="">
          <img
            src={"/images/img5.jpeg"}
            height={1000}
            width={1000}
            style={{ width: "100%", height: "100%" }}
            alt="scale"
          />
        </Wrap>
        <Wrap className="">
          <img
            src={"/images/img6.jpeg"}
            height={1000}
            width={1000}
            style={{ width: "100%", height: "100%" }}
            alt="scale"
          />
        </Wrap>
      </Carousel>
    </div>
  );
};

export default Crousel;
