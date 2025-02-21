import React, { useEffect, useRef, useState } from 'react';
import { useGetMoviesQuery } from '../../redux/api/movie.api'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Hero = () => {
  const { data, isLoading } = useGetMoviesQuery()
  console.log(data);

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", left: 0, top: 0 })
  }, [])

  return (
    <div className='container mx-auto max-w-[1400px] overflow-hidden rounded-xl'>
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
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
          data?.results?.slice(0, 5).map((movie) => (
            <SwiperSlide key={movie.id}>
              <img className='rounded-xl' src={import.meta.env.VITE_IMAGE_URL + movie.backdrop_path} alt="" />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default Hero