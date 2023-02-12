import react from 'react';
import './Serve0.scss';
import { MdOutlineFileDownload } from 'react-icons/md';
import Yo from '../../../img/discord.svg';
import Yo2 from '../../../img/discord2.svg';
import Yo3 from '../../../img/discord3.svg';
import Logo from '../../../img/lgo.png';

export default function Serverzero() {
    return(
        <div className='geo'>
            <img src={Yo} className="img1"></img>
            <img src={Yo2} className="img2"></img>
            <img src={Yo3} className="img3"></img>
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