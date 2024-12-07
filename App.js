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
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.info.cloudinaryImageId
        }
      ></img>
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h4>{resData.info.avgRating}</h4>
      <h4>{resData.info.costForTwo}</h4>
    </div>
  );
};

const resList = [
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
      veg: true,
      parentId: "106448",
      avgRatingString: "4.4",
      totalRatingsString: "95",
      sla: {
        deliveryTime: 43,
        lastMileTravel: 11.6,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "11.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-12-07 22:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
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
      context: "seo-data-1947e390-835f-4bca-8aaf-50c17d66cdce",
    },
    cta: {
      link: "https://www.swiggy.com/city/chhindwara/indian-coffee-house-city-khajri-chowk-rest830418",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "658210",
      name: "The Fusion Lounge",
      cloudinaryImageId: "fa4944f0cfdcbca2bec1f3ab8e3db3f7",
      locality: "Triloki nagar",
      areaName: "Railway Station",
      costForTwo: "₹300 for two",
      cuisines: [
        "North Indian",
        "South Indian",
        "Chinese",
        "Beverages",
        "Fast Food",
        "Desserts",
      ],
      avgRating: 4,
      parentId: "395453",
      avgRatingString: "4.0",
      totalRatingsString: "280",
      sla: {
        deliveryTime: 67,
        lastMileTravel: 10.2,
        serviceability: "SERVICEABLE",
        slaString: "65-70 mins",
        lastMileTravelString: "10.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-12-07 23:00:00",
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
        header: "10% OFF",
        subHeader: "UPTO ₹40",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
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
      context: "seo-data-1947e390-835f-4bca-8aaf-50c17d66cdce",
    },
    cta: {
      link: "https://www.swiggy.com/city/chhindwara/the-fusion-lounge-triloki-nagar-railway-station-rest658210",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "870899",
      name: "Paras Mishthan",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/15/9de3a721-5e96-41d2-bb3e-3cbeff47fbd3_870899.jpg",
      locality: "Nagarpalika Complex",
      areaName: "Chhindwara City",
      costForTwo: "₹150 for two",
      cuisines: ["Beverages", "Sweets", "Snacks"],
      avgRating: 3.9,
      veg: true,
      parentId: "510613",
      avgRatingString: "3.9",
      totalRatingsString: "25",
      sla: {
        deliveryTime: 55,
        lastMileTravel: 11.2,
        serviceability: "SERVICEABLE",
        slaString: "55-60 mins",
        lastMileTravelString: "11.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-12-07 22:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹39",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
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
      context: "seo-data-1947e390-835f-4bca-8aaf-50c17d66cdce",
    },
    cta: {
      link: "https://www.swiggy.com/city/chhindwara/paras-mishthan-nagarpalika-complex-chhindwara-city-rest870899",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "945448",
      name: "Yummy Better",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/22/5c6d3a34-1ac1-44ca-94cf-7e9122459ebc_945448.jpg",
      locality: "Chhindwara City",
      areaName: "Chhindwara City",
      costForTwo: "₹200 for two",
      cuisines: ["South Indian", "Fast Food"],
      veg: true,
      parentId: "557138",
      avgRatingString: "NEW",
      sla: {
        deliveryTime: 58,
        lastMileTravel: 11.2,
        serviceability: "SERVICEABLE",
        slaString: "55-60 mins",
        lastMileTravelString: "11.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-12-07 22:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹40",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-1947e390-835f-4bca-8aaf-50c17d66cdce",
    },
    cta: {
      link: "https://www.swiggy.com/city/chhindwara/yummy-better-chhindwara-city-rest945448",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "549580",
      name: "Fresh Meal's",
      cloudinaryImageId: "v5e3atn9tmtgcca1onnr",
      locality: "Teacher's Colony",
      areaName: "Chhindwara City",
      costForTwo: "₹300 for two",
      cuisines: ["North Indian", "South Indian"],
      avgRating: 4.2,
      veg: true,
      parentId: "15219",
      avgRatingString: "4.2",
      totalRatingsString: "84",
      sla: {
        deliveryTime: 73,
        lastMileTravel: 13.6,
        serviceability: "SERVICEABLE",
        slaString: "70-75 mins",
        lastMileTravelString: "13.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-12-07 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
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
      context: "seo-data-1947e390-835f-4bca-8aaf-50c17d66cdce",
    },
    cta: {
      link: "https://www.swiggy.com/city/chhindwara/fresh-meals-teachers-colony-chhindwara-city-rest549580",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "795047",
      name: "New Radhey Shyam Choule Bhature Delhi Wala",
      cloudinaryImageId: "0adf25c57357161b20c11281d8a443e6",
      locality: "VIP Road",
      areaName: "Mohan Nagar",
      costForTwo: "₹200 for two",
      cuisines: ["Snacks", "Chinese"],
      avgRating: 2.9,
      veg: true,
      parentId: "475337",
      avgRatingString: "2.9",
      totalRatingsString: "3",
      sla: {
        deliveryTime: 61,
        lastMileTravel: 11.3,
        serviceability: "SERVICEABLE",
        slaString: "60-65 mins",
        lastMileTravelString: "11.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-12-07 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
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
      context: "seo-data-1947e390-835f-4bca-8aaf-50c17d66cdce",
    },
    cta: {
      link: "https://www.swiggy.com/city/chhindwara/new-radhey-shyam-choule-bhature-delhi-wala-vip-road-mohan-nagar-rest795047",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "382152",
      name: "Shriji Namkeen",
      cloudinaryImageId: "wa8ek94fp9d97ru1tcyn",
      locality: "Palika Market",
      areaName: "Chhindwara City",
      costForTwo: "₹250 for two",
      cuisines: ["Snacks", "Beverages", "Desserts"],
      avgRating: 3.9,
      parentId: "187168",
      avgRatingString: "3.9",
      totalRatingsString: "45",
      sla: {
        deliveryTime: 57,
        lastMileTravel: 10.7,
        serviceability: "SERVICEABLE",
        slaString: "55-60 mins",
        lastMileTravelString: "10.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextOpenTimeMessage: "Opens next at 11 am, today",
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
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
      context: "seo-data-1947e390-835f-4bca-8aaf-50c17d66cdce",
    },
    cta: {
      link: "https://www.swiggy.com/city/chhindwara/shriji-namkeen-palika-market-chhindwara-city-rest382152",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "151649",
      name: "Hotel Sai Nath & Sai Restaurant",
      cloudinaryImageId: "vkhcohhmqfczycw9vsar",
      locality: "railway station",
      areaName: "Chhindwara Locality",
      costForTwo: "₹200 for two",
      cuisines: [
        "North Indian",
        "South Indian",
        "Chinese",
        "Beverages",
        "Fast Food",
        "Desserts",
      ],
      avgRating: 4.3,
      veg: true,
      parentId: "101802",
      avgRatingString: "4.3",
      totalRatingsString: "920",
      sla: {
        deliveryTime: 51,
        lastMileTravel: 10.3,
        serviceability: "SERVICEABLE",
        slaString: "50-55 mins",
        lastMileTravelString: "10.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextOpenTimeMessage: "Opens next at 11 am, today",
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
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
      context: "seo-data-1947e390-835f-4bca-8aaf-50c17d66cdce",
    },
    cta: {
      link: "https://www.swiggy.com/city/chhindwara/hotel-sai-nath-and-sai-restaurant-railway-station-chhindwara-locality-rest151649",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restro-container">
        {/*Create Restro component for reuse */}
        <RestaurantCard resData={resList[0]} />
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
