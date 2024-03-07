import { MdOutlineMail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoLogoSkype } from "react-icons/io5";
import LogoWhite from '/images/whiteLogo.svg'

export default function Footer() {
    return (
        <>
            <div className="bg-gradient-to-r from-[#203558] via-[#1A2536] to-[#213556]  pb-5 text-white ">
                <div className="container w-[100%] mx-auto p-5 sm:p-0" >
                    <div className="sm:flex justify-center gap-[11rem] ">
                        <div className='flex'> <div className='w-[4rem]  mt-[1.5rem] h-[4rem] from-[#1E213E] to-[#223455] bg-gradient-to-br border-[1px] rounded-full p-1 '>
                            <IoCallOutline className='w-[3.5rem] h-[3.5rem] p-3' />
                        </div>
                            <div className="p-3 mt-[1.5rem] ">
                                <h1 className="text-[#73839B] text-[0.8rem]">Call us any time:</h1>
                                <p className="text-[1rem] font-bold ">+256 214 203 215</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='w-[4rem]  mt-[1.5rem] h-[4rem] from-[#1E213E] to-[#223455] bg-gradient-to-br border-[1px]  rounded-full p-1'>
                                <MdOutlineMail className='w-[3.5rem] h-[3.5rem] p-3' />
                            </div>
                            <div className="p-3 mt-[1.5rem]">
                                <h1 className="text-[#73839B] text-[0.8rem]">Email us any time:</h1>
                                <p className="text-[1rem] font-bold">info@edura.com</p>
                            </div></div>
                        <div className='flex'>
                            <div className='w-[4rem]  mt-[1.5rem] h-[4rem] from-[#1E213E] to-[#223455] bg-gradient-to-br border-[1px] rounded-full p-1'>
                                <IoLocationOutline className='w-[3.5rem] h-[3.5rem] p-3' />
                            </div>
                            <div className="p-3 mt-[1.5rem]">
                                <h1 className="text-[#73839B] text-[0.8rem]">Our Location</h1>
                                <p className="text-[1rem] font-bold">147/I, Green Road, Dhaka</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-opacity-20   from-[#203558] via-[#1A2536] to-[#213556]  border-2 border-opacity-30 border-white rounded-lg shadow-lg  mt-[1rem] w-[95%] mx-auto sm:px-0 px-5">

                    <div className="container w-[100%] mx-auto sm:flex  mt-[2rem] justify-center gap-[9rem]" >

                        <div className="w-[40%]">
                            <img src={LogoWhite} className="pt-4 sm:pt-0 sm:w-[8rem] text-[white]" />
                            <p className="w-[19rem] sm:w-[15rem] py-[1rem] text-[#7D8B9F]">Continually optimize backward manufactured products whereas communities negotiate life </p>
                            <p className="text-[1rem] font-bold ">FOLLOW US ON:</p>
                            <div className="flex gap-5 sm:mt-4 mt-2 " >
                                <i><FaFacebook className="text-[1.5rem] my-3 sm:my-0"/></i>
                                <i><FaSquareXTwitter className="text-[1.5rem] my-3 sm:my-0"/></i>
                                <i><FaLinkedin className="text-[1.5rem] my-3 sm:my-0"/></i>
                                <i><FaYoutube className="text-[1.5rem] my-3 sm:my-0"/></i>
                                <i><IoLogoSkype className="text-[1.5rem] my-3 sm:my-0"/></i>
                            </div>
                        </div>


                        <div>
                            <h1 className="font-bold text-[1.25rem] w-[12rem] sm:mt-[0rem] mt-[1.5rem]">Quick Links</h1>
                            <ul className="text-[1rem] py-[1.1rem] pl-4 text-[#98A6B8] list-disc leading-[2rem] 
                                ">
                                <li>Development</li>
                                <li>Marketing</li>
                                <li>Data Science</li>
                                <li>Business</li>
                                <li>Design</li>
                                <li>Photography</li>
                            </ul>
                        </div>

                        <div>
                            <h1 className="font-bold text-[1.25rem]">Resources</h1>
                            <ul className="text-[1rem] py-[1.1rem] pl-4 text-[#98A6B8] list-disc leading-[2rem]
                                ">
                                <li>Community</li>
                                <li>Support</li>
                                <li>Video Guides</li>
                                <li>Documentation</li>
                                <li>Security</li>
                                <li>Template</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className="font-bold text-[1.25rem] pb-3 pt-4 sm:pt-0">Get in Touch</h1>
                            <p className="text-[1rem] py-[0rem]  text-[#98A6B8] w-[100%] pb-3">Subscribe our newsletter to get our latest Update & news</p>
                            <form>
                                <input type="email" value='Enter your Email' className="bg-transparent border-2 border-gray-500 p-3 w-[100%] rounded-lg"></input>
                            </form>
                            <button className="sm:w-[8.5rem] py-3 px-9 bg-blue text-white rounded-md mb-[4rem] mt-[1rem]">Subscribe</button>

                        </div>

                    </div>
                    <hr className="h-px bg-gray-200 border-0 w-[84%] mx-auto dark:bg-gray-700" />                   
                        <p className=" container w-[100%] mx-auto mt-5 text-[#A3B1C3] text-[0.9rem] py-5">
                            Copyright © 2023 <spam className='text-blue'>Edura</spam> All Rights Reserved.
                        </p>



                </div>

            </div>

        </>
    )
}