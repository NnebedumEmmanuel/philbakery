import React from 'react'
import Header from '../Sections/Header';
import MobileHeadContent from '../Component/MobileHeadContent';
import TopNav from '../Component/TopNav';
import MainNav from '../Component/MainNav';
import MobileHeader from '../Component/MobileHeader';
import Footer from '../Sections/Footer';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <body className='	class="home page-template page-template-page-templates page-template-full_width page-template-page-templatesfull_width-php page page-id-2687 wp-custom-logo wp-embed-responsive ltr cakecious-pro-ver-1-2-0-beta2 theme-cakecious woocommerce-js cakecious-page-layout-full-width cakecious-ver-5-0 wpb-js-composer js-comp-ver-6.9.0 vc_responsive">'>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 0 0"
        width="0"
        height="0"
        focusable="false"
        role="none"
        style={{
          visibility: "hidden",
          position: "absolute",
          left: " -9999px",
          overflow: "hidden",
        }}
      >
        <defs>
          <filter id="wp-duotone-dark-grayscale">
            <feColorMatrix
              color-interpolation-filters="sRGB"
              type="matrix"
              values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
            ></feColorMatrix>
            <feComponentTransfer color-interpolation-filters="sRGB">
              <feFuncR type="table" tableValues="0 0.49803921568627"></feFuncR>
              <feFuncG type="table" tableValues="0 0.49803921568627"></feFuncG>
              <feFuncB type="table" tableValues="0 0.49803921568627"></feFuncB>
              <feFuncA type="table" tableValues="1 1"></feFuncA>
            </feComponentTransfer>
            <feComposite in2="SourceGraphic" operator="in"></feComposite>
          </filter>
        </defs>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 0 0"
        width="0"
        height="0"
        focusable="false"
        role="none"
        style={{
          visibility: "hidden",
          position: "absolute",
          left: " -9999px",
          overflow: "hidden",
        }}
      >
        <defs>
          <filter id="wp-duotone-grayscale">
            <feColorMatrix
              color-interpolation-filters="sRGB"
              type="matrix"
              values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
            ></feColorMatrix>
            <feComponentTransfer color-interpolation-filters="sRGB">
              <feFuncR type="table" tableValues="0 1"></feFuncR>
              <feFuncG type="table" tableValues="0 1"></feFuncG>
              <feFuncB type="table" tableValues="0 1"></feFuncB>
              <feFuncA type="table" tableValues="1 1"></feFuncA>
            </feComponentTransfer>
            <feComposite in2="SourceGraphic" operator="in"></feComposite>
          </filter>
        </defs>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 0 0"
        width="0"
        height="0"
        focusable="false"
        role="none"
        style={{
          visibility: "hidden",
          position: "absolute",
          left: " -9999px",
          overflow: "hidden",
        }}
      >
        <defs>
          <filter id="wp-duotone-purple-yellow">
            <feColorMatrix
              color-interpolation-filters="sRGB"
              type="matrix"
              values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
            ></feColorMatrix>
            <feComponentTransfer color-interpolation-filters="sRGB">
              <feFuncR
                type="table"
                tableValues="0.54901960784314 0.98823529411765"
              ></feFuncR>
              <feFuncG type="table" tableValues="0 1"></feFuncG>
              <feFuncB
                type="table"
                tableValues="0.71764705882353 0.25490196078431"
              ></feFuncB>
              <feFuncA type="table" tableValues="1 1"></feFuncA>
            </feComponentTransfer>
            <feComposite in2="SourceGraphic" operator="in"></feComposite>
          </filter>
        </defs>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 0 0"
        width="0"
        height="0"
        focusable="false"
        role="none"
        style={{
          visibility: "hidden",
          position: "absolute",
          left: " -9999px",
          overflow: "hidden",
        }}
      >
        <defs>
          <filter id="wp-duotone-blue-red">
            <feColorMatrix
              color-interpolation-filters="sRGB"
              type="matrix"
              values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
            ></feColorMatrix>
            <feComponentTransfer color-interpolation-filters="sRGB">
              <feFuncR type="table" tableValues="0 1"></feFuncR>
              <feFuncG type="table" tableValues="0 0.27843137254902"></feFuncG>
              <feFuncB
                type="table"
                tableValues="0.5921568627451 0.27843137254902"
              ></feFuncB>
              <feFuncA type="table" tableValues="1 1"></feFuncA>
            </feComponentTransfer>
            <feComposite in2="SourceGraphic" operator="in"></feComposite>
          </filter>
        </defs>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 0 0"
        width="0"
        height="0"
        focusable="false"
        role="none"
        style={{
          visibility: "hidden",
          position: "absolute",
          left: " -9999px",
          overflow: "hidden",
        }}
      >
        <defs>
          <filter id="wp-duotone-midnight">
            <feColorMatrix
              color-interpolation-filters="sRGB"
              type="matrix"
              values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
            ></feColorMatrix>
            <feComponentTransfer color-interpolation-filters="sRGB">
              <feFuncR type="table" tableValues="0 0"></feFuncR>
              <feFuncG type="table" tableValues="0 0.64705882352941"></feFuncG>
              <feFuncB type="table" tableValues="0 1"></feFuncB>
              <feFuncA type="table" tableValues="1 1"></feFuncA>
            </feComponentTransfer>
            <feComposite in2="SourceGraphic" operator="in"></feComposite>
          </filter>
        </defs>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 0 0"
        width="0"
        height="0"
        focusable="false"
        role="none"
        style={{
          visibility: "hidden",
          position: "absolute",
          left: " -9999px",
          overflow: "hidden",
        }}
      >
        <defs>
          <filter id="wp-duotone-magenta-yellow">
            <feColorMatrix
              color-interpolation-filters="sRGB"
              type="matrix"
              values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
            ></feColorMatrix>
            <feComponentTransfer color-interpolation-filters="sRGB">
              <feFuncR type="table" tableValues="0.78039215686275 1"></feFuncR>
              <feFuncG type="table" tableValues="0 0.94901960784314"></feFuncG>
              <feFuncB
                type="table"
                tableValues="0.35294117647059 0.47058823529412"
              ></feFuncB>
              <feFuncA type="table" tableValues="1 1"></feFuncA>
            </feComponentTransfer>
            <feComposite in2="SourceGraphic" operator="in"></feComposite>
          </filter>
        </defs>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 0 0"
        width="0"
        height="0"
        focusable="false"
        role="none"
        style={{
          visibility: "hidden",
          position: "absolute",
          left: " -9999px",
          overflow: "hidden",
        }}
      >
        <defs>
          <filter id="wp-duotone-purple-green">
            <feColorMatrix
              color-interpolation-filters="sRGB"
              type="matrix"
              values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
            ></feColorMatrix>
            <feComponentTransfer color-interpolation-filters="sRGB">
              <feFuncR
                type="table"
                tableValues="0.65098039215686 0.40392156862745"
              ></feFuncR>
              <feFuncG type="table" tableValues="0 1"></feFuncG>
              <feFuncB
                type="table"
                tableValues="0.44705882352941 0.4"
              ></feFuncB>
              <feFuncA type="table" tableValues="1 1"></feFuncA>
            </feComponentTransfer>
            <feComposite in2="SourceGraphic" operator="in"></feComposite>
          </filter>
        </defs>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 0 0"
        width="0"
        height="0"
        focusable="false"
        role="none"
        style={{
          visibility: "hidden",
          position: "absolute",
          left: "-9999px",
          overflow: "hidden",
        }}
      >
        <defs>
          <filter id="wp-duotone-blue-orange">
            <feColorMatrix
              color-interpolation-filters="sRGB"
              type="matrix"
              values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
            ></feColorMatrix>
            <feComponentTransfer color-interpolation-filters="sRGB">
              <feFuncR type="table" tableValues="0.098039215686275 1"></feFuncR>
              <feFuncG type="table" tableValues="0 0.66274509803922"></feFuncG>
              <feFuncB
                type="table"
                tableValues="0.84705882352941 0.41960784313725"
              ></feFuncB>
              <feFuncA type="table" tableValues="1 1"></feFuncA>
            </feComponentTransfer>
            <feComposite in2="SourceGraphic" operator="in"></feComposite>
          </filter>
        </defs>
      </svg>{" "}
      <a class="skip-link screen-reader-text" href="#content">
        Skip to content
      </a>
      <MobileHeadContent />
      <div id="canvas" class="cakecious-canvas">
        <div id="page" class="site">
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
            </div>
            <MobileHeader />
          </header>

          <main>
            <Outlet/>
          </main>

          <footer>
            <Footer/>
          </footer>
        </div>
      </div>
    </body>
  );
}

export default RootLayout
