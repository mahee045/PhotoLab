import FavIcon from "./FavIcon";
import "../styles/FavBadge.scss";

const FavBadge = ({ favoriteCount }) => {
  return (
    <div className="fav-badge">
      <FavIcon displayAlert={favoriteCount > 0} />
      {favoriteCount > 0 && <span className="fav-badge__count">{favoriteCount}</span>} {/* ✅ Show count */}
    </div>
  );
};

export default FavBadge;
