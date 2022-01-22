import React from 'react'
import "./Sidebar.css"
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import Avatar from '@mui/material/Avatar';

function Sidebar() {

    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )


    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src="https://images.pexels.com/photos/10832155/pexels-photo-10832155.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                <Avatar src={user?.photoUrl} className='sidebar__avatar '>{user?.email[0]}</ Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">5,432</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">5,123</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('ReactJS')}
                {recentItem('MongoDB')}
                {recentItem('ExpressJS')}
                {recentItem('NodeJS')}
                {recentItem('Figma')}
            </div>
        </div>
    )
}

export default Sidebar
