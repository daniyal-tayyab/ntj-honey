import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import FeedbackCard from "../../../feedback-card/FeedbackCard";
import { Container } from "./Feedback.styles";

import "swiper/css";

const Feedback = () => {
  return (
    <Container>
      <Swiper
        className="mySwiper"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <FeedbackCard />
        </SwiperSlide>
        <SwiperSlide>
          <FeedbackCard />
        </SwiperSlide>
        <SwiperSlide>
          <FeedbackCard />
        </SwiperSlide>
        <SwiperSlide>
          <FeedbackCard />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Feedback;
