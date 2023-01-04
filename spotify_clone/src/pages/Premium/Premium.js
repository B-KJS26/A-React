import React from 'react';
import '../../styles/Premium/Premium.scss'
import Preset1 from './preset/Preset1';
import Preset2 from './preset/Preset2';
import Preset3 from './preset/Preset3';
import Preset4 from './preset/Preset4';
import Preset5 from './preset/Preset5';
import Preset12 from './preset/Preset12';
import { useEffect, useState } from 'react';
import axios from 'axios';
export default function Premium() {
    const [token, setToken] = useState("");
    const [profile, setProfile] = useState("");
    const [username, setUsername] = useState("");
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
        setToken(token)
    }, [])
    return(
        <div>
            {!token ?
            <Preset1/>
            : <Preset12/>}
            <Preset2/>
            <Preset3/>
            <Preset4/>
            <Preset5/>
        </div>
    )
}