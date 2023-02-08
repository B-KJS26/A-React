import three from '../../../img/third.svg'
import './Serve3.scss';
import FadeIn from 'react-fade-in';
export default function Servethree() {
    return(
        <div className='servethree'>
            <FadeIn
            delay={500}
            transitionDuration={1000}
            >
            <img src={three} className='imging'></img>
            <h1>소규모 모임에서<br/>팬덤까지</h1>
            <p>어느 커뮤니티라도 운영할 수 있는 관리 도<br/>
            구가 주어지며, 멤버의 권한도 지정할 수 있<br/>
            어요. 멤버에게 특별한 권한을 주거나, 비공<br/>
            개 채널을 만들어보세요.</p> 
            </FadeIn>
        </div>
    )
}