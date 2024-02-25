import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";

const Restaurant = () => {
  const [resInfo, setResInfo] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API);
    console.log("response", data);
    const json = await data.json();

    console.log(json.data);
    setResInfo(json.data);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

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

export default Restaurant;
