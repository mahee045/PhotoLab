import React from "react";
import "./App.scss";
import HomeRoute from "./routes/HomeRoute"; 
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import useApplicationData from "./hooks/useApplicationData";  //  Import custom hook

const App = () => {
  //  Use the reducer-based hook
  const { state, toggleFavorite, openModal, closeModal } = useApplicationData();

  console.log("App State:", state);

  return (
    <div className="App">
      <HomeRoute 
        photos={state.photos}  
        topics={state.topics}
        selectedTopic="all"  
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
