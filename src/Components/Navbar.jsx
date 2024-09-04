import React, { PureComponent } from 'react'
import Logo from "../Assets/Arc.png";



export default class 
 extends PureComponent {
  render() {
    return (
      <div>
      <nav >
      <div className='flex justify-between mx-20 p-2 rounded-3xl mt-8 bg-[#F4F7FF]'>
      <div className='flex gap-4 mx-4'>
      <img className='h-8' src={Logo} alt="" />
      <div className='pt-1'>ArcVapi.</div>
      </div>
      <div className='flex gap-4 mx-4'>
      <p className='pt-1'>About Us</p>
      <p className='pt-1'>Contact</p>
      <div className=''>
      <button className='bg-[#81B5FA] rounded-lg px-2 py-1'>Tools</button>
      </div>
      </div>
      </div>
      </nav>
      </div>
    )
  }
}
