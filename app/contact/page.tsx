"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react"
import Header from "@/components/header"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-50 to-purple-100 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-500 to-purple-500 transform skew-x-12 translate-x-1/4"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center" data-aos="fade-up" data-aos-duration="1000">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              <span className="text-purple-500">Contact us</span> to get the latest offers and deals
            </h1>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up" data-aos-duration="800">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              If you have any questions feel free to send us a message
            </h2>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-8"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <div className="space-y-6">
              <div data-aos="fade-right" data-aos-delay="300">
                <Input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-0 py-4 text-lg border-0 border-b-2 border-gray-300 rounded-none bg-transparent focus:border-purple-500 focus:ring-0 placeholder-gray-500"
                />
              </div>

              <div data-aos="fade-left" data-aos-delay="400">
                <Input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-0 py-4 text-lg border-0 border-b-2 border-gray-300 rounded-none bg-transparent focus:border-purple-500 focus:ring-0 placeholder-gray-500"
                />
              </div>

              <div data-aos="fade-right" data-aos-delay="500">
                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-0 py-4 text-lg border-0 border-b-2 border-gray-300 rounded-none bg-transparent focus:border-purple-500 focus:ring-0 placeholder-gray-500"
                />
              </div>

              <div data-aos="fade-left" data-aos-delay="500">
                <Textarea
                  name="message"
                  placeholder="Your message (optional)"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-0 py-4 text-lg border-0 border-b-2 border-gray-300 rounded-none bg-transparent focus:border-purple-500 focus:ring-0 placeholder-gray-500 resize-none"
                />
              </div>
            </div>

            <div className="flex justify-start" data-aos="fade-up" data-aos-delay="700">
              <Button
                type="submit"
                className="bg-purple-500 hover:bg-purple-300 text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Office Address */}
            <div className="text-center md:text-left" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-xl font-bold text-purple-500 mb-4">Office Address</h3>
              <div className="space-y-2 text-gray-700">
                <p className="flex items-start justify-center md:justify-start">
                  <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-purple-500" />
                  15, Robert Street, Ogunyemi Zone, Magodo Phase II Lagos
                </p>
              </div>
            </div>

            {/* Contact Details */}
            <div className="text-center md:text-left" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-xl font-bold text-purple-500 mb-4">Address</h3>
              <div className="space-y-2 text-gray-700">
                <p className="flex items-center justify-center md:justify-start">
                  <Phone className="h-4 w-4 mr-2 text-purple-500" />
                  +2348063568535
                </p>
                <p className="flex items-center justify-center md:justify-start">
                  <Phone className="h-4 w-4 mr-2 text-purple-500" />
                  +2348063530701
                </p>
                <p className="flex items-center justify-center md:justify-start">
                  <Mail className="h-4 w-4 mr-2 text-purple-500" />
                  info@outsourceproltd.com
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="text-center md:text-left" data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-xl font-bold text-purple-500 mb-4">Our Socials</h3>
              <div className="flex space-x-4 justify-center md:justify-start">
                <Link href="#" className="text-gray-500 hover:text-purple-500 transition-colors">
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-gray-500 hover:text-purple-500 transition-colors">
                  <Twitter className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-gray-500 hover:text-purple-500 transition-colors">
                  <Instagram className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8" data-aos="fade-up" data-aos-duration="500">
            <div className="space-y-4">
              <Image
                src="/placeholder.svg?height=40&width=150"
                alt="OutSource Pro Limited"
                width={150}
                height={40}
                className="h-8 w-auto"
              />
              <p className="text-gray-400">Excellence. Efficiency. Expertise.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Office Address</h3>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-start">
                  <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  15, Robert Street, Ogunyemi Zone, Magodo Phase II Lagos
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Address</h3>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  +2348063568535
                </p>
                <p className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  +2348063530701
                </p>
                <p className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  info@outsourceproltd.com
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Socials</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Instagram className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
          <div
            className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <p>&copy; 2024 OutSource Pro | All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
