// import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import FavIcon from "./FavIcon"; // ✅ Import the base icon component
import React, { useState } from "react";

const PhotoFavButton = ({ isFavorite, toggleFavorite }) => {
 

  return (
    <div className="photo-list__fav-icon" onClick={toggleFavorite}> {/* ✅ Clicking updates state */}
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFavorite} displayAlert={false} /> {/* ✅ Toggle icon */}
      </div>
    </div>
  );
};

export default PhotoFavButton;
