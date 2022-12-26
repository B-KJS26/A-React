import React from 'react';
import '../styles/Main.scss'
import { useNavigate } from 'react-router-dom';
export default function MainPage() {
    const nav = useNavigate();
    function gopolicy() {
        nav('/user-guidelines')
    }
    return(
        <div className='mainbackground'>
            <h1 className='shead1'>다양한 해외 히트곡과 국내 인기 음악을<br/>들어보세요</h1>
            <p className='stext1'>1개의 모바일 기기에서 7일 동안 무료로 Spotify Premium 멤버십을 이용해보세요. 결제 세부 정보는 필요하<br/>지 않습니다.</p>
            <div>
                <img src='images/google.png' className='google' alt='goolgle'></img>
                <img src='images/apple.png' className='apple' alt='apple'></img>
            </div>
            <text className='policy' onClick={gopolicy}>약관</text>
            <text>이 적용됩니다. Premium을 이미 이용해 보셨거나 다른 기기로 이용하시려는 경우 이 프로모션을 이용할 수 없습<br/>니다. 7일 후에도 계속 Spotify 서비스를 이용하려면 Premium을 구독해야 합니다.</text>
        </div>
    )
}