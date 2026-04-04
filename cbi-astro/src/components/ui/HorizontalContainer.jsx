"use client"

import { useEffect, useRef } from "react"

export function HorizontalScroll({ children }) {
  const scrollContainerRef = useRef(null)

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const updateLayout = () => {
      // Set document height equal to the horizontal scroll width
      // so the native scrollbar maps 1:1 to horizontal travel
      const scrollWidth = container.scrollWidth
      document.body.style.height = `${scrollWidth}px`
    }

    const handleScroll = () => {
      const scrollWidth = container.scrollWidth
      const viewportWidth = window.innerWidth
      const maxHorizontalScroll = scrollWidth - viewportWidth
      const bodyHeight = parseFloat(document.body.style.height || "0")
      const maxScrollY = bodyHeight - window.innerHeight

      if (maxScrollY <= 0) return

      const progress = Math.min(window.scrollY / maxScrollY, 1)
      container.style.transform = `translateX(-${progress * maxHorizontalScroll}px)`
    }

    updateLayout()
    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", () => {
      updateLayout()
      handleScroll()
    })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", updateLayout)
      document.body.style.height = ""
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 h-screen w-screen overflow-hidden">
      <div
        ref={scrollContainerRef}
        data-horizontal-scroll
        className="flex h-full will-change-transform"
        style={{ transition: "transform 0.07s linear" }}
      >
        {children}
      </div>
    </div>
  )
}
