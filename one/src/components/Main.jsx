import Header from './Header/Header'
import './Main.scss'
import Serveone from './Mainserve/Serve1/Serve1'
import Servetwo from './Mainserve/Serve2/Serve2'
import Servethree from './Mainserve/Serve3/Serve3'
export default function Main(){
    return(
        <div className='mainpages'>
            <Header/>
            <Serveone/>
            <Servetwo/>
            <Servethree/>
        </div>
    )
}