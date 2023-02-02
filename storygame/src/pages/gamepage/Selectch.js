import '../../styles/gamepage/Selectch.scss';
import react from 'react';
export default function Selectch() {
    const [number, setNumber] = useState(1);
    function setone() {
        setNumber(1);
    }
    function settwo() {
        setNumber(2);
    }
    function setthree() {
        setNumber(3);
    }
    return(
        <div className='selectchapters'>
            <h1>챕터를 선택해주세요</h1>
            <p onClick={setone}>- Chapter 1 -</p>
            <p onClick={settwo}>- Chapter 2 -</p>
            <p onClick={setthree}>- Chapter 3 -</p>
        </div>
    )
}