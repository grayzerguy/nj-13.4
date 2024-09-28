import "./Logo.css";
import logo from "./../../../Assets/Images/logo.jpg"
export function Logo(): JSX.Element {
    return (
        <div className="Logo">

            <img src={logo} />
			
        </div>
    );
}
