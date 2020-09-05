import React from 'react'
import "./Sidebar.css"
import DonutLarge from "@material-ui/icons/DonutLarge"
import {Avatar, IconButton} from "@material-ui/core"
import ChatIcon from "@material-ui/icons/Chat"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import {SearchOutlined} from "@material-ui/icons"
import SidebarChat from './SidebarChat'

function Sidebar() {
    return (
        <div className="sidebar">
                <div className="sidebar__header">
                    <Avatar src="https://avatars3.githubusercontent.com/u/3683610?s=460&u=ecba47c93e0fed1c3a092eee46b5df4bc8b41616&v=4"/>
                    <div className="sidebar__headerRight">
                        <IconButton>
                            <DonutLarge/>       
                        </IconButton>
                        <IconButton>
                            <ChatIcon/>       
                        </IconButton>
                        <IconButton>
                            <MoreVertIcon/>       
                        </IconButton>
                    </div>
                </div>

                <div className="sidebar__search">
                    <div className="sidebar__searchContainer">
                        <SearchOutlined />
                        <input placeholder="Search or start new chat" type="text" />
                    </div>
                </div>
                <div className="sidebar_chats">
                    <SidebarChat />
                    <SidebarChat />
                    <SidebarChat />
                </div>
        </div>
    )
}

export default Sidebar
