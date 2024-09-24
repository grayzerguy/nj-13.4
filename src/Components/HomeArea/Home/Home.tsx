import { BestSeller } from "../BestSeller/BestSeller";
import { Desserts } from "../Desserts/Desserts";
import Discount from "../Discount/Discount";
import { Recommendations } from "../Recommendations/Recommendations";
import { Sales } from "../Sales/Sales";
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
            {/*Props*/}
            <Sales present={10} category="Beverages" />
            <Sales present={15} category="Fruits" />

            <BestSeller/>

            
        </div>
    );
}

export default Home