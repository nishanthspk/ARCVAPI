import React, { PureComponent } from 'react'
import Logo from "../Assets/Arc.png";
import { Link } from 'react-router-dom';


export default class 
 extends PureComponent {
  render() {
    return (
      <div>
      <nav >
      <div className='flex justify-between mx-5'>
      <div className='flex gap-2'>
      <img src={Logo} alt="" />
      <div>ArcVapi.</div>
      </div>
      <div className='flex gap-2'>
      <p>About Us</p>
      <p>Contact</p>
      <div className=''>
      <button className='bg-[#81B5FA]'>Tools</button>
      </div>
      </div>
      </div>
      </nav>
      </div>
    )
  }
}
