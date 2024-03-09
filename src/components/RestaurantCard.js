import UserContext from "../utils/UserContext";
import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { loggedInUser } = useContext(UserContext);
  const {
    cloudinaryImageId,
    name,
    cuisines,
    area,
    lastMileTravelString,
    costForTwoString,
    avgRating,
  } = resData.data;
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
      <h4>User: {loggedInUser}</h4>
    </div>
  );
};

// Higher Order Component
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </>
    );
  };
};
export default RestaurantCard;
