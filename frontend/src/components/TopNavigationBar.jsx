import React from "react";
import "../styles/TopNavigationBar.scss";
import FavBadge from "./FavBadge"; //  Import FavBadge
import TopicList from "./TopicList";

const TopNavigationBar = ({ favoriteCount, onTopicSelect }) => { //  Make sure onTopicSelect is received
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span> {/*  App Logo */}
      <TopicList onTopicSelect={onTopicSelect} /> 
      <FavBadge favoriteCountount={favoriteCount} /> 
    </div>
  );
};

export default TopNavigationBar;
