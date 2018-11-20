import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

const Navbar = ({data}) => (
  <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a aria-current="page" className="navbar-brand" href="/">Bee ambitious</a>
          <a className="navbar-brand" href="#"></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                  <a className="nav-item nav-link" href="./profile.html">つるべについて</a>
                  <a className="nav-item nav-link" href="/blog">ブログ</a>
                  <a className="nav-item nav-link" href="/blog">猫グッズ</a>
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
