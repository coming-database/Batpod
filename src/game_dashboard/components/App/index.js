import React from 'react'
import { Helmet } from 'react-helmet'

import SideMenu from '../SideMenu'
import Nav from '../Nav'
import CardPanel from '../CardPanel'
import Layout from '../../../common/components/Layout'

import '../../../common/styles/main.css'

export default function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Games Coming Soon</title>
      </Helmet>
      <Layout side={<SideMenu />} content={<CardPanel />} nav={<Nav />} />
    </div>
  )
}
