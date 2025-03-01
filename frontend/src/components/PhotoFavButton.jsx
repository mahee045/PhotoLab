// import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import FavIcon from "./FavIcon"; // ✅ Import the base icon component
import React, { useState } from "react";

const PhotoFavButton = () => {
  const [isFavorited, setIsFavorited] = useState(false); // ✅ Track favorite state

  const handleClick = () => {
    setIsFavorited(!isFavorited); // ✅ Toggle the state when clicked
    console.log("Favourite clicked:", !isFavorited);
  };

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}> {/* ✅ Clickable wrapper */}
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFavorited} displayAlert={false} /> {/* ✅ Pass `selected` to control color */}
      </div>
    </div>
  );
};

export default PhotoFavButton;
