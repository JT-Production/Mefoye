import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, MapPin, Facebook, Twitter, Linkedin } from "lucide-react"
import Header from "@/components/header"

export default function HomePage() {
  const services = [
    {
      title: "Team/Staff Resizing",
      image: "/images/Hub.png",
      description: "Optimize your workforce with strategic team restructuring",
    },
    {
      title: "Payroll Management",
      image: "/iamges/Payroll.png",
      description: "Comprehensive payroll processing and management",
    },
    {
      title: "Training & Upskilling",
      image: "/images/Training.png",
      description: "Professional development and skill enhancement programs",
    },
    {
      title: "Workstation/Productivity Hub",
      image: "/images/Hub.png",
      description: "Modern workspace solutions for enhanced productivity",
    },
    {
      title: "Competency Assessment",
      image: "/images/Competency.png",
      description: "Evaluate and measure employee skills and capabilities",
    },
    {
      title: "Clean Space & Janitorial Services",
      image: "/images/Cleaning.png",
      description: "Professional cleaning and maintenance services",
    },
    {
      title: "Prestige Premium Services",
      image: "/placeholder.svg?height=200&width=300",
      description: "Luxury business services for executive needs",
    },
    {
      title: "Travel Solutions",
      image: "/images/Travel.png",
      description: "Complete corporate travel management",
    },
    {
      title: "Waybill and Logistics Services",
      image: "/placeholder.svg?height=200&width=300",
      description: "Efficient logistics and supply chain management",
    },
    {
      title: "IT Support",
      image: "/images/IT.png",
      description: "Comprehensive IT infrastructure and support services",
    },
    {
      title: "Expatriate & Migration Management",
      image: "/images/E&MM.png",
      description: "Complete expatriate and migration support services",
    },
    {
      title: "Monitoring and Evaluation",
      image: "/",
      description: "Performance monitoring and evaluation systems",
    },
    {
      title: "Oil and Gas Consulting",
      image: "/placeholder.svg?height=200&width=300",
      description: "Specialized consulting for oil and gas industry",
    },
  ]

  const whyChooseUs = [
    {
      title: "Industry Expertise",
      description: "Backed by years of experience across diverse industries",
    },
    {
      title: "Customized Solutions",
      description: "Tailored services to meet your unique business requirements",
    },
    {
      title: "Compliance & Security",
      description: "Adherence to local and international compliance standards",
    },
    {
      title: "Cost Efficiency",
      description: "Reduce operational costs while maintaining quality",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-50 to-blue-100 overflow-hidden ">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600 to-blue-500 transform skew-x-12 translate-x-1/4"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8" data-aos="fade-right" data-aos-duration="1000">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Everything your business <span className="text-blue-600">needs</span> in one place
                </h1>
                <p className="text-xl text-gray-600 max-w-lg">
                  Your trusted partner for comprehensive business solutions
                </p>
              </div>
              <div data-aos="fade-up" data-aos-delay="300">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                  Get started today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <p className="text-sm text-gray-500" data-aos="fade-up" data-aos-delay="500">
                Your success is our priority
              </p>
            </div>
            <div className="relative" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
              <Image
                src="/images/firm2-slider-man.png"
                alt="Professional businessman"
                width={500}
                height={600}
                className="w-full h-600"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative" data-aos="fade-right" data-aos-duration="800">
              <Image
                src="/images/Talent.png"
                alt="Professional woman"
                width={400}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="space-y-6" data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
              <h2 className="text-4xl font-bold text-gray-900">
                Your One-Stop Partner for Talent and Operational Excellence
              </h2>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Your Trusted Partner for Comprehensive Business Solutions
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  At OutSource Pro Limited, we specialize in delivering top-tier outsourcing services designed to
                  enhance your business efficiency and drive sustainable growth. With a commitment to excellence,
                  innovation, and client satisfaction, we provide tailored solutions that meet your unique business
                  needs across various operations and sustainable services.
                </p>
              </div>
              <div data-aos="fade-up" data-aos-delay="400">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  About us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Services OutSource Pro Offers</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-shadow duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="600"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8" data-aos="fade-up">
              Why Choose OutSource Pro Limited?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => (
                <div
                  key={index}
                  className="text-center"
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                  data-aos-duration="600"
                >
                  <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-blue-100">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-12" data-aos="fade-up" data-aos-delay="600">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Get started today
              </Button>
            </div>
            <div className="mt-8 text-center" data-aos="fade-up" data-aos-delay="800">
              <p className="text-blue-100">
                Let OutSource Pro Limited transform your business operations with reliable, scalable, and innovative
                business solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6" data-aos="fade-right" data-aos-duration="800">
              <h2 className="text-4xl font-bold text-gray-900">Together we can do more. Feel free to say hello.</h2>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Contact us
              </Button>
            </div>
            <div className="relative" data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
              <Image
                src="/images/IT.png"
                alt="Professional consultation"
                width={500}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
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
                  16, Gbemi Oluwa Close, Lekki, Lagos State, Nigeria
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Address</h3>
              <div className="space-y-2 text-gray-400">
                <p>Phone: +234(0)8033445566</p>
                <p>Email: info@outsourceproltd.com</p>
                <p>Website: www.outsourceproltd.com</p>
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
                  <Linkedin className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
          <div
            className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <p>&copy; 2024 OutSource Pro Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
