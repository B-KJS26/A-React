import react from 'react';
import '../../../styles/Help/Pay/Pay.scss'
import { IoIosArrowForward } from 'react-icons/io';
export default function Pay() {
    return (
        <div>
            <div className='paybg'>
                <div className='gohome'>
                    <span>홈</span><IoIosArrowForward className='arrowing' />
                </div>
                <h1 className='rnao'>결제 도움말</h1>
                <div>
                    <span className='rufwp'>
                        <span className='rhksfl'>결제 정보 관리</span>
                    </span>
                    <span className='tneks'>결제 수단</span>
                    <span className='ehdnaakf'>충전 관련 도움말</span>
                </div>
            </div>
        </div>
    )
}