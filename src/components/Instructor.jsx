// import React from 'react'

const  Instructor = () => {
  return (
    <div>
        <div className="sm:flex container w-[100%] mx-auto pt-[0rem] sm:pt-[2rem] pb-[7rem]">
            <div className="px-4 sm:px-0">
                  <h3 className="mb-2 text-blue font-semibold mt-[5rem] p">OUR INSTRUCTOR</h3>
                  <h2 className="text-[1.7rem] sm:text-[2.5rem] font-semibold mb-2">Meet Our Export Instructor</h2>
                  <p className="w-[90%] sm:text-sm text-gray-500">Graduates of XYZ University have achieved remarkable success in their chosen fields, with many going on to pursue advanced degrees, secure fulfilling careers, and make valuable contributions to their communities.</p>
                  <p className="w-[90%] sm:text-sm text-gray-500 pt-5 pb-5">The university takes pride in its alumni network, which serves as a testament to the quality of education and the opportunities provided by the institution.</p>
                  <div className="sm:flex gap-4">
                    <div>
                        <button className="py-4 sm:py-3 w-[12rem] bg-blue rounded text-sm text-white ">EXPLORE COURSES</button>
                    </div>
                    <div>
                          <button className="py-4 sm:py-3 w-[9rem] bg-[#F30E10] rounded text-sm text-white my-6 sm:my-0">CONTACT US</button>
                    </div>
                  </div>
            </div>
            <div className="px-4 mt-5 sm:mt-0 sm:px-0 grid grid-cols-2 gap-4">
                <img src="/images/Instructor/instructor1.png" className="rounded-lg w-[40rem]"/>
                <img src="/images/Instructor/instructor2.png" className="rounded-lg w-[40rem]"/>
                <img src="/images/Instructor/instructor3.png" className="rounded-lg w-[40rem]"/>
                <img src="/images/Instructor/instructor4.png" className="rounded-lg w-[40rem]"/>
            </div>
        </div>
    </div>
  )
}

export default Instructor