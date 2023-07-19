import RestaurantCard from "./RestaurantCard"
import resData from "../utils/data"
import { CDN_URL } from "../utils/constants"

const RestaurantContainer = () => {

    return (
        <div className="restaurant-container">
            {resData.map((restaurant)=>(<RestaurantCard key={restaurant.info.id} title={restaurant.info.name} cuisine= {restaurant.info.cuisines.join(", ")} rating= {restaurant.info.avgRating} price= {restaurant.info.feeDetails.totalFee/10} img= {CDN_URL +  restaurant.info.cloudinaryImageId}/>))}
        </div>
    )
}

export default RestaurantContainer;