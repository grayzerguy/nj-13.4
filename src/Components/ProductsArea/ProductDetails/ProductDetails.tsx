import { useNavigate, useParams } from "react-router-dom";
import "./ProductDetails.css";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductModel from "../../../Models/ProductModel";
import config from "../../../Utils/Config";

export function ProductDetails(): JSX.Element {
    const params = useParams()
    const id = params.id
    // Create product state:
    const [product, setProduct] = useState<ProductModel>();
    useEffect(() => {
        axios.get<ProductModel>(config.productsUrl + id)
            .then(response => setProduct(response.data))
            .catch(err => alert(err.massage))
    }, [])

    const navigate = useNavigate()
    return (
        <div className="ProductDetails">
            {/* {product && <ProductCard product={product} />} */}

            <h2>Product Details</h2>

            {
                product &&
                <>
                    <h3>Name : {product.name}</h3>
                    <h3>Price : {product.price}</h3>
                    <img src={product.imageUrl} alt={product.name} className="ProductImage" />
                    <h3>Stock : {product.stock}</h3>
                    {/* <NavLink to={"/products/"} >Go back</NavLink> */}
                    <button onClick={() => navigate("/products")}>Go back</button>
                </>
            }
        </div>
    );
}
