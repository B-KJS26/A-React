import two from '../../../img/third.svg'
import './Serve3.scss'
import FadeIn from 'react-fade-in';
export default function Servethree() {
    return(
        <div className='servethree'>
            <FadeIn
            delay={500}
            transitionDuration={1000}
            >
            <img src={two} className='imging'></img>
            <h1>누구나 쉽게 어울<br/>릴 수 있는 곳</h1>
            <p>모처럼 한가하다면 음성 채널에 들어가 보<br/>
            세요. 전화를 걸 필요 없이 입장과 동시에 서<br/>
            버에 있는 친구들과 대화를 나눌 수 있답니<br/>
            다.</p> 
            </FadeIn>
        </div>
    )
}