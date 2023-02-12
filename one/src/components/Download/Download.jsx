import react from 'react';
import Header from '../Header/Header';
import './Download.scss';
import  Downloadings from '../../img/downloading.svg';
import { MdOutlineFileDownload } from 'react-icons/md';
export default function Download() {
    return(
        <div className='download'>
            <Header/>
            <div className='downloading'>
                <h1>어느 장치에서든<br/>DISCORD 설치하기</h1>
                <p>모험이 기다리고 있어요. PC 앱으로 친구들과 어울리고 모바일에<br/>서도 대화를 이어가세요.</p>
                <img src={Downloadings} className='downicon'></img>
                <button className='downbutton'>
                    <MdOutlineFileDownload size={30} className='icon'/>
                    <text>Windows용 다운로드</text></button>
                <text className='yoing'>Windows 7 이상</text>
            </div>
            <div>
                
            </div>
        </div>
    )
}