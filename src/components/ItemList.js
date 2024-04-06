import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
const ItemList = ({ items }) => {
  console.log(items);

  // useDispatch is a hook given to us by react-redux

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch an action

    // dispatch is a function
    dispatch(addItem(item));
  };
  return (
    <div>
      <ul>
        {items.map((item) => (
          <div
            data-testid="foodItems"
            key={item.card.info.id}
            className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span>{item.card.info.name}</span>
                <span>
                  - ₹
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 p-4">
              <div className="absolute">
                <button
                  className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
                  onClick={() => handleAddItem(item)}
                >
                  Add +
                </button>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
