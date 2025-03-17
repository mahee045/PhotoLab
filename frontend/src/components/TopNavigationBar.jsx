import React from "react";
import "../styles/TopNavigationBar.scss";
import FavBadge from "./FavBadge"; //  Import FavBadge
import TopicList from "./TopicList";


const TopNavigationBar = ({ favoriteCount, topics, fetchPhotosByTopic }) => { // ✅ Ensure function is received

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span> {/*  App Logo */}
      <div className="top-nav-bar__topic-list">
        {topics.map((topic) => (
          <button key={topic.id} onClick={() => fetchPhotosByTopic(topic.id)}>
            {topic.title}
          </button>
        ))}
      </div>
      <FavBadge isFavPhotoExist={favoriteCount > 0} /> 
    </div>
  );
};


export default TopNavigationBar;
