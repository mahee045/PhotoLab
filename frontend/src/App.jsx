// frontend/src/App.jsx
import React, { useState } from "react";

 import PhotoListItem from './components/PhotoListItem';
 import PhotoList from './components/PhotoList';
 import './App.scss';
 import TopicList from "./components/TopicList";


 const App = () => {
  const [selectedTopic, setSelectedTopic] = useState("all"); // ✅ Track selected topic

  return (
    <div className="App">
      <h1>Photo Explorer</h1>
      <TopicList onTopicSelect={setSelectedTopic} /> {/* ✅ Let users select topics */}
      <h2>Selected Topic: {selectedTopic}</h2> {/* ✅ Show selected topic */}
      <PhotoList topic={selectedTopic} /> {/* ✅ Pass selected topic to filter photos */}
    </div>
  );
};

export default App;
