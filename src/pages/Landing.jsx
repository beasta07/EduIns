// import React from 'react'

import CourseCategory from "../components/CourseCategory"
import Instructor from "../components/Instructor"
import Partners from "../components/Partners"

const Landing = () => {
  return (
    <div>
          <div className="bg-[url('/images/HeroImg.jpg')] bg-blur-sm w-[100%] h-[35rem] sm:h-[40rem] text-white bg-cover">
              <div className="flex container mx-auto">
                  <div className=" px-5 w-[100%]">
                      <h3 className=" font-semibold mt-[8rem] sm:mt-[10rem] mb-[1.2rem]"><span className="p-1 px-3 bg-blue text-white rounded-full mr-4">35% OFF</span> LEARN FROM TODAY</h3>
                    <h1 className="text-[2.2rem] sm:text-[3rem] font-bold">Education Is Created <br /> For Better <span className="text-blue">Future.</span></h1>
                    <p className="pb-4 pt-3">Education can be throught of as the transmission of the values and accumulated knowlwdge of a society. In this sense, it is equivalent.</p>
                    <button className="mt-3 py-3 w-[9rem] bg-blue rounded-md">Get Stared</button>
                </div>
                <div className="hidden sm:block">
                      <img src="/images/Heroc.jpg" className="mt-[4rem] w-[55rem] " />
                </div>
              </div>
        </div>
        <CourseCategory />
        <Instructor />
        <Partners />
    </div>
  )
}

export default Landing