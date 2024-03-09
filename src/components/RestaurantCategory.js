import { useState } from "react";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  console.log(data);
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShowIndex();
    setShow(!show);
  };
  return (
    <div>
      {/* Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title}({data.itemCards.length})
          </span>
          <span>⬇</span>
          {showItems && show && <ItemList items={data.itemCards} />}
        </div>
      </div>
      {/* Accordion Body */}
    </div>
  );
};

export default RestaurantCategory;
