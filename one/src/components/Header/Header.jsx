import { Navigate } from "react-router-dom"
import { useNavigate } from "react-router-dom/dist";
import Yo from '../../img/discord.svg';
import Yo2 from '../../img/discord2.svg';
import './Header.scss';
export default function Header() {
    const nav = useNavigate();
    function Logins() {
        nav('/login');
    }
    return(
        <div className="headers">
            <img src={Yo} className="img1"></img>
            <img src={Yo2} className="img2"></img>
            <span className="title">Discord</span>
            <span>Download</span>
            <span>Nitro</span>
            <span>Discover</span>
            <span>Safety</span>
            <span>Support</span>
            <button><text onClick={Logins} className="loginso">Log in</text></button>
        </div>
    )
}