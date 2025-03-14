import React, { useState } from "react";
import PhotoList from "./components/PhotoList";
import TopNavigationBar from "./components/TopNavigationBar";
import "./App.scss";

const App = () => {
  const [selectedTopic, setSelectedTopic] = useState("all"); // ✅ Track selected topic
  const [favoriteCount, setFavoriteCount] = useState(0); // ✅ Track favorite count

  return (
    <div className="App">
      <TopNavigationBar 
        favoriteCount={favoriteCount} 
        onTopicSelect={setSelectedTopic} // ✅ Pass onTopicSelect to TopNavigationBar
      />
      <h1>Photo Explorer</h1>
      <h2>Selected Topic: {selectedTopic}</h2> {/* ✅ Show selected topic */}
      <PhotoList topic={selectedTopic} setFavoriteCount={setFavoriteCount} /> {/* ✅ Update favorite count */}
    </div>
  );
};

export default App;