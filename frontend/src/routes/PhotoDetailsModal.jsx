import "../styles/PhotoDetailsModal.scss";
import PhotoList from "../components/PhotoList";  // ✅ Reuse existing component for similar photos

const PhotoDetailsModal = ({ photo, closeModal, toggleFavorite, favoritePhotos }) => {
  if (!photo) return null;  // ✅ Ensure modal only shows when photo exists

  console.log("🔥 Data received in Modal:", photo); // ✅ Debugging

  return (
    <div className="photo-modal-overlay" onClick={closeModal}>
      <div className="photo-details-modal" onClick={(e) => e.stopPropagation()}>
        
        {/* ✅ Close button */}
        <button className="photo-details-modal__close-button" onClick={closeModal}>✖</button>

        {/* ✅ Display Full Size Image */}
        <div className="photo-details-modal__images">
          <img src={photo.urls.full} alt="Full View" className="photo-details-modal__image" />
        </div>

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
          photos={Object.values(photo.similar_photos)}  // ✅ Convert object to array
          toggleFavorite={toggleFavorite} 
          favoritePhotos={favoritePhotos} 
        />

      </div>
    </div>
  );
};

export default PhotoDetailsModal;

