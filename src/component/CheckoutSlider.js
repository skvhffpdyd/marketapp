import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CheckoutSlider() {
  
  var settings = {
    infinite: true,  
    slidesToShow: 1,  // 몇장씩 보이게
    slidesToScroll: 1,
    arrows: false,
  };
  return (
      <Slider {...settings}>
          <img src="https://media.discordapp.net/attachments/1043797541113835561/1046049377204052068/2f81869f-7e43-444e-a020-4fc137a985c7_1920x450.jpg?width=1452&height=340"  width="100%" />
      </Slider>
  );
}