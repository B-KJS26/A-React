import Header from './Header/Header'
import './Main.scss'
import Serveone from './Mainserve/Serve1/Serve1'
import Servetwo from './Mainserve/Serve2/Serve2'
export default function Main(){
    return(
        <div className='mainpages'>
            <Header/>
            <Serveone/>
            <Servetwo/>
        </div>
    )
}