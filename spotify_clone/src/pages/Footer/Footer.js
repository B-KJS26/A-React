import '../../styles/Footer/Footer.scss'
import { useNavigate } from 'react-router-dom'
export default function Footer() {
    const nav = useNavigate();
    function footerlog() {
        if(window.location == "http://localhost:3000" || window.location == "http://localhost:3000/#"){
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    else {
        nav('/');
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
        }
    }
    function goinsta() {
        window.location.href = 'https://www.instagram.com/spotify/'
    }
    function gotwit() {
        window.location.href = 'https://twitter.com/spotify'
    }
    function goface() {
        window.location.href = 'https://www.facebook.com/Spotify'
    }
    return (
        <div className='footers'>
            <img src='images/logo.png' className="spolog" onClick={footerlog}></img>
            <div className='company'>
                <p className='comtext'>회사</p>
                <div className='declick'>
                    <p>상세정보</p>
                    <p>채용 정보</p>
                    <p>For the Record</p>
                </div>
            </div>
            <div className='community'>
                <p className='communitytext'>커뮤니티</p>
                <div className='declick'>
                    <p>아티스트</p>
                    <p>개발자</p>
                    <p>투자자</p>
                    <p>공급업체</p>
                </div>
            </div>
            <div className='link'>
                <p className='linktext'>유용한 링크</p>
                <div className='declick'>
                    <p>지원</p>
                    <p>앱 플레이어</p>
                </div>
            </div>
            <div className='wowz'>
                <div className='instabox'>
                    <img src="images/insta.png" className='instaimg' onClick={goinsta}></img>
                </div>
                <div className='twitterbox'>
                    <img src="images/twitter.png" className='twimg' onClick={gotwit}></img>
                </div>
                <div className='facebox'>
                    <img src="images/facebook.png" className='faceimg' onClick={goface}></img>
                </div>
            </div>
            <div className='terms'>
                <p>
                    <span className='declick'>
                        <span>법률 정보</span>
                        <span className='private'>개인정보 보호 센터</span>
                        <span className='private2'>개인정보 처리방침</span>
                    </span>
                    <span className='copyright'>© 2022 Spotify AB</span>
                </p>
            </div>
        </div>
    )
}