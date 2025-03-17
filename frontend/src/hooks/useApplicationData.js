import { useEffect, useReducer } from "react";
import axios from "axios";

// Define action types
export const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  SELECT_PHOTO: "SELECT_PHOTO",
  CLOSE_PHOTO_MODAL: "CLOSE_PHOTO_MODAL"
};

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photos: action.payload };

    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topics: action.payload };

    case ACTIONS.FAV_PHOTO_ADDED:
      return { 
        ...state, 
        favoritePhotos: [...state.favoritePhotos, action.payload.id] 
      };

    case ACTIONS.FAV_PHOTO_REMOVED:
      return { 
        ...state, 
        favoritePhotos: state.favoritePhotos.filter(id => id !== action.payload.id) 
      };

    case ACTIONS.SELECT_PHOTO:
      return { ...state, selectedPhoto: action.payload.photo };

    case ACTIONS.CLOSE_PHOTO_MODAL:
      return { ...state, selectedPhoto: null };

    default:
      throw new Error(`⚠️ Unsupported action type: ${action.type}`);
  }
}

// Custom Hook
export default function useApplicationData() {
  const initialState = {
    photos: [], // ✅ Removed mock data, now an empty array
    topics: [],
    favoritePhotos: [],
    selectedPhoto: null
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // Fetch API data on mount
  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:8001/api/photos"),
      axios.get("http://localhost:8001/api/topics") // ✅ Fetch topics from API
    ])
    .then(([photosRes, topicsRes]) => {
      dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photosRes.data }); // ✅ Store photos
      dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: topicsRes.data }); // ✅ Store topics
    })
    .catch((error) => console.error("🔥 API Fetch Error:", error));
  }, []);

  // Toggle favorite photos
  const toggleFavorite = (photoId) => {
    if (state.favoritePhotos.includes(photoId)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { id: photoId } });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { id: photoId } });
    }
  };

  // Open Modal
  const openModal = (photoId) => {
    const photo = state.photos.find(p => p.id === photoId);
    if (photo) {
      dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { photo } });
    }
  };

  // Close Modal
  const closeModal = () => {
    dispatch({ type: ACTIONS.CLOSE_PHOTO_MODAL });
  };

  return {
    state,
    toggleFavorite,
    openModal,
    closeModal
  };
}