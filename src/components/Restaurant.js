import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  console.log(resId);

  const resInfo = useRestaurantMenu(resId);

  console.log(resInfo);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>
      <h2>MENU</h2>
      <ul>
        {itemCards.map((item) => (
          <li>
            {item?.card?.info?.name} - {item?.card?.info?.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
