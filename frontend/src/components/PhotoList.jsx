import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const sampleDataForPhotoList = [
  {
    id: 1,
    location: {
      city: "Montreal",
      country: "Canada",
    },
    urls: {
      full: "/Image-1-Full.jpeg",
      regular: "/Image-1-Regular.jpeg",
    },
    user: {
      username: "exampleuser",
      name: "Joe Example",
      profile: "/profile-1.jpg",
    },
  },
  {
    id: 2,
    location: {
      city: "Toronto",
      country: "Canada",
    },
    urls: {
      full: "/Image-2-Full.jpeg",
      regular: "/Image-2-Regular.jpeg",
    },
    user: {
      username: "exampleuser",
      name: "Joe Example",
      profile: "/profile-1.jpg",
    },
  },
  {
    id: 3,
    location: {
      city: "Ottawa",
      country: "Canada",
    },
    urls: {
      full: "/Image-3-Full.jpeg",
      regular: "/Image-3-Regular.jpeg",
    },
    user: {
      username: "exampleuser",
      name: "Joe Example",
      profile: "/profile-1.jpg",
    },
  },
];

const PhotoList = ({ photos = [], favoritePhotos, toggleFavorite  }) => {
 

  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem 
          key={photo.id} 
          photoId={photo.id}
          location={photo.location}
          imageSource={photo.urls.regular} // ✅ Use 'regular' size image
          username={photo.user.username}
          profile={photo.user.profile}
          isFavorite={favoritePhotos.includes(photo.id)} //  Pass if it's favourited
          toggleFavorite={toggleFavorite} 
        />
      ))}
    </ul>
  );
};


export default PhotoList;
