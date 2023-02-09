import './Footer.scss';
import react from 'react';

export default function Footer() {
    return(
        <div className='footer'>
            <h1>이런 공간이 있다면<br/>어떨까요</h1>
            <div className='one'>
                <p className='onething'>제품</p>
                <p>다운로드</p>
                <p>Nitro</p>
                <p>상태</p>
            </div>
            <div className='two'>
                <p className='twothing'>회사</p>
                <p>소개</p>
                <p>채용</p>
                <p>상표</p>
                <p>뉴스</p>
            </div>
            <div className='three'>
                <p className='threething'>자원</p>
                <p>대학</p>
                <p>지원</p>
                <p>보안</p>
                <p>블로그</p>
                <p>피드백</p>
                <p>개발자</p>
                <p>StreamKit</p>
                <p>Creators</p>
                <p>Community</p>
            </div>
            <div className='four'>
                <p className='fourthing'>정책</p>
                <p>이용 약관</p>
                <p>개인 정보 보호 정책</p>
                <p>쿠키 설정</p>
                <p>지침</p>
                <p>감사</p>
                <p>라이선스</p>
                <p>관리</p>
            </div>
        </div>
    )
}