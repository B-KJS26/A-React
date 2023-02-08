import four from '../../../img/four.svg'
import deco from '../../../img/deco.svg'
import './Serve4.scss';
import FadeIn from 'react-fade-in';
import { MdOutlineFileDownload } from 'react-icons/md'
export default function Servefour() {
    return (
        <div className='servefour'>
            <FadeIn
                delay={500}
                transitionDuration={1000}
            >
                <h1>친밀감을 위한 신뢰도 높은 기술</h1>
                <p>저지연 음성과 영상 채팅을 이용하면 꼭 한 공간에 있는 것 같답니다. 영상으로 인사하거나, 친구들의 게임 스트리<br />밍을 보거나, 화면 공유로 함께 그림을 그릴 수도 있죠.</p>
                <img src={four} className='imging'></img>
                <img src={deco} className='decoration'></img>
                <h2>이제 시작해볼까요?</h2>
                <button>
                    <MdOutlineFileDownload size={35} className='icons'/>
                    <text>Windows용 다운로드</text>
                </button>
            </FadeIn>
        </div>
    )
}