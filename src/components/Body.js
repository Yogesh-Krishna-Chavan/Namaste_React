import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
  let listOfRestaurants = [
    {
      info: {
        id: "830418",
        name: "Indian Coffee House",
        cloudinaryImageId: "2469fa88ee9b0b5d1366ba88f2a7fa7f",
        locality: "Chhindwara City",
        areaName: "Khajri Chowk",
        costForTwo: "₹300 for two",
        cuisines: [
          "South Indian",
          "North Indian",
          "Chinese",
          "Fast Food",
          "Beverages",
        ],
        avgRating: 4.4,
        deliveryTime: 43,
      },
    },
    {
      info: {
        id: "830518",
        name: "CCD",
        cloudinaryImageId: "2469fa88ee9b0b5d1366ba88f2a7fa7f",
        locality: "Chhindwara City",
        areaName: "Khajri Chowk",
        costForTwo: "₹300 for two",
        cuisines: [
          "South Indian",
          "North Indian",
          "Chinese",
          "Fast Food",
          "Beverages",
        ],
        avgRating: 3.8,
        deliveryTime: 43,
      },
    },
    {
      info: {
        id: "830918",
        name: "Mac_Cafe",
        cloudinaryImageId: "2469fa88ee9b0b5d1366ba88f2a7fa7f",
        locality: "Chhindwara City",
        areaName: "Khajri Chowk",
        costForTwo: "₹300 for two",
        cuisines: [
          "South Indian",
          "North Indian",
          "Chinese",
          "Fast Food",
          "Beverages",
        ],
        avgRating: 4.9,
        deliveryTime: 43,
      },
    },
  ];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //Filter
            listOfRestaurants = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            console.log(listOfRestaurants);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="restro-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
