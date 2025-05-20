"use client"

import { useState } from "react"
import { RevealOnScroll } from "../RevealOnScroll"

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState("grid") // grid or list
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  // Project data with your specific projects
  const projects = [
    {
      id: 1,
      title: "Talentlink",
      description: "Full-Stack website using MongoDB to allow companies to open job entries for students to apply to.",
      longDescription:
        "Talentlink is a comprehensive platform that connects students with companies looking for talent. Companies can create job listings, and students can browse and apply to these opportunities. The platform streamlines the recruitment process for both parties.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Node.js", "Astro", "MongoDB"],
      category: "web",
      featured: true,
      status: "completed",
      demoUrl: "#",
      githubUrl: "https://github.com/FBLA-2025/FBLA-Web-Coding-Regional",
      stats: {
        stars: 12,
        forks: 5,
      },
    },
    {
      id: 2,
      title: "EdgyMon Mobile App",
      description:
        "Mobile application that gamefies the subjects of Math, Science and English for students to learn in an interactive environment.",
      longDescription:
        "EdgyMon is an educational mobile application that transforms learning into an engaging game experience. Students can master math, science, and English concepts through interactive gameplay, making education more enjoyable and effective.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Cloudflare", "React-Native", "SQL"],
      category: "mobile",
      featured: true,
      status: "completed",
      demoUrl: "#",
      githubUrl: "https://github.com/FBLA-2025-app/App-FBLA-state",
      stats: {
        stars: 8,
        forks: 3,
      },
    },
    {
      id: 3,
      title: "Task App",
      description: "Application that allows users to create tasks and set specific dates and times.",
      longDescription:
        "A task management application built with Laravel and PHP that helps users organize their schedule. Users can create, edit, and delete tasks, set due dates and times, and receive notifications for upcoming deadlines.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Laravel", "PHP"],
      category: "web",
      featured: false,
      status: "completed",
      demoUrl: "#",
      githubUrl: "https://github.com/Santiagohen/laravel-task-app-.",
      stats: {
        stars: 5,
        forks: 2,
      },
    },
    {
      id: 4,
      title: "AI Job Search Website",
      description:
        "Website that allows users to open positions for job in any level and uses LAMA-3 model to reject or accept applicants.",
      longDescription:
        "An innovative job search platform powered by AI. Employers can post job openings, and the system uses the LAMA-3 model to automatically screen applicants, saving time and improving the quality of candidate selection.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["NodeJs", "Express", "HugginFace", "LAMA-3"],
      category: "ai",
      featured: false,
      status: "in-progress",
      demoUrl: "#",
      githubUrl: "https://github.com/Santiagohen/laravel-task-app-.",
      stats: {
        stars: 7,
        forks: 1,
      },
    },
  ]

  // Filter projects based on category and search query
  const filteredProjects = projects.filter((project) => {
    const matchesCategory = filter === "all" || project.category === filter
    const matchesSearch =
      searchQuery === "" ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  // Get featured projects
  const featuredProjects = projects.filter((project) => project.featured)

  // Handle search input changes
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }

  // Toggle search bar visibility
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
    if (!isSearchOpen) {
      // Focus the search input when opened
      setTimeout(() => {
        document.getElementById("project-search")?.focus()
      }, 100)
    } else {
      // Clear search when closed
      setSearchQuery("")
    }
  }

  // Categories for filter
  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Apps" },
    { id: "mobile", name: "Mobile Apps" },
    { id: "ai", name: "AI & ML" },
  ]

  return (
    <section className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4">
        <RevealOnScroll>
          <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            My Projects
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Explore my portfolio of projects spanning web development, mobile apps, and AI technologies.
          </p>

          {/* Featured Project */}
          {featuredProjects.length > 0 && (
            <div className="mb-16">
              <h3 className="text-xl font-semibold mb-6 text-gray-200">Featured Project</h3>
              <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-blue-900/20 to-black/30 hover:border-blue-500/30 hover:shadow-[0_5px_30px_rgba(59,130,246,0.15)] transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-400/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 relative">
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={featuredProjects[0].image || "/placeholder.svg?height=400&width=600"}
                      alt={featuredProjects[0].title}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-2xl font-bold text-white">{featuredProjects[0].title}</h4>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            featuredProjects[0].status === "completed"
                              ? "bg-green-500/20 text-green-400"
                              : "bg-yellow-500/20 text-yellow-400"
                          }`}
                        >
                          {featuredProjects[0].status === "completed" ? "Completed" : "In Progress"}
                        </span>
                      </div>
                      <p className="text-gray-300 mb-4">{featuredProjects[0].longDescription}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {featuredProjects[0].technologies.map((tech) => (
                          <span
                            key={tech}
                            className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <a
                          href={featuredProjects[0].demoUrl}
                          className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          <span>Live Demo</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="ml-1"
                          >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                        </a>
                        <a
                          href={featuredProjects[0].githubUrl}
                          className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span>View Code</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="ml-1"
                          >
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                            <path d="M9 18c-4.51 2-5-2-7-2" />
                          </svg>
                        </a>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center text-gray-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mr-1"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                          <span>{featuredProjects[0].stats.stars}</span>
                        </div>
                        <div className="flex items-center text-gray-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mr-1"
                          >
                            <path d="M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-3" />
                            <path d="M16 3h5v5" />
                            <path d="M10 14 21 3" />
                          </svg>
                          <span>{featuredProjects[0].stats.forks}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Filters and Controls */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`px-4 py-2 rounded-full text-sm transition-all ${
                    filter === category.id ? "bg-blue-500 text-white" : "bg-white/5 text-gray-300 hover:bg-white/10"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* View Controls */}
            <div className="flex items-center space-x-2">
              {/* Search Toggle */}
              <button
                onClick={toggleSearch}
                className={`p-2 rounded-full transition-colors ${
                  isSearchOpen ? "bg-blue-500/20 text-blue-400" : "bg-white/5 text-gray-300 hover:bg-white/10"
                }`}
                aria-label="Toggle search"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </button>

              {/* View Mode Toggle */}
              <div className="bg-white/5 rounded-full p-1 flex">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-1 rounded-full transition-colors ${
                    viewMode === "grid" ? "bg-blue-500/20 text-blue-400" : "text-gray-300 hover:bg-white/10"
                  }`}
                  aria-label="Grid view"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="7" height="7" x="3" y="3" rx="1" />
                    <rect width="7" height="7" x="14" y="3" rx="1" />
                    <rect width="7" height="7" x="14" y="14" rx="1" />
                    <rect width="7" height="7" x="3" y="14" rx="1" />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-1 rounded-full transition-colors ${
                    viewMode === "list" ? "bg-blue-500/20 text-blue-400" : "text-gray-300 hover:bg-white/10"
                  }`}
                  aria-label="List view"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="8" x2="21" y1="6" y2="6" />
                    <line x1="8" x2="21" y1="12" y2="12" />
                    <line x1="8" x2="21" y1="18" y2="18" />
                    <line x1="3" x2="3" y1="6" y2="6" />
                    <line x1="3" x2="3" y1="12" y2="12" />
                    <line x1="3" x2="3" y1="18" y2="18" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Search Bar - Conditionally rendered */}
          {isSearchOpen && (
            <div className="mb-8 transition-all duration-300 ease-in-out">
              <div className="relative">
                <input
                  id="project-search"
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Search projects by name, description, or technology..."
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 pl-10 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>
            </div>
          )}

          {/* Project Count */}
          <div className="mb-6 text-gray-400 text-sm">
            Showing {filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"}
          </div>

          {/* Projects Grid/List */}
          {viewMode === "grid" ? (
            // Grid View
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <RevealOnScroll key={project.id}>
                  <div className="group h-full flex flex-col rounded-xl border border-white/10 bg-gradient-to-br from-blue-900/20 to-black/30 overflow-hidden hover:border-blue-500/30 hover:shadow-[0_5px_30px_rgba(59,130,246,0.15)] transition-all duration-300">
                    <div className="relative overflow-hidden h-48">
                      <img
                        src={project.image || "/placeholder.svg?height=400&width=600"}
                        alt={project.title}
                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-2 right-2">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            project.status === "completed"
                              ? "bg-green-500/20 text-green-400"
                              : "bg-yellow-500/20 text-yellow-400"
                          }`}
                        >
                          {project.status === "completed" ? "Completed" : "In Progress"}
                        </span>
                      </div>
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                      <p className="text-gray-400 mb-4 flex-1">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="bg-blue-500/10 text-blue-400 py-1 px-2 rounded-full text-xs hover:bg-blue-500/20 transition"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                        <div className="flex space-x-3">
                          <a
                            href={project.demoUrl}
                            className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
                          >
                            Live Demo
                          </a>
                          <a
                            href={project.githubUrl}
                            className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Code
                          </a>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center text-gray-400 text-sm">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="mr-1"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                            <span>{project.stats.stars}</span>
                          </div>
                          <div className="flex items-center text-gray-400 text-sm">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="mr-1"
                            >
                              <path d="M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-3" />
                              <path d="M16 3h5v5" />
                              <path d="M10 14 21 3" />
                            </svg>
                            <span>{project.stats.forks}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          ) : (
            // List View
            <div className="space-y-4">
              {filteredProjects.map((project) => (
                <RevealOnScroll key={project.id}>
                  <div className="group rounded-xl border border-white/10 bg-gradient-to-br from-blue-900/20 to-black/30 overflow-hidden hover:border-blue-500/30 hover:shadow-[0_5px_30px_rgba(59,130,246,0.15)] transition-all duration-300">
                    <div className="p-5">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/4 relative">
                          <div className="relative overflow-hidden rounded-lg h-40 md:h-full">
                            <img
                              src={project.image || "/placeholder.svg?height=400&width=600"}
                              alt={project.title}
                              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                          <div className="absolute top-2 right-2">
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${
                                project.status === "completed"
                                  ? "bg-green-500/20 text-green-400"
                                  : "bg-yellow-500/20 text-yellow-400"
                              }`}
                            >
                              {project.status === "completed" ? "Completed" : "In Progress"}
                            </span>
                          </div>
                        </div>
                        <div className="md:w-3/4">
                          <div className="flex flex-col h-full">
                            <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                            <p className="text-gray-400 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {project.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="bg-blue-500/10 text-blue-400 py-1 px-2 rounded-full text-xs hover:bg-blue-500/20 transition"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                              <div className="flex space-x-4">
                                <a
                                  href={project.demoUrl}
                                  className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                                >
                                  <span>Live Demo</span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="ml-1"
                                  >
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                    <polyline points="15 3 21 3 21 9" />
                                    <line x1="10" y1="14" x2="21" y2="3" />
                                  </svg>
                                </a>
                                <a
                                  href={project.githubUrl}
                                  className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <span>View Code</span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="ml-1"
                                  >
                                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                    <path d="M9 18c-4.51 2-5-2-7-2" />
                                  </svg>
                                </a>
                              </div>
                              <div className="flex items-center space-x-3">
                                <div className="flex items-center text-gray-400">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="mr-1"
                                  >
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                  </svg>
                                  <span>{project.stats.stars}</span>
                                </div>
                                <div className="flex items-center text-gray-400">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="mr-1"
                                  >
                                    <path d="M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-3" />
                                    <path d="M16 3h5v5" />
                                    <path d="M10 14 21 3" />
                                  </svg>
                                  <span>{project.stats.forks}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          )}

          {/* No Results Message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mx-auto mb-4 text-gray-500"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-300 mb-2">No projects found</h3>
              <p className="text-gray-400">Try adjusting your search or filter to find what youre looking for.</p>
              <button
                onClick={() => {
                  setFilter("all")
                  setSearchQuery("")
                }}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </RevealOnScroll>
      </div>
    </section>
  )
}
