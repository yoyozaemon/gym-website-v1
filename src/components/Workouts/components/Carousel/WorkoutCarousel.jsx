import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import WorkoutCard from "../WorkoutCard/WorkoutCard"; 

const WorkoutCarousel = ({ workouts }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      {workouts.map((workout) => (
        <SwiperSlide key={workout.title}>
          <WorkoutCard {...workout} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkoutCarousel;
