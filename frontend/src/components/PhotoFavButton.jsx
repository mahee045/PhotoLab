// import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import FavIcon from "./FavIcon"; // ✅ Import the base icon component
import React, { useState } from "react";

const PhotoFavButton = ({liked=false}) => {
  const [isFavorited, setIsFavorited] = useState(liked);

  const handleClick = () => {
    setIsFavorited((prev) => !prev); // ✅ Toggle the state when clicked
    console.log("Favourite clicked:", !isFavorited);
  };

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}> {/* ✅ Clickable wrapper */}
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFavorited} displayAlert={false} /> {/* ✅ Corrected from `isFavorite` to `isFavorited` */}
      </div>
    </div>
  );
};

export default PhotoFavButton;
