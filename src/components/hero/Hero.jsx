import React, { useRef, useState } from 'react';
import { useGetMoviesQuery } from '../../redux/api/movie.api'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Hero = () => {
  const { data, isLoading } = useGetMoviesQuery()
  console.log(data);

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {
        data?.results?.slice(0, 5).map((movie) => (
          <SwiperSlide key={movie.id}>
            <img src={import.meta.env.VITE_IMAGE_URL + movie.backdrop_path} alt="" />
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}

export default Hero