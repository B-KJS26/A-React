export default function Preset12() {
    function preservs() {
        window.location.href = 'https://www.spotify.com/kr-ko/legal/premium-promotional-offer-terms/';
    }
    function gopaying() {
        window.scrollTo({
            top: 5250,
            behavior: 'smooth'
        })
    }
    return(
        <div>
            <div className='soge12'>
                <h1>다양한 해외 히트곡과 국내 인기 음악을 <br/> 들어보세요</h1>
                <p className='withh2'>매월 7,900원입니다(부가세 별도). 언제든 해지 가능합니다.</p>
                <button className='startb' onClick={gopaying}><text>요금제 보기</text></button>
                <p className='inform'><text onClick={preservs}>이용 약관</text>이 적용됩니다.</p>
                <img src='images/person2.png' className='subimg2'></img>
            </div>
        </div>
    )
}