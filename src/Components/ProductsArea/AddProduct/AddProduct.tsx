import { useForm } from "react-hook-form";
import "./AddProduct.css";
import ProductModel from "../../../Models/ProductModel";
import axios from "axios";
import config from "../../../Utils/Config";
import { NavLink, useNavigate } from "react-router-dom";

export function AddProduct(): JSX.Element {
    const { register, handleSubmit, formState } = useForm<ProductModel>()
    const navigate = useNavigate();// Initialize the navigate function from React Router. This hook returns a function that lets us programmatically navigate to different routes in our application.
    async function submit(product: ProductModel) {


        // Add the product to the database
        try {
            //
            const formData = new FormData();
            formData.append("name", product.name);
            formData.append("price", product.price.toString());
            formData.append("stock", product.stock.toString());
            formData.append("image", product.image.item(0));



            const response = await axios.post<ProductModel>(config.productsUrl, formData);
            // const addedProduct = response.data
            // console.log(addedProduct);
            alert("Product added successfully!");
            // window.location.href = "/products";//Redirect to product list page after adding a product
            navigate('/products');//products";//Redirect to product list page after adding a product




        }
        catch (err: any) {
            alert("An error occurred while adding the product." + err.massage);
            return;

        }



    }
    return (
        <div className="AddProduct Box">

            <form onSubmit={handleSubmit(submit)}>
                <h2>Add Product</h2>
                <label>Name:</label>
                <input type="text"   {...register("name", {
                    required: "Name is required",
                    maxLength: { value: 50, message: "Name should not exceed 50 characters" }
                })} />
                <span>{formState.errors.name?.message}</span>

                <label>Price:</label>
                <input type="number" step={0.01}  {...register("price", {
                    required: "Price is required",
                    min: {
                        value: 0,
                        message: "Price should be a positive number"
                    },
                    max: {
                        value: 10000,
                        message: "Price should be less than or equal to 10,000"
                    },
                    pattern: {
                        value: /^[0-9]+(\.[0-9]{1,2})?$/,
                        message: "Price should be a valid number"
                    }
                })} />
                <span>{formState.errors.price?.message}</span>

                <label>Stock:</label>
                <input type="number"   {...register("stock", {
                    required: "Stock is required",
                    min: {
                        value: 0,
                        message: "Stock should be a positive number"
                    }
                })} />
                <span>{formState.errors.stock?.message}</span>



                <label>Image:</label>
                <input type="file" accept="image/*"   {...register("image")} />

                <button>Add</button>
            </form>

        </div>
    );
}
