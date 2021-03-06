import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Logo from '../img/logo_01.png'

const Navbar = ({data}) => (
  <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">
            <img src={Logo} width="150px" alt="" />
          </a>
          <a className="navbar-brand" href="#"></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                  <a className="nav-item nav-link" href="/blog">ブログ</a>
                  <a className="nav-item nav-link" href="/blog">猫グッズ</a>
                  <a className="nav-item nav-link" href="./profile.html">プロフィール</a>
              </div>
          </div>
      </nav>
  </header>
  // <nav className="navbar navbar-expand-lg navbar-light bg-light">
  //   <Link className="navbar-brand" to="/">不定期更新猫症候群</Link>
  //   <a className="navbar-brand" href="#"></a>
  //   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
  //     <span className="navbar-toggler-icon"></span>
  //   </button>
  //   <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
  //     <div className="navbar-nav">
  //       <Link className="nav-item nav-link" to="/blog/">ブログ</Link>
  //       <Link className="nav-item nav-link" to="/blog">猫グッズ</Link>
  //     </div>
  //   </div>
  // </nav>
)

export default Navbar
