// import axios from "axios";
// import { useEffect, useState } from "react";
// import ProductModel from "../../../Models/ProductModel";
// import config from "../../../Utils/Config";
// import ProductCard from "../ProductCard/ProductCard";
// import "./ProductList.css";
// import { Loading } from "../../SharedArea/Loading/Loading";
// import { NavLink } from "react-router-dom";

// function ProductList(): JSX.Element {

//     // Create products state: 
//     const [products, setProducts] = useState<ProductModel[]>([]);
//     const [searchTerm, setSearchTerm] = useState<string>("");

//     useEffect(() => {

//         // IIFE for using async-await:
//         (async function () {

//             // AJAX Request:
//             const response = await axios.get<ProductModel[]>(config.productsUrl);

//             // Extract the data from the response:
//             setProducts(response.data);

//         })();

//     }, []);

//     const filteredProducts = products.filter(product =>
//         product.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     return (
//         <div className="ProductList">
//             {/* search */}
//             <input
//                 type="text"
//                 placeholder="Search products..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="search-input"
//             />

//             {products.length === 0 && <Loading />}
//             <NavLink to={"/products/new"}>➕</NavLink>
//             {filteredProducts.map(p => <ProductCard key={p.id} product={p} />)}
//         </div>
//     );
// }

// export default ProductList;

import axios from "axios";
import { useEffect, useState } from "react";
import ProductModel from "../../../Models/ProductModel";
import config from "../../../Utils/Config";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";
import { Loading } from "../../SharedArea/Loading/Loading";
import { NavLink } from "react-router-dom";

function ProductList(): JSX.Element {
    const [products, setProducts] = useState<ProductModel[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [currentPage, setCurrentPage] = useState<number>(1);//
    const [productsPerPage] = useState<number>(20); // You can adjust this number

    useEffect(() => {
        (async function () {
            const response = await axios.get<ProductModel[]>(config.productsUrl);
            setProducts(response.data);
        })();
    }, []);

    // Filter products based on search term
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Get current products
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    // Change page
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <div className="ProductList">
            <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />

            {products.length === 0 && <Loading />}
            <NavLink to={"/products/new"}>➕</NavLink>
            {currentProducts.map(p => <ProductCard key={p.id} product={p} />)}

            <div className="pagination">
                {Array.from({ length: Math.ceil(filteredProducts.length / productsPerPage) }, (_, i) => (
                    <button key={i} onClick={() => paginate(i + 1)} className={currentPage === i + 1 ? 'active' : ''}>
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default ProductList;