import '../../styles/download/Download.scss'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
export default function Download() {
    const nav = useNavigate();
    function gous() {
        window.location.href = "https://explore.spotify.com/us";
    }
    function goplayer() {
        nav('playlist');
    }
    return (
        <div>
            <div className="spotifydown">
                <img src='images/down.png'></img>
                <h1>Spotify 다운로드하기</h1>
                <p>디바이스에서 수백만 개의 곡을 감상하세요.</p>
                <button><text>다운로드</text></button>
            </div>
            <div className='subdown1'>
                <h1>모바일 및 태블릿에서도 음악을 감상하세요.</h1>
                <p>휴대폰이나 태블릿으로 음악을 듣는 것은 쉽고 즐거우며 무료입니다.</p>
                <div className='goshop'>
                    <img src='images/apple.png' className='apple'></img>
                    <img src='images/google.png' className='google'></img>
                    <img src='images/microsoft.png' className='micro'></img>
                </div>
            </div>
            <div className='subdown2'>
                <img src='images/subdown.png'></img>
                <h1>계정 하나로 어디서든 들으세요.</h1>
                <span>
                    모바일 기기 <text className='dot'>•</text>
                    컴퓨터 <text className='dot'>•</text>
                    태블릿 <text className='dot'>•</text>
                    <text className='goto' onClick={gous}>자동차</text> <text className='dot'>•</text>
                    <text className='goto' onClick={gous}>PLAYSTATION®</text> <text className='dot'>•</text>
                    <text className='goto' onClick={gous}>XBOX</text> <text className='dot'>•</text>
                    <text className='goto' onClick={gous}>TV</text> <text className='dot'>•</text>
                    <text className='goto' onClick={gous}>스피커</text> <text className='dot'>•</text>
                    <text className='goto' onClick={goplayer}>웹 플레이어</text>
                </span>
            </div>
        </div>
    )
}