import react from 'react';
import Header from '../Header/Header';
import './Download.scss';
import  Downloadings from '../../img/downloading.svg';
import  Ios from '../../img/ios.svg';
import  Android from '../../img/android.svg';
import  Linux from '../../img/linux.svg';
import  Mac from '../../img/mac.svg';
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
            <div className='ios'>
                <h1>iOS</h1>
                <button><text>다운로드</text></button>
                <img src={Ios} className='iosimg'></img>
            </div>
            <div className='and'>
                <h1>Android</h1>
                <button><text>다운로드</text></button>
                <img src={Android} className='andimg'></img>
            </div>
            <div className='linux'>
                <h1>Linux</h1>
                <button><text>다운로드</text></button>
                <img src={Linux} className='linuximg'></img>
            </div>
            <div className='mac'>
                <h1>Mac</h1>
                <button><text>다운로드</text></button>
                <img src={Mac} className='macimg'></img>
            </div>
            <div className='testing'>
                <h1>새로운 걸 시험해 보고 싶으신가요?</h1>
                <p>공개 테스트 빌드로 새로운 기능을 먼저 사용해보세요.</p>
                <button><text>실험 버전 다운로드</text></button>
            </div>
        </div>
    )
}