import React, { PureComponent } from 'react'
import Globe from '../Assets/Group.png';
import Arc from '../Assets/Arc.png';
import Cpu from '../Assets/cpu.png';
import User from '../Assets/user-octagon.png';
import Box from '../Assets/_x34_.png';
import X5 from '../Assets/_x35_.png';
import X6 from '../Assets/_x36_.png';
import X7 from '../Assets/_x37_.png';
import Truck from '../Assets/Truck.png';
import Dummy from '../Assets/Ellipse 1.png';
import Factory from '../Assets/Factory.png';
import Map from '../Assets/Map.png';
import Text from '../Assets/text.png';
import Logo from '../Assets/Arc.png';


export default class Home extends PureComponent {
  render() {
    return (
      <div>
      <div className='relative'>
        <div className='h-screen font DM Sans bg-[#81B5FA] flex justify-between '>
          <div className=' pt-32 pl-20'>
            <p className='text-5xl font-semibold '>Delivering Your <span className='text-white'> Promise</span> , <br /> Every <span className='text-white'> Mile</span> , Every <span className='text-white'> Time</span>.</p>
            <p className='my-4'>We turn logistics into a seamless journey. With a track record of <br /> reliability and excellence, we ensure your goods reach their destination <br /> safely, efficiently, and on time—every single time.</p>
            <button className='bg-[#FFFFFF] rounded-lg px-8 py-2 border-b-2 border-black'>Get Your Quote No  →</button>
          </div>
          <div className='pt-12 pr-2 h-[800px] w-[600px] '>
            <img className='' src={Globe} alt="" />
          </div>

        </div>

        <div className='absolute inset-0 pt-96'>
        <div class="bg-blue-50 p-6 rounded-lg mt-40 shadow-lg max-w-4xl mx-auto border-2 border-b-[#81B5FA] ">
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
        </div>
      </div>

        <div className='pt-40'>
          <p className='font-semibold text-center text-4xl '>Why Choose Abhay Road Carrier?</p>
          <p className='text-center my-4'>Five years of expertise, exceptional service, and cutting-edge technology <br /> ensure your logistics needs are met with precision and care.</p>
        </div>

        <div className='flex gap-10 pt-20 mx-28 '>
          <div className='border-2 border-r-[#81B5FA] border-transparent'>
            <img className='my-2' src={Arc} alt="" />
            <p className='text-xl font-semibold my-2'>Customer-Centric Approach</p>
            <p className='items-center my-2'>Our focus is on delivering exceptional service and building long-term relationships with our clients.</p>
          </div>


          <div className='border-2 border-r-[#81B5FA] border-transparent'>
            <img className='my-2' src={Cpu} alt="" />
            <p className='text-xl font-semibold my-2'>Experience and Expertise</p>
            <p className='items-center my-2'>With five years in the logistic industry, we have the knowledge and skills to handle any transportation challenge.</p>
          </div>

          <div className='border-2 border-r-[#81B5FA] border-transparent'>
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
        
        <div className='mt-20 bg-[#D7E8FF]'>
        <div className='text-center '>
        <p className='text-4xl my-2'>Our Branches</p>
        <p className='text-xs my-2'>We have a strong network of branches across the country, allowing us to serve you wherever <br /> you are. Find the contact details of our nearest branch below.</p>
        </div>
        <div className='flex'>
        <div className='pt-20 pl-32'>
        <div>
        <p className='text-[#81B5FA] my-2'>📍Vapi ( Head Office )</p>
        <p className='my-2 pl-5'>Address: Plot no.10, Param Industrial Hub, Karvad <br /> Road, Karvad, Vapi, 396195.</p>
        </div>
        
        <div>
        <p className='text-[#81B5FA] my-2'>📍Raipur</p>
        <p className='my-2 pl-5'>Address: Block No. 7, Parking No. 3, Transport <br /> Nagar, Rawabhata, Raipur ( C.G.) – 493221.</p>
        </div>
        
        <div>
        <p className='text-[#81B5FA] my-2'>📍Pune</p>
        <p className='pl-5'>Address: Shop No. 2, Gate no. 57, Dehu-Alandi <br /> Road, Opp. Gulmohar Compound, Talawade, <br /> Pune ( MH ) – 411062</p>
        </div>
        </div>
        
        <div className='mx-20 pl-5 pt-2' >
        <img className='h-[450px] w-[600px]' src={Truck} alt="" />
        </div>
        </div>
        </div>
        
        <div>
        <div className='text-center pt-20'>
        <p className='text-4xl'>Our Trusted Clients</p>
        <p className='text-xs'>We are honored to have partnered with a diverse range of clients from various industries. Here are some of the logos and testimonials from those who trust us with their logistics needs.</p>
        </div>
        <div className='flex justify-between mx-5 gap-5 pt-10'>
        <div className='bg-[#E4EFFF] border-2 border-[#6695db] rounded-lg'>
        <img src={Dummy} alt="" />
        <p>Martin Goutry</p>
        <p>John Smith, CEO of Tech Innovations</p>
        <p>"Abhay Road Carrier has been an invaluable partner in managing our logistics. Their reliability and timely deliveries.”</p>
        </div>
        <div className='bg-[#E4EFFF] border-2 border-[#6695db] rounded-lg'>
        <img src={Dummy} alt="" />
        <p>Martin Goutry</p>
        <p>John Smith, CEO of Tech Innovations</p>
        <p>"Abhay Road Carrier has been an invaluable partner in managing our logistics. Their reliability and timely deliveries.”</p>
        </div>
        <div className='bg-[#E4EFFF] border-2 border-[#6695db] rounded-lg'>
        <img src={Dummy} alt="" />
        <p>Martin Goutry</p>
        <p>John Smith, CEO of Tech Innovations</p>
        <p>"Abhay Road Carrier has been an invaluable partner in managing our logistics. Their reliability and timely deliveries.”</p>
        </div>
        </div>
        </div>
        
        <div className='bg-[#D7E8FF] rounded-lg mx-10 mt-20'>
        <div className='text-center pt-5 '>
        <p className='text-4xl my-2'>Connect with Us</p>
        <p className='text-xs my-2'>We're here to assist with all your logistics needs. Fill out the form below, and our team will get <br /> back to you promptly to address your inquiries and provide the support you need.</p>
        </div>
        <div className='flex justify-between mx-10 pt-20'>
        <div>
        <p className='my-2'>Full Name *</p>
        <input className='bg-white w-96 p-1 rounded-lg' type="text" />
        <p className='my-2'>Enquiry Services</p>
        <input className='bg-white w-96 p-1 rounded-lg' type="text" />
        <p className='my-2'>Email *</p>
        <input className='bg-white w-96 p-1 rounded-lg' type="text" />
        <p className='my-2'>Phone Number (Optional)</p>
        <input className='bg-white w-96 p-1 rounded-lg' type="text" />
        <p className='my-2'>Message *</p>
        <input className='bg-white w-96 p-1 rounded-lg' type="text" />
        <div className='pt-10 '>
        <button className='bg-[#81B5FA] text-white border-2 border-b-black py-2 px-4 rounded-lg'>Send Message →</button>
        </div>
        </div>
        <div>
        <img className='h-[500px] w-[500px]' src={Factory} alt="" />
        </div>
        </div>
        </div>
        
        <div className='text-center pt-20'>
        <p className='text-4xl'>Find Us on the Map</p>
        <p className='text-xs my-4'>Use the interactive map below to find our office locations and get directions</p>
        </div>
        <div className='mx-10 pt-5'>
        <img className='' src={Map} alt="" />
        </div>
        <div className='flex justify-between'>
        
        <div className=' mx-4 mt-10'>
        <div className='flex gap-4 mx-10'>
      <img className='h-8' src={Logo} alt="" />
      <div className='pt-1 font-semibold'>ArcVapi.</div>
      </div>
      <p className='mx-10 pt-2'>Efficient Solutions for All Your Transportation Needs.</p>
     
      </div>
      <div className='flex gap-10 mx-16 mt-10 '>
      <div>
      <p>Tools</p>
      <p>About Us</p>
      <p>Contact</p>
      </div>
      <div>
      <p>Privacy Policies</p>
      <p>Terms of service</p>
      </div>
      </div>
      </div>
      
      <div className='mx-20 pt-16'>
      <img src={Text} alt="" />
      </div>

      </div>
    )
  }
}
