"use client"

import { useState } from "react"
import { RevealOnScroll } from "../RevealOnScroll"
import { SocialLinks } from "../SocialLinks"
import emailjs from "emailjs-com"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY,
      )
      .then((result) => {
        setFormStatus({
          submitted: true,
          success: true,
          message: "Message sent successfully! I'll get back to you soon.",
        })
        setFormData({ name: "", email: "", message: "" })
        setIsSubmitting(false)
      })
      .catch((error) => {
        setFormStatus({
          submitted: true,
          success: false,
          message: "Oops! Something went wrong. Please try again.",
        })
        setIsSubmitting(false)
      })
  }

  return (
    <section className="min-h-screen flex items-center justify-center py-20">
      <div className="w-full max-w-5xl mx-auto px-4">
        <RevealOnScroll>
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="order-2 md:order-1">
              <RevealOnScroll>
                <SocialLinks />
              </RevealOnScroll>
            </div>

            <div className="order-1 md:order-2">
              <RevealOnScroll>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                  {formStatus.submitted && (
                    <div
                      className={`mb-6 p-4 rounded-lg ${formStatus.success ? "bg-green-500/20 text-green-200" : "bg-red-500/20 text-red-200"}`}
                    >
                      {formStatus.message}
                    </div>
                  )}

                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                        placeholder="Name..."
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                        placeholder="example@gmail.com"
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                        placeholder="Your Message..."
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden 
                        hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]
                        ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
