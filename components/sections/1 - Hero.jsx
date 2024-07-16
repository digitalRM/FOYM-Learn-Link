'use client'
import React, { useRef } from 'react'
import { Button } from '../ui/button'
import Header from '../ui/1 - header'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll(targetRef);

  const scale = useTransform(scrollYProgress, [0, 1], [0, 1000]);
  
  return (
    <div className="relative overflow-hidden">
      <div className="mx-auto h-[1020px] overflow-hidden p-4 md:px-6 pt-6 lg:pt-14 lg:px-8 py-32 relative">
        <Header />
        <div className="grid lg:grid-cols-2 gap-8 lg:justify-between mt-36 lg:mt-56 z-10 relative max-w-[1040px] mx-auto w-full">
          <div className="flex flex-col justify-start items-start">
            <div className="flex flex-col gap-2 sm:flex-row lg:gap-0 lg:flex-col justify-start items-start">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-black tracking-tighter text-center">Free Tutoring</h1>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-black tracking-tighter text-center"><span className="text-indigo-700">for All Students.</span></h1> 
            </div>
           <p className="text-lg lg:max-w-[600px] text-neutral-600 text-left mt-6">We provide free tutoring services to students that want to excel in their academics. Our tutors are experienced and have a passion for helping students succeed!</p>
            <div className="flex gap-4 mt-6 justify-start flex-col md:flex-row w-full">
              <Button className="w-full lg:w-36 bg-indigo-700 hover:bg-indigo-600">Sign Up</Button>
              <Button variant="outline" className="w-full lg:w-36">Volunteer</Button>
            </div>
          </div>
          <div className='sm:w-[570px] mt-12 h-full relative sm:mx-auto'>
            <div className="ml-auto w-44 absolute lg:-rotate-6 translate-y-12">
              <motion.div className="relative" style={{ translateY: scale }} >
                <div className="aspect-[2/3] w-full rounded-xl rounded-l-none bg-indigo-800 object-cover shadow-lg overflow-hidden relative">
                  <div className=" absolute h-full w-9 bg-indigo-950 left-0 top-0" />
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </motion.div>
            </div>
            <div className="ml-auto w-44 absolute translate-x-48">
              <motion.div className="relative" style={{ translateY: scale }}>
                <div className="aspect-[2/3] w-full rounded-xl rounded-l-none bg-red-800 object-cover shadow-lg overflow-hidden relative">
                  <div className=" absolute h-full w-9 bg-red-950 left-0 top-0" />
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </motion.div>
            </div>
            <div className="ml-auto w-44 absolute lg:rotate-6 -translate-y-12 translate-x-96">
              <motion.div className="relative" style={{ translateY: scale }}>
                <div className="aspect-[2/3] w-full rounded-xl rounded-l-none bg-green-800 object-cover shadow-lg overflow-hidden relative">
                  <div className=" absolute h-full w-9 bg-green-950 left-0 top-0" />
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
