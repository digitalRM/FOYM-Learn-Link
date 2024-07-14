import React from 'react'
import { StudentChart } from '../ui/1 - studentChart'

export default function OurVolunteers() {
  return (
    <div className="relative overflow-hidden bg-white text-white w-full pb-14">
      <div className=" flex flex-col-reverse mx-auto max-w-[1140px] px-6 py-20 lg:py-32 lg:px-8 relative lg:grid lg:grid-cols-2 gap-12 -mb-12">
        <div className='relative p-4 lg:p-0 lg:mr-4'>
          <img src="https://images.unsplash.com/photo-1584697964358-3e14ca57658b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Unsplash image by Annie Spratt | A student siting in front of a laptop, excited about learning" className="mt-6 rounded-2xl lg:-rotate-6 hidden lg:flex lg:absolute lg:opacity-20" />
          <img src="https://images.unsplash.com/photo-1584697964358-3e14ca57658b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Unsplash image by Annie Spratt | A student siting in front of a laptop, excited about learning" className="mt-6 rounded-2xl lg:absolute" />
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-xl lg:text-2xl xl:text-3xl text-indigo-900 font-bold tracking-tighter">Our Volunteers Make a Difference.</h2>
            <p className="text-lg mt-4 tracking-tight text-neutral-800">Our volunteers are the backbone of our organization. They are the ones that make it possible for us to provide free tutoring services to students that need it the most.</p>
            <p className="text-lg mt-4 tracking-tight text-neutral-800">They are highly skilled and have received training to help them become effective tutors. They are passionate, smart, and dedicated individuals that want to make a difference in the lives of students.</p>
            <p className="text-lg mt-4 tracking-tight text-neutral-800">If you are interested in becoming a volunteer, we would love to have you join our amazing community. Together, we can make a difference in the lives of students and help them succeed in their academic careers and beyond.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
