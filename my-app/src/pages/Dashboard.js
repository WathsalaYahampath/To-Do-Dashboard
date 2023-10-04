import React from 'react'
import SideNav from '../components/sidenav/SideNav.js'
import TopNav from '../components/topnav/TopNav.js'
import Container from '../components/container/Container.js'


export default function Dashboard() {
  return (
    <div>
        <SideNav/>
        <TopNav/>
        <Container/>
    </div>
  )
}
