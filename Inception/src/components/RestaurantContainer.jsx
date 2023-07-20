import RestaurantCard from "./RestaurantCard"
import resData from "../utils/data"
import { CDN_URL } from "../utils/constants"
import { useState } from "react"

const RestaurantContainer = () => {

    const [restaurantsToRender, setRestaurantsToRender] = useState(resData)

    // let restaurantsToRender = [
    //     {
    //         "info": {
    //           "id": "580936",
    //           "name": "EatFit",
    //           "cloudinaryImageId": "94d3bc5e6392fbaf50686cf8cfab10ef",
    //           "cuisines": [
    //             "Healthy Food",
    //             "Pizzas",
    //             "North Indian",
    //             "Thalis",
    //             "Biryani",
    //             "Chinese"
    //           ],
    //           "avgRating": 4.1,
    //           "totalFee": 3700
    //         }
    //     },
    //     {
    //         "info": {
    //           "id": "580937",
    //           "name": "Dominos",
    //           "cloudinaryImageId": "94d3bc5e6392fbaf50686cf8cfab10ef",
    //           "cuisines": [
    //             "Healthy Food",
    //             "Pizzas",
    //             "North Indian",
    //             "Thalis",
    //             "Biryani",
    //             "Chinese"
    //           ],
    //           "avgRating": 4.7,
    //           "totalFee": 2700
    //         }
    //     },
    //     {
    //         "info": {
    //           "id": "580938",
    //           "name": "Pizzahut",
    //           "cloudinaryImageId": "94d3bc5e6392fbaf50686cf8cfab10ef",
    //           "cuisines": [
    //             "Healthy Food",
    //             "Pizzas",
    //             "North Indian",
    //             "Thalis",
    //             "Biryani",
    //             "Chinese"
    //           ],
    //           "avgRating": 4.9,
    //           "totalFee": 2700
    //         }
    //     }
    // ];

    return (
        <div className="restaurant-container">
            <button className="filter-btn-test" 
            onClick={()=>{
                let filteredData = restaurantsToRender.filter((item)=> item.info.avgRating > 4.2)
                // console.log(restaurantsToRender)
                setRestaurantsToRender(filteredData)
            }}
            > 
            Filter Top Restaurants
            </button>
            {restaurantsToRender.map((restaurant)=>(<RestaurantCard key={restaurant.info.id} title={restaurant.info.name} cuisine= {restaurant.info.cuisines.join(", ")} rating= {restaurant.info.avgRating} price= {restaurant.info.totalFee/10} img= {CDN_URL +  restaurant.info.cloudinaryImageId}/>))}
        </div>
    )
}

export default RestaurantContainer;