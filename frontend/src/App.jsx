// frontend/src/App.jsx
import React from 'react';

 import PhotoListItem from './components/PhotoListItem';
 import PhotoList from './components/PhotoList';
 import './App.scss';

const sampleDataForPhotoListItem = {
  photoId: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: "/Image-1-Regular.jpeg",
  username: "Joe Example",
  profile: "/profile-1.jpg",
  liked: false,
  
};


const photos = new Array(3).fill(null).map((_, index) => ({
  ...sampleDataForPhotoListItem,
  photoId: `${index + 1}`, 
}));

const App = () => (
  <div className="App">
    {photos.map((photo) => (
      <PhotoListItem key={photo.photoId} {...photo} />
    ))}
  </div>
);
export default App;
