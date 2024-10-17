import "./Loading.css";
import loadingSource from "../../../Assets/Images/loading.gif"

export function Loading(): JSX.Element {
    return (
        <div className="Loading">

            <img src={loadingSource} />

        </div>
    );
}
