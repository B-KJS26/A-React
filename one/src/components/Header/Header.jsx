import { Navigate } from "react-router-dom"
import { useNavigate } from "react-router-dom/dist";
import Yo from '../../img/discord.svg';
import Yo2 from '../../img/discord2.svg';
import Yo3 from '../../img/discord3.svg';
import Logo from '../../img/lgo.png';
import './Header.scss';
import { MdOutlineFileDownload } from 'react-icons/md';

export default function Header() {
    const nav = useNavigate();
    function Logins() {
        nav('/login');
    }
    function downloading() {
        nav('/download');
    }
    return (
        <div className="headers">
            <img src={Logo} className="logo"></img>
            <img src={Yo} className="img1"></img>
            <img src={Yo2} className="img2"></img>
            <img src={Yo3} className="img3"></img>
            <div className="alltext">
                <span onClick={downloading}>Download</span>
                <text>Nitro</text>
                <text>Discover</text>
                <text>Safety</text>
                <text>Support</text>
                <text>Blog</text>
                <text>Careers</text>
            </div>
            <button onClick={Logins} className="loginso"><text>Login</text></button>
            
        </div>
    )
}