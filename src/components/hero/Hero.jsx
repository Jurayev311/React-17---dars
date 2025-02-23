import React, { useEffect } from 'react';
import { useGetMoviesQuery } from '../../redux/api/movie.api';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaPlay } from "react-icons/fa";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { data, isLoading } = useGetMoviesQuery();
  console.log(data);

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", left: 0, top: 0 });
  }, []);

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
            <SwiperSlide key={movie.id} className='p-3'>
              <div className="relative">
                <img
                  className="rounded-xl w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[600px] object-cover"
                  src={import.meta.env.VITE_IMAGE_URL + movie.backdrop_path}
                  alt={movie.title}
                />

                <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-full px-4 md:px-10 text-center">
                  <h2 className="text-white text-[20px] sm:text-[24px] md:text-[28px] lg:text-[34px] xl:text-[40px] mb-2 font-bold">{movie.title}</h2>
                  <p className="text-white text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] mb-3 font-bold opacity-80">
                    {movie.release_date}
                  </p>
                </div>

                <Link to={`movie/${movie.id}`} className="absolute bottom-6 left-1/2 transform -translate-x-1/2 mt-2">
                  <button className="bg-white cursor-pointer text-[#C61F1F] text-sm sm:text-base md:text-lg lg:text-xl font-semibold px-10 sm:px-14 md:px-20 lg:px-24 py-3 rounded-[12px] flex items-center justify-center gap-2 hover:bg-gray-200">
                    <FaPlay /> Смотреть
                  </button>
                </Link>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>

      <div className='mt-[70px] rounded-2xl overflow-hidden'>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={false}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            '@0.00': { slidesPerView: 1, spaceBetween: 10 },
            '@0.75': { slidesPerView: 2, spaceBetween: 20 },
            '@1.00': { slidesPerView: 3, spaceBetween: 40 },
            '@1.50': { slidesPerView: 4, spaceBetween: 50 },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {
            data?.results?.slice(0, 15).map((movie) => (
              <SwiperSlide key={movie.id} className='p-3'>
                <Link to={`/movie/${movie.id}`}>
                <img 
                  className='w-[160px] sm:w-[200px] md:w-[250px] lg:w-[300px] h-[240px] sm:h-[300px] md:h-[360px] lg:h-[420px] rounded-xl cursor-pointer' 
                  src={import.meta.env.VITE_IMAGE_URL + movie.poster_path} 
                  alt={movie.title} 
                />
                </Link>
                <h2 className='text-white text-sm sm:text-base md:text-lg lg:text-xl font-medium mt-2'>{movie.title}</h2>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;