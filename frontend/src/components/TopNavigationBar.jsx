import React from "react";
import "../styles/TopNavigationBar.scss";
import FavBadge from "./FavBadge"; //  Import FavBadge
import TopicList from "./TopicList";


const TopNavigationBar = ({ favoriteCount, topics, onTopicSelect }) => { //  Make sure onTopicSelect is received

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span> {/*  App Logo */}
      <TopicList topics={topics} onTopicSelect={onTopicSelect} /> 
      <FavBadge isFavPhotoExist={favoriteCount > 0} /> 
    </div>
  );
};

export default TopNavigationBar;
