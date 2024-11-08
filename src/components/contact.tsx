"use client"

import React from "react"
import { motion } from "framer-motion"
import SectionHeading from "./section-heading"
import { useSectionInView } from "@/lib/useinView"
import SubmitBtn from "./submit-btn"
import { Fade } from "react-awesome-reveal"
import { sendEmail } from "@/app/actions"
import { Toaster, toast } from "react-hot-toast"
import { CheckCircle } from "lucide-react"

export default function Contact() {
  const { ref } = useSectionInView("#contact")

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
    >
      <Toaster position="top-center" reverseOrder={false} />
      <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce={true}>
        <SectionHeading>Contact Me</SectionHeading>
      </Fade>

      <Fade direction="up" delay={600} cascade damping={1e-1}>
        <p className="text-gray-700 -mt-6 dark:text-white/80">
          Feel free to contact me directly through this form
        </p>
      </Fade>

      <Fade direction="up" delay={800} cascade damping={1e-1}>
        <form
          className="mt-10 flex flex-col dark:text-black"
          action={async (formData) => {
            const { error } = await sendEmail(formData)

            if (error) {
              toast.error(error)
              return
            }

            toast.custom((t) => (
              <div
                className={`${
                  t.visible ? 'animate-enter' : 'animate-leave'
                } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
              >
                <div className="flex-1 w-0 p-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 pt-0.5">
                      <CheckCircle className="h-10 w-10 text-green-500" />
                    </div>
                    <div className="ml-3 flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        Message Sent Successfully!
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        Thank you for reaching out. I'll get back to you soon.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex border-l border-gray-200">
                  <button
                    onClick={() => toast.dismiss(t.id)}
                    className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    Close
                  </button>
                </div>
              </div>
            ), {
              duration: 5000,
            })
          }}
        >
          <input
            className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="Your email"
            aria-label="Your email address"
          />
          <textarea
            className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            name="message"
            placeholder="Your message"
            required
            maxLength={5000}
            aria-label="Your message"
          />
          <SubmitBtn text="Send" />
        </form>
      </Fade>
    </motion.section>
  )
}