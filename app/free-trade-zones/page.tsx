import Image from "next/image"
import Link from "next/link"
import {
  MapPin,
  Facebook,
  Twitter,
  CheckCircle,
  Building,
  Globe,
  TrendingUp,
  Linkedin,
} from "lucide-react"
import Header from "@/components/header"

export default function FreeTradeZonesPage() {
  const majorFTZs = [
    {
      name: "Lekki Free Trade Zone (LFTZ)",
      location: "Lagos State",
      description: "A multi-functional economic zone with industrial, commercial, and residential areas.",
    },
    {
      name: "Calabar Free Zone (CFZ)",
      location: "Cross River State",
      description: "Focused on manufacturing, trading, and services with integrated logistics.",
    },
    {
      name: "Snake Island Integrated Free Zone (SIIFZ)",
      location: "Lagos",
      description: "Integrated platform for logistics, trading, and manufacturing companies.",
    },
    {
      name: "Ogun Oil and Gas Free Zone",
      location: "Rivers State",
      description: "Specifically designed for oil and gas industry operations.",
    },
  ]

  const benefits = [
    {
      icon: <CheckCircle className="h-6 w-6 text-purple-500" />,
      title: "Tax Exemptions",
      description: "Exemption from all federal, state, and local government taxes, levies, and rates.",
    },
    {
      icon: <Globe className="h-6 w-6 text-purple-500" />,
      title: "Foreign Ownership",
      description: "100% foreign ownership of businesses is permitted within the zones.",
    },
    {
      icon: <Building className="h-6 w-6 text-purple-500" />,
      title: "Simplified Procedures",
      description: "Streamlined processes for business registration and operations.",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-orange-500" />,
      title: "Investment Incentives",
      description: "Various incentives to promote trade, attract foreign investment, and stimulate growth.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        {/* purple accent element */}
        <div
          className="absolute top-0 right-0 w-64 h-64 bg-purple-400 rounded-full transform translate-x-32 -translate-y-32"
          data-aos="fade-left"
          data-aos-duration="1000"
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8" data-aos="fade-up" data-aos-duration="800">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">Free Trade Zones (FTZs)</h1>
          </div>

          {/* Hero Image */}
          <div className="relative mb-12" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200">
            <div className="w-full h-96 lg:h-[400px] relative overflow-hidden rounded-lg">
              <Image
                src="/images/protocol.png"
                alt="Lekki Free Trade Zone modern building with landscaping"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Introduction */}
          <div className="max-w-4xl mx-auto mb-16" data-aos="fade-up" data-aos-delay="300">
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              Free Trade Zones (FTZs) in Nigeria are designated areas where businesses enjoy special economic
              regulations and incentives to promote trade, attract foreign investment, and stimulate industrial growth.
              Here's an overview of FTZs in Nigeria:
            </p>
          </div>
        </div>
      </section>

      {/* Legal and Regulatory Framework */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center" data-aos="fade-up">
            Legal and Regulatory Framework
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm" data-aos="fade-right" data-aos-delay="100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Nigeria Export Processing Zones Act (NEPZA) Act 1992
              </h3>
              <p className="text-gray-500">
                Establishes the Nigerian Export Processing Zones Authority (NEPZA) to license, regulate, and oversee
                Free Trade Zones in Nigeria. Legal Framework: Incentives, Act [...]
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm" data-aos="fade-left" data-aos-delay="200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Oil and Gas Export Free Zone Act (OGEFZ) Act 1996
              </h3>
              <p className="text-gray-500">
                Provides for the establishment and regulation of oil and gas free zones, managed by the Oil and Gas
                Export Free Zone Authority (OGEFZA) in Nigeria Free Zone. An Extension of the Legal and [...]
              </p>
            </div>
          </div>

          <div className="mt-8 bg-white p-8 rounded-lg shadow-sm" data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Regulations</h3>
            <p className="text-gray-500">
              Include the Investment Procedures, Regulations and Operational Guidelines for Free Zones in Nigeria
              (2004), and specific regulations for zones such as the Industrial and Lagos Free Trade Zone (2018) Legal
              Framework Regulating Free Trade Zones in Nigeria!
            </p>
          </div>
        </div>
      </section>

      {/* Types of Free Trade Zones */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center" data-aos="fade-up">
            Types of Free Trade Zones
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Export Processing Zones (EPZs)</h3>
              <p className="text-gray-500">
                Focused on manufacturing goods for export, offering incentives to encourage export performance. (The
                role of Free Trade Zones in Nigeria)
              </p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Free Trade Zones (FTZs)</h3>
              <p className="text-gray-500">
                Designed to promote both import substitution and export promotion, enhancing trade by reducing tariffs
                and other trade barriers. (The role of Free Trade Zones in Nigeria)
              </p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="300">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Investment and Benefits</h3>
              <p className="text-gray-500">
                Businesses operating within Nigeria's FTZs enjoy several incentives designed to promote trade and
                economic growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center" data-aos="fade-up">
            Investment and Benefits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm flex items-start space-x-4"
                data-aos="fade-up"
                data-aos-delay={index * 150}
                data-aos-duration="500"
              >
                <div className="flex-shrink-0">{benefit.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-500">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Major Free Trade Zones */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center" data-aos="fade-up">
            Major Free Trade Zones in Nigeria
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {majorFTZs.map((zone, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-lg"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="500"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{zone.name}</h3>
                <p className="text-purple-500 font-medium mb-3">📍 {zone.location}</p>
                <p className="text-gray-500">{zone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration and Licensing */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center" data-aos="fade-up">
            Registration and Licensing
          </h2>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 text-center" data-aos="fade-up" data-aos-delay="100">
              To operate within an FTZ, businesses must:
            </p>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm" data-aos="fade-right" data-aos-delay="200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Submit an Application</h3>
                <p className="text-gray-500">
                  Provide a letter of application to NEPZA or OGEFZA, along with required documents. (PPT – Free Trade
                  Zones & Nigeria Tax System Overview)
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm" data-aos="fade-left" data-aos-delay="300">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Obtain a License</h3>
                <div className="space-y-2 text-gray-500">
                  <p>
                    <strong>• Free Zone Developer License:</strong> For entities developing and managing a free zone.
                    (FAQs - NEPZA - Nigeria Export Processing Zones Authority)
                  </p>
                  <p>
                    <strong>• Free Zone Enterprise License:</strong> For businesses operating within a free zone.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm" data-aos="fade-right" data-aos-delay="400">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Meet Capital Requirements</h3>
                <p className="text-gray-500">
                  A minimum share capital of $100,000 is required for Free Zone Enterprises. (FAQs - NEPZA - Nigeria
                  Export Processing Zones Authority)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Economic Impact */}
      <section className="py-16 bg-purple-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center" data-aos="fade-up">
            Economic Impact
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-xl font-bold mb-4">Employment Generation</h3>
              <p className="text-purple-100">
                Creation of numerous job opportunities across various sectors, contributing to local and national
                employment rates.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-xl font-bold mb-4">Foreign Direct Investment</h3>
              <p className="text-purple-100">
                Attraction of international investors, leading to capital inflow and technology transfer.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-xl font-bold mb-4">Export Promotion</h3>
              <p className="text-purple-100">
                Enhancement of Nigeria's export capacity through improved production and trade facilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up" data-aos-duration="800">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Establish Your Business in Nigeria's FTZs?</h2>
          <p className="text-xl text-gray-500 mb-8 max-w-3xl mx-auto">
            Let Mefoye Limited guide you through the process of setting up and operating within Nigeria's Free
            Trade Zones. Our expertise ensures compliance and maximizes your investment benefits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="200">
            <button className="bg-purple-500 text-white hover:bg-purple-700 px-8 py-3 rounded-lg font-semibold transition-colors">
              Get FTZ Consultation
            </button>
            <button className="border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Download FTZ Guide
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8" data-aos="fade-up" data-aos-duration="500">
            <div className="space-y-4">
              <Image
                src="/images/Mefeyo-logo2.png"
                alt="Mefoye Limited"
                width={150}
                height={40}
                className=" w-100"
              />
              {/* <p className="">Excellence. Efficiency. Expertise.</p> */}
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-purple-500">Office Address</h3>
              <div className="space-y-2">
                <p className="flex items-start">
                  <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  16, Gbemi Oluwa Close, Lekki, Lagos State, Nigeria
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-purple-500">Address</h3>
              <div className="space-y-2 ">
                <p>Phone: +234(0)8033445566</p>
                <p>Email: info@mefoyeltd.com</p>
                <p>Website: www.mefoyeltd.com</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-purple-500">Our Socials</h3>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-purple-300 text-purple-500 p-2 rounded-md bg-white">
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link href="#" className="hover:text-purple-300 text-purple-500 p-2 rounded-md bg-white">
                  <Twitter className="h-6 w-6" />
                </Link>
                <Link href="#" className="hover:text-purple-300 text-purple-500 p-2 rounded-md bg-white">
                  <Linkedin className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
          <div
            className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500"
          
          >
            <p>&copy; 2025 Mefoye Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
