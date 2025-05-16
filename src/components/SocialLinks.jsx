export const SocialLinks = () => {
    return (
      <div className="mt-12">
        <h3 className="text-xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Let's Connect
        </h3>
  
        {/* Main container with glass effect */}
        <div className="grid grid-cols-1 gap-4">
          {/* Email Card */}
          <div className="group relative overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-blue-900/20 to-black/30 p-1 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-400/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
  
            <div className="relative flex items-center p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
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
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
  
              <div className="ml-4 flex-1">
                <p className="text-sm text-gray-400">Email</p>
                <a href="mailto:contact@santiagohe.dev" className="text-gray-200 hover:text-blue-400 transition-colors">
                  contact@santiagohe.dev
                </a>
              </div>
  
              <div className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">
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
                  className="text-gray-500 group-hover:text-blue-400"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
  
          {/* GitHub Card */}
          <div className="group relative overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-blue-900/20 to-black/30 p-1 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-400/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
  
            <div className="relative flex items-center p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
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
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </div>
  
              <div className="ml-4 flex-1">
                <p className="text-sm text-gray-400">GitHub</p>
                <a
                  href="https://github.com/santiagohe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-blue-400 transition-colors"
                >
                  github.com/santiagohe
                </a>
              </div>
  
              <div className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">
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
                  className="text-gray-500 group-hover:text-blue-400"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
  
          {/* LinkedIn Card */}
          <div className="group relative overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-blue-900/20 to-black/30 p-1 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-400/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
  
            <div className="relative flex items-center p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
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
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
  
              <div className="ml-4 flex-1">
                <p className="text-sm text-gray-400">LinkedIn</p>
                <a
                  href="https://linkedin.com/in/santiagohe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-blue-400 transition-colors"
                >
                  linkedin.com/in/santiagohe
                </a>
              </div>
  
              <div className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">
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
                  className="text-gray-500 group-hover:text-blue-400"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
  
          {/* Twitter Card */}
          <div className="group relative overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-blue-900/20 to-black/30 p-1 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-400/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
  
            <div className="relative flex items-center p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
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
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </div>
  
              <div className="ml-4 flex-1">
                <p className="text-sm text-gray-400">Twitter</p>
                <a
                  href="https://twitter.com/santiagohe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-blue-400 transition-colors"
                >
                  @santiagohe
                </a>
              </div>
  
              <div className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">
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
                  className="text-gray-500 group-hover:text-blue-400"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
  
        {/* Location and Availability */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="rounded-lg border border-white/10 bg-gradient-to-br from-blue-900/20 to-black/30 p-4 backdrop-blur-sm">
            <div className="flex items-center justify-center mb-2">
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
                className="text-blue-400"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <p className="text-center text-sm text-gray-400">Location</p>
            <p className="text-center text-gray-200">Phoenix, Arizona</p>
          </div>
  
          <div className="rounded-lg border border-white/10 bg-gradient-to-br from-blue-900/20 to-black/30 p-4 backdrop-blur-sm">
            <div className="flex items-center justify-center mb-2">
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
                className="text-blue-400"
              >
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                <line x1="16" x2="16" y1="2" y2="6" />
                <line x1="8" x2="8" y1="2" y2="6" />
                <line x1="3" x2="21" y1="10" y2="10" />
              </svg>
            </div>
            <p className="text-center text-sm text-gray-400">Availability</p>
            <p className="text-center text-gray-200">Available for freelance</p>
          </div>
        </div>
      </div>
    )
  }
  