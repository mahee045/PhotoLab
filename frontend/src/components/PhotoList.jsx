import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";



const PhotoList = ({ photos = [], favoritePhotos, toggleFavorite, openModal  }) => {
 

  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem 
          key={photo.id} 
          photoId={photo.id}
          location={photo.location}
          imageSource={photo.urls.regular} //  Use 'regular' size image
          username={photo.user.username}
          profile={photo.user.profile}
          isFavorite={favoritePhotos.includes(photo.id)} //  Pass if it's favourited
          toggleFavorite={toggleFavorite} 
          openModal={openModal}
        />
      ))}
    </ul>
  );
};


export default PhotoList;
