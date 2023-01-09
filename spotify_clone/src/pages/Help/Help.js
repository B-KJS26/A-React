import '../../styles/Help/Help.scss'
import react from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoIosArrowForward } from 'react-icons/io';
export default function Help() {
    const name = 'Asinp';
    return (
        <div>
            <div className='helpbg'>
                <h1 className='helps'>SPOTIFY 지원</h1>
                <h1 className='helping'>무엇을 도와 드릴<br></br>까요?</h1>
                <h2 className='naming'>안녕하세요, {name}님</h2>
                <div className='searchbar'>
                    <CiSearch size="30" className='imgs' /><span>검색하기</span>
                </div>
            </div>
            <div className='helped'>
                <div className='helpings'>
                    <h2>빠른 도움말</h2>
                    <span className='span1'>비밀번호를 재설정할 수 없음</span><IoIosArrowForward size="30" className='arrow1'/><br/>
                    <span className='span2'>가사 보기</span><IoIosArrowForward size="30" className='arrow2'/><br/>
                    <span className='span3'>로그인 세부 정보를 기억할 수 없음</span><IoIosArrowForward size="30" className='arrow3'/><br/>
                    <span className='span4'>Facebook 로그인 도움말</span><IoIosArrowForward size="30" className='arrow4'/><br/>
                    <span className='span5'>결제 수단</span><IoIosArrowForward size="30" className='arrow5'/>
                </div>
            </div>
        </div>
    )
}