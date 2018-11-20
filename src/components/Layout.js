import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import './all.sass'
// import 'bootstrap/dist/css/bootstrap.min.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="つるべ" />
    <Navbar />
    <main>
      <div className="container">
        <div className="row mt-4">
          <div className="col-lg-8 col-12">{children}</div>
          <div class="col-lg-4 col-12">
            <Sidebar />
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
)

export default TemplateWrapper
