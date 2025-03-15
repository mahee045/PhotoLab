import "../styles/PhotoFavButton.scss";
import FavIcon from "./FavIcon"; 
import React from "react";

const PhotoFavButton = ({ photoId, isFavorite, toggleFavorite }) => {
  return (
    <div 
      className="photo-list__fav-icon" 
      onClick={() => toggleFavorite(photoId)}> {/* ✅ Ensure photoId is passed */}
      
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFavorite} displayAlert={false} /> {/* ✅ Updates heart icon */}
      </div>
    </div>
  );
};

export default PhotoFavButton;

