
import Header from './Header/Header'
import './Main.scss'
import Serverzero from './Mainserve/Serve0/Serve0'
import Serveone from './Mainserve/Serve1/Serve1'
import Servetwo from './Mainserve/Serve2/Serve2'
import Servethree from './Mainserve/Serve3/Serve3'
import Servefour from './Mainserve/Serve4/Serve4'
export default function Main(){
    return(
        <div className='mainpages'>
            <Header/>
            <Serverzero/>
            <Serveone/>
            <Servetwo/>
            <Servethree/>
            <Servefour/>
        </div>
    )
}