import react from 'react';
import '../../../styles/Help/Device/Device.scss'
import { SlArrowRight } from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';
export default function Device() {
    const nav = useNavigate();
    function goback() {
        nav('/help');
    }
    function one() {
        window.location.href = 'https://support.spotify.com/kr-ko/article/spotify-on-speakers/';
    }
    function two() {
        window.location.href = 'https://support.spotify.com/kr-ko/article/spotify-on-alexa-devices/';
    }
    function three() {
        window.location.href = 'https://support.spotify.com/kr-ko/article/spotify-on-google-devices/';
    }
    function four() {
        window.location.href = 'https://support.spotify.com/kr-ko/article/spotify-on-sonos/';
    }
    function five() {
        window.location.href = 'https://support.spotify.com/kr-ko/article/spotify-connect/';
    }
    function six() {
        window.location.href = 'https://support.spotify.com/kr-ko/article/bluetooth/';
    }
    return (
        <div>
            <div className='devicebg'>
                <div className='goback' onClick={goback}>
                    <span>홈</span><SlArrowRight className='arrowing' />
                </div>
                <h1 className='deviceo'>기기 관련 도움말</h1>
                <div>
                    <span className='options'>
                        <span className='op'>스피커</span>
                    </span>
                    <span className='options2'>
                        <span className='op2'>스마트 워치</span>
                    </span>
                    <span className='options3'>
                        <span className='op3'>TV</span>
                    </span>
                    <span className='options4'>
                        <span className='op4'>게임</span>
                    </span><br/><br/>
                    <span className='options5'>
                        <span className='op5'>차량</span>
                    </span>
                    <span className='options6'>
                        <span className='op6'>음성 도우미</span>
                    </span>
                </div>
                <div className='devhelping'>
                    <div className='deving' onClick={one}>
                        <span>스피커에서 Spotify 이용하기</span><SlArrowRight size='25' className='arrows' />
                    </div>
                    <div className='deving2' onClick={two}>
                        <span>Alexa 기기로 Spotify 이용하기</span><SlArrowRight size='25' className='arrows1' />
                    </div>
                    <div className='deving3' onClick={three}>
                        <span>Google 기기에서 Spotify 이용하기</span><SlArrowRight size='25' className='arrows2' />
                    </div>
                    <div className='deving4' onClick={four}>
                        <span>Sonos에서 Spotify 이용하기</span><SlArrowRight size='25' className='arrows3' />
                    </div>
                    <div className='deving5' onClick={five}>
                        <span>Spotify Connect</span><SlArrowRight size='25' className='arrows4' />
                    </div>
                    <div className='deving6' onClick={six}>
                        <span>Spotify 관련 Bluetooth 도움말</span><SlArrowRight size='25' className='arrows5' />
                    </div>
                </div>
            </div>
        </div>
    )
}