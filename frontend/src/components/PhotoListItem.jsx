import "../styles/PhotoListItem.scss";


const PhotoListItem = ({ photoId, location, imageSource, username, profile, liked }) => {
  return (
    <div className="photo-list__item" key={photoId}>
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

      <p className="photo-list__liked-status">
        {liked ? "❤️ Liked" : "♡ Not Liked"}
      </p>

    </div>
  );
};

export default PhotoListItem;
