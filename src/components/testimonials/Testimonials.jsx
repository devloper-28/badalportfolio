import { Component } from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    name: "Advan Hune",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt enim ipsam debitis vel?",
    image: AVTR1
  },
  {
    id: 1,
    name: "Advan Hune",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt enim ipsam debitis vel?",
    image: AVTR2
  },
  {
    id: 1,
    name: "Advan Hune",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt enim ipsam debitis vel?",
    image: AVTR3
  },
  {
    id: 1,
    name: "Advan Hune",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt enim ipsam debitis vel?",
    image: AVTR4
  }
];
class Testimonials extends Component {
  render() {
    return (
  <></>
    );
  }
}

export default Testimonials;
