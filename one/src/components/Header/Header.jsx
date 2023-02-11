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
            <div className="paragraph">
                <h1>이런 공간이 있다면 어떨까
                    <br />요...</h1>
                <p>...학교 동아리, 게임 그룹, 세계 예술 감상 커뮤니티에 소속되어 유대감을 느낄 수 있는 
                    공간. 소중한 단짝 친구들과 어울릴 수 있는 우리만의 공간. 더 쉽게, 매일 어울리고 이야기할
                    수 있는 그런 공간 말이에요.</p>
            </div>
            <button className="window">
                <MdOutlineFileDownload size={28} className='yo'/>
                <text>Windows용 다운로드</text>
            </button>
            <button className="browser"><text>웹브라우저에서 Discord 열기</text></button>
        </div>
    )
}