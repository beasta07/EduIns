// import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaRegUser } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div>
          <div className="sm:bg-[#0E2238] sm:w-[100%]">
              <div className="w-[100%] sm:w-[76%] sm:flex bg-blue py-2 text-white sm:rounded-br-full">
                  <div className="flex justify-center gap-[26.5rem] ">
                      <div className="hidden sm:flex gap-9 pl-[11.5rem]">
                          <div className="flex">
                              <FiPhone className="mt-1 mx-2" />
                              <p className="">+111 (564) 568 25</p>
                          </div>
                          <div className="flex">
                              <MdOutlineEmail className="mt-1 mx-2" />
                              <p>info@eduins.com</p>
                          </div>
                      </div>

                      <div className="flex gap-4">
                          <p>Follow Us:</p>
                          <a className="pt-1"><FaFacebookF /></a>
                          <a className="pt-1"><FaTwitter /></a>
                          <a className="pt-1"><FaLinkedinIn /></a>
                      </div>
                  </div>
                
                  <div className="flex sm:-mr-[10rem] ml-[6rem] sm:ml-[0rem] mt-2 sm:mt-0">
                      <FaRegUser className="mt-[2px] sm:ml-14 mx-3" />
                      <p className="">Login / Register</p>
                  </div>
              </div>
          </div>
          <Navbar />
    </div>
  )
}

export default Header