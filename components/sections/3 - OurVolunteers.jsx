import React from 'react'
import { StudentChart } from '../ui/1 - studentChart'

export default function OurVolunteers() {
  return (
    <div className="relative overflow-hidden bg-white text-white w-full pb-14">
      <div className="mx-auto max-w-[1140px] px-6 py-20 lg:py-32 lg:px-8 relative grid lg:grid-cols-2 gap-12 -mb-12">
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-xl lg:text-2xl xl:text-3xl text-indigo-900 font-bold tracking-tighter">Our Students Succeed.</h2>
            <p className="text-lg mt-4 tracking-tight text-neutral-800">The students we mentor and tutor have seen a significant increase in their grades and overall academic performance. We are proud to have helped over 550 students succeed in their academic careers.</p> 
            <p className="text-lg mt-4 tracking-tight text-neutral-800">These students have gone on to attend prestigious universities and have received scholarships to help them achieve their dreams. We are proud to have helped them along the way.</p>
            <p className="text-lg mt-4 tracking-tight text-neutral-800">If you are a student that needs help or a volunteer that wants to give back, we would love to have you join our amazing community.</p>
          </div>
          
        </div>

        <div className='relative'>
          <StudentChart className="lg:absolute z-10 lg:ml-14 scale-105" />
          <StudentChart className="absolute translate-x-12 opacity-80  rotate-3 hidden lg:block " />
        </div>
      </div>
    </div>
  )
}
