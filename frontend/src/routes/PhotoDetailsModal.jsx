import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ photo, closeModal }) => {
  if (!photo) return null; //  Don’t render if no photo is selected

  return (
    <div className="photo-details-modal">
      <div className="photo-details-modal__overlay" onClick={closeModal}></div> {/*  Close when clicking outside */}
      <div className="photo-details-modal__content">
        <button className="photo-details-modal__close" onClick={closeModal}>X</button> {/*  Close button */}
        <p>Modal Placeholder</p> {/*  Will be replaced later with image & similar photos */}
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
