import React from 'react';
import styled from 'styled-components';
import Lobbybg from '../../images/Lobby.png';
import { useNavigate } from 'react-router-dom';
export default function Lobby() {
    const nav = useNavigate();
    function goselect() {
        nav('/selectchapter');
    }
    return (
        <LobbyMain>
            <LobbyMainText>zl존 용제나이트의 모험</LobbyMainText>
            <Startbutton onClick={goselect}>- 게임 시작 -</Startbutton>
        </LobbyMain>
    );
}
const LobbyMain = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${Lobbybg});
    background-size: 100% 100%;
`;
const LobbyMainText = styled.h1`
    position: absolute;
    margin-top: 25vh;
    text-align: center;
    font-family: LightBold;
    font-style: italic;
    font-size: 90px;
    color: white;
    text-shadow: 0 -3px 0 #333,
    0 6px 8px rgba(0,0,0,.40),
    0 9px 10px rgba(0,0,0,.30),
    0 30px 10px rgba(0,0,0,.38),
    0 15px 10px rgba(0,0,0,.51);
    margin-left: 50%;
    transform: translateX(-50%);
`;
const Startbutton = styled.p`
    position: absolute;
    margin-top: 45vh;
    text-align: center;
    font-family: LightRegular;
    font-size: 40px;
    color: white;
    margin-left: 44%;
    text-shadow: 0 -3px 0 #333,
    0 6px 8px rgba(0,0,0,.4),
    0 9px 10px rgba(0,0,0,.15),
    0 30px 10px rgba(0,0,0,.18),
    0 15px 10px rgba(0,0,0,.21);
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
        transition: all ease-in-out .5s;
    }
`