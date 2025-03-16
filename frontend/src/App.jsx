import React from "react";
import "./App.scss";
import HomeRoute from "./routes/HomeRoute"; 
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import useApplicationData from "./hooks/useApplicationData"; // ✅ Import custom Hook

const App = () => {
  const {
    state,
    toggleFavorite,
    openModal,
    closeModal,
    setSelectedTopic,
    photos,
    topics
  } = useApplicationData();

  console.log("🔥 Photos from mock data:", photos);
  console.log("🔥 Topics from mock data:", topics);
  console.log("🔥 Current Favorite Photos:", state.favoritePhotos);
  console.log("🔥 Selected Photo:", state.selectedPhoto);

  return (
    <div className="App">
      <HomeRoute 
        photos={photos}  
        topics={topics}
        selectedTopic={state.selectedTopic}
        setSelectedTopic={setSelectedTopic}
        favoritePhotos={state.favoritePhotos}
        toggleFavorite={toggleFavorite}
        openModal={openModal}
      /> 

      {state.selectedPhoto && (
        <PhotoDetailsModal 
          photo={state.selectedPhoto} 
          closeModal={closeModal} 
          toggleFavorite={toggleFavorite}
          favoritePhotos={state.favoritePhotos}
        />
      )}
    </div>
  );
};

export default App;
