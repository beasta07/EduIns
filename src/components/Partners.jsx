// import React from 'react'

const Partners = () => {
    return (
        <div>
            <div className="sm:flex container w-[100%] mx-auto pb-[5rem]">
                <div className="sm:text-left text-center">
                    <h3 className="mb-2 text-blue font-semibold  sm:mt-[7rem] ">OUR TRUSTED PARTNERS</h3>
                    <h2 className="text-[1.8rem] sm:text-[2.5rem] font-semibold sm:mb-2 w-[90%] mx-auto sm:mx-0">We Have More Than <span className="text-blue">4263+</span> Global Partners</h2>
                </div>

                <div className="px-6 sm:px-0 grid grid-cols-4 gap-y-5 sm:gap-y-0 gap-x-12 pt-[3rem] sm:pt-[6.5rem]">
                    <img src="/images/Partners/partners1.png" />
                    <img src="/images/Partners/partners2.png" />
                    <img src="/images/Partners/partners1.png" />
                    <img src="/images/Partners/partners2.png" />
                    <img src="/images/Partners/partners1.png" />
                    <img src="/images/Partners/partners2.png" />
                    <img src="/images/Partners/partners1.png" />
                    <img src="/images/Partners/partners2.png" />
                </div>
            </div>

            <div className="container w-[100%] mx-auto sm:flex sm:px-0 px-3 gap-4">
                <div className="bg-[url('/images/Partners/pat1.png')] text-white bg-cover rounded-xl w-[100%] h-[12rem] sm:h-[16rem] mb-5 pl-10 pt-6">
                    <h3 className="mb-2  font-semibold sm:mt-[1rem]">POPULAR COURSE</h3>
                    <h2 className="w-[62%] sm:w-[70%] text-[1.2rem] sm:text-2xl font-bold">Get The Best Courses & Upgrade Your Skills</h2>
                    <button className="py-3 w-[9rem] bg-white text-tblack text-sm font-semibold rounded-md mt-4 sm:mt-[2rem]">JOIN WITH US</button>
                </div>

                <div className="bg-[url('/images/Partners/pat2.png')] text-white bg-cover rounded-xl w-[100%] h-[12rem] sm:h-[16rem] mb-5 pl-10 pt-6">
                    <h3 className="mb-2  font-semibold sm:mt-[1rem]">POPULAR COURSE</h3>
                    <h2 className="w-[64%] sm:w-[70%] text-[1.2rem] sm:text-2xl font-bold">Engaging Courses for Intellectual Exploration</h2>
                    <button className="py-3 w-[11rem] bg-white text-tblack text-sm font-semibold rounded-md mt-4 sm:mt-[2rem]">EXPLORE COURSES</button>
                </div>

            </div>

        </div>
    )
}

export default Partners