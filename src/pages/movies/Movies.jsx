import React, { useEffect, useState } from "react";
import { useGetGenresQuery, useGetMoviesQuery } from "../../redux/api/movie.api";
import { Pagination } from "antd";
import { Link, useSearchParams } from "react-router-dom";
import { Empty } from 'antd';
import noImage from "../../assets/no-image.png";

const Movies = () => {
  const [params, setParams] = useSearchParams();
  const page = params.get("page") || 1;
  let with_genres = params.get("genres") || ""

  const { data } = useGetMoviesQuery({ page, without_genres: "18,36,10749", with_genres: with_genres.split("-").slice(1).join(",") });

  const {data: genreData} = useGetGenresQuery()
  console.log(genreData);
  

  const handleChangePage = (p) => {
    if (p === 1) {
      params.delete("page");
    } else {
      params.set("page", p);
    }
    setParams(params);
  };

  const handleChangeGenre = id => {
    let array = with_genres.split("-")

    if(array.includes(id.toString())){
      array = array.filter(i => i != id)
    } else {
      array.push(id)
    }
    params.set("genres", array.join("-"))
    params.set("page", 1)
    setParams(params);
  }

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", left: 0, top: 0 });
  }, [page]);

  return (
    <>


    <div id="genreContainer" className="container mx-auto max-w-[1308px] flex items-center justify-start gap-2 mb-4 mt-2 overflow-auto">
    {
      genreData?.genres?.map((genre) => (
        <div onClick={() => handleChangeGenre(genre.id)} key={genre.id} className={`text-white whitespace-nowra px-3.5 py-1 cursor-pointer rounded-xl active:scale-95 duration-200 ${with_genres.includes(genre.id.toString())? "bg-red-600" : "bg-slate-900"}`}>
          {genre.name}
        </div>
      ))
    }
    </div>
    {/* {
      !data.total_results && <Empty />
    } */}

      <div className=" container mx-auto flex flex-wrap gap-4 justify-center mt-2">
        {data?.results?.map((movie) => (
          <div key={movie.id} className="w-[160px] sm:w-[200px] md:w-[250px] lg:w-[300px]">
            <div>
              <Link to={`/movie/${movie.id}`}>
                <img
                  className="w-full h-[240px] sm:h-[300px] md:h-[360px] lg:h-[420px] rounded-xl cursor-pointer"
                  src={movie.poster_path ? import.meta.env.VITE_IMAGE_URL + movie.poster_path : noImage}
                  alt={movie.title}
                />
              </Link>
              <h2
                title={movie.title}
                className="text-white mb-3 text-sm sm:text-base md:text-lg lg:text-xl font-medium mt-2 cursor-default text-center"
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  maxWidth: "100%",
                }}
              >
                {movie.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
      {/* {
        !!data?.total_results &&
        } */}
        <div className="flex items-center justify-center mt-4">
          <Pagination
            showSizeChanger={false}
            defaultCurrent={1}
            defaultPageSize={1}
            total={data?.total_pages > 500 ? 500 : data?.total_pages}
            current={page}
            onChange={(page) => handleChangePage(page)}
          />
        </div>
    </>
  );
};

export default Movies;
