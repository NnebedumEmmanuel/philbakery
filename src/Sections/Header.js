import React from 'react'
import TopNav from '../Component/TopNav'
import MainNav from '../Component/MainNav'
import MobileHeader from '../Component/MobileHeader'

const Header = () => {
  return (
    <div>
      <header
        id="masthead"
        class="cakecious-header site-header"
        role="banner"
        itemscope=""
        itemtype="https://schema.org/WPHeader"
      >
        <div id="header" class="cakecious-header-main cakecious-header">
          <TopNav />
          <MainNav />
          <MobileHeader />
          
          <p>dkj'dddj</p>
        </div>
      </header>
    </div>
  );
}

export default Header
