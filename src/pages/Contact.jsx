// import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { IoTimeOutline } from "react-icons/io5";

const Contact = () => {
    return (
        <div className="container w-[100%] mx-auto">
            <div className="px-5 sm:px-0 sm:flex gap-4">
                <div>
                    <h2 className="text-[1.7rem] font-semibold mb-4 mt-[2.6rem]">Have Any Questions?</h2>
                    <p className="w-[90%] sm:w-[84%] pb-[2rem]">Have a inquiry or some feedback for us? Fill out the form below to contact our team.</p>

                    <div className="flex border-2 rounded-lg py-4 px-4 mb-5">
                        <div>
                        <i><IoLocationOutline  className="h-[4rem] mt-1 w-[4rem] bg-[#EFF4FF] text-blue rounded-md p-5"/></i>
                        </div>
                        <div className="px-4">
                            <h3 className="font-semibold pb-1">Our Address</h3>
                            <p className="sm:w-[71%] text-sm">2013 Hiltona Street Victoria Rode, New York, US</p>
                        </div>
                    </div>
                    <div className="flex border-2 rounded-lg py-4 px-4 mb-5">
                        <div>
                        <i><BsTelephone  className="h-[4rem] mt-1 w-[4rem] bg-[#EFF4FF] text-blue rounded-md p-5"/></i>
                        </div>
                        <div className="px-4">
                            <h3 className="font-semibold pb-1">Phone Number</h3>
                            <p className="w-[71%] text-sm">(+65)-45236-5196 (+65)-45236-5196</p>
                        </div>
                    </div>
                    <div className="flex border-2 rounded-lg py-4 px-4 ">
                        <div>
                        <i><IoTimeOutline  className="h-[4rem] mt-1 w-[4rem] bg-[#EFF4FF] text-blue rounded-md p-5"/></i>
                        </div>
                        <div className="px-4">
                            <h3 className="font-semibold pb-1">Hours of Operation</h3>
                            <p className="w-[65%] sm:w-[53%] text-sm ">Mon-Fri: 9:00-20:00 Sun-Sat: 10:00-23:00</p>
                        </div>
                    </div>
                </div>

                <div className="bg-[url('/images/contactBg.png')] sm:bg-contain sm:bg-no-repeat sm:w-[45rem] mt-10 sm:mt-0 p-9 sm:p-12 rounded-xl">
                    <h3 className="mb-2 text-blue font-semibold">CONTACT WITH US!</h3>
                    <h2 className="text-[2.3rem] font-semibold">Get in Touch</h2>
                    <p className="pb-5 text-gray-500">Lorem ipsum dolor sit amet adipiscing elit, sed do eiusmod tempor eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="sm:flex gap-5 pb-5 ">
                        <input type="text" placeholder="Your Name" className="py-3 w-[100%] rounded-md px-3 mb-5 sm:mb-0"/>
                        <input type="text" placeholder="Your Email" className="py-3 w-[100%] rounded-md px-3"/>
                    </div>
                    <div className="sm:flex gap-5 pb-5 ">
                        <input type="text" placeholder="Your Name" className="py-3 w-[100%] rounded-md px-3 mb-5 sm:mb-0"/>
                        <input type="text" placeholder="Your Email" className="py-3 w-[100%] rounded-md px-3"/>
                    </div>
                    <div className="">
                        <textarea type="text" placeholder="Your Name" className="py-3 w-[100%] rounded-md px-3 mb-5 h-[7rem]"/>
                    </div>
                    <button className="py-3 w-[9rem] bg-blue text-white rounded-md text-sm">SEND MESSAGE</button>
                </div>

            </div>
        </div>
    )
}

export default Contact