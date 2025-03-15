import React, { useState } from "react";
import "./App.scss";
import HomeRoute from "./routes/HomeRoute"; 
import photosData from "./mocks/photos";  
import topicsData from "./mocks/topics";

const App = () => {

  const [selectedTopic, setSelectedTopic] = useState("all");
  const [favoriteCount, setFavoriteCount] = useState(0); 
  
  return (
    <div className="App">
      <HomeRoute photos={photosData.photos}  
        topics={topicsData.topics}
       selectedTopic={selectedTopic}
        setSelectedTopic={setSelectedTopic}
        setFavoriteCount={setFavoriteCount}/> 
    </div>
  );
};

export default App;