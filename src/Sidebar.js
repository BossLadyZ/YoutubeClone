import React from 'react';
import SidebarRow from './SidebarRow';
import './AllCss/Sidebar.css'
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import { ExpandMoreOutlined, History, OndemandVideo, ThumbDownAltOutlined, VideoLibrary, WatchLater } from '@material-ui/icons';
export default function Sidebar() {
    return (
        <div className="sidebar">
           <SidebarRow selected Icon ={HomeIcon} title="Home" />
           <SidebarRow Icon ={WhatshotIcon}title="Trending" />
           <SidebarRow Icon ={SubscriptionsIcon}title="Subscription" />
        <hr/>
        <SidebarRow Icon={VideoLibrary} title="Library"/>
        <SidebarRow Icon={History} title="History"/>
        <SidebarRow Icon={OndemandVideo} title="Your Videos"/>
        <SidebarRow Icon={WatchLater} title="Watch Later"/>
        <SidebarRow Icon={ThumbDownAltOutlined} title="Liked Videos"/>
        <SidebarRow Icon={ExpandMoreOutlined} title="Show more"/>
        <hr/>
        </div>
    )
}
