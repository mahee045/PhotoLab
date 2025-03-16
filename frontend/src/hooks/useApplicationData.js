import { useState } from "react";
import photosData from "../mocks/photos";  
import topicsData from "../mocks/topics";

const useApplicationData = () => {
  // State for selected topic
  const [selectedTopic, setSelectedTopic] = useState("all");

  // State for favourited photos
  const [favoritePhotos, setFavoritePhotos] = useState([]);

  // State for modal (selected photo)
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // ✅ Toggle favorite photos
  const toggleFavorite = (photoId) => {
    setFavoritePhotos((prevFavorites) => {
      const newFavorites = prevFavorites.includes(photoId)
        ? prevFavorites.filter((id) => id !== photoId) // Remove if already favorited
        : [...prevFavorites, photoId]; // Add if not favorited
      
      console.log(" Updated Favorites:", newFavorites); 
      return newFavorites;
    });
  };

  // ✅ Open modal with selected photo
  const openModal = (photoId) => {
    console.log(" Checking photoId:", photoId);
    console.log(" Checking photosData:", photosData);

    // ✅ Ensure we find the correct photo
    const photo = photosData.photos.find((p) => p.id === photoId);

    if (photo) {
      console.log(" Opening modal for photo:", photo);
      setSelectedPhoto(photo);
    } else {
      console.warn(" Photo not found for ID:", photoId);
    }
  };

  // ✅ Close modal
  const closeModal = () => {
    console.log(" Closing modal");
    setSelectedPhoto(null);
  };

  return {
    state: {
      selectedTopic,
      favoritePhotos,
      selectedPhoto,
    },
    toggleFavorite,
    openModal,
    closeModal,
    setSelectedTopic,
    photos: photosData.photos,
    topics: topicsData.topics,
  };
};

export default useApplicationData;
