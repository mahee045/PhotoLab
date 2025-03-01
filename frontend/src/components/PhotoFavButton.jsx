// import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import FavIcon from "./FavIcon"; // ✅ Import the base icon component
import React, { useState } from "react";

const PhotoFavButton = ({liked=false}) => {
  const [isFavorited, setIsFavorited] = useState(liked); // ✅ Track favorite state

  const handleClick = () => {
    setIsFavorited((prev) => !prev); // ✅ Toggle the state when clicked
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
