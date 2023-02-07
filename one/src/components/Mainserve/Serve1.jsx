import one from '../../img/first.svg'
import './Serve1.scss'
export default function Serveone() {
    return(
        <div className='serveone'>
            <img src={one} className='imging'></img>
            <h1>나만을 위한 초대<br/>전용 공간을 만들<br/>어보세요</h1>
        </div>
    )
}