export default function Preset2() {
    function goGoogle() {
        window.location.href = 'https://play.google.com/store/apps/details?id=com.spotify.music'
    }
    function goApple() {
        window.location.href = 'https://apps.apple.com/kr/app/spotify-discover-new-music/id324684580'
    }
    return(
        <div>
            <div className='soge2'>
                <h1>앱을 다운로드 하세요</h1>
                <p className='sh2'>1대의 모바일 기기에서 7일 동안 무료로 Spotify Premium 멤버십을 이용해보세요. 결제 세부 정보는 필요하<br/>지 않습니다.</p>
                <div>
                    <img src='images/google.png' className='google' alt='goolgle' onClick={goGoogle}></img>
                    <img src='images/apple.png' className='apple' alt='apple' onClick={goApple}></img>
                </div>
                <p className='sh3'><text>약관</text>이 적용됩니다. Premium을 이미 이용해 보셨거나 다른 기기로 이용하시려는 경우 이 프로모션을 이용할 수 없습니다.<br/>7일 후에도 계속 Spotify 서비스를 이용하려면 Premium을 구독해야 합니다.</p>
            </div>
        </div>
    )
}