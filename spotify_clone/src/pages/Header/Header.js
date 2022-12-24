import '../../styles/Header/Header.scss'
export default function Header() {
    return(
        <div className='mainheader'>
            <div className='spotifyheader'>
                <img src='images/logo.png' className='spotifylogo'></img>
                <p className='headtext'>Spotify</p>
            </div>
        </div>
    )
}