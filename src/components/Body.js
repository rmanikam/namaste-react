import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false)
      return (
        <h1>
          Looks like you're offline!! Please check your internet connection;
        </h1>
      );

    console.log(
      "jsonDta",
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

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
      <div className="search">
        <input
          className="search_field"
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          onClick={() => {
            const filterRestaurant = listOfRestaurants.filter((res) =>
              res.name.toLowercase().includes(searchText.toLowercase())
            );

            setFilteredRestaurants(filterRestaurant);
          }}
        >
          Search
        </button>
        <button onClick={filterItems}>Filter Items</button>
      </div>
      <div className="restaurant_container">
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
