import { Desserts } from "../Desserts/Desserts";
import Discount from "../Discount/Discount";
import Specials from "../Specials/Specials";
import "./Home.css";

export function Home(): JSX.Element {
    return (
        <div className="Home ">
            {/*Interpolation - משתנה שנכנס לקוד */}
            <Discount />
            {/*Conditional Rendering */}
            <Specials />
            <Desserts/>
        </div>
    );
}

export default Home