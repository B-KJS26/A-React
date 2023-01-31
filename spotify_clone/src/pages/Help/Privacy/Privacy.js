import react from 'react';
import '../../../styles/Help/Privacy/Privacy.scss'
import { SlArrowRight } from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';
export default function Privacy() {
    const nav = useNavigate();
    function goback() {
        nav('/help');
    }
    function one() {
        window.location.href = 'https://support.spotify.com/kr-ko/article/data-rights-and-privacy-settings/';
    }
    function two() {
        window.location.href = 'https://support.spotify.com/kr-ko/article/understanding-my-data/';
    }
    function three() {
        window.location.href = 'https://support.spotify.com/kr-ko/article/gdpr-article-15-information/';
    }
    return (
        <div>
            <div className='privacybg'>
                <div className='goback' onClick={goback}>
                    <span>홈</span><SlArrowRight className='arrowing' />
                </div>
                <h1 className='priv'>안전 및 개인정보 보호</h1>
                <div>
                    <span className='options'>
                        <span className='op'>데이터 및 개인정보 관련 정보</span>
                    </span>
                    <span className='options2'>
                        <span className='op2'>플랫폼 규정</span>
                    </span>
                    <span className='options3'>
                        <span className='op3'>콘텐츠에 대한 조치</span>
                    </span>
                </div>
                <div className='privating'>
                    <div className='pving' onClick={one}>
                        <span>데이터 권리 및 개인정보 설정</span><SlArrowRight size='25' className='arrows' />
                    </div>
                    <div className='pving2' onClick={two}>
                        <span>내 데이터 이해하기</span><SlArrowRight size='25' className='arrows1' />
                    </div>
                    <div className='pving3' onClick={three}>
                        <span>GDPR 제15조 정보</span><SlArrowRight size='25' className='arrows2' />
                    </div>
                </div>
            </div>
        </div>
    )
}