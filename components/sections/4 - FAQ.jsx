import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

export default function FAQ() {
  return (
    <div className="relative bg-indigo-900 text-white w-full pb-14">
      <div className="mx-auto max-w-[1140px] px-6 py-20 lg:py-32 lg:px-8 relative grid gap-12 -mb-12">
        <div className="flex flex-col gap-6 w-full">
          <h1 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-bold text-white tracking-tighter text-left">Frequently Asked Questions.</h1>
          <p className="text-lg mt-4 tracking-tight text-neutral-200 text-left max-w-[850px]">Here are some of the most frequently asked questions about our tutoring services. If you have a question that is not answered here, please feel free to reach out to us via the contact form on this website.</p>
          <Accordion type="single" collapsible className="w-full text-left">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left"> How do I sign up for tutoring? </AccordionTrigger>
                <AccordionContent>
                  To sign up for tutoring, you can fill out the contact form on this website! Once you submit the form, one of our team members will reach out to you to schedule a tutoring session. 
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger className="text-left"> How do I become a volunteer? </AccordionTrigger>
                <AccordionContent>
                    To become a volunteer, you can fill out the contact form on this website! Once you submit the form, one of our team members will reach out to you to schedule a first meeting.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left"> How are tutors selected? </AccordionTrigger>
              <AccordionContent>
                Tutors are selected based on their experience and qualifications. We look for tutors that have a passion for helping students succeed and have experience in the subjects they are tutoring. We also run background checks on all of our tutors to ensure the safety of our students.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left"> How much does tutoring cost? </AccordionTrigger>
              <AccordionContent>
                Our tutoring services are completely free! We believe that all students should have access to high-quality tutoring services, regardless of their financial situation. 
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
                <AccordionTrigger className="text-left"> How long are tutoring sessions? </AccordionTrigger>
                <AccordionContent>
                    Tutoring sessions are typically one hour long. However, the length of the session can vary depending on the student's needs and availability. 
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left"> What subjects do you offer tutoring in? </AccordionTrigger>
              <AccordionContent>
                We offer tutoring in a wide range of subjects, including math, science, English, history, and more. If you need help in a specific subject, please let us know, and we will do our best to match you with a tutor that can help. 
              </AccordionContent>
            </AccordionItem>
        </Accordion>
        </div>
      </div>
    </div>
  )
}

