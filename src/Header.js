import React, { useState } from 'react';
import './AllCss/Header.css';

import MenuIcon from '@material-ui/icons/Menu';
import Youtube from './images/youtube.png';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import AppsSharpIcon from '@material-ui/icons/AppsSharp';
import NotificationsSharpIcon from '@material-ui/icons/NotificationsSharp';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function Header() {
    const [inputSearch, setInputSearch ] = useState('');
    return (
        <div className='header'>
            <div className="header__left">
            <MenuIcon/>

            <Link to="/">
            <img className="header__logo" src={Youtube} alt="YouTube" />
            </Link>
               </div>

             <div className="header__input">
                <input
                type="text"
                onChange={e => setInputSearch(e.target.value)}
                value={inputSearch}
                placeholder="Search"
                />
                <Link to={`/search/${inputSearch}`}>
                <SearchIcon className="header__search"/>
                </Link>
                
             </div>
             <div className="header__icons">
             <VideoCallSharpIcon className="header__icon"/>
        <AppsSharpIcon className="header__icon"/>
        <NotificationsSharpIcon className="header__icon"/>
        <Avatar 
        alt="imgg"
        src="https://images.unsplash.com/photo-1524638431109-93d95c968f03?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bGFkeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60"/>
 
             </div>
             
        </div>
    )
}
