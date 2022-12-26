import '../../styles/Header/Header.scss'
import React from 'react';
import { useNavigate } from 'react-router-dom'
export default function Header() {
    let nav = useNavigate();
    return(
        <div className='mainheader'>
            <div className='spotifyheader'>
                <img src='images/logo.png' className='spotifylogo'></img>
                <div className='headtext'>
                    <text>프리미엄</text>
                    <text>지원</text>
                    <text>다운로드 하기</text>
                    <text>ㅣ</text>
                    <text>가입하기</text>
                    <text>로그인하기</text>
                </div>
            </div>
        </div>
    )
}