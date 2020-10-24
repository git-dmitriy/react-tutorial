import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import mountains_1 from "../assets/img/mountains_1.jpg";
import mountains_2 from "../assets/img/mountains_2.jpg";

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={mountains_1}
            alt="German mountains at sunset"
          />
          <Carousel.Caption>
            <h2>German Mountains</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              asperiores.{" "}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={mountains_2}
            alt="Icelandic mountains at sunset"
          />
          <Carousel.Caption>
            <h2>Icelandic Mountains</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              asperiores.{" "}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
