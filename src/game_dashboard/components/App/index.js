import React from 'react'

import SideMenu from '../SideMenu'
import Nav from '../Nav'
import CardPanel from '../CardPanel'
import Layout from '../../../common/components/Layout'

import '../../../common/styles/main.css'

export default function App() {
  return (
    <div>
      <Layout side={<SideMenu />} content={<CardPanel />} nav={<Nav />} />
    </div>
  )
}
