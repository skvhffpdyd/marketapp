import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/SimpleSlider.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,  // 넘어가는 속도
    slidesToShow: 1,  // 몇장씩 보이게
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <Slider {...settings}>
      <div>
        <img src="https://media.discordapp.net/attachments/1043797541113835561/1045963394114658344/b17ea7fc321c4a2c.jpg"  width="100%" />
      </div>
      <div>
        <img src="https://cdn.discordapp.com/attachments/1043797541113835561/1045963785363525663/ca020dad1d6b4f33.jpg"  width="100%" />
      </div>
      <div>
        <img src="https://cdn.discordapp.com/attachments/1043797541113835561/1045963785552265287/d0fdfe34052a4cc8.jpg"  width="100%" />
      </div>
      <div>
        <img src="https://cdn.discordapp.com/attachments/1043797541113835561/1045968867966595122/f0bb4270cac74c67.jpg"  width="100%" />
      </div>
      <div>
        <img src="https://media.discordapp.net/attachments/1043797541113835561/1045968868138565694/bf424a32a800418a.jpg"  width="100%" />
      </div>
    </Slider>
  );
}