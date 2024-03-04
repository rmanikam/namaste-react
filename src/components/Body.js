import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurants from "../utils/useRestaurants";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  const resData = useRestaurants();

  console.log("abc", resData);
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection;
      </h1>
    );

  console.log(
    "jsonDta",
    resData?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  );
  setListOfRestaurants(
    resData?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  );
  setFilteredRestaurants(
    resData?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  );

  const filterItems = () => {
    const filteredItems = listOfRestaurants.filter((item) => {
      // Parse avgRating as a float and compare
      const avgRating = parseFloat(item.data.avgRating);
      console.log(avgRating);
      return avgRating > 4.0;
    });
    console.log(filteredItems);
    setListOfRestaurants(filteredItems);
  };

  console.log("list", listOfRestaurants);

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search m-4 p-4">
        <input
          className="border border-solid border-black"
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-green-100 m-4 rounded-lg"
          onClick={() => {
            const filterRestaurant = listOfRestaurants.filter((res) =>
              res.name.toLowercase().includes(searchText.toLowercase())
            );

            setFilteredRestaurants(filterRestaurant);
          }}
        >
          Search
        </button>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 m-4 rounded-lg"
            onClick={filterItems}
          >
            Filter Items
          </button>
        </div>
        5
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants?.map((restaurant) => {
          return (
            <Link
              key={restaurant.info?.id}
              to={"/Restaurant/" + restaurant.info?.id}
            >
              <RestaurantCard {...restaurant.info} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
