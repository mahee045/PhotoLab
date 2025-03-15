import "../styles/PhotoDetailsModal.scss";
import PhotoList from "../components/PhotoList";
import PhotoFavButton from "../components/PhotoFavButton";  // ✅ Import the favorite button

const PhotoDetailsModal = ({ photo, closeModal, toggleFavorite, favoritePhotos }) => {
  if (!photo) return null;  

  console.log("🔥 Data received in Modal:", photo);
  const isFavorite = favoritePhotos.includes(photo.id);
  
  return (
    <div className="photo-modal-overlay" onClick={closeModal}>
      <div className="photo-details-modal" onClick={(e) => e.stopPropagation()}>

        {/* ✅ Close button */}
        <button className="photo-details-modal__close-button" onClick={closeModal}>✖</button>

        {/* ✅ Display Full Size Image */}
        <div className="photo-details-modal__images">
          <img src={photo.urls.full} alt="Full View" className="photo-details-modal__image" />
        </div>

        {/* ✅ Favorite Button */}
        <PhotoFavButton 
          photoId={photo.id} 
          isFavorite={isFavorite}  
          toggleFavorite={toggleFavorite} 
        />

        {/* ✅ Photographer Info */}
        <div className="photo-details-modal__photographer-details">
          <img src={photo.user.profile} alt={`${photo.user.username}'s profile`} className="photo-details-modal__photographer-profile" />
          <div className="photo-details-modal__photographer-info">
            <p>{photo.user.name}</p>
            <p className="photo-details-modal__photographer-location">{photo.location.city}, {photo.location.country}</p>
          </div>
        </div>

        {/* ✅ Display Similar Photos */}
        <h3 className="photo-details-modal__header">Similar Photos</h3>
        <PhotoList 
          photos={Object.values(photo.similar_photos)}
          toggleFavorite={toggleFavorite} 
          favoritePhotos={favoritePhotos} 
        />

      </div>
    </div>
  );
};

export default PhotoDetailsModal;
