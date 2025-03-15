import React, { useState } from "react";
import "../styles/HomeRoute.scss"; 
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

const HomeRoute = ({topics= [], photos= [], selectedTopic, setSelectedTopic, setFavoriteCount}) => {
  
  return (
    <div className="home-route">
      <TopNavigationBar 
        favoriteCount={0} 
        onTopicSelect={setSelectedTopic} 
        topics={topics}
      />
      <PhotoList photos={photos} 
        topic={selectedTopic} //  Use the passed state, don’t redeclare!
        setFavoriteCount={setFavoriteCount}  /> {/* Display photos */}
    </div>
  );
};

export default HomeRoute;
