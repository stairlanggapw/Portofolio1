import React, { useState } from 'react'
import assets from '../assets/assets'

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div id="contact" className="flex flex-col items-center gap-7 py-20 px-4">

      <div className="flex flex-col items-center text-center">
        <h1 className="font-['Bebas_Neue'] text-5xl text-dark">
          Get In <span className="text-primary">Touch</span>
        </h1>
        <p className="font-['Manrope'] text-gray-500 text-sm mt-2">
          Let's discuss your project
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-10 w-full max-w-6xl">

        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={assets.personCalling}
            alt="contact"
            className="w-[980px] max-w-none object-contain"
          />
        </div>

        <div className="w-full lg:w-1/2 bg-white rounded-2xl shadow-md p-6 flex flex-col gap-4">

          <div className="flex gap-3">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="font-['Manrope'] w-1/2 bg-gray-100 rounded-lg px-4 py-3 text-sm text-dark placeholder-gray-400 outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="font-['Manrope'] w-1/2 bg-gray-100 rounded-lg px-4 py-3 text-sm text-dark placeholder-gray-400 outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="font-['Manrope'] w-full bg-gray-100 rounded-lg px-4 py-3 text-sm text-dark placeholder-gray-400 outline-none focus:ring-2 focus:ring-primary"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="font-['Manrope'] w-full bg-gray-100 rounded-lg px-4 py-3 text-sm text-dark placeholder-gray-400 outline-none focus:ring-2 focus:ring-primary"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="font-['Manrope'] w-full bg-gray-100 rounded-lg px-4 py-3 text-sm text-dark placeholder-gray-400 outline-none focus:ring-2 focus:ring-primary resize-none"
          />

          <button
            onClick={handleSubmit}
            className="font-['Manrope'] w-full bg-primary text-dark font-semibold text-sm py-3 rounded-lg hover:opacity-90 hover:scale-[1.02] transition-all duration-300"
          >
            Send Message
          </button>

        </div>
      </div>

    </div>
  )
}

export default Contact