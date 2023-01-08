import '../../styles/Help/Help.scss'
import react from 'react';
import { CiSearch } from 'react-icons/ci';
export default function Help() {
    const name = 'Asinp';
    return(
        <div>
            <div className='helpbg'>
                <h1 className='helps'>SPOTIFY 지원</h1>
                <h1 className='helping'>무엇을 도와 드릴<br></br>까요?</h1>
                <h2 className='naming'>안녕하세요, {name}님</h2>
                <div className='searchbar'>
                    <CiSearch size="30" className='imgs'/><span>검색하기</span>
                </div>
            </div>
        </div>
    )
}