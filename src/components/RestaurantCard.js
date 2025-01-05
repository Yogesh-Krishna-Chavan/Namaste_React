import { CDN_URL } from "../utils/constant";

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;
  return (
    <div className="m-4 p-4 w-[300px]" style={styleCard}>
      <img
        className="Burger"
        alt="Burger King"
        src={CDN_URL + resData.info.cloudinaryImageId}
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
