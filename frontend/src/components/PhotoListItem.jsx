import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({photoId, location, imageSource, username, profile, isFavorite, toggleFavorite, openModal }) => {
  return (
    <div className="photo-list__item" key={photoId} onClick={() => openModal(photoId)}> 
      <img src={imageSource} alt={`Photo taken by ${username}`} className="photo-list__image"/>
      <div className="photo-list__user-details">
        <img src={profile} alt={`${username}'s profile`} className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          <p>{username}</p>
          <div className="photo-list__user-location">
            <p>{location.city}, {location.country}</p>
          </div>
        </div>
      </div>
       {/* ✅ Heart icon for favoriting */}
       <PhotoFavButton isFavorite={isFavorite} toggleFavorite={() => toggleFavorite(photoId)} />
    
    </div>
  );
};


export default PhotoListItem;
