import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react"
import Header from "@/components/header"

export default function OilAndGasPage() {
  const services = [
    {
      title: "Regulatory Compliance",
      description: "Navigate complex Nigerian oil and gas regulations with expert guidance and support.",
      icon: "📋",
    },
    {
      title: "Local Content Development",
      description: "Ensure compliance with NOGICD Act and maximize local content opportunities.",
      icon: "🏭",
    },
    {
      title: "Asset Valuation",
      description: "Professional asset evaluation and investment analysis for informed decision-making.",
      icon: "💰",
    },
    {
      title: "Risk Management",
      description: "Comprehensive risk assessment and mitigation strategies for oil and gas operations.",
      icon: "⚡",
    },
    {
      title: "Technical Training",
      description: "Specialized training programs for oil and gas professionals and technical staff.",
      icon: "🎓",
    },
    {
      title: "Project Management",
      description: "End-to-end project management for exploration, development, and production projects.",
      icon: "🔧",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        {/* Green accent element */}
        <div
          className="absolute top-0 right-0 w-64 h-64 bg-green-400 rounded-full transform translate-x-32 -translate-y-32"
          data-aos="fade-left"
          data-aos-duration="1000"
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8" data-aos="fade-up" data-aos-duration="800">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">Oil and Gas Consulting</h1>
          </div>

          {/* Hero Image */}
          <div className="relative mb-12" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200">
            <div className="w-full h-96 lg:h-[500px] relative overflow-hidden rounded-lg">
              <Image
                src="/images/ship.png"
                alt="Oil pump jacks silhouetted against sunset sky"
                fill
                className="object-cover"
                style={{
                  background: "linear-gradient(45deg, #ff6b35, #f7931e, #ffcc02)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="max-w-4xl mx-auto space-y-8 text-gray-700 text-lg leading-relaxed">
            <p data-aos="fade-up" data-aos-delay="100">
              Our team of experts understand the job. The converging market forces that includes rising shale
              production, environments issues, lower oil prices, new operational efficiencies, geopolitical developments
              and more – are dramatically reshaping the global.
            </p>

            <p data-aos="fade-up" data-aos-delay="200">
              As the pace of change accelerates, corporate and government leaders must make the right choices in order
              to identify exploration and production opportunities that promise optimal growth while also prioritizing
              investments, driving innovation, managing risks and reducing costs.
            </p>

            <p data-aos="fade-up" data-aos-delay="300">
              The trusted relationships that we have established throughout the energy industry over the past years give
              us the perspective to help you shape your own future.
            </p>

            <p data-aos="fade-up" data-aos-delay="400">
              Our team are uniquely positioned to partner with you to meet the challenges by combining world-class
              information, analytics and expertise into decision-support solutions that are custom built to help you
              with:
            </p>

            {/* Key Services */}
            <div className="space-y-6 mt-12">
              <div data-aos="fade-right" data-aos-delay="500">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Track Record</h3>
                <p>
                  Over the years, we have supported many organizations in Nigeria including IOCs, NOCs, manufacturering
                  companies, energy service companies, educational institutions and more.
                </p>
              </div>

              <div data-aos="fade-left" data-aos-delay="600">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Deep Energy Expertise</h3>
                <p>
                  Benefit from the experience of our 20+ experts and consultants including geoscientists, engineers,
                  economists, lawyers, information specialists and other experts
                </p>
              </div>

              <div data-aos="fade-right" data-aos-delay="700">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Industry-Leading Data</h3>
                <p>
                  Gain access to our comprehensive, proprietary data for Nigerian E&P operations, security and
                  environment, significant energy assets on the market, private oil companies and much more.
                </p>
              </div>

              <div data-aos="fade-left" data-aos-delay="800">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Independent Insights</h3>
                <p>
                  Get objective analysis that driven by timely, accurate information content and crafted to meet the
                  needs of your organization.
                </p>
              </div>

              <div data-aos="fade-right" data-aos-delay="900">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Advanced Tools</h3>
                <p>
                  Maximize the value of data with premier analytic systems for asset valuation, reservoir engineering,
                  proprietary operating and capital cost indexes, and other key functions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Oil & Gas Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From exploration to production, we provide end-to-end consulting services tailored to the Nigerian energy
              sector
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="600"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up" data-aos-duration="800">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Oil & Gas Operations?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Partner with Nigeria's leading oil and gas consulting firm. Let our expertise drive your success in the
            energy sector.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="200">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8" data-aos="fade-up" data-aos-duration="600">
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
