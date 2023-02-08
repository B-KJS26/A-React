import one from '../../../img/first.svg'
import './Serve1.scss'
import FadeIn from 'react-fade-in';
export default function Serveone() {
    return(
        <div className='serveone'>
            <FadeIn
            delay={500}
            transitionDuration={1000}
            >
            <img src={one} className='imging'></img>
            <h1>나만을 위한 초대<br/>전용 공간을 만들<br/>어보세요</h1>
            <p>Discord 서버는 주제 기반 채널로 나뉩니다.<br/>
            단체방에서도 혼잡함 없이 협동하고, 공유<br/>
            하고, 편하게 이야기를 나눌 수 있어요.</p> 
            </FadeIn>
        </div>
    )
}