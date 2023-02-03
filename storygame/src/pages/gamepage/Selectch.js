import '../../styles/gamepage/Selectch.scss';
import react from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Selectch() {
    const [number, setNumber] = useState(1);
    const nav = useNavigate();
    function setone() {
        nav('/chapter1')
    }
    return(
        <div className='selectchapters'>
            <h1>챕터를 선택해주세요</h1>
            <p onClick={setone}>- Chapter 1 -</p>
        </div>
    )
}