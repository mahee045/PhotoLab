import "../styles/PhotoListItem.scss";


const PhotoListItem = ({ photoId, location, imageSource, username, profile }) => {
  return (
    <div className="photo-list-item" key={photo.photoId}> {/* ✅ Use photoId as key */}
      <img src={photo.imageSource} alt={`Photo taken by ${photo.username}`} />
      <div className="photo-info">
        <img src={photo.profile} alt={`${photo.username}'s profile`} className="profile-pic" />
        <p>{photo.username}</p>
        <p>{photo.location.city}, {photo.location.country}</p>
      </div>
    </div>
  );
};

export default PhotoListItem;
