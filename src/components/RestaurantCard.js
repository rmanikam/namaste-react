import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  area,
  lastMileTravelString,
  costForTwoString,
  avgRating,
}) => {
  return (
    <div className="res_card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="res_logo"
        className="res-logo"
      />
      <h4> {name}</h4>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{area}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwoString / 100}</h4>
      <h4>{lastMileTravelString}</h4>
    </div>
  );
};

export default RestaurantCard;
