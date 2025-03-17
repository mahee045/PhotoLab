import React from "react";
import "./App.scss";
import HomeRoute from "./routes/HomeRoute"; 
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import useApplicationData from "./hooks/useApplicationData";  //  Import custom hook

const App = () => {
  const { state, toggleFavorite, openModal, closeModal, fetchPhotosByTopic } = useApplicationData(); // ✅ Get state & actions

  return (
    <div className="App">
      <HomeRoute 
        photos={state.photos}   // ✅ Pass fetched photos
        topics={state.topics}   // ✅ Pass fetched topics
        selectedTopic={state.selectedTopic}
        setSelectedTopic={state.setSelectedTopic}
        fetchPhotosByTopic={fetchPhotosByTopic}
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