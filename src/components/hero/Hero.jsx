import React, { useEffect, useRef, useState } from 'react';
import { useGetMoviesQuery } from '../../redux/api/movie.api'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaPlay } from "react-icons/fa";

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
        pagination={false}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
          data?.results?.slice(0, 5).map((movie) => (
            <SwiperSlide key={movie.id}>
              <div className="relative">
                <img
                  className="rounded-xl w-full h-full object-cover"
                  src={import.meta.env.VITE_IMAGE_URL + movie.backdrop_path}
                  alt={movie.title}
                />

                <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-center">
                  <h2 className="text-white text-[32px] mb-4 font-bold">{movie.title}</h2>
                  <p className="text-white text-[17px] mb-4 font-bold opacity-80">
                    {movie.release_date}
                  </p>
                </div>

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <button className="bg-white cursor-pointer text-[#C61F1F] text-lg font-semibold px-20 py-2 rounded-[12px] flex items-center justify-center gap-2 hover:bg-gray-200">
                  <FaPlay /> Смотреть
                  </button>
                </div>
              </div>
            </SwiperSlide>

          ))
        }
      </Swiper>
    </div>
  )
}

export default Hero