import React, { PureComponent } from 'react'
import Logo from "../Assets/Arc.png";



export default class 
 extends PureComponent {
  render() {
    return (
      <div className='font DM sans bg-[#81B5FA] pt-4 md:pt-8'>
      <nav >
      <div className='flex justify-between md:mx-20  rounded-3xl p-2 md:p-2 bg-[#F4F7FF]'>
      <div className='flex md:gap-4 md:mx-4 gap-2 mx-2'>
      <img className='md:h-8 h-7 ' src={Logo} alt="" />
      <div className='md:pt-1 pt-1 font-semibold '>ArcVapi.</div>
      </div>
      <div className='flex md:gap-4 md:mx-4 gap-4'>
      <p className='md:pt-1 pt-1 md:mx-4  hover:bg-[#81B5FA] rounded-xl md:px-2 md:py-1 '>About Us</p>
      <p className='md:pt-1 pt-1 md:mx-4 hover:bg-[#81B5FA] rounded-xl md:px-2 md:py-1 '>Contact</p>
      <div className=''>
      <button className='bg-[#81B5FA] rounded-2xl px-4 py-1 md:px-4 md:py-1 text-white hover:bg-blue-500'>Tools</button>
      </div>
      </div>
      </div>
      </nav>
      </div>
    )
  }
}
