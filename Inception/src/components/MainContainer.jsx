import { Search } from "./Search";
import { RestaurantContainer } from "./RestaurantContainer";

export const MainContainer = () => {
    return <div className="main-container">
        <Search />
        <RestaurantContainer />
    </div>
}