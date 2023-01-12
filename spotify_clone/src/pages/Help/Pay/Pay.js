import react from 'react';
import '../../../styles/Help/Pay/Pay.scss'
import { SlArrowRight } from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';
export default function Pay() {
    const nav = useNavigate();
    function gohoming() {
        nav('/');
    }
    return (
        <div>
            <div className='paybg'>
                <div className='gohome' onClick={gohoming}>
                    <span>홈</span><SlArrowRight className='arrowing' />
                </div>
                <h1 className='rnao'>결제 도움말</h1>
                <div>
                    <span className='rufwp'>
                        <span className='rhksfl'>결제 정보 관리</span>
                    </span>
                    <span className='payhel'>
                        <span className='tneks'>결제 수단</span>
                    </span>
                    <span className='cndwjs'>
                        <span className='ehdnaakf'>충전 관련 도움말</span>
                    </span>
                </div>
                <div className='payinghelping'>
                    <div className='duoing'>
                        <span>듀오 요금제에 대한 결제</span><SlArrowRight size='25' className='arrows' />
                    </div>
                    <div className='duoing2'>
                        <span>결제 세부 정보 업데이트</span><SlArrowRight size='25' className='arrows' />
                    </div>
                    <div className='duoing3'>
                        <span>영수증 보기</span><SlArrowRight size='25' className='arrows3' />
                    </div>
                    <div className='duoing4'>
                        <span>결제일</span><SlArrowRight size='25' className='arrows4' />
                    </div>
                    <div className='duoing5'>
                        <span>Premium 요금제 해지하기</span><SlArrowRight size='25' className='arrows5' />
                    </div>
                    <div className='duoing6'>
                        <span>왜 앱 내에서 Premium에 가입할 수 없나요?</span><SlArrowRight size='25' className='arrows6' />
                    </div>
                </div>
            </div>
        </div>
    )
}