import React from 'react';
import Header from '../Header/Header';
import './Discover.scss'
import { BiSearch } from 'react-icons/bi'
export default function Discover() {
    return(
        <div className='discovermain'>
            <Header/>
            <div className='discovering'>
                <h1>FIND YOUR COMMUNITY ON DISCORD</h1>
                <p>From gaming, to music, to learning, there's a place for you.</p>
            </div>
            <div className='serverlist'>
                <div className='searchbar'>
                    <BiSearch size={30} className='searching'/>
                </div>
            </div>
        </div>
    );
}