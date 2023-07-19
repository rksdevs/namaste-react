import { RestaurantCard } from "./RestaurantCard"
import { resData } from "../data"

export const RestaurantContainer = () => {
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