import { Desserts } from "../Desserts/Desserts";
import Discount from "../Discount/Discount";
import { Recommendations } from "../Recommendations/Recommendations";
import Specials from "../Specials/Specials";
import "./Home.css";

export function Home(): JSX.Element {
    return (
        <div className="Home ">
            {/*Interpolation - משתנה שנכנס לקוד */}
            <Discount />
            {/*Conditional Rendering */}
            <Specials />
            {/*display list*/}
            <Desserts />
            {/*Events*/}
            <Recommendations />
        </div>
    );
}

export default Home