"use client"

import type React from "react"

import { useEffect } from "react"

export default function AOSProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Dynamically import AOS to avoid SSR issues
    const initAOS = async () => {
      const AOS = (await import("aos")).default
      await import("aos/dist/aos.css")

      AOS.init({
        duration: 800,
        easing: "ease-in-out",
        once: true,
        offset: 100,
        delay: 100,
      })
    }

    initAOS()
  }, [])

  return <>{children}</>
}
