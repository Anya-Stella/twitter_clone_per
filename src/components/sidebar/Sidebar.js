import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ListAltIcon from '@mui/icons-material/ListAlt';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';
import "./Sidebar.css";
import "./SidebarOption.css";



function Sidebar() {
  return (
    <div className='sidebar'>
      {/* ツイッターアイコン */}
      <TwitterIcon className='sidebar_twitterIcon' />

      {/* SidebarOption */}
      <SidebarOption text="Home" Icon={ HomeIcon } active/>
      <SidebarOption text="Explore" Icon={ SearchIcon }/>
      <SidebarOption text="Notifications" Icon={ NotificationsNoneIcon }/>
      <SidebarOption text="messages" Icon={ MailOutlineIcon }/>
      <SidebarOption text="Lists" Icon={ ListAltIcon }/>
      <SidebarOption text="Bookmarks" Icon={ BookmarksIcon }/>
      <SidebarOption text="Communities" Icon={ PeopleOutlineIcon }/>
      <SidebarOption text="Premium" Icon={ TwitterIcon }/>
      <SidebarOption text="Profile" Icon={ PermIdentityIcon }/>
      <SidebarOption text="More" Icon={ MoreHorizIcon }/>
      {/* SidebarOption */}
      {/* SidebarOption */}
      {/* SidebarOption */}
      {/* SidebarOption */}
      {/* SidebarOption */}
      {/* SidebarOption */}

      {/* ツイートするボタン */}
      <Button variant="outlined" className='sidebar--tweet' fullWidth>Post</Button>

    </div>
  )
}

export default Sidebar
