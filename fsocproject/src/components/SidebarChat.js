import React from 'react'
import './SidebarChat.css'
import { Avatar } from '@mui/material'

export default function SidebarChat() {
  return (
    <div className='sidebarChat'>
        <Avatar/>
        <div className='sidebarChat_info'>
            <h2>Room name</h2>
            <p>message text</p>
        </div>    
    </div>
  )
}

