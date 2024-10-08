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
        <div className='md:h-screen font DM Sans bg-[#81B5FA] md:flex justify-between '>
          <div className=' md:pt-32 md:pl-20 pl-5'>
            <p className='text-2xl md:text-5xl font-semibold pt-20 '>Delivering Your <span className='text-white'> Promise</span> , <br /> Every <span className='text-white'> Mile</span> , Every <span className='text-white'> Time</span>.</p>
            <p className=' md:my-4 text-xs pt-4 '>We turn logistics into a seamless journey. With a track record of  reliability <br /> and excellence, we ensure your goods reach their destination <br  /> safely, efficiently, and on time—every single time.</p>
            <button className='bg-[#FFFFFF] rounded-lg mt-5 px-4 py-2 md:px-8 md:py-2 border-b-2 border-black text-semibold '>Get Your Quote No  →</button>
          </div>
          <div className='pt-4 md:pt-20 md:pr-2 pb-20 md:h-[800px]  md:w-[600px] '>
            <img className='' src={Globe} alt="" />
          </div>

        </div>

        <div className='absolute inset-0 pt-72 md:pt-96 pl-12 '>
        <div class="bg-blue-50 md:p-6 p-2  max-w-80 rounded-lg mt-80 md:mt-36 shadow-lg  md:max-w-4xl md:mx-auto border-2 border-b-[#81B5FA] ">
          <h2 class="text-2xl  font-semibold md:mb-2">Track Your Shipment</h2>
          <p class="text-gray-400 md:mb-4 text-xs pt-2 ">
            Enter your tracking number below to monitor the status of your shipment. Our advanced tracking system provides you with up-to-the-minute updates, ensuring you stay informed throughout the entire delivery process.
          </p>
          <div class="flex items-center md:space-x-2 space-x-2 pt-2">
            <input
              type="text"
              placeholder="Enter the track no."
              class="md:w-10/12 md:p-2 border-2 md:border-2 border-[#81B5FA] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              class="bg-[#81B5FA] text-white md:px-4 md:py-2 px-4 py-1 rounded-md hover:bg-blue-500 "
            >
              Track Now
            </button>
          </div>
        </div>
        </div>
      </div>

        <div className='pt-40 md:pt-40'>
          <p className='font-semibold md:text-center md:text-4xl text-xl text-center'>Why Choose Abhay Road Carrier?</p>
          <p className='text-center mx-6 text-xs text-gray-400  md:text-center my-4'>Five years of expertise, exceptional service, and cutting-edge technology  ensure your logistics needs are met with precision and care.</p>
        </div>

        <div className='md:flex  md:pt-20 md:mx-28 pt-16 '>
        <div className='flex justify-between mx-8'>
          <div className='border-2 border-l-[#81B5FA] md:border-2 md:border-r-[#81B5FA] md:border-l-0 border-transparent px-5'>
            <img className='md:my-2' src={Arc} alt="" />
            <p className='md:text-xl font-semibold text-xs md:my-2 my-2'>Customer-Centric Approach</p>
            <p className='items-center text-xs text-gray-400 my-2 md:my-2'>Our focus is on delivering exceptional service and building long-term relationships with our clients.</p>
          </div>


          <div className='border-2 border-l-[#81B5FA] md:border-l-0 md:px-5 px-4 md:border-r-[#81B5FA]  border-transparent'>
            <img className='md:my-2' src={Cpu} alt="" />
            <p className='md:text-xl font-semibold md:my-2 text-xs my-2'>Experience and Expertise</p>
            <p className='items-center md:my-2 text-xs  text-gray-400 my-2'>With five years in the logistic industry, we have the knowledge and skills to handle any transportation challenge.</p>
          </div>
          </div>
          
        <div className="flex justify-center md:block pl-20 pt-10  md:p-0">
          <div className=' border-transparent border-2 border-l-[#81B5FA] md:border-l-0 px-4 '>
            <img className='md:my-2' src={User} alt="" />
            <p className='md:text-xl text-xs font-semibold md:my-2 my-2'>Advanced Technology</p>
            <p className='items-center text-xs text-gray-400 md:my-2'>Stay connected with real-time tracking and seamless communication throughout your shipment's journey.</p>
          </div>
          </div>
          
        </div>

        <div class="bg-[#E4EFFF] md:py-12 rounded-xl md:mx-10 md:mt-10 mt-10 border-4 mx-2 md:border-8 border-b-[#6695db] border-t-[#6695db] border-transparent">
          <div class="md:max-w-6xl md:mx-auto md:px-4">
            <div class="text-center ">
              <h2 class="md:text-3xl font-bold text-xs text-gray-900  md:my-4">Our Services</h2>
              <p class=" mt-2 text-xs text-gray-400 pt-2">We offer reliable freight transportation, secure warehousing, efficient supply chain  management, and tailored logistics services to meet your unique needs.</p>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 md:gap-8 md:pt-16 ">

              <div class="flex items-start md:mx-10 md:my-10 my-5">
                <img src={Box} class="w-20 h-20 md:mr-4" alt="Freight Transportation Icon" />
                <div className='mx-2' >
                  <h3 class="text-xs md:text-xl font-bold text-gray-900">Freight Transportation</h3>
                  <p class="text-gray-600 md:mt-2 mt-2 text-xs">Reliable freight services with a modern fleet, ensuring safe and timely deliveries.</p>
                </div>
              </div>


              <div class=" flex items-start md:mx-10 md:my-10 my-5">
                <img src={X6} class="w-20 h-20 md:mr-4" alt="Warehousing Solutions Icon" />
                <div className='mx-2'>
                  <h3 class="text-xs md:text-xl font-bold text-gray-900">Warehousing Solutions</h3>
                  <p class="text-gray-600 md:mt-2 mt-2 text-xs">Secure, advanced storage facilities with top-notch inventory management.</p>
                </div>
              </div>


              <div class="flex items-start md:mx-10 md:my-10 my-5">
                <img src={X7} class="w-20 h-20 md:mr-4" alt="Supply Chain Management Icon" />
                <div className='mx-2'>
                  <h3 class="text-xs md:text-xl font-bold text-gray-900">Supply Chain Management</h3>
                  <p class="text-gray-600 md:mt-2 mt-2 text-xs">Enhance your operations with our comprehensive supply chain solutions.</p>
                </div>
              </div>


              <div class="flex items-start md:mx-10 md:my-10 my-5">
                <img src={X5} class="w-20 h-20 md:mr-4" alt="Customized Logistics Solutions Icon" />
                <div className='mx-2'>
                  <h3 class="text-xs md:text-xl font-bold text-gray-900">Customized Logistics Solutions</h3>
                  <p class="text-gray-600 md:mt-2 mt-2 text-xs">We deliver tailored logistics services to address your specific needs, ensuring precision.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className='md:mt-20 mt-10 pt-5 bg-[#D7E8FF] md:pt-16'>
        <div className='text-center '>
        <p className='md:text-4xl md:my-2 font-bold'>Our Branches</p>
        <p className='text-xs md:my-2 md:pt-5'>We have a strong network of branches across the country, allowing us to serve you wherever  you are. Find the contact details of our nearest branch below.</p>
        </div>
        <div className='flex mx-2'>
        <div className='md:pt-28 md:pl-16 pt-5'>
        <div>
        <p className='text-[#81B5FA] text-xs md:text-xl md:my-2 my-3'>📍Vapi ( Head Office )</p>
        <p className='md:my-2 md:pl-5 text-xs md:text-[16px] my-2'>Address: Plot no.10, Param Industrial Hub, Karvad  Road, Karvad, Vapi, 396195.</p>
        </div>
        
        <div>
        <p className='text-[#81B5FA] md:my-2 text-xs md:text-xl my-3'>📍Raipur</p>
        <p className='md:my-2 md:pl-5 text-xs md:text-[16px] my-2'>Address: Block No. 7, Parking No. 3, Transport  Nagar, Rawabhata, Raipur ( C.G.) – 493221.</p>
        </div>
        
        <div>
        <p className='text-[#81B5FA] md:my-2 text-xs md:text-xl my-3'>📍Pune</p>
        <p className='md:pl-5 pb-10 md:pb-40 text-xs md:text-[16px] my-2'>Address: Shop No. 2, Gate no. 57, Dehu-Alandi  Road, Opp. Gulmohar Compound, Talawade, <br /> Pune ( MH ) – 411062</p>
        </div>
        </div>
        <div className='pt-5 md:absolute md:pl-96 '>
        <div className='md:pl-96' >
        <img className='h-[250px] w-[300px] md:h-[450px] md:w-[600px]' src={Truck} alt="" />
        </div>
        </div>
        </div>
        </div>
        
        <div>
        <div className='text-center pt-16'>
        <p className='md:text-4xl text-2xl font-bold'>Our Trusted Clients</p>
        <p className='text-xs pt-2'>We are honored to have partnered with a diverse range of clients from various industries. Here are some of the logos and testimonials from those who trust us with their logistics needs.</p>
        </div>
        <div className='grid grid-cols-2 md:flex justify-between mx-2 md:mx-5 gap-3 md:gap-5 pt-10'>
        <div className='bg-[#E4EFFF] border-2 border-[#6695db] rounded-lg p-2'>
        <img src={Dummy} alt="" />
        <p className='text-[#81B5FA]'>Martin Goutry</p>
        <p className='text-[10px] py-2 font-semibold'>John Smith, CEO of Tech Innovations</p>
        <p className='text-[10px] pb-2'>"Abhay Road Carrier has been an invaluable partner in managing our logistics. Their reliability and timely deliveries.”</p>
        </div>
        <div className='bg-[#E4EFFF] border-2 border-[#6695db] rounded-lg p-2'>
        <img src={Dummy} alt="" />
        <p className='text-[#81B5FA]'>Martin Goutry</p>
        <p className='text-[10px] py-2 font-semibold'>John Smith, CEO of Tech Innovations</p>
        <p className='text-[10px] pb-2'>"Abhay Road Carrier has been an invaluable partner in managing our logistics. Their reliability and timely deliveries.”</p>
        </div>
        <div className='bg-[#E4EFFF] border-2 border-[#6695db] rounded-lg p-2'>
        <img src={Dummy} alt="" />
        <p className='text-[#81B5FA]'>Martin Goutry</p>
        <p className='text-[10px] py-2 font-semibold'>John Smith, CEO of Tech Innovations</p>
        <p className='text-[10px] pb-2 '>"Abhay Road Carrier has been an invaluable partner in managing our logistics. Their reliability and timely deliveries.”</p>
        </div>
        <div className='md:hidden bg-[#E4EFFF] border-2 border-[#6695db] rounded-lg p-2'>
        <img src={Dummy} alt="" />
        <p className='text-[#81B5FA]'>Martin Goutry</p>
        <p className='text-[10px] py-2 font-semibold '>John Smith, CEO of Tech Innovations</p>
        <p className='text-[10px] pb-2'>"Abhay Road Carrier has been an invaluable partner in managing our logistics. Their reliability and timely deliveries.”</p>
        </div>
        </div>
        </div>
        
        <div className='bg-[#D7E8FF] rounded-lg md:mx-10 md:mt-20 mt-20'>
        <div className='text-center md:pt-5 '>
        <p className='md:text-4xl text-xl font-bold md:my-2 my-2 pt-4'>Connect with Us</p>
        <p className='text-[10px] md:my-2 my-2 pt-2 mx-4'>We're here to assist with all your logistics needs. Fill out the form below, and our team will get  back to you promptly to address your inquiries and provide the support you need.</p>
        </div>
        <div className='flex justify-between md:mx-10 md:pt-20 pt-5'>
        <div className='pl-20'>
        <p className='md:my-2 my-2 '>Full Name *</p>
        <input className='bg-white md:w-96 p-1 rounded-lg w-72' type="text" />
        <p className='md:my-2 my-2'>Enquiry Services</p>
        <input className='bg-white md:w-96 p-1 rounded-lg w-72' type="text" />
        <p className='md:my-2 my-2'>Email *</p>
        <input className='bg-white md:w-96 p-1 rounded-lg w-72' type="text" />
        <p className='md:my-2 my-2'>Phone Number (Optional)</p>
        <input className='bg-white md:w-96 p-1 rounded-lg w-72' type="text" />
        <p className='md:my-2 my-2'>Message *</p>
        <input className='bg-white md:w-96 p-1 rounded-lg w-72' type="text" />
        <div className='md:pt-10 pt-8 pb-7'>
        <button className='bg-[#81B5FA] text-white border-2 border-b-black py-2 px-4 rounded-lg hover:bg-blue-500 '>Send Message →</button>
        </div>
        </div>
        <div>
        <img className='h-[500px] w-[500px] hidden md:block' src={Factory} alt="" />
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
        <div className='flex justify-between mx-5'>
        
        <div className=' md:mx-4 md:mt-10 mt-10'>
        <div className='flex gap-4 md:mx-10'>
      <img className='h-8' src={Logo} alt="" />
      <p className='md:pt-1  font-semibold '>ArcVapi.</p>
      </div>
      <p className='md:mx-10 py-2 md:pt-2 md:my-1 text-xs mx-1'>Efficient Solutions for All Your Transportation Needs.</p>
     
      </div>
      <div className='flex md:gap-10 gap-4  md:mx-16 mt-10 '>
      <div className=''>
      <p className='md:my-1 my-2 text-xs'>Tools</p>
      <p className='md:my-1 my-2 text-xs'>About Us</p>
      <p className='md:my-1 my-2 text-xs'>Contact</p>
      </div>
      <div>
      <p className='md:my-1 my-2 text-xs'>Privacy Policies</p>
      <p className='md:my-1 my-4 text-xs'>Terms of service</p>
      </div>
      </div>
      </div>
      
      <div className='md:mx-20 md:pt-16 pt-10 mx-5'>
      <img src={Text} alt="" />
      </div>

      </div>
    )
  }
}
