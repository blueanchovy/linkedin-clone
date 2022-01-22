import React from 'react'
import './header.css'
import { useDispatch } from "react-redux";
import { auth } from './firebase.js';
import { signOut } from "firebase/auth";
import { logout } from "./features/userSlice";
import SearchIcon from '@mui/icons-material/Search';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SupervisorAccountRoundedIcon from '@mui/icons-material/SupervisorAccountRounded';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import HeaderOption from './HeaderOption.js';



function Header() {

    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout());
        signOut(auth);
    }

    return (
        <div className="header">
            <div className="header__left">
                <img className="header__image" src="http://pngimg.com/uploads/linkedIn/linkedIn_PNG2.png" alt="" />
                <div className="header__search">
                    {/* Search Icon */}
                        <SearchIcon />
                        <input className="header__searchText" type="text"></input>
                </div>
            </div>

            
            <div className="header__right">
                <HeaderOption title="Home" Icon={HomeRoundedIcon}/>
                <HeaderOption title="My Network" Icon={SupervisorAccountRoundedIcon} />
                <HeaderOption title="Jobs" Icon={BusinessCenterRoundedIcon} />
                <HeaderOption title="Messaging" Icon={ChatRoundedIcon} />
                <HeaderOption title="Notifications" Icon={NotificationsRoundedIcon} />
                <HeaderOption title="Me" avatar={true} onClick={logoutOfApp} />
            </div>
            
            

        </div>
    )
}

export default Header
