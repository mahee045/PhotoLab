import "../styles/PhotoListItem.scss";


const PhotoListItem = ({ photoId, location, imageSource, username, profile }) => {
  return (
    <div className="photo-list__item" key={photoId}> {/* ✅ Use photoId as key */}
      <img src={imageSource} alt={`Photo taken by ${username}`} />
      <div className="photo-list__user-details">
        <img src={profile} alt={`${username}'s profile`} className="photo-list__user-profile" />
        <p>{username}</p>
        <p>{location.city}, {location.country}</p>
      </div>
    </div>
  );
};

export default PhotoListItem;
