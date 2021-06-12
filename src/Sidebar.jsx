import { Avatar } from '@material-ui/core';
import React from 'react'
import './Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="" alt="" />
                <Avatar className="sidebar__avatar" />
                <h2>Stefan Salvadore</h2>
                <h4>stefvamp@hotmail.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__Sat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2,554</p>
                </div>
                <div className="sidebar__stat">
                <p>Views on post</p>
                <p className="sidebar__statNumber">1,324</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
