import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import StorefrontIcon from '@material-ui/icons/Storefront';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {Avatar} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import { useStateValue } from './StateProvider';

function Header() {

        const [{user}, dispatch] = useStateValue();

    return (
        <div className="header">
            
            <div className="header__left">
                <img src="https://www.pngfind.com/pngs/m/181-1815591_facebook-circle-icon-facebook-icon-png-brown-transparent.png" alt="404" />
                <div className="header__input">
                <SearchIcon />
                <input placeholder="Search Facebook"  type="text" />
                </div>
            </div>

            <div className="header__middle">
            <div className="header__option header__option__active">
                <HomeIcon />
            </div>
            <div className="header__option">
                <FlagIcon />
            </div>
            <div className="header__option">
                <StorefrontIcon />
            </div>
            <div className="header__option">
                <NotificationsIcon />
            </div>
            
            </div>

            <div className="header__right">
                <div className="header__info">
                    <Avatar src={user.photoURL} />
                    <h4> {user.displayName} </h4>
                </div>
                <div className="header__option">
                <AddIcon />
            </div>
            <div className="header__option">
                <HomeIcon />
            </div>


            </div>
            
        </div>
    )
}

export default Header
