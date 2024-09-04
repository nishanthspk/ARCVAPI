import React, { PureComponent } from 'react'
import Logo from "../Assets/Arc.png";



export default class 
 extends PureComponent {
  render() {
    return (
      <div className='font DM sans bg-[#81B5FA] pt-8'>
      <nav >
      <div className='flex justify-between mx-20  rounded-3xl p-2 bg-[#F4F7FF]'>
      <div className='flex gap-4 mx-4'>
      <img className='h-8' src={Logo} alt="" />
      <div className='pt-1 font-semibold'>ArcVapi.</div>
      </div>
      <div className='flex gap-4 mx-4'>
      <p className='pt-1 mx-4'>About Us</p>
      <p className='pt-1 mx-4'>Contact</p>
      <div className=''>
      <button className='bg-[#81B5FA] rounded-2xl px-4 py-1 text-white'>Tools</button>
      </div>
      </div>
      </div>
      </nav>
      </div>
    )
  }
}
