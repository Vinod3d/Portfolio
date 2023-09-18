import React, { useState } from "react"
import "./Header.css"
import logo from "../pic/logo.png"

const Header = () => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    const scrollY = window.scrollY;

    if (scrollY > 50 && scrollY < 300) {
      header.style.transform = "translateY(-100px)";
    } else if (scrollY >= 300) {
      header.classList.add("active");
      header.style.transform = "translateY(0px)";
    } else {
      header.style.transform = "translateY(0px)";
      header.classList.remove("active");
    }
  });
  
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'> 
          <div className='logo'>
            <img src={logo} alt='' />
          </div>

          <div className='navlink'>
            <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
              {/*<ul className='link f_flex uppercase {Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}'>*/}
              <li>
                <a href='#home'>home</a>
              </li>
              <li>
                <a href='#features'>features</a>
              </li>
              <li>
                <a href='#resume'>resume</a>
              </li>
              <li>
                <a href='#blog'>projects</a>
              </li>
              <li>
                <a href='#contact'>contact</a>
              </li>
              <li>
                <button className='home-btn'>CALL NOW</button>
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>

      {/* <section className="demo"></section> */}
    </>
  )
}

export default Header;