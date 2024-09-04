import React, { PureComponent } from 'react'
import Globe from '../Assets/Group.png';
import Arc from '../Assets/Arc.png';
import Cpu from '../Assets/cpu.png';
import User from '../Assets/user-octagon.png';
import Box from '../Assets/_x34_.png'; 
import X5 from '../Assets/_x35_.png'; 
import X6 from '../Assets/_x36_.png'; 
import X7 from '../Assets/_x37_.png'; 



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
          <div className='pt-12 pr-2 h-[800px] w-[600px] '>
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
        <p className='font-semibold text-center text-4xl '>Why Choose Abhay Road Carrier?</p>
        <p className='text-center my-4'>Five years of expertise, exceptional service, and cutting-edge technology <br /> ensure your logistics needs are met with precision and care.</p>
        </div>
        
        <div className='flex gap-10 pt-20 mx-28 '>
        <div className='border-2 border-r-[#81B5FA]'>
        <img className='my-2' src={Arc} alt="" />
        <p className='text-xl font-semibold my-2'>Customer-Centric Approach</p>
        <p className='items-center my-2'>Our focus is on delivering exceptional service and building long-term relationships with our clients.</p>
        </div>
        
        
        <div className='border-2 border-r-[#81B5FA]'>
        <img className='my-2' src={Cpu} alt="" />
        <p className='text-xl font-semibold my-2'>Experience and Expertise</p>
        <p className='items-center my-2'>With five years in the logistic industry, we have the knowledge and skills to handle any transportation challenge.</p>
        </div>
        
        <div className='border-2 border-r-[#81B5FA]'>
        <img className='my-2' src={User} alt="" />
        <p className='text-xl font-semibold my-2'>Advanced Technology</p>
        <p className='items-center my-2'>Stay connected with real-time tracking and seamless communication throughout your shipment's journey.</p>
        </div>
        </div>
        
        <div class="bg-[#E4EFFF] py-12 rounded-xl mx-10 mt-10 border-2 border-b-[#6695db]">
  <div class="max-w-6xl mx-auto px-4">
    <div class="text-center ">
      <h2 class="text-3xl font-bold text-gray-900 pt-5 my-4">Our Services</h2>
      <p class="text-gray-600 mt-2 pt-2">We offer reliable freight transportation, secure warehousing, efficient supply chain <br /> management, and tailored logistics services to meet your unique needs.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 pt-20 ">
    
      <div class="flex items-start mx-10 my-10">
        <img src={Box} class="w-16 h-16 mr-4" alt="Freight Transportation Icon" />
        <div>
          <h3 class="text-xl font-semibold text-gray-900">Freight Transportation</h3>
          <p class="text-gray-600 mt-2">Reliable freight services with a modern fleet, ensuring safe and timely deliveries.</p>
        </div>
      </div>

    
      <div class="flex items-start mx-10 my-10">
        <img src={X6} class="w-16 h-16 mr-4" alt="Warehousing Solutions Icon" />
        <div>
          <h3 class="text-xl font-semibold text-gray-900">Warehousing Solutions</h3>
          <p class="text-gray-600 mt-2">Secure, advanced storage facilities with top-notch inventory management.</p>
        </div>
      </div>

    
      <div class="flex items-start mx-10 my-10">
        <img src={X7} class="w-16 h-16 mr-4" alt="Supply Chain Management Icon" />
        <div>
          <h3 class="text-xl font-semibold text-gray-900">Supply Chain Management</h3>
          <p class="text-gray-600 mt-2">Enhance your operations with our comprehensive supply chain solutions.</p>
        </div>
      </div>

    
      <div class="flex items-start mx-10 my-10">
        <img src={X5} class="w-16 h-16 mr-4" alt="Customized Logistics Solutions Icon" />
        <div>
          <h3 class="text-xl font-semibold text-gray-900">Customized Logistics Solutions</h3>
          <p class="text-gray-600 mt-2">We deliver tailored logistics services to address your specific needs, ensuring precision.</p>
        </div>
      </div>
    </div>
  </div>
</div>

      </div>
    )
  }
}
