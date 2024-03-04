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
    <div
      className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200"
      style={{ backgroundColor: "#f0f0f0" }}
    >
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="res_logo"
        className="rounded-lg"
      />
      <h4 className="font-bold py-4 text-lg"> {name}</h4>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{area}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwoString / 100}</h4>
      <h4>{lastMileTravelString}</h4>
    </div>
  );
};

export default RestaurantCard;
