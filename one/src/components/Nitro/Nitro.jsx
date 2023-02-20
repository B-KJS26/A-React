import Header from "../Header/Header";
import nitrovideo from '../../img/nitro.webm'
import './Nitro.scss'
import One from '../../img/one.svg';
import Two from '../../img/two.svg';
import Three from '../../img/three.svg';
import Four from '../../img/fourth.svg';
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
            <h1 className="popular">인기 Nitro 특전</h1>
            <div className="one">
                <h1>클립에서 사진까지 대형 파일 업로<br/>드로 서로 공유하세요</h1>
                <img src={One}></img>
            </div>
            <div className="two">
                <h1>멋진 HD 화질로 즐기는 방송 앱과<br/>게임</h1>
                <img src={Two}></img>
            </div>
            <div className="three">
                <h1>어디서나 사용자 지정 이모티콘으로<br/>즐기며 밈을 만드세요</h1>
                <img src={Three}></img>
            </div>
            <div className="four">
                <h1>서버 부스트 2개로 커뮤니티를 위해 특<br/>전을 잠금 해제하세요</h1>
                <img src={Four}></img>
            </div>
            <button className="benefit"><text>모든 특전 보기</text></button>
        </div>
    )
}