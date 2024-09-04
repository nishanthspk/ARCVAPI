import React, { PureComponent } from 'react'
import Globe from '../Assets/Group.png';

export default class Home extends PureComponent {
  render() {
    return (
      <div>
        <div className='h-screen font DM Sans bg-[#81B5FA] flex justify-between '>
          <div className='pt-32 pl-20'>
            <p className='text-5xl font-semibold '>Delivering Your  Promise, <br /> Every Mile, Every Time.</p>
            <p className='my-4'>We turn logistics into a seamless journey. With a track record of <br /> reliability and excellence, we ensure your goods reach their destination <br /> safely, efficiently, and on time—every single time.</p>
            <button className='bg-[#FFFFFF] rounded-lg px-8 py-2 border-b-2 border-black'>Get Your Quote No  →</button>
          </div>
          <div className='pt-20'>
            <img className='' src={Globe} alt="" />
          </div>

        </div>
        
        
        <div class="bg-blue-50 p-6 rounded-lg shadow-lg max-w-4xl mx-auto border-2 border-b-[#81B5FA]">
          <h2 class="text-2xl font-bold mb-2">Track Your Shipment</h2>
          <p class="text-gray-600 mb-4">
            Enter your tracking number below to monitor the status of your shipment. Our advanced tracking system provides you with up-to-the-minute updates, ensuring you stay informed throughout the entire delivery process.
          </p>
          <div class="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Enter the track no."
              class="w-10/12 p-2 border-2 border-[#81B5FA] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              class="bg-[#81B5FA] text-white px-4 py-2  rounded-md hover:bg-blue-600 "
            >
              Track Now
            </button>
          </div>
        </div>
        
        <div className='pt-20'>
        <p className='font-semibold text-center'>Why Choose Abhay Road Carrier?</p>
        <p className='text-center'>Five years of expertise, exceptional service, and cutting-edge technology <br /> ensure your logistics needs are met with precision and care.</p>
        </div>
        
        <div>
        <img src="" alt="" />
        </div>

      </div>
    )
  }
}
