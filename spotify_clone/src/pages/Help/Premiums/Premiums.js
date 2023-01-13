import react from 'react';
import '../../../styles/Help/Premiums/Premiums.scss'
import { SlArrowRight } from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';
export default function Premiums() {
    const nav = useNavigate();
    function goback() {
        nav('/help');
    }
    return (
        <div>
            <div className='premiumbg'>
                <div className='goback' onClick={goback}>
                    <span>홈</span><SlArrowRight className='arrowing' />
                </div>
                <h1 className='dyrma'>요금제 관련 도움말</h1>
                <div>
                    <span className='options'>
                        <span className='op'>이용 가능한 요금제</span>
                    </span>
                    <span className='options2'>
                        <span className='op2'>요금제 설정</span>
                    </span>
                    <span className='options3'>
                        <span className='op3'>PREMIUM 듀오</span>
                    </span>
                </div>
                <div className='prehelping'>
                    <div className='premium'>
                        <span>Premium 요금제</span><SlArrowRight size='25' className='arrows' />
                    </div>
                    <div className='premium2'>
                        <span>듀오 요금제 시작 또는 참여하기</span><SlArrowRight size='25' className='arrows1' />
                    </div>
                </div>
            </div>
        </div>
    )
}