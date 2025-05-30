// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { CourseCardVertical } from "./courseCardVertical";
import { Autoplay } from "swiper/modules";

export function CourseCarousel() {
   return (
      <Swiper
         className="mySwiper"
         modules={[Autoplay]}
         autoplay={{
            delay: 5000, // Delay between transitions (in ms)
            disableOnInteraction: false, // Continue autoplay after user interaction
         }}
         loop={true}
      >
         <SwiperSlide>
            <CourseCardVertical />
         </SwiperSlide>
         <SwiperSlide>
            <CourseCardVertical />
         </SwiperSlide>
         <SwiperSlide>
            <CourseCardVertical />
         </SwiperSlide>
         <SwiperSlide>
            <CourseCardVertical />
         </SwiperSlide>
         <SwiperSlide>
            <CourseCardVertical />
         </SwiperSlide>
         <SwiperSlide>
            <CourseCardVertical />
         </SwiperSlide>
         <SwiperSlide>
            <CourseCardVertical />
         </SwiperSlide>
         <SwiperSlide>
            <CourseCardVertical />
         </SwiperSlide>
         <SwiperSlide>
            <CourseCardVertical />
         </SwiperSlide>
      </Swiper>
   );
}
