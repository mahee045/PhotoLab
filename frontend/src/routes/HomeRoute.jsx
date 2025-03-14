import React, { useState } from "react";
import "../styles/HomeRoute.scss"; 
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

const HomeRoute = () => {
  const [selectedTopic, setSelectedTopic] = useState("all"); // ✅ Track selected topic
  const [favoriteCount, setFavoriteCount] = useState(0); // ✅ Track favorite count

  return (
    <div className="home-route">
      <TopNavigationBar 
        favoriteCount={favoriteCount} 
        onTopicSelect={setSelectedTopic} // ✅ Allow topic selection
      />
      <PhotoList topic={selectedTopic} setFavoriteCount={setFavoriteCount} /> {/* ✅ Display photos */}
    </div>
  );
};

export default HomeRoute;
