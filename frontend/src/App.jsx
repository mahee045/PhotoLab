// frontend/src/App.jsx
import React, { useState } from "react";

 import PhotoListItem from './components/PhotoListItem';
 import PhotoList from './components/PhotoList';
 import './App.scss';
 import TopicList from "./components/TopicList";
 import TopNavigationBar from './components/TopNavigationBar';

 const App = () => {
  const [selectedTopic, setSelectedTopic] = useState("all"); //  Track selected topic
  const [favoriteCount, setFavoriteCount] = useState(0); // Track favorite count

  return (
    <div className="App">
      <TopNavigationBar favoriteCount={favoriteCount} /> {/* Show favorite count */}
      <h1>Photo Explorer</h1>
      <TopicList onTopicSelect={setSelectedTopic} /> {/*  Let users select topics */}
      <h2>Selected Topic: {selectedTopic}</h2> {/*  Show selected topic */}
      <PhotoList topic={selectedTopic} setFavoriteCount={setFavoriteCount} /> {/*  Update favorite count */}
    </div>
  );
};

export default App;