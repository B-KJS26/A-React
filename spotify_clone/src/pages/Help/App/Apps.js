import react from 'react';
import '../../../styles/Help/App/App.scss'
import { SlArrowRight } from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';
export default function Apps() {
    const nav = useNavigate();
    function goback() {
        nav('/help');
    }
    return (
        <div>
            <div className='appbg'>
                <div className='goback' onClick={goback}>
                    <span>홈</span><SlArrowRight className='arrowing' />
                </div>
                <h1 className='app'>앱 관련 도움말</h1>
                <div>
                    <span className='options'>
                        <span className='op'>시작하기</span>
                    </span>
                    <span className='options2'>
                        <span className='op2'>앱 설정</span>
                    </span>
                    <span className='options3'>
                        <span className='op3'>문제 해결</span>
                    </span>
                    <span className='options4'>
                        <span className='op4'>플레이리스트</span>
                    </span><br/><br/>
                    <span className='options5'>
                        <span className='op5'>기능</span>
                    </span>
                    <span className='options6'>
                        <span className='op6'>소셜 기능</span>
                    </span>
                    <span className='options7'>
                        <span className='op7'>청취 관련 개인정보</span>
                    </span>
                </div>
                <div className='prehelping'>
                    <div className='premium'>
                        <span>시작하기</span><SlArrowRight size='25' className='arrows' />
                    </div>
                    <div className='premium2'>
                        <span>Spotify란 무엇인가요?</span><SlArrowRight size='25' className='arrows1' />
                    </div>
                    <div className='premium3'>
                        <span>내 라이브러리</span><SlArrowRight size='25' className='arrows2' />
                    </div>
                    <div className='premium4'>
                        <span>지금 재생 중</span><SlArrowRight size='25' className='arrows3' />
                    </div>
                    <div className='premium5'>
                        <span>어느 국가에서 Spotify를 이용할 수 있나요?</span><SlArrowRight size='25' className='arrows4' />
                    </div>
                    <div className='premium6'>
                        <span>Spotify를 지원하는 기기</span><SlArrowRight size='25' className='arrows5' />
                    </div>
                    <div className='premium7'>
                        <span>공개 또는 상업적 용도로 Spotify 이용하기</span><SlArrowRight size='25' className='arrows6' />
                    </div>
                    <div className='premium8'>
                        <span>바로 가기 키</span><SlArrowRight size='25' className='arrows7' />
                    </div>
                    <div className='premium9'>
                        <span>Spotify for Artists</span><SlArrowRight size='25' className='arrows8' />
                    </div>
                </div>
            </div>
        </div>
    )
}