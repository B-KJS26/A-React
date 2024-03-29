import { Navigate } from "react-router-dom"
import { useNavigate } from "react-router-dom/dist";
import Logo from '../../img/lgo.png';
import './Header.scss';


export default function Header() {
    const nav = useNavigate();
    function Logins() {
        nav('/login');
    }
    function downloading() {
        nav('/download');
    }
    function goingmain() {
        nav('/');
    }
    function nitro() {
        nav('/nitro');
    }
    function discover() {
        nav('/discover');
    }
    return (
        <div className="headers">
            <img src={Logo} className="logo" onClick={goingmain}></img>
            <div className="alltext">
                <span onClick={downloading}>Download</span>
                <text onClick={nitro}>Nitro</text>
                <text onClick={discover}>Discover</text>
                <text>Safety</text>
                <text>Support</text>
                <text>Blog</text>
                <text>Careers</text>
            </div>
            <button onClick={Logins} className="loginso"><text>Login</text></button>
            
        </div>
    )
}