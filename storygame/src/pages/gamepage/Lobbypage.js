import react from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import '../../styles/gamepage/Lobby.scss';
export default function Lobby() {
    const nav = useNavigate();
    function nextbutton() {
        nav('/selectch');
    }
    return (
        <div className='proparagraph'>
            <p>아주아주 먼 옛날, 야근제 가문에 태어난 조용제 라는 아이가 있었어요.</p>
            <p>그 아이는 태어날 때 부터 남달랐어요. 보이는 것을 모두 파괴하려고 했었죠.</p>
            <p>어찌저찌 하다 보니 성인이 되어버린 지금, 그는 모험을 떠나기로 합니다.</p>
            <p>떠나는 그의 뒷모습을 바라보는 어머니는 눈물을 흘립니다. 그가 세계를 어지럽히지는 않을지 걱정이 되었기 때문이죠..</p>
            <h1>아무튼... 그렇게... 모험은 시작되었습니다...</h1>
            <h2 onClick={nextbutton}> - NEXT -</h2>
        </div>
    );
}