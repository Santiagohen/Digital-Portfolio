"use client"

import { RevealOnScroll } from "../RevealOnScroll"
import { useEffect, useRef } from "react"

export default function HomePage() {
  const containerRef = useRef(null)
  const tagsRef = useRef([])

  const htmlTags = [
    "<div>", "</div>", "<span>", "</span>", "<html>", "</html>",
    "<body>", "</body>", "<h1>", "</h1>", "<p>", "</p>", "<a>", "</a>",
    "<img/>", "<ul>", "</ul>", "<li>", "</li>", "<form>", "</form>",
    "<input/>", "<button>", "</button>", "<section>", "</section>",
    "<nav>", "</nav>", "<footer>", "</footer>", "<React/>",
    "<useState/>", "<useEffect/>", "<Component/>", "<props>",
    "<jsx>", "</jsx>", "<tailwind/>", "<css>", "</css>",
  ]

  useEffect(() => {
    if (containerRef.current && tagsRef.current.length === 0) {
      const containerRect = containerRef.current.getBoundingClientRect()

      tagsRef.current = htmlTags.map((tag) => ({
        tag,
        x: Math.random() * containerRect.width,
        y: Math.random() * containerRect.height,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
        size: Math.random() * 20 + 20,
        opacity: Math.random() * 0.4 + 0.6,
        element: null,
      }))
    }

    let animationFrameId
    const animate = () => {
      const containerRect = containerRef.current?.getBoundingClientRect()
      if (!containerRect) return

      tagsRef.current.forEach((tag) => {
        if (!tag.element) return

        // Remove repulsion effect on mouse

        // Move tag
        tag.x += tag.vx
        tag.y += tag.vy

        // Apply damping
        tag.vx *= 0.98
        tag.vy *= 0.98

        // Bounce on container edges
        if (tag.x < 0 || tag.x > containerRect.width) {
          tag.vx *= -1
          tag.x = Math.max(0, Math.min(tag.x, containerRect.width))
        }
        if (tag.y < 0 || tag.y > containerRect.height) {
          tag.vy *= -1
          tag.y = Math.max(0, Math.min(tag.y, containerRect.height))
        }

        // Update position
        tag.element.style.transform = `translate(${tag.x}px, ${tag.y}px)`
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  const setTagRef = (el, index) => {
    if (el && tagsRef.current[index]) {
      tagsRef.current[index].element = el
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {htmlTags.map((tag, index) => (
          <div
            key={index}
            ref={(el) => setTagRef(el, index)}
            className="absolute text-blue-400 font-mono transition-transform duration-300 hover:text-blue-200 cursor-pointer drop-shadow-[0_0_6px_rgba(59,130,246,0.5)]"
            style={{
              fontSize: tagsRef.current[index]?.size + "px",
              opacity: tagsRef.current[index]?.opacity,
              transform: `translate(${tagsRef.current[index]?.x || 0}px, ${tagsRef.current[index]?.y || 0}px)`,
              pointerEvents: "auto",
            }}
            onMouseEnter={() => {
              // Optional: Keep this for some burst effect on hover if you want
              if (tagsRef.current[index]) {
                tagsRef.current[index].vx += (Math.random() - 0.5) * 5
                tagsRef.current[index].vy += (Math.random() - 0.5) * 5
              }
            }}
          >
            {tag}
          </div>
        ))}
      </div>

      <RevealOnScroll>
        <div className="text-center z-10 px-4 backdrop-blur-sm bg-black/30 rounded-xl p-8 border border-white/10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm SantiagoHe
          </h1>

          <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto">
            Constructive full-stack developer with vast knowledge of JavaScript and its most popular frameworks,
            including React, React Native, Astro, MongoDB, and Hono among others along with dominance on computer skills
            such as Microsoft Office applications and Windows Terminal && macOS terminal. Seeking position on the
            Technology Industry.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              onClick={(e) => {
                e.preventDefault()
                window.location.hash = "projects"
              }}
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
              hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
              onClick={(e) => {
                e.preventDefault()
                window.location.hash = "contact"
              }}
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}
