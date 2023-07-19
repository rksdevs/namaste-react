import React from "react";
import ReactDOM from "react-dom/client";
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

//header component

// name = info.name
// cuisine = info.cuisines
// rating = info.avgRating
// price = feeDetails.totalFee/10


const resData = [
    {
      "info": {
        "id": "580936",
        "name": "EatFit",
        "cloudinaryImageId": "94d3bc5e6392fbaf50686cf8cfab10ef",
        "locality": "Devarabisanahalli",
        "areaName": "Bellandur",
        "costForTwo": "₹270 for two",
        "cuisines": [
          "Healthy Food",
          "Pizzas",
          "North Indian",
          "Thalis",
          "Biryani",
          "Chinese"
        ],
        "avgRating": 4.1,
        "feeDetails": {
          "restaurantId": "580936",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 3700
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3700
        },
        "parentId": "76139",
        "avgRatingString": "4.1",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 27,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "27 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-07-20 01:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "brand",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "brand"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/eatfit-devarabisanahalli-bellandur-bangalore-580936",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "234631",
        "name": "Truffles",
        "cloudinaryImageId": "cd832b6167eb9f88aeb1ccdebf38d942",
        "locality": "Kaveri Nagar",
        "areaName": "KR Puram",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "American",
          "Continental",
          "Desserts",
          "Bakery",
          "Beverages",
          "Pastas",
          "Italian"
        ],
        "avgRating": 4.4,
        "feeDetails": {
          "restaurantId": "234631",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 5200
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 5200
        },
        "parentId": "218065",
        "avgRatingString": "4.4",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 35,
          "lastMileTravel": 5.9,
          "serviceability": "SERVICEABLE",
          "slaString": "35 mins",
          "lastMileTravelString": "5.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-07-19 23:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "select": true,
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/truffles-kaveri-nagar-kr-puram-bangalore-234631",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "32778",
        "name": "Subway",
        "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
        "locality": "Yemlur",
        "areaName": "Marathahalli",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Salads",
          "Snacks",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.1,
        "feeDetails": {
          "restaurantId": "32778",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2700
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2700
        },
        "parentId": "2",
        "avgRatingString": "4.1",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 29,
          "lastMileTravel": 2.1,
          "serviceability": "SERVICEABLE",
          "slaString": "29 mins",
          "lastMileTravelString": "2.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-07-19 22:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/subway-yemlur-marathahalli-bangalore-32778",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "237665",
        "name": "McDonald's",
        "cloudinaryImageId": "ee5f8e06b300efc07c9fe3f4df40dfc4",
        "locality": "Preatige Tech park",
        "areaName": "Kadubeesanahalli",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Burgers",
          "Beverages",
          "Cafe",
          "Desserts"
        ],
        "avgRating": 4.1,
        "feeDetails": {
          "restaurantId": "237665",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2700
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2700
        },
        "parentId": "630",
        "avgRatingString": "4.1",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 25,
          "lastMileTravel": 2.8,
          "serviceability": "SERVICEABLE",
          "slaString": "25 mins",
          "lastMileTravelString": "2.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-07-20 00:45:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "ABOVE ₹999",
          "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/mcdonalds-preatige-tech-park-kadubeesanahalli-bangalore-237665",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "43910",
        "name": "KFC",
        "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
        "locality": "Kbr Mall",
        "areaName": "Marathahalli",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Burgers",
          "Biryani",
          "American",
          "Snacks",
          "Fast Food"
        ],
        "avgRating": 3.9,
        "feeDetails": {
          "restaurantId": "43910",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2700
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2700
        },
        "parentId": "547",
        "avgRatingString": "3.9",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 25,
          "lastMileTravel": 2.1,
          "serviceability": "SERVICEABLE",
          "slaString": "25 mins",
          "lastMileTravelString": "2.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-07-20 01:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/kfc-kbr-mall-marathahalli-bangalore-43910",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "336904",
        "name": "Pizza Hut",
        "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
        "locality": "Marathahalli",
        "areaName": "KBR Mall",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Pizzas"
        ],
        "avgRating": 3.6,
        "feeDetails": {
          "restaurantId": "336904",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2700
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2700
        },
        "parentId": "721",
        "avgRatingString": "3.6",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 32,
          "lastMileTravel": 2.1,
          "serviceability": "SERVICEABLE",
          "slaString": "32 mins",
          "lastMileTravelString": "2.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-07-20 04:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/pizza-hut-marathahalli-kbr-mall-bangalore-336904",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "1187",
        "name": "Baskin Robbins - Ice Cream Desserts",
        "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
        "locality": "Anand Nagar",
        "areaName": "Marathahalli",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Desserts",
          "Ice Cream"
        ],
        "avgRating": 4.4,
        "veg": true,
        "feeDetails": {
          "restaurantId": "1187",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2700
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2700
        },
        "parentId": "5588",
        "avgRatingString": "4.4",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 28,
          "lastMileTravel": 2.1,
          "serviceability": "SERVICEABLE",
          "slaString": "28 mins",
          "lastMileTravelString": "2.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-07-20 05:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "D",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "30% OFF",
          "subHeader": "UPTO ₹75"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-anand-nagar-marathahalli-bangalore-1187",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "457821",
        "name": "Istah - The Mediterranean Way",
        "cloudinaryImageId": "67d4a416bf932f850b0a15ad33aae762",
        "locality": "Munnekolala",
        "areaName": "Marathahalli",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Arabian",
          "Biryani",
          "Mediterranean",
          "Lebanese",
          "Snacks",
          "Beverages"
        ],
        "avgRating": 4.2,
        "feeDetails": {
          "restaurantId": "457821",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2700
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2700
        },
        "parentId": "3518",
        "avgRatingString": "4.2",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 37,
          "lastMileTravel": 2.5,
          "serviceability": "SERVICEABLE",
          "slaString": "37 mins",
          "lastMileTravelString": "2.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-07-20 02:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹100"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/istah-the-mediterranean-way-munnekolala-marathahalli-bangalore-457821",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "333582",
        "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
        "cloudinaryImageId": "y5meugeozjvrmpn4hvmq",
        "locality": "Murgesh Pallya",
        "areaName": "Indiranagar",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Desserts",
          "Ice Cream",
          "Ice Cream Cakes"
        ],
        "avgRating": 4.5,
        "veg": true,
        "feeDetails": {
          "restaurantId": "333582",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 5200
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 5200
        },
        "parentId": "582",
        "avgRatingString": "4.5",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 26,
          "lastMileTravel": 5.8,
          "serviceability": "SERVICEABLE",
          "slaString": "26 mins",
          "lastMileTravelString": "5.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-07-19 22:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-murgesh-pallya-indiranagar-bangalore-333582",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "29972",
        "name": "Domino's Pizza",
        "cloudinaryImageId": "hkefhqm8lmn4tjdoashe",
        "locality": "Outer Ring Road",
        "areaName": "Marathahalli",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Pizzas",
          "Italian",
          "Pastas",
          "Desserts"
        ],
        "avgRating": 4.3,
        "feeDetails": {
          "restaurantId": "29972",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2700
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2700
        },
        "parentId": "2456",
        "avgRatingString": "4.3",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 25,
          "serviceability": "SERVICEABLE",
          "slaString": "25 mins",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-07-19 22:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹999",
          "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/dominos-pizza-outer-ring-road-marathahalli-bangalore-29972",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "444077",
        "name": "Magnolia Bakery",
        "cloudinaryImageId": "6f0945b8b18d9f4241dd1cd9a70e23d7",
        "locality": "Phoenix Market City",
        "areaName": "Mahadevpura",
        "costForTwo": "₹500 for two",
        "cuisines": [
          "Bakery",
          "Desserts",
          "Ice Cream"
        ],
        "avgRating": 4.3,
        "feeDetails": {
          "restaurantId": "444077",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 5200
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 5200
        },
        "parentId": "267303",
        "avgRatingString": "4.3",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 38,
          "lastMileTravel": 5.8,
          "serviceability": "SERVICEABLE",
          "slaString": "38 mins",
          "lastMileTravelString": "5.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-07-19 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "newg.png",
              "description": "Gourmet"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Gourmet",
                    "imageId": "newg.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/magnolia-bakery-phoenix-market-city-mahadevpura-bangalore-444077",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "156663",
        "name": "Sri Lakshmi Vaibhava",
        "cloudinaryImageId": "hxdoygnqwwi6i6fenhjo",
        "locality": "C.T. Street",
        "areaName": "Marathahalli",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "South Indian",
          "North Indian"
        ],
        "avgRating": 4.3,
        "veg": true,
        "feeDetails": {
          "restaurantId": "156663",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2700
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2700
        },
        "parentId": "14682",
        "avgRatingString": "4.3",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 23,
          "lastMileTravel": 1,
          "serviceability": "SERVICEABLE",
          "slaString": "23 mins",
          "lastMileTravelString": "1.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-07-19 22:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/sri-lakshmi-vaibhava-c-t-street-marathahalli-bangalore-156663",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "352796",
        "name": "Grameen Kulfi",
        "cloudinaryImageId": "z8ugqbgldizxu8ol6dh5",
        "locality": "Munnekolalu",
        "areaName": "Marathahalli",
        "costForTwo": "₹120 for two",
        "cuisines": [
          "Ice Cream",
          "Desserts"
        ],
        "avgRating": 4.7,
        "veg": true,
        "feeDetails": {
          "restaurantId": "352796",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2700
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2700
        },
        "parentId": "12175",
        "avgRatingString": "4.7",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 19,
          "lastMileTravel": 1.5,
          "serviceability": "SERVICEABLE",
          "slaString": "19 mins",
          "lastMileTravelString": "1.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-07-20 01:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/grameen-kulfi-munnekolalu-marathahalli-bangalore-352796",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "27768",
        "name": "Biriyani Zone",
        "cloudinaryImageId": "wdht06sxqdufn5sjv6rq",
        "locality": "Tulasi Theater Road",
        "areaName": "Marathahalli",
        "costForTwo": "₹600 for two",
        "cuisines": [
          "Biryani",
          "Andhra",
          "South Indian",
          "North Indian",
          "Tandoor"
        ],
        "avgRating": 3.9,
        "feeDetails": {
          "restaurantId": "27768",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2700
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2700
        },
        "parentId": "2644",
        "avgRatingString": "3.9",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 23,
          "lastMileTravel": 1.5,
          "serviceability": "SERVICEABLE",
          "slaString": "23 mins",
          "lastMileTravelString": "1.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-07-19 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/biriyani-zone-tulasi-theater-road-marathahalli-bangalore-27768",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "283967",
        "name": "Biergarten Brewery & Kitchen",
        "cloudinaryImageId": "lcp6hhpzculgntv8mzzl",
        "locality": "Whitefield",
        "areaName": "Whitefield",
        "costForTwo": "₹1000 for two",
        "cuisines": [
          "Indian",
          "Chinese",
          "North Indian",
          "Italian"
        ],
        "avgRating": 4.2,
        "feeDetails": {
          "restaurantId": "283967",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 3700
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3700
        },
        "parentId": "45419",
        "avgRatingString": "4.2",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 31,
          "lastMileTravel": 3.8,
          "serviceability": "SERVICEABLE",
          "slaString": "31 mins",
          "lastMileTravelString": "3.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-07-19 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "newg.png",
              "description": "Gourmet"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Gourmet",
                    "imageId": "newg.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹175 OFF",
          "subHeader": "ABOVE ₹899",
          "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/biergarten-brewery-and-kitchen-whitefield-bangalore-283967",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "249713",
        "name": "Behrouz Biryani",
        "cloudinaryImageId": "mgbm4w467a7szeb5nsbq",
        "locality": "Tulasi theater",
        "areaName": "Marathahalli",
        "costForTwo": "₹500 for two",
        "cuisines": [
          "Biryani",
          "Mughlai",
          "Lucknowi",
          "Hyderabadi",
          "Kebabs",
          "North Indian",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.2,
        "feeDetails": {
          "restaurantId": "249713",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2700
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2700
        },
        "parentId": "1803",
        "avgRatingString": "4.2",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 31,
          "lastMileTravel": 0.8,
          "serviceability": "SERVICEABLE",
          "slaString": "31 mins",
          "lastMileTravelString": "0.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-07-20 03:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/behrouz-biryani-tulasi-theater-marathahalli-bangalore-249713",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "307559",
        "name": "Homely",
        "cloudinaryImageId": "hdqmfwigtxpu7aoabzqi",
        "locality": "Munekollal",
        "areaName": "Marathahalli",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Home Food",
          "North Indian",
          "South Indian",
          "Beverages",
          "Desserts",
          "Thalis"
        ],
        "avgRating": 4.2,
        "feeDetails": {
          "restaurantId": "307559",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2700
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2700
        },
        "parentId": "4043",
        "avgRatingString": "4.2",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 28,
          "lastMileTravel": 2.5,
          "serviceability": "SERVICEABLE",
          "slaString": "28 mins",
          "lastMileTravelString": "2.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-07-19 23:30:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "C",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹100"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/homely-munekollal-marathahalli-bangalore-307559",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "32398",
        "name": "The Bowl Company",
        "cloudinaryImageId": "bb6049fae59b8a2413a9177eb0338b49",
        "locality": "Munnekollal",
        "areaName": "Marathahalli",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Pan-Asian",
          "Continental",
          "North Indian",
          "Desserts",
          "American",
          "Asian",
          "Beverages",
          "Biryani",
          "Chinese",
          "European",
          "Grill",
          "Hyderabadi",
          "Indian",
          "Italian",
          "Kebabs",
          "Lucknowi",
          "Mediterranean",
          "Mexican",
          "Mughlai",
          "Oriental",
          "Pastas",
          "Punjabi",
          "Raja"
        ],
        "avgRating": 4.3,
        "feeDetails": {
          "restaurantId": "32398",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2700
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2700
        },
        "parentId": "4317",
        "avgRatingString": "4.3",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 30,
          "lastMileTravel": 2.5,
          "serviceability": "SERVICEABLE",
          "slaString": "30 mins",
          "lastMileTravelString": "2.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-07-20 02:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹100"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/the-bowl-company-munnekollal-marathahalli-bangalore-32398",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "62912",
        "name": "LunchBox - Meals and Thalis",
        "cloudinaryImageId": "saftivyo2xwkqcda2nxv",
        "locality": "Lakshminarayana Pura",
        "areaName": "Chinnapanna Halli",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Biryani",
          "North Indian",
          "Punjabi",
          "Healthy Food",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.1,
        "feeDetails": {
          "restaurantId": "62912",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 3700
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3700
        },
        "parentId": "4925",
        "avgRatingString": "4.1",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 42,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "42 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-07-20 03:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-lakshminarayana-pura-chinnapanna-halli-bangalore-62912",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "89710",
        "name": "NIC Ice Creams",
        "cloudinaryImageId": "c8b98c4064dc2fd6bdf350212e5f0bd5",
        "locality": "Marathahalli",
        "areaName": "Chinnappanhalli",
        "costForTwo": "₹120 for two",
        "cuisines": [
          "Ice Cream",
          "Desserts"
        ],
        "avgRating": 4.6,
        "veg": true,
        "feeDetails": {
          "restaurantId": "89710",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2700
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2700
        },
        "parentId": "6249",
        "avgRatingString": "4.6",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 19,
          "lastMileTravel": 1.5,
          "serviceability": "SERVICEABLE",
          "slaString": "19 mins",
          "lastMileTravelString": "1.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-07-20 01:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "EVERY ITEM",
          "subHeader": "@ ₹159"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/nic-ice-creams-marathahalli-chinnappanhalli-bangalore-89710",
        "type": "WEBLINK"
      }
    }
  ];

const Header = () => {
    return <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://ps.w.org/mp-restaurant-menu/assets/icon-256x256.png?rev=2665784"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>

            </div>
        </div>
}

// const ResCardRating = ({rating}) => {

//    let noOfStars = Array.from({length: Number(rating)}, (_,index)=> index + 1);
//     return (
//         <ul className="res-card-rating">
//             {noOfStars.map((item) => (<li key={item}><StarIcon /> </li>))}
//         </ul>
//     )
//     // return <div> {noOfStars}
//     // </div>
// }

const RestaurantCard = ( {title, cuisine, rating, price, img}) => {
    return <div className="restaurant-card">
            <div className="res-card-img"><img src={img}/></div>
            <div className="res-card-title">{title}</div>
            <div className="res-card-cuisine">{cuisine}</div>
            <div className="res-card-details">
                {/* <ResCardRating rating={rating}/> */}
                <div className="res-card-rating">Ratings: {rating}</div>
                <div className="res-card-price">{price} for two</div>
            </div>
    </div>
}

const RestaurantContainer = () => {
    // return <div className="restaurant-container">
    //         <RestaurantCard title="Pehla Restaurant" cuisine= "North India, South Indian, Chinese, Continental" rating= "4" price= "500" img= "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1600"/>
    //         <RestaurantCard title="Pehla Restaurant" cuisine= "North India, South Indian, Chinese, Continental" rating= {4} price= "500" img= "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1600"/>
    //         <RestaurantCard title="Pehla Restaurant" cuisine= "North India, South Indian, Chinese, Continental" rating= {4} price= "500" img= "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1600"/>
    //         <RestaurantCard title="Pehla Restaurant" cuisine= "North India, South Indian, Chinese, Continental" rating= {4} price= "500" img= "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1600"/>
    //         <RestaurantCard title="Pehla Restaurant" cuisine= "North India, South Indian, Chinese, Continental" rating= {4} price= "500" img= "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1600"/>
    //         <RestaurantCard title="Pehla Restaurant" cuisine= "North India, South Indian, Chinese, Continental" rating= {4} price= "500" img= "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1600"/>
    //         <RestaurantCard title="Pehla Restaurant" cuisine= "North India, South Indian, Chinese, Continental" rating= {4} price= "500" img= "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1600"/>
    //         <RestaurantCard title="Pehla Restaurant" cuisine= "North India, South Indian, Chinese, Continental" rating= {4} price= "500" img= "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1600"/>
    // </div>

    return (
        <div className="restaurant-container">
            {resData.map((restaurant)=>(<RestaurantCard key={restaurant.info.id} title={restaurant.info.name} cuisine= {restaurant.info.cuisines.join(", ")} rating= {restaurant.info.avgRating} price= {restaurant.info.feeDetails.totalFee/10} img= {"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +  restaurant.info.cloudinaryImageId}/>))}
        </div>
    )
}

const Search = () => {
    return <div className="searchbar">
            Search
    </div>
}

const MainContainer = () => {
    return <div className="main-container">
        <Search />
        <RestaurantContainer />
    </div>
}


//parent container of the entire app
const AppLayout = () => {
    return <div className="app">
            <Header />
            <MainContainer />
    </div>
}





const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);


// // chapter -3 starts//

//     //creating a react element
//     const Heading = () => (<h1 id="jsxHeading">Namaste JSX</h1>);
//     const paragraph = <p>This is a paragraph</p>
//     const number = 100; 


//     // React Functional Components
//     const HeadingComponent = () => {
//         return (<div id="container">

//                 {/* Inserting a react component */}
//                 <Heading />

//                 {/* Inserting a react element  */}
//                 {paragraph}

//                 {/* performing JS evaluation or JS codes inside JSX */}
//                 {number * 20}
//                 {Heading ()}

//                 {/* Regular JSX code */}
//                 <h1>Namaste React Functional component</h1>
//             </div>)
//     }

//     // const HeadingComponent2 = () => (<div id="container">
//     //             <Heading />
//     //             <hi>Namaste React Functional component 2</hi>
//     //         </div>);


//     const root = ReactDOM.createRoot(document.getElementById("root"));
//     root.render(<HeadingComponent />);


// //chapter -3 ends//


// chapter -1 - starts//
// const parent = React.createElement("div", {id: "parent", xyz: "abc "}, [React.createElement("div", {id: "child", xyz: "abc "}, "I'm child 1"), React.createElement("div", {id: "child", xyz: "abc"}, "I'm child 2")]);
// const root = ReactDOM.createRoot(document.getElementById("root"));

// // console.log(heading);
// root.render(parent);      
// chapter -1 - ends//  