import '../../styles/Header/Header.scss'
import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
export default function Header() {
    let nav = useNavigate();
    const [token, setToken] = useState("")
    const [searchKey, setSearchKey] = useState("")
    const [artists, setArtists] = useState([])
    const [profile, setProfile] = useState("");
    const [username, setUsername] = useState("");
    const CLIENT_ID = "4fc90538d496458f9d61549dd038375e"
    const REDIRECT_URI = "http://localhost:3000"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"
    function goLogins() {
        window.location.href = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`;
    }
    function goSign() {
        window.location.href = 'https://www.spotify.com/kr-ko/signup';
    }
    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")
        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
            window.location.hash = ""
            window.localStorage.setItem("token", token)
            const res = axios.get("https://api.spotify.com/v1/me", {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                params: {
                }
            })
            res.then(response => setUsername(response.data.display_name));
            res.then(response => setProfile(response.data.images[0].url));
        }
        console.log(username);
        console.log(profile);
        setToken(token)
    }, [])
    function Logout() {
        setToken(!token)
        window.localStorage.removeItem("token")
        window.location.replace("/")
    }
    function headerclick() {
        window.location.replace("/")
    }
    function gopre() {
        nav('/premium');
    }
    function down() {
        nav('/download');
    }
    return (
        <div className='mainheader'>
            <div className='spotifyheader'>
                <img src='images/logo.png' className='spotifylogo' onClick={headerclick}></img>
                <div className='headtext'>
                    <text onClick={gopre}>프리미엄</text>
                    <text>지원</text>
                    <text onClick={down}>다운로드 하기</text>
                    <text className='bar'>|</text>
                    {!token ?
                        <text onClick={goSign}>회원가입하기</text>
                        : <span className='users'>
                        <img src={profile} className='userimg'></img>
                        <text>{username}님</text>
                        </span>}
                    {!token ?
                        <text onClick={goLogins}>로그인하기</text>
                        : <text onClick={Logout}>로그아웃</text>}
                </div>
            </div>
        </div>
    )
}