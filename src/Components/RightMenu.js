import React from 'react'
import Profile from '../img/profile.jpg'
import { FaBell, FaCogs, FaCrown, FaRegHeart, FaSun } from 'react-icons/fa'
import '../Styles/RightMenu.css'

const RightMenu = () => {
  return (
    <>
      <div className="rightMenu">
          <div className="goPro">
            <i>
              <FaCrown />
              <p>
                Go <span>Pro</span>
              </p>
            </i>
              <i>
                <FaBell/>
              </i>
            
            <i>
              <FaRegHeart/>
            </i>

          </div>
          <div className="profile">
            <i><FaSun/></i>
            <i><FaCogs/></i>
            <div className="profileIMage">
              <img src={Profile} alt="" />
            </div>
          </div>
      </div> 
    </>
  )
}

export {RightMenu}
