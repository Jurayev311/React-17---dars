import React from 'react'
import { useGetSingleMovieImagesQuery, useGetSingleMovieQuery } from '../../redux/api/movie.api'
import { useParams } from 'react-router-dom'

const Detail = () => {
    const {id} = useParams()
    const {data} = useGetSingleMovieQuery(id)
    const {data: images} = useGetSingleMovieImagesQuery(id)
    console.log(images);
    
  return (
    <div className='container mx-auto'>
        <div>
            <img className='w-full' src={import.meta.env.VITE_IMAGE_URL + data?.backdrop_path} alt="" />
        </div>
        <div>
            <h1 className='text-3xl'>{data?.title}</h1>
        </div>
        <div className='flex flex-wrap gap-1'>
            {
                images?.backdrops?.slice(0, 30)?.map((image) => (
                    <img key={image.file_path} className='w-[300px]' src={import.meta.env.VITE_IMAGE_URL + image.file_path} alt="" />
                ))
            }
        </div>
    </div>
  )
}

export default Detail