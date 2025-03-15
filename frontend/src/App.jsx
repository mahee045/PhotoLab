import React, { useState } from "react";
import "./App.scss";
import HomeRoute from "./routes/HomeRoute"; 
import photosData from "./mocks/photos";  
import topicsData from "./mocks/topics";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";

const App = () => {

  const [selectedTopic, setSelectedTopic] = useState("all");
  const [favoritePhotos, setFavoritePhotos] = useState([]); //  Track favourited photos
  const [selectedPhoto, setSelectedPhoto] = useState(null); // ✅ Track the selected phot

  const toggleFavorite = (photoId) => {
    setFavoritePhotos((prevFavorites) => {
      const newFavorites = prevFavorites.includes(photoId)
        ? prevFavorites.filter((id) => id !== photoId) // Remove if already favorited
        : [...prevFavorites, photoId]; // Add if not favorited
      
      console.log("🔥 Updated Favorites:", newFavorites); // Debugging
      return newFavorites; // ✅ Return updated state
    });
  };

  const openModal = (photoId) => {
    console.log("🔥 Checking photoId:", photoId);
    console.log("🔥 Checking photosData:", photosData); // ✅ Debugging
  
    // ✅ Ensure we are getting a proper ID
    const photo = photosData.photos.find((p) => p.id === photoId);
  
    if (photo) {
      console.log("🔥 Opening modal for photo:", photo);
      setSelectedPhoto(photo);
    } else {
      console.error("⚠️ Photo not found for ID:", photoId);
    }
  };

  const closeModal = () => {
    console.log("🔥 Closing modal");
    setSelectedPhoto(null); // ✅ Reset state
  };

  console.log("🔥 Photos from mock data:", photosData?.photos);
  console.log("🔥 Topics from mock data:", topicsData?.topics);
  console.log("🔥 Current Favorite Photos:", favoritePhotos);
  console.log("🔥 Selected Photo:", selectedPhoto);
  
  return (
    <div className="App">
      <HomeRoute 
        photos={photosData.photos}  
  topics={topicsData.topics}
  selectedTopic={selectedTopic}
  setSelectedTopic={setSelectedTopic}
  favoritePhotos={favoritePhotos} 
  toggleFavorite={toggleFavorite} 
  openModal={openModal} // ✅ Ensure openModal is passed
        /> 

{selectedPhoto && (
  <PhotoDetailsModal 
    photo={selectedPhoto} 
    closeModal={closeModal} 
    toggleFavorite={toggleFavorite}  // ✅ Pass favorite toggle function
    favoritePhotos={favoritePhotos}  // ✅ Pass favorite list
  />
)}

        
    </div>
  );
};

export default App;