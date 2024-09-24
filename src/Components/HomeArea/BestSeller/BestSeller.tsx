import { useCallback, useState } from "react";
import "./BestSeller.css";

export function BestSeller(): JSX.Element {

    const [name, setName] = useState("")
    const [totalItems, setTotalItems] = useState(0)
    const [product, setProduct] = useState('')

    //let name : string ="";
    //let totalItems : number=0;

    function show(): void {
        setName('blabla')
        setTotalItems(170)
        //alert ("Name " + name + ", Total Items" + totalItems)
    }
    function bestProduct(): void {
        setProduct('lulu')
    }

    return (
        <div className="BestSeller Box">
            <p>
                <button onClick={show}>Best Seller</button>
                <span>Name : {name}</span>
                <span>Total Items : {totalItems}</span>
            </p>
            <p>
                <button onClick={bestProduct}>Best Product</button>
                <span>Name : {product}</span>

            </p>

        </div>
    );
}
