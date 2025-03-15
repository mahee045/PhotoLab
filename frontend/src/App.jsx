import React, { useState } from "react";
import "./App.scss";
import HomeRoute from "./routes/HomeRoute"; 
import photosData from "./mocks/photos";  
import topicsData from "./mocks/topics";

const App = () => {

  const [selectedTopic, setSelectedTopic] = useState("all");
  const [favoritePhotos, setFavoritePhotos] = useState([]); //  Track favourited photos

  const toggleFavorite = (photoId) => {
    setFavoritePhotos((prevFavorites) => {
      const newFavorites = prevFavorites.includes(photoId)
        ? prevFavorites.filter((id) => id !== photoId) //  Remove if already favorited
        : [...prevFavorites, photoId]; //  Add if not favorited
    });
  };

 
  
  return (
    <div className="App">
      <HomeRoute 
      photos={photosData.photos}  
        topics={topicsData.topics}
       selectedTopic={selectedTopic}
        setSelectedTopic={setSelectedTopic}
        favoritePhotos={favoritePhotos} // Pass to HomeRoute
        toggleFavorite={toggleFavorite} //  Pass to HomeRoute
        /> 
        
    </div>
  );
};

export default App;