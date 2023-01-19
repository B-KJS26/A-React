import '../../styles/Help/Help.scss'
import react from 'react';
import { useNavigate } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { IoIosArrowForward } from 'react-icons/io';
export default function Help() {
    const name = 'Asinp';
    const nav = useNavigate();
    function goPay() {
        nav('/payhelp');
    }
    function goapp() {
        nav('/apphelp');
    }
    function gopremium() {
        nav('/premiumhelp');
    }
    function godevice() {
        nav('/devicehelp');
    }
    function goprivacy() {
        nav('/privacyhelp');
    }
    function goaccount() {
        nav('/accounthelp');
    }
    return (
        <div>
            <div className='helpbg'>
                <h1 className='helps'>SPOTIFY 지원</h1>
                <h1 className='helping'>무엇을 도와 드릴<br></br>까요?</h1>
                <h2 className='naming'>안녕하세요, {name}님</h2>
                <div className='searchbar'>
                    <CiSearch size="30" className='imgs' /><span>검색하기</span>
                </div>
                <div className='pictures'>
                    <img src='images/payhelp.png' className='one' onClick={goPay}></img>
                    <img src='images/premiumhelp.png' className='two' onClick={gopremium}></img>
                    <img src='images/apphelp.png' className='three' onClick={goapp}></img><br/>
                    <img src='images/device.png' className='fourth' onClick={godevice}></img>
                    <img src='images/privacy.png' className='five' onClick={goprivacy}></img>
                    <img src='images/account.png' className='six' onClick={goaccount}></img>
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
            <div className='gocommunity'>
                <h1>커뮤니티를 방문하세요</h1>
                <p>질문이 있으신가요? 전문 지식을 갖춘 전 세계 팬들로 구성된 Spotify 커뮤니티에서<br/>답변을 찾아보세요.</p>
                <button><text>커뮤니티로 이동</text></button>
            </div>
        </div>
    )
}