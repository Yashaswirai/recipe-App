import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            About <span className="text-red-400">Recipe App</span>
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Your personal culinary companion for discovering, creating, and organizing
            delicious recipes from around the world.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-16">
          <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-xl p-8 sm:p-12">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
              We believe that cooking is an art form that brings people together. Recipe App was created
              to provide home chefs, cooking enthusiasts, and food lovers with a simple yet powerful
              platform to store, organize, and share their favorite recipes. Whether you're a beginner
              learning your first dish or a seasoned chef with hundreds of creations, our app is designed
              to make your culinary journey more enjoyable and organized.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              What Makes Us <span className="text-red-400">Special</span>
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Discover the features that make Recipe App your perfect cooking companion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Recipe Management</h3>
              <p className="text-gray-300 leading-relaxed">
                Create, edit, and organize your recipes with ease. Add detailed descriptions,
                ingredient lists, and beautiful images to make your recipes come alive.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white fill-current" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Favorites System</h3>
              <p className="text-gray-300 leading-relaxed">
                Mark your favorite recipes with heart icons and quickly access the dishes you love most.
                Your preferences are automatically saved for future cooking sessions.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Responsive Design</h3>
              <p className="text-gray-300 leading-relaxed">
                Access your recipes anywhere, anytime. Our responsive design ensures a perfect
                experience on desktop, tablet, and mobile devices.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Local Storage</h3>
              <p className="text-gray-300 leading-relaxed">
                Your recipes are stored securely in your browser's local storage. No account required,
                no data sent to external servers - complete privacy and control.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Recipe Categories</h3>
              <p className="text-gray-300 leading-relaxed">
                Organize your recipes by type - vegetarian and non-vegetarian options are clearly
                marked with intuitive icons for easy identification.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Fast & Intuitive</h3>
              <p className="text-gray-300 leading-relaxed">
                Built with modern web technologies for lightning-fast performance and smooth
                animations that make using the app a delightful experience.
              </p>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-16">
          <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-xl p-8 sm:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Built with <span className="text-red-400">Modern Technology</span>
              </h2>
              <p className="text-lg text-gray-300">
                Recipe App is powered by cutting-edge web technologies
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-lg">React</span>
                </div>
                <p className="text-gray-300 text-sm">Frontend Framework</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-lg">Vite</span>
                </div>
                <p className="text-gray-300 text-sm">Build Tool</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-xs">Tailwind</span>
                </div>
                <p className="text-gray-300 text-sm">CSS Framework</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-lg">JS</span>
                </div>
                <p className="text-gray-300 text-sm">JavaScript</p>
              </div>
            </div>
          </div>
        </div>

        {/* Developer Section */}
        <div className="mb-16">
          <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-xl p-8 sm:p-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">YR</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Meet the Developer</h2>
              <h3 className="text-xl font-semibold text-red-400 mb-4">Yashaswi Rai</h3>
              <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
                A passionate full-stack developer with a love for creating beautiful, functional web applications.
                Recipe App was born from the desire to help fellow cooking enthusiasts organize their culinary
                creations in a simple, elegant way. When not coding, you can find me experimenting with new
                recipes in the kitchen!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://github.com/Yashaswirai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-gray-600 rounded-xl text-gray-300 hover:text-white hover:border-gray-500 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-gray-400/20"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub Profile
                </a>

                <a
                  href="mailto:yashaswirai2016@gmail.com"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-red-500/25 transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-red-400/20"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/20 rounded-2xl p-8 sm:p-12">
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
              Ready to Start Your Culinary Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              Join the Recipe App community and start organizing your favorite recipes today.
              It's free, fast, and designed with love for cooking enthusiasts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/Create"
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl hover:shadow-red-500/25 transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-red-400/20"
              >
                Create Your First Recipe
              </Link>
              <Link
                to="/Recepies"
                className="border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-gray-400/20"
              >
                Explore Recipes
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
