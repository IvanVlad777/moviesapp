import FavouriteButton from '../Favourites/FavouriteButton.js';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import React from 'react';
import 'swiper/css/navigation';
import './MovieSlider.css';

import MovieThumbnail from './MovieThumbnail.js';

const MovieSlider = (props) => {
  let slidesPerView = props.windowSize;

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      speed={500}
      navigation
      spaceBetween={50}
      slidesPerView={slidesPerView}
      slidesPerGroup={3}
      onSlideChange={() => null}
      onSwiper={(swiper) => null}
    >
      {props.movieData.map((movie) => {
        return (
          <SwiperSlide key={movie.id}>
            <MovieThumbnail movie={movie} clickable link={props.link} />
            <div>
              <FavouriteButton
                handleFavouriteMovie={props.handleFavouriteMovie}
                handleRemovalOfFavourite={props.handleRemovalOfFavourite}
                movie={movie}
                favourites={props.favourites}
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default MovieSlider;
