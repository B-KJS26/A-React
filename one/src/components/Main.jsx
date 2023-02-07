import Header from './Header/Header'
import './Main.scss'
import Serveone from './Mainserve/Serve1'
export default function Main(){
    return(
        <div className='mainpages'>
            <Header/>
            <Serveone/>
        </div>
    )
}