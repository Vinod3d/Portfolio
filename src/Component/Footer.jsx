import React from "react"
import logo from "./pic/logo.png"
import './footer.css'

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className='conatiner text-center top'>
          <div className='img logo'>
            <img src={logo} alt='' />
          </div>
          <p>© 2021. All rights reserved by GorkCoder-Themes.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
