import react from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Main.scss';
export default function Main() {
    const nav = useNavigate();
    function starting() {
        nav('/startpage');
    }
    return(
    <div className='Maintitle'>
        <h1 className='titlename'>zㅣ존용제나이트의 모험</h1>
        <p>- zㅣ존이 되기 위한 여졍 -</p>
        <button onClick={starting}><test>Game Start</test></button>
    </div>
    )
}