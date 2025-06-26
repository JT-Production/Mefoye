import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Header from "@/components/header"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-50 to-purple-100 overflow-hidden h-screen md:h-auto">
        <div className="absolute inset-0 md:block hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-500 to-purple-300 transform skew-x-12 translate-x-1/4"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8" data-aos="fade-right" data-aos-duration="1000">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  We offer <span className="text-purple-500">a variety of services</span> to boost your business
                </h1>
                <div className="space-y-4 text-gray-500 text-lg md:text-start ">
                  <p data-aos="fade-up" data-aos-delay="300">
                    Mefoye Limited is a premier Nigerian firm delivering comprehensive onshore and offshore
                    outsourcing solutions designed to meet the dynamic operational demands of the oil and gas industry.
                  </p>
                  <p data-aos="fade-up" data-aos-delay="300">
                    The company provides expert support across key business functions, including tender and contract
                    management, human resources, finance and accounting, technical and soft-skill training—enhancing
                    workforce capacity both at onshore facilities and offshore installations.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative md:block hidden" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
              <Image
                src="/images/firm2-slider-man.png"
                alt="Professional businessman"
                width={300}
                height={500}
                className="w-full scale-[1.25] h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industry Focus Section */}
      <section className="py-16 bg-purple-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up" data-aos-duration="800">
          <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
            Mefoye focuses on a wide range of industries, reflecting its versatile service offering:
          </h2>
        </div>
      </section>

      {/* Services Description */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 text-gray-500 text-lg leading-relaxed">
            <p data-aos="fade-up" data-aos-delay="100">
              In addition, Mefoye Limited specializes in expatriate and immigration services for oil and gas
              personnel, including work permits, visa renewals, and compliance with all statutory immigration
              requirements—ensuring seamless onboarding and legal residence for foreign professionals working in
              Nigeria's energy sector.
            </p>
            <p data-aos="fade-up" data-aos-delay="200">
              The company also offers robust finance and accounting solutions, ensuring transparent, compliant, and
              efficient financial operations. Its local content compliance advisory ensures alignment with the Nigerian
              Oil and Gas Industry Content Development (NOGICD) Act and other industry regulations.
            </p>
            <p data-aos="fade-up" data-aos-delay="300">
              With deep regulatory insight, operational expertise, and a footprint that spans remote offshore platforms
              to complex onshore sites, Mefoye Limited empowers clients to reduce risk, streamline operations,
              and maintain compliance and competitiveness in Nigeria's highly regulated and performance-driven oil and
              gas environment.
            </p>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative" data-aos="fade-right" data-aos-duration="800">
              <Image
                src="/images/firm2-slider-man.png"
                alt="Professional businessman with tablet"
                width={300}
                height={500}
                className="w-full h-auto scale-[1.25] rounded-lg"
              />
            </div>
            <div className="space-y-6" data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
              <h2 className="text-4xl font-bold text-gray-900">
                We are here to support all kinds of businesses – from startups to international corporations
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                Our diverse range of services is structured to meet the evolving needs of modern businesses, from talent
                acquisition and payroll management to IT support and expatriate services. By leveraging industry
                expertise and cutting-edge strategies, we empower organizations to focus on their core objectives while
                we handle the complexities of workforce and operational management.
              </p>
              <div data-aos="fade-up" data-aos-delay="400">
                <Button className="bg-purple-500 hover:bg-purple-700 text-white">Contact us</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Policies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Company Policies</h2>
            <p className="text-gray-500 text-lg">Mefoye is governed by a strong internal framework:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission Side */}
            <div className="space-y-8" data-aos="fade-left" data-aos-duration="800">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-500 italic text-lg">
                  "Focused statement on service commitment, client satisfaction, and impact."
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission Statement</h3>
                <div className="space-y-4 text-gray-500">
                  <p>
                    "At Mefoye, we empower businesses with a full spectrum of world-class services — from
                    staffing and payroll management to training, facility solutions, travel logistics, and IT support.
                  </p>
                  <p>
                    We bridge talent gaps, optimize operations, enhance productivity, and enable organizations to focus
                    on growth while we expertly manage the rest."
                  </p>
                </div>
              </div>
            </div>

            {/* Vision Side */}
            <div className="space-y-8" data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-500 italic text-lg">
                  "Clear long-term ambition that shapes strategy and service delivery."
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="400">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision Statement</h3>
                <p className="text-gray-500">
                  "To be the leading force in Africa's business evolution — delivering integrated talent, technology,
                  and operational support that powers organizations to scale, innovate, and thrive in a dynamic world."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8" >
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
