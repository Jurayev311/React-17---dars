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
                  <h2 className=" text-white text-[20px] sm:text-[24px] md:text-[28px] lg:text-[34px] xl:text-[40px] mb-2 font-bold">{movie.title}</h2>
                  <p className=" text-white text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] mb-3 font-bold opacity-80">
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
  slidesPerView={1} // Default holat (eng kichik ekranlar uchun)
  spaceBetween={10}
  pagination={false}
  autoplay={{
    delay: 5000,
    disableOnInteraction: false,
  }}
  breakpoints={{
    300: { slidesPerView: 2, spaceBetween: 5 },  // 300px+ ekranlar uchun 2 ta slayd
    480: { slidesPerView: 3, spaceBetween: 10 }, // 480px+ ekranlar uchun 2 ta slayd
    640: { slidesPerView: 4, spaceBetween: 10 }, // 640px+ ekranlar uchun 2 ta slayd
    768: { slidesPerView: 5, spaceBetween: 15 }, // 768px+ ekranlar uchun 3 ta slayd
    1024: { slidesPerView: 5, spaceBetween: 20 }, // 1024px+ ekranlar uchun 4 ta slayd
  }}
  modules={[Pagination, Autoplay]}
  className="mySwiper"
>
  {
    data?.results?.slice(0, 15).map((movie) => (
      <SwiperSlide key={movie.id} className='p-3'>
        <Link to={`/movie/${movie.id}`}>
          <img 
            className='w-[140px] sm:w-[180px] md:w-[220px] lg:w-[260px] h-[200px] sm:h-[260px] md:h-[320px] lg:h-[380px] rounded-xl cursor-pointer' 
            src={import.meta.env.VITE_IMAGE_URL + movie.poster_path} 
            alt={movie.title} 
          />
        </Link>
        <h2 className='line-clamp-1 text-xs sm:text-sm md:text-base lg:text-lg font-medium mt-2'>{movie.title}</h2>
      </SwiperSlide>
    ))
  }
</Swiper>

      </div>
    </div>
  );
};

export default Hero;