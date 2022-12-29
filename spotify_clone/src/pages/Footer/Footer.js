import '../../styles/Footer/Footer.scss'
export default function Footer() {
    return(
            <div className='footers'>
                <img src='images/logo.png' className="spolog"></img>
                <div className='company'>
                    <p className='comtext'>회사</p>
                    <p>상세정보</p>
                    <p>채용 정보</p>
                    <p>For the Record</p>
                </div>
                <div className='community'>
                    <p className='communitytext'>커뮤니티</p>
                    <p>아티스트</p>
                    <p>개발자</p>
                    <p>투자자</p>
                    <p>공급업체</p>
                </div>
                <div className='link'>
                    <p className='linktext'>유용한 링크</p>
                    <p>지원</p>
                    <p>앱 플레이어</p>
                    <p>For the Record</p>
                </div>
                <div>
                    <img src="images/insta.png"></img>
                </div>
                <div>
                    <img src="images/twitter.png"></img>
                </div>
                <div>
                    <img src="images/facebook.png"></img>
                </div>
            </div>
    )
}