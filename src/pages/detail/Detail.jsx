import React, { useEffect } from "react";
import { useGetSingleMovieImagesQuery, useGetSingleMovieQuery } from "../../redux/api/movie.api";
import { Link, useParams } from "react-router-dom";
import back from "../../assets/arrow-back.svg";

const Detail = () => {
  const { id } = useParams();
  const { data } = useGetSingleMovieQuery(id);
  const { data: images } = useGetSingleMovieImagesQuery(id);

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", left: 0, top: 0 });
  }, []);

  return (
    <div className="text-white min-h-screen py-6">
      <div className="container mx-auto max-w-[1400px] px-4">
        
        {/* Background Image + Back Button */}
        <div className="relative rounded-xl overflow-hidden">
          <img
            className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[600px] object-cover"
            src={import.meta.env.VITE_IMAGE_URL + data?.backdrop_path}
            alt={data?.title}
          />
          <Link to="/" title="Back">
            <img
              className="absolute top-4 left-4 w-10 h-10 md:w-12 md:h-12 bg-[#00000085] p-2 rounded-xl hover:bg-[#ffffff30] transition"
              src={back}
              alt="Back Home"
            />
          </Link>
        </div>

        {/* Movie Title */}
        <div className="mt-6 text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">{data?.title}</h1>
        </div>

        {/* Additional Images */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images?.backdrops?.slice(0, 3)?.map((image) => (
            <img
              key={image.file_path}
              className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform"
              src={import.meta.env.VITE_IMAGE_URL + image.file_path}
              alt="Movie Scene"
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Detail;
