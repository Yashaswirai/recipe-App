import React from 'react'
import { useContext } from 'react'
import { dataContext } from '../context/RecepiContext'

const Recepies = () => {
  const {data} = useContext(dataContext);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Our <span className="text-red-400">Recepies</span>
          </h1>
          <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
            Discover delicious recipes crafted by talented chefs from around the world
          </p>
        </div>

        {data.length === 0 ? (
          <div className="text-center py-16">
            <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-lg p-12 max-w-md mx-auto">
              <div className="text-gray-500 mb-4">
                <svg className="mx-auto h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white mb-2">No recipes yet</h3>
              <p className="text-gray-400">Start by creating your first recipe!</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {data.map((recepie,index)=>(
              <div key={index} className="bg-gray-800 border border-gray-700 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src={recepie.image}
                    alt={recepie.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      recepie.type === 'veg'
                        ? 'bg-green-900/80 text-green-300 border border-green-700'
                        : 'bg-red-900/80 text-red-300 border border-red-700'
                    }`}>
                      {recepie.type === 'veg' ? '🌱 Veg' : '🍖 Non-Veg'}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h1 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-red-400 transition-colors duration-200">
                    {recepie.name}
                  </h1>

                  <p className="text-gray-300 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {recepie.description}
                  </p>

                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-white mb-2">Ingredients:</h3>
                    <p className="text-gray-300 text-sm line-clamp-2 bg-gray-700/50 border border-gray-600 p-3 rounded-lg">
                      {recepie.ingredients}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-semibold">
                          {recepie.chef.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">Chef {recepie.chef}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Recepies
