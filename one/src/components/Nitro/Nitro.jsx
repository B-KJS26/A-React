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
            <div className="nitromains">
            <h1>Nitro와 함께<br/>더 재밌게 즐기<br/>세요</h1>
            <p>Nitro를 구독해 이모티콘을 업그레이드하고,<br/>
            프로필을 꾸미고, 대용량 파일을 공유하는 등<br/>
            다양한 특전을 누리세요.</p>
            </div>
            <div className="nitrobasics">
                <h1>NITRO BASIC</h1>
                <p className="p1">50MB 업로드</p>
                <p className="p2">어디서나 사용자 지정 이모티콘 사용 가능</p>
                <p className="p3">프로필 특별 Nitro 배지</p>
            </div>
            <div className="nitro">
                <h1>NITRO</h1>
                <p className="p1">500MB 업로드</p>
                <p className="p2">어디서나 사용자 지정 이모티콘 사용 가능</p>
                <p className="p3">HD 영상 방송</p>
                <p className="p4">활동 이용</p>
                <p className="p5">서버 부스트 2개</p>
                <p className="p6">사용자 지정 프로필 등!</p>
            </div>
        </div>
    )
}