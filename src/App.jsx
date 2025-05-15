"use client"

import { useState, useEffect } from "react"
import "./App.css"
import { LoadingScreen } from "./components/LoadingScreen"
import { Navbar } from "./components/Navbar"
import { MobileMenu } from "./components/MobileMenu"
import HomePage from "./components/pages/Home"
import AboutPage from "./components/pages/About"
import ProjectsPage from "./components/pages/Projects"
import ContactPage from "./components/pages/Contact"
import "./index.css"

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState("home")

  // Handle browser navigation (back/forward buttons)
  useEffect(() => {
    // Update page based on URL hash on initial load
    const hash = window.location.hash.replace("#", "")
    if (hash) {
      setCurrentPage(hash)
    }

    // Listen for hash changes
    const handleHashChange = () => {
      const newHash = window.location.hash.replace("#", "")
      if (newHash) {
        setCurrentPage(newHash)
        // Scroll to top when changing pages
        window.scrollTo(0, 0)
      }
    }

    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  // Update URL hash when page changes
  useEffect(() => {
    if (currentPage !== "home") {
      window.location.hash = currentPage
    } else {
      // Remove hash for home page
      if (window.location.hash) {
        window.history.pushState("", document.title, window.location.pathname)
      }
    }
  }, [currentPage])

  // Render the appropriate page based on currentPage state
  const renderPage = () => {
    switch (currentPage) {
      case "about":
        return <AboutPage />
      case "projects":
        return <ProjectsPage />
      case "contact":
        return <ContactPage />
      default:
        return <HomePage />
    }
  }

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        <Navbar
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <MobileMenu
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        {renderPage()}
      </div>
    </>
  )
}

export default App
