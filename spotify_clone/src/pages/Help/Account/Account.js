import react from 'react';
import '../../../styles/Help/Account/Account.scss'
import { SlArrowRight } from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';
export default function Account() {
    const nav = useNavigate();
    function goback() {
        nav('/help');
    }
    function one() {
        window.location.href = 'https://support.spotify.com/kr-ko/article/cannot-remember-login/';
    }
    function two() {
        window.location.href = 'https://support.spotify.com/kr-ko/article/reset-password/';
    }
    function three() {
        window.location.href = 'https://support.spotify.com/kr-ko/article/facebook-login-help/';
    }
    function four() {
        window.location.href = 'https://support.spotify.com/kr-ko/article/apple-login-help/';
    }
    function five() {
        window.location.href = 'https://support.spotify.com/kr-ko/article/google-login-help/';
    }
    function six() {
        window.location.href = 'https://support.spotify.com/kr-ko/article/samsung-login-help/';
    }
    function seven() {
        window.location.href = 'https://support.spotify.com/kr-ko/article/cant-log-in-abroad/';
    }
    function eight() {
        window.location.href = 'https://support.spotify.com/kr-ko/article/disabled-accounts/';
    }
    function nine() {
        window.location.href = 'https://support.spotify.com/kr-ko/article/how-to-log-out/';
    }
    return (
        <div>
            <div className='accountbg'>
                <div className='goback' onClick={goback}>
                    <span>홈</span><SlArrowRight className='arrowing' />
                </div>
                <h1 className='rpwjd'>계정 도움말</h1>
                <div>
                    <span className='options'>
                        <span className='op'>로그인 중</span>
                    </span>
                    <span className='options2'>
                        <span className='op2'>프로필 관련 도움말</span>
                    </span>
                    <span className='options3'>
                        <span className='op3'>계정 설정</span>
                    </span>
                    <span className='options4'>
                        <span className='op4'>보안</span>
                    </span>
                </div>
                <div className='accounthelp'>
                    <div className='ahelp' onClick={one}>
                        <span>로그인 세부 정보를 기억할 수 없음</span><SlArrowRight size='25' className='arrows' />
                    </div>
                    <div className='ahelp1' onClick={two}>
                        <span>비밀번호를 재성정할 수 없음</span><SlArrowRight size='25' className='arrows1' />
                    </div>
                    <div className='ahelp2' onClick={three}>
                        <span>Facebook 로그인 도움말</span><SlArrowRight size='25' className='arrows2' />
                    </div>
                    <div className='ahelp3' onClick={four}>
                        <span>Apple 로그인 도움말</span><SlArrowRight size='25' className='arrows3' />
                    </div>
                    <div className='ahelp4' onClick={five}>
                        <span>Google 로그인 도움말</span><SlArrowRight size='25' className='arrows4' />
                    </div>
                    <div className='ahelp5' onClick={six}>
                        <span>Samsung 로그인 도움말</span><SlArrowRight size='25' className='arrows5' />
                    </div>
                    <div className='ahelp6' onClick={seven}>
                        <span>해외에서 로그인할 수 없음</span><SlArrowRight size='25' className='arrows6' />
                    </div>
                    <div className='ahelp7' onClick={eight}>
                        <span>비활성화된 계정</span><SlArrowRight size='25' className='arrows7' />
                    </div>
                    <div className='ahelp8' onClick={nine}>
                        <span>로그아웃하는 방법</span><SlArrowRight size='25' className='arrows8' />
                    </div>
                </div>
            </div>
        </div>
    )
}