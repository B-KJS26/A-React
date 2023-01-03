
import { Fade } from 'react-reveal';
export default function Preset4() {
    return(
        <div>
            <div className='soge4'>
                <h1>Spotify를 이용해야 하는 이유</h1>
                <Fade bottom>
                    <img src='images/newm.png' className='newm'></img>
                    <span className='fit'>
                        <text>새로운 음악 발견하기</text>
                        <p>8천만 개가 넘는 트랙을 즐겨보세요.</p>
                    </span>
                    <img src='images/playlists.png' className='playlist'></img>
                    <span className='sit'>
                        <text>나만의 맞춤 플레이리스트</text>
                        <p>음악 취향에 맞춰 만들었습니다.</p>
                    </span>
                    <img src='images/offline.png' className='offline'></img>
                    <span className='tit'>
                        <text>오프라인에서 감상</text>
                        <p>내 기기에 노래 다운로드.</p>
                    </span>
                    <img src='images/multi.png' className='multi'></img>
                    <span className='foit'>
                        <text>여러 기기에서 스트리밍</text>
                        <p>모바일, PC, 태블릿에서 음악을 들어보세요.</p>
                    </span>
                </Fade>
            </div>
        </div>
    )
}