import react from 'react';
import { Navigate } from 'react-router-dom';
export default function Lobby() {
    const nav = Navigate();
    function starting() {
        nav('/startpage');
    }
    return (
        <div>
            <h1>zㅣ존용제나이트의 모험</h1>
            <p>- zㅣ존이 되기 위한 여졍 -</p>
            <button onClick={starting}><test>Game Start</test></button>
        </div>
    );
}