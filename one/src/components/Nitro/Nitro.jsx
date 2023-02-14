import Header from "../Header/Header";
import nitrovideo from '../../img/nitro.webm'
import './Nitro.scss'
export default function Nitro() {
    return (
        <div className="nitromain">
            <Header />
            <video>
                <source src={nitrovideo} type="video/webm"/>
            </video>
            <h1>Nitro와 함께<br/>더 재밌게 즐기<br/>세요</h1>
            <p>Nitro를 구독해 이모티콘을 업그레이드하고,<br/>
            프로필을 꾸미고, 대용량 파일을 공유하는 등<br/>
            다양한 특전을 누리세요.</p>
        </div>
    )
}