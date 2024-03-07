// import React from 'react'

const Login = () => {
    return (
        <div>
            {/* <div className="container w-[100%] mx-auto">
                <div className="bg-[url('/images/contactBg.png')] bg-contain w-[25rem] h-[25rem] p-12 rounded-xl">
                    <h3 className="mb-2 text-blue font-semibold">CONTACT WITH US!</h3>
                    <h2 className="text-[2.3rem] font-semibold pb-5">Sign In</h2>
                    <p className="pb-5 text-gray-500">Lorem ipsum dolor sit amet adipiscing elit, sed do eiusmod tempor eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="flex gap-5 pb-5 ">
                        <input type="text" placeholder="Your Name" className="py-3 px-5 w-[17rem] rounded-md " />
                        <input type="text" placeholder="Your Email" className="py-3 px-5 w-[100%] h-14 rounded-md " />
                    </div>
                    <div className="flex gap-5 pb-5 ">
                        <input type="text" placeholder="Your Name" className="py-3 px-5 w-[100%] h-14 rounded-md " />
                        <input type="text" placeholder="Your Email" className="py-3 px-5 w-[17rem] rounded-md " />
                    </div>
                        <input type="text" placeholder="Your Name" className="py-3 w-[100%] rounded-md px-3 mb-5" />

                    <button className="py-3 w-[9rem] bg-blue text-white rounded-md text-sm">Login In</button>
                </div>
            </div> */}

            <div className="sm:flex container w-[90%] sm:w-[95%] mx-auto my-[4rem]">
                <div className="py-5 bg-[url('/images/contactBg.png')] bg-contain sm:w-[50%] sm:p-5 px-[2rem] sm:px-[4.5rem] shadow-md rounded-l-xl">
                    <h2 className="text-[1.7rem] font-semibold  mt-[2.5rem] pb-7">Login In</h2>
                    <input type="text" placeholder="Your Name" className="px-4 py-4 mb-4 w-[100%] rounded-lg "/><br />
                    <input type="text" placeholder="Your Email" className="px-4 py-4 mb-4 w-[100%] rounded-lg "/><br />
                    <input type="password" placeholder="Your Password" className="px-4 py-4 mb-4 w-[100%] rounded-lg "/><br />
                    <button className="text-white py-3 px-4 mt-5 bg-blue w-[50%] rounded-lg">Login</button>
                </div>

                <div className="hidden sm:block w-[50%] rounded-r-xl bg-[url('/images/HeroImg.jpg')] border-2 shadow-md text-white text-center mx-auto">
                    <img src="/images/whiteLogo.svg" className="w-[40%] mx-auto mt-[8.5rem]" />
                    <p className="text-sm text-white font-semibold pt-5 w-[70%] mx-auto">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, quidem repudiandae deserunt natus minima optio. Ipsa vitae distinctio perspiciatis nisi.</p>
                </div>
            </div>
        </div>
    )
}

export default Login