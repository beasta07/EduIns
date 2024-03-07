// import React from 'react'

const CourseCategory = () => {
  return (
    <div>
        <div className="container w-[100%] mx-auto my-[5rem] text-center sm:text-left">
            <div className="sm:flex">
                <div className="">
                      <h2 className="mb-3 text-blue font-semibold">COURSES CATEGORIES</h2>
                    <h3 className="text-[1.7rem] sm:text-[2.3rem] font-semibold">Explore Top Categories</h3>
                    <button className="my-5 mt-5 py-3 w-[12rem] rounded-md bg-blue text-white text-sm font-medium">VIEW ALL CATEGORY</button>
                </div>
                <div>
                      <hr className="h-px  border-0 w-[99%] mx-auto dark:bg-gray-300" />
                    <div className="sm:flex gap-4 mt-9">
                        <div className="w-[90%] mx-auto sm:mx-0 sm:w-[12rem] h-[13rem] sm:h-[11.5rem] border-2 rounded-md border-gray-200 text-center">
                            <img src="/images/UIux.svg" className="w-[3rem] mx-auto my-5 sm:my-4"/>
                            <h3 className="font-semibold">UI/UX Design</h3>
                            <p>36+ Courses</p>
                            <button className="py-3 sm:py-1 w-[80%] bg-blue text-white rounded-md my-3 text-sm">LEARN MORE</button>
                        </div>
                        <div className="hidden sm:block w-[12rem] h-[11.5rem] border-2 rounded-md border-gray-200 text-center">
                            <img src="/images/UIux.svg" className="w-[3rem] mx-auto my-4"/>
                            <h3 className="font-semibold">UI/UX Design</h3>
                            <p>36+ Courses</p>
                            <button className="py-1 w-[80%] bg-blue text-white rounded-md my-3 text-sm">LEARN MORE</button>
                        </div>
                        <div className="hidden sm:block w-[12rem] h-[11.5rem] border-2 rounded-md border-gray-200 text-center">
                            <img src="/images/UIux.svg" className="w-[3rem] mx-auto my-4"/>
                            <h3 className="font-semibold">UI/UX Design</h3>
                            <p>36+ Courses</p>
                            <button className="py-1 w-[80%] bg-blue text-white rounded-md my-3 text-sm">LEARN MORE</button>
                        </div>
                        <div className="hidden sm:block w-[12rem] h-[11.5rem] border-2 rounded-md border-gray-200 text-center">
                            <img src="/images/UIux.svg" className="w-[3rem] mx-auto my-4"/>
                            <h3 className="font-semibold">UI/UX Design</h3>
                            <p>36+ Courses</p>
                            <button className="py-1 w-[80%] bg-blue text-white rounded-md my-3 text-sm">LEARN MORE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CourseCategory