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
    function goco() {
        window.location.href = 'https://community.spotify.com/t5/FAQs/tkb-p/Spotify-Answers?_ga=2.265549894.899765358.1674224610-1814175852.1668667620&_gac=1.82343012.1671155387.Cj0KCQiAqOucBhDrARIsAPCQL1YpFplgjoGpE5ZS0-9W8yQqoyncZ3eUUaEBXGCIzWKnRVyi19YQehMaAtcJEALw_wcB';
    }
    function resetpw() {
        window.location.href = 'https://support.spotify.com/kr-ko/article/reset-password/';
    }
    function lyrics() {
        window.location.href = 'https://support.spotify.com/kr-ko/article/lyrics/';
    }
    function loginerror() {
        window.location.href = 'https://support.spotify.com/kr-ko/article/cannot-remember-login/';
    }
    function facebook() {
        window.location.href = 'https://support.spotify.com/kr-ko/article/facebook-login-help/';
    }
    function paymenting() {
        window.location.href = 'https://support.spotify.com/kr-ko/article/payment-methods/';
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
                    <img src='images/apphelp.png' className='three' onClick={goapp}></img><br />
                    <img src='images/device.png' className='fourth' onClick={godevice}></img>
                    <img src='images/privacy.png' className='five' onClick={goprivacy}></img>
                    <img src='images/account.png' className='six' onClick={goaccount}></img>
                </div>
            </div>
            <div className='helped'>
                <div className='helpings'>
                    <h2>빠른 도움말</h2>
                    <span onClick={resetpw}>
                        <span className='span1'>비밀번호를 재설정할 수 없음</span><IoIosArrowForward size="30" className='arrow1' /><br />
                    </span>
                    <span onClick={lyrics}>
                        <span className='span2'>가사 보기</span><IoIosArrowForward size="30" className='arrow2' /><br />
                    </span>
                    <span onClick={loginerror}>
                        <span className='span3'>로그인 세부 정보를 기억할 수 없음</span><IoIosArrowForward size="30" className='arrow3' /><br />
                    </span>
                    <span onClick={facebook}>
                        <span className='span4'>Facebook 로그인 도움말</span><IoIosArrowForward size="30" className='arrow4' /><br />
                    </span>
                    <span onClick={paymenting}>
                        <span className='span5'>결제 수단</span><IoIosArrowForward size="30" className='arrow5' />
                    </span>
                </div>
            </div>
            <div className='gocommunity'>
                <h1>커뮤니티를 방문하세요</h1>
                <p>질문이 있으신가요? 전문 지식을 갖춘 전 세계 팬들로 구성된 Spotify 커뮤니티에서<br />답변을 찾아보세요.</p>
                <button onClick={goco}><text>커뮤니티로 이동</text></button>
            </div>
        </div>
    )
}