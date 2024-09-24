import "./Sales.css";



interface SalesProps {
    present: number,
    category: string
}
export function Sales(props : SalesProps ): JSX.Element {
    return (
        <div className="Sales Box">

            <p>
                Sale : {props.present}% discount on all {props.category}
            </p>

        </div>
    );
}
