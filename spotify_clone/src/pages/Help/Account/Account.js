import react from 'react';
import '../../../styles/Help/Account/Account.scss'
import { SlArrowRight } from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';
export default function Account() {
    const nav = useNavigate();
    function goback() {
        nav('/help');
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
                    <div className='ahelp'>
                        <span>로그인 세부 정보를 기억할 수 없음</span><SlArrowRight size='25' className='arrows' />
                    </div>
                    <div className='ahelp1'>
                        <span>비밀번호를 재성정할 수 없음</span><SlArrowRight size='25' className='arrows1' />
                    </div>
                    <div className='ahelp2'>
                        <span>Facebook 로그인 도움말</span><SlArrowRight size='25' className='arrows2' />
                    </div>
                    <div className='ahelp3'>
                        <span>Apple 로그인 도움말</span><SlArrowRight size='25' className='arrows3' />
                    </div>
                    <div className='ahelp4'>
                        <span>Google 로그인 도움말</span><SlArrowRight size='25' className='arrows4' />
                    </div>
                    <div className='ahelp5'>
                        <span>Samsung 로그인 도움말</span><SlArrowRight size='25' className='arrows5' />
                    </div>
                    <div className='ahelp6'>
                        <span>해외에서 로그인할 수 없음</span><SlArrowRight size='25' className='arrows6' />
                    </div>
                    <div className='ahelp7'>
                        <span>비활성화된 계정</span><SlArrowRight size='25' className='arrows7' />
                    </div>
                    <div className='ahelp8'>
                        <span>로그아웃하는 방법</span><SlArrowRight size='25' className='arrows8' />
                    </div>
                </div>
            </div>
        </div>
    )
}