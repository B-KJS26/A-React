import React from 'react';
import '../styles/Main.scss'
import { useNavigate } from 'react-router-dom';
import Header from './Header/Header'
import TextTransition, { presets } from "react-text-transition";
import { CgArrowDown } from 'react-icons/cg';

export default function MainPage() {
    const nav = useNavigate();
    function gopolicy() {
        nav('/user-guidelines')
    }
    function goGoogle() {
        window.location.href = 'https://play.google.com/store/apps/details?id=com.spotify.music'
    }
    function goApple() {
        window.location.href = 'https://apps.apple.com/kr/app/spotify-discover-new-music/id324684580'
    }
    const [index, setIndex] = React.useState(0);
    React.useEffect(() => {
        const intervalId = setInterval(() =>
            setIndex(index => index + 1),
            1500 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);
    const TEXTS = [
        "손 쉬운 음악감상",
        "언제 어디서나",
        "즐길 수 있는",
        "나보다 나를 더",
        "잘 아는",
        "스포티파이."
    ];
    return (
        <div>
            <div className='mainbackground'>
                <video loop autoPlay muted id="bg-video">
                    <source src='video/spotify.mp4' type="video/mp4" />
                </video>
                    <TextTransition springConfig={presets.molasses} className='shead1'>
                        {TEXTS[index % TEXTS.length]}
                    </TextTransition>
            </div>
            <div className='wrapping'>
                <CgArrowDown size="75" className='botarrow'/>
            </div> 
            <div className='subackground'>
            <video loop autoPlay muted id="bg-video2">
                    <source src='video/spotify2.mp4' type="video/mp4" />
            </video>
            <h1 className='shead2'>지금. 당신의 손에서 시작되는 플레이 리스트.</h1>
            <p className='stext1'>1개의 모바일 기기에서 7일 동안 무료로 Spotify Premium 멤버십을 이용해보세요. 결제 세부 정보는 필요하지 않습니다.</p>
                <div>
                    <img src='images/google.png' className='google' alt='goolgle' onClick={goGoogle}></img>
                    <img src='images/apple.png' className='apple' alt='apple' onClick={goApple}></img>
                </div>
                <text className='policy' onClick={gopolicy}>약관</text>
                <text>이 적용됩니다. Premium을 이미 이용해 보셨거나 다른 기기로 이용하시려는 경우 이 프로모션을 이용할 수 없습<br />니다. 7일 후에도 계속 Spotify 서비스를 이용하려면 Premium을 구독해야 합니다.</text>
            </div>
        </div>
    )
}