import React from 'react'
import { useContext } from 'react'
import { dataContext } from '../context/RecepiContext'
import RecepieCard from '../components/RecipeCard'

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
                <RecepieCard recepie={recepie}/>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Recepies
