// import React from 'react'
import { FaUserGraduate } from "react-icons/fa";

const About = () => {
  return (
    <div>
        <div className="container w-[100%] mx-auto text-center mb-[3rem]">
              <h3 className="mb-2 text-blue font-semibold mt-[7rem] ">WHAT WE DO</h3>
              <h2 className="text-[1.9rem] px-4 sm:px-0 sm:text-[2.5rem] font-semibold mb-8">Online Education Tailored to You</h2>

            <div className="sm:flex  gap-5">
                <div className="h-[17.5rem] w-[23rem] mx-auto sm:mx-0 border-2 rounded-lg px-[1.2rem] pt-4 mb-5">
                      <FaUserGraduate className="w-[5rem] h-[5rem] p-4 text-white mt-3 mx-auto mb-6 bg-blue rounded-full"/>
                    <h2 className="font-semibold text-lg pb-4">Learn From Anywhere</h2>
                    <p>Competently unleash competitive initiatives for alternative interfaces. Enthusiastically supply resource eveling platforms</p>
                </div>
                <div className="h-[17.5rem] w-[23rem] border-2 mx-auto sm:mx-0 rounded-lg px-[1.2rem] pt-4 mb-5">
                      <FaUserGraduate className="w-[5rem] h-[5rem] p-4 text-white mt-3 mx-auto mb-6 bg-blue rounded-full"/>
                    <h2 className="font-semibold text-lg pb-4">Learn From Anywhere</h2>
                    <p>Competently unleash competitive initiatives for alternative interfaces. Enthusiastically supply resource eveling platforms</p>
                </div>
                <div className="h-[17.5rem] w-[23rem] border-2 mx-auto sm:mx-0 rounded-lg px-[1.2rem] pt-4 mb-5">
                      <FaUserGraduate className="w-[5rem] h-[5rem] p-4 text-white mt-3 mx-auto mb-6 bg-blue rounded-full"/>
                    <h2 className="font-semibold text-lg pb-4">Learn From Anywhere</h2>
                    <p>Competently unleash competitive initiatives for alternative interfaces. Enthusiastically supply resource eveling platforms</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default About