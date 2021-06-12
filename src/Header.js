import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
                                                                        

import HomeIcon from '@material-ui/icons/Home';
import  SupervisorAccountIcon  from '@material-ui/icons/SupervisorAccount';
import NotificationsIcon from '@material-ui/icons/Notifications';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';

function Header() {
    return (
        <div className="header">
         

            <div className="header__left">
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" 
                alt="" />
                <div className="header__search">
                
                   <SearchIcon />
                    <input type="text" />
                </div>
            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home"/>
                <HeaderOption 
                    Icon={SupervisorAccountIcon} 
                    title="My Network" 
                />
                <HeaderOption 
                    Icon={BusinessCenterIcon} 
                    title="Jobs" 
                />
                <HeaderOption 
                    Icon={ChatIcon} 
                    title="Messaging" 
                />
                <HeaderOption 
                    Icon={NotificationsIcon} 
                    title="Notification" 
                />
                <HeaderOption avatar="https://www.linkedin.com/in/naman-gupta-167708127/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3Bxo5pjfw6ROKfONsTPx55bQ%3D%3D" title="me" />
            </div>
        </div>
    )
}


export default Header;