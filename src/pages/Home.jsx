import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { dataContext } from '../context/RecepiContext'

const Home = () => {
  const { data } = useContext(dataContext);
  const totalRecipes = data.length;
  const favoriteRecipes = data.filter(recipe => recipe.favorite).length;
  const vegRecipes = data.filter(recipe => recipe.type === 'veg').length;
  const nonVegRecipes = data.filter(recipe => recipe.type === 'non-veg').length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-red-600/10"></div>
        <div className="relative py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-7xl">
                Welcome to{' '}
                <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  Recipe App
                </span>
              </h1>
              <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Discover, create, and share amazing recipes from around the world.
                Your culinary journey starts here with our collection of delicious recipes
                crafted by talented chefs.
              </p>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/Recepies"
                  className="group bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl hover:shadow-red-500/25 transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-red-400/20"
                >
                  <span className="flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    Explore Recipes
                  </span>
                </Link>

                <Link
                  to="/Create"
                  className="group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-400/20"
                >
                  <span className="flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2 group-hover:rotate-90 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Create Recipe
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Your Recipe <span className="text-red-400">Collection</span>
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Track your culinary journey with these statistics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Total Recipes */}
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">{totalRecipes}</p>
                  <p className="text-sm text-gray-400">Total Recipes</p>
                </div>
              </div>
            </div>

            {/* Favorite Recipes */}
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white fill-current" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">{favoriteRecipes}</p>
                  <p className="text-sm text-gray-400">Favorites</p>
                </div>
              </div>
            </div>

            {/* Vegetarian Recipes */}
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-white text-lg">🌱</span>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">{vegRecipes}</p>
                  <p className="text-sm text-gray-400">Vegetarian</p>
                </div>
              </div>
            </div>

            {/* Non-Vegetarian Recipes */}
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-white text-lg">🍖</span>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">{nonVegRecipes}</p>
                  <p className="text-sm text-gray-400">Non-Vegetarian</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Why Choose <span className="text-red-400">Recipe App</span>?
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Everything you need to manage your culinary creations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Easy Recipe Creation</h3>
              <p className="text-gray-300 leading-relaxed">
                Create and share your favorite recipes with our intuitive form. Add ingredients,
                descriptions, and beautiful images to showcase your culinary skills.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white fill-current" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Favorite System</h3>
              <p className="text-gray-300 leading-relaxed">
                Mark your favorite recipes with heart icons and keep track of the dishes you love most.
                Your favorites are saved automatically for quick access.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Local Storage</h3>
              <p className="text-gray-300 leading-relaxed">
                All your recipes are stored locally in your browser, ensuring your data is always
                available and secure. No account required, just start cooking!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/20 rounded-2xl p-8 sm:p-12">
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
              Ready to Start Cooking?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of home chefs who are already using Recipe App to organize
              and share their favorite recipes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/Create"
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl hover:shadow-red-500/25 transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-red-400/20"
              >
                Create Your First Recipe
              </Link>
              <Link
                to="/About"
                className="border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-gray-400/20"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
