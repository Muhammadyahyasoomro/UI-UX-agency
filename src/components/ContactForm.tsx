import type React from "react"

import { useState } from "react"
import { toast, Toaster } from "react-hot-toast"
import { Mail, Linkedin, ExternalLink } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    services: {
      websiteDesign: false,
      appDesign: false,
      uxDesign: false,
      brandingDesign: false,
      userResearch: false,
      other: false,
    },
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      services: {
        ...prev.services,
        [name]: checked,
      },
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Get selected services
    const selectedServices = Object.entries(formData.services)
      .filter(([_, isSelected]) => isSelected)
      .map(([service]) => service)

    // Prepare form data for submission
    const dataToSubmit = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      services: selectedServices.join(", "),
    }

    try {
      const response = await fetch("https://formspree.io/f/xpwpygyb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSubmit),
      })

      if (response.ok) {
        toast.success("Message sent successfully!")
        // Reset form
        setFormData({
          name: "",
          email: "",
          message: "",
          services: {
            websiteDesign: false,
            appDesign: false,
            uxDesign: false,
            brandingDesign: false,
            userResearch: false,
            other: false,
          },
        })
      } else {
        toast.error("Failed to send message. Please try again.")
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.")
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div id="contact" className="min-h-screen flex items-center justify-center p-4">
      <Toaster position="top-right" />
      <div className="w-full max-w-6xl bg-[#FF9933] rounded-3xl overflow-hidden flex flex-col md:flex-row">
        {/* Left side - Contact info */}
        <div className="p-8 md:p-12 flex flex-col justify-between md:w-2/5">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Let's Work together</h1>
            <p className="text-xl text-black mb-8">
              Please fill out the form below or Send a message and i'll get back to you.
            </p>
          </div>

          <div className="space-y-4 mt-8">
            {/* Email */}
            <div className="bg-black rounded-xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-white p-2 rounded-md">
                  <Mail className="h-5 w-5 text-black" />
                </div>
                <div>
                  <p className="text-white text-sm">Email</p>
                  <p className="text-white">talhahanif120@gmail.com</p>
                </div>
              </div>
              <a href="mailto:talhahanif120@gmail.com" className="text-white">
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>

            {/* LinkedIn */}
            <div className="bg-black rounded-xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-[#0077B5] p-2 rounded-md">
                  <Linkedin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-white text-sm">LinkedIn</p>
                  <p className="text-white">Talha Hanif</p>
                </div>
              </div>
              <a
                href="https://www.linkedin.com/in/talha-hanif-59173a221/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>

            {/* Behance */}
            <div className="bg-black rounded-xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-[#053eff] p-2 rounded-md">
                  <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 7h-7V2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-8h1V7zM7 10.5h3v1H7v-1zm5 6.5H7v-1h5v1zm2-3H7v-1h7v1zm7-4h-7V8h7v2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white text-sm">Behance</p>
                  <p className="text-white">behance.net/talhahanif</p>
                </div>
              </div>
              <a href="https://www.behance.net/talhahanif?tracking_source=userSearchProfilePanel" target="_blank" rel="noopener noreferrer" className="text-white">
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="bg-black p-8 md:p-12 md:w-3/5">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white mb-2">
                Your name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full p-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#FF9933]"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="You@gmail.com"
                className="w-full p-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#FF9933]"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-white mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Your message"
                className="w-full p-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#FF9933]"
              />
            </div>

            <div>
              <label className="block text-white mb-2">
                Services <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="websiteDesign"
                    name="websiteDesign"
                    checked={formData.services.websiteDesign}
                    onChange={handleCheckboxChange}
                  // className="h-4 w-4 text-[#FF9933] focus:ring-[#FF9933] border-gray-700 rounded"
                  />

                  <label htmlFor="websiteDesign" className="ml-2 text-white">
                    Website design
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="appDesign"
                    name="appDesign"
                    checked={formData.services.appDesign}
                    onChange={handleCheckboxChange}
                    className="h-4 w-4 text-[#FF9933] focus:ring-[#FF9933] border-gray-700 rounded"
                  />
                  <label htmlFor="appDesign" className="ml-2 text-white">
                    App design
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="uxDesign"
                    name="uxDesign"
                    checked={formData.services.uxDesign}
                    onChange={handleCheckboxChange}
                    className="h-4 w-4 text-[#FF9933] focus:ring-[#FF9933] border-gray-700 rounded"
                  />
                  <label htmlFor="uxDesign" className="ml-2 text-white">
                    UX design
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="brandingDesign"
                    name="brandingDesign"
                    checked={formData.services.brandingDesign}
                    onChange={handleCheckboxChange}
                    className="h-4 w-4 text-[#FF9933] focus:ring-[#FF9933] border-gray-700 rounded"
                  />
                  <label htmlFor="brandingDesign" className="ml-2 text-white">
                    Branding And Visual design
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="userResearch"
                    name="userResearch"
                    checked={formData.services.userResearch}
                    onChange={handleCheckboxChange}
                    className="h-4 w-4 text-[#FF9933] focus:ring-[#FF9933] border-gray-700 rounded"
                  />
                  <label htmlFor="userResearch" className="ml-2 text-white">
                    User Research
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="other"
                    name="other"
                    checked={formData.services.other}
                    onChange={handleCheckboxChange}
                    className="h-4 w-4 text-[#FF9933] focus:ring-[#FF9933] border-gray-700 rounded"
                  />
                  <label htmlFor="other" className="ml-2 text-white">
                    Other
                  </label>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#FF9933] text-black font-medium py-3 px-8 rounded-lg hover:bg-[#e88a2a] transition-colors disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

