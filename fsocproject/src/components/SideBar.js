import React from 'react'
import "./Sidebar.css"
import { IconButton, TextField , Avatar, Button} from '@mui/material'
import ListIcon from '@mui/icons-material/List';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import SidebarChat from './SidebarChat';

export default function SideBar() {
  return (
    <div className='sidebar'>
        <div className = "sidebar_header">
            <Avatar src="https://h5p.org/sites/default/files/h5p/content/1209180/images/file-6113d5f8845dc.jpeg" />
            <div className = "sidebar_headerRight">
                {/* <IconButton>
                    <AccountCircleIcon/>
                </IconButton> */}
                {/* <TextField hiddenLabel id="filled-hidden-label-small" defaultValue="" label="Search Rooms" variant="filled" size="medium"/> */}
                <TextField id="outlined-basic" label="Search Rooms" variant="outlined" size='small' />
                <IconButton>
                    <SearchIcon/>
                </IconButton>
                <IconButton>
                    <ListIcon/>
                </IconButton>
            </div>
        </div> 
        <div><Button variant="outlined" label="Create New Room">Create New Room</Button></div>
        <div className = "sidebar_chats">
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
        </div>
    </div>
  )
}

