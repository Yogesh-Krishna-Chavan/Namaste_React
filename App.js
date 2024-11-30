import React from "react";
import ReactDOM from "react-dom/client";

/*
#Header
  -Logo
  -Nav Items

#Body
  -Search
  -Restraurant Container
    -Restro Cards
      -img
      -Name of res, start rating, cuisine, deleivery timer

#Footer
  -Copyright
  -Links
  -Address
  -Contact
*/

/*
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 🏆"
);
 
//JSX
const elem = <div>React Element</div>;

const title = (
  <h1 id="heading" className="head" tabIndex="5">
    {elem}
    Namaste React using JSX 🏆
  </h1>
);

// React Functional component
const Jsxheading2 = () => (
  <h1 id="heading" className="head" tabIndex="5">
    Namaste React using JSX 🏆
  </h1>
);

const HeadingComponent = function () {
  return (
    <div>
      <h1>Namaste React Functional component</h1>
    </div>
  );
};

const number = 1000;

const HeadingComponent2 = () => (
  <div id="component">
    <h1>Namaste React Functional component</h1>
  </div>
);

const HeadingComponent3 = () => (
  <div>
    {title}
    <h1 id="container">Namaste React Functional Component</h1>
  </div>
);
*/

const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="Burger"
        alt="Burger King"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId
        }
      ></img>
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h4>{resData.info.avgRating}</h4>
      <h4>{resData.info.costForTwo}</h4>
    </div>
  );
};

const resObj = {
  info: {
    id: "234875",
    name: "Adil Hotel",
    cloudinaryImageId: "gp1ityra6utvzqn6ghnv",
    locality: "Rautha Wada",
    areaName: "Chhindwara Locality",
    costForTwo: "₹150 for two",
    cuisines: ["North Indian", "Biryani"],
    avgRating: 4.3,
    parentId: "27123",
    avgRatingString: "4.3",
    totalRatingsString: "1.0K+",
    sla: {
      deliveryTime: 43,
      lastMileTravel: 10.8,
      serviceability: "SERVICEABLE",
      slaString: "40-45 mins",
      lastMileTravelString: "10.8 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-12-01 23:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹150 OFF",
      subHeader: "ABOVE ₹349",
      discountTag: "FLAT DEAL",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  analytics: {
    context: "seo-data-f3953dd1-567f-42be-bdab-79b0423d66bc",
  },
  cta: {
    link: "https://www.swiggy.com/city/chhindwara/adil-hotel-rautha-wada-chhindwara-locality-rest234875",
    type: "WEBLINK",
  },
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restro-container">
        {/*Create Restro component for reuse */}
        <RestaurantCard resData={resObj} />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
