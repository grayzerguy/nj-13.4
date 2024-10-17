import { NavLink } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import "./ProductCard.css";

type ProductCardProps = {

    product: ProductModel;
}

function ProductCard(props: ProductCardProps): JSX.Element {
    return (
        <div className="ProductCard Box">
            <div>
                {props.product.name}
                <br />
                Price: {props.product.price}
                <br />
                Stock: {props.product.stock}
            </div>
            <div>
                
                {props.product.stock > 0 && (
                    <NavLink to={"/products/details/" + (props.product.id)} >
                        <img src={props.product.imageUrl} />
                    </NavLink>
                )
                }


            </div>
        </div>
    );
}

export default ProductCard;