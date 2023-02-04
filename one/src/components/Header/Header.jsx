import { Navigate } from "react-router-dom"
import { useNavigate } from "react-router-dom/dist";
import './Header.css';
export default function Header() {
    const nav = useNavigate();
    function Logins() {
        nav('/login');
    }
    return(
        <div className="headers">
            <h2 className="title">Discord</h2>
            <text onClick={Logins} className="loginso">Log in</text>
        </div>
    )
}