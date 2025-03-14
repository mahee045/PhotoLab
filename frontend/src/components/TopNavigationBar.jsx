import React from "react";
import "../styles/TopNavigationBar.scss";
import FavBadge from "./FavBadge"; //  Import FavBadge

const TopNavigationBar = ({ favoriteCount }) => { //  Receive favoriteCount as a prop
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span> {/*  App Logo */}
      <FavBadge count={favoriteCount} /> {/*  Show FavBadge with favorite count */}
    </div>
  );
};

export default TopNavigationBar;
