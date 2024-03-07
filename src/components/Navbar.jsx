// import React from 'react'
import { IoMenu } from "react-icons/io5";
import Logo from '../assets/logo.svg'
const Navbar = () => {
    return (
        <div>
            <div>

                <navbar>
                    <div className="sm:bg-blue container">
                        <div className=" bg-white sm:rounded-tl-full sm:w-[103%] overflow-hidden pt-3 sm:py-5 sm:ml-[11rem]">
                            <div>
                                <div className="flex sm:justify-between gap-6 sm:gap-[9rem]">
                                    <div className="px-4 sm:px-7 sm:ml-3 py-3 sm:py-0">
                                        <img src={Logo} className=" pb-3 sm:pb-0 sm:w-[80%]" />
                                    </div>
                                    <div className="sm:flex">
                                        <ul className="hidden sm:flex gap-8 pt-2 pr-10">
                                            <li>Home</li>
                                            <li>About</li>
                                            <li>Course</li>
                                            <li>Teacher</li>
                                            <li>Event</li>
                                            <li>Blog</li>
                                            <li>Contact</li>
                                        </ul>
                                        <button className="sm:px-8 sm:py-2 sm:bg-blue text-white rounded-md">Contact Us</button>
                                    </div>
                                    <div>
                                        <i><IoMenu className="w-9 h-9 p-1 mt-3 text-white bg-blue rounded"/></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </navbar>

            </div>
        </div>
    )
}

export default Navbar