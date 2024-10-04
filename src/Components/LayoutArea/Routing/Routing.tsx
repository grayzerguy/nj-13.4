import { Navigate, Route, Routes } from "react-router-dom";
import "./Routing.css";
import Home from "../../HomeArea/Home/Home";
import { ProductList } from "../../ProductsArea/ProductList/ProductList";
import { About } from "../../AboutArea/About/About";
import { PageNotFound } from "../PageNotFound/PageNotFound";

export function Routing(): JSX.Element {
    return (

        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/about" element={<About />} />

            {/* <Route path="/" element={<Home />} /> */}
            {/* redirect */}
            <Route path="/" element={<Navigate to='/home' />} />
            <Route path="*" element={<PageNotFound />} />


        </Routes>

    );
}
