import "./Discount.css";

export function Discount(): JSX.Element {
    const discount = 10 // Demo for backend
    return (
        <div className="Discount Box">
            <p>Only now {discount}% discount on all products!</p>

        </div>
    );
}
export default Discount