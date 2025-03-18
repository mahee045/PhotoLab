import React, { useState } from "react";
import "../styles/HomeRoute.scss"; 
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

const HomeRoute = ({topics =[], fetchPhotosByTopic,  photos=[], selectedTopic, setSelectedTopic, favoritePhotos = [], toggleFavorite, openModal }) => {
  
  console.log("🔥 Rendering HomeRoute: Favorite Count:", favoritePhotos.length);
  console.log("🔥 Checking openModal function:", openModal); //  Debugging


  return (
    <div className="home-route">
      <TopNavigationBar 
        favoriteCount={favoritePhotos.length} //  Pass favourite count
        onTopicSelect={setSelectedTopic} 
        topics={topics}
        fetchPhotosByTopic={fetchPhotosByTopic}
      />
      <PhotoList  photos={photos} 
        topic={selectedTopic} 
        favoritePhotos={favoritePhotos} //  Pass favourite photos
        toggleFavorite={toggleFavorite} 
        setFavoriteCount={() => {}}
        openModal={openModal}
      />
    </div>
  );
};

export default HomeRoute;
