import React from 'react'

const NoPageFound = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-8 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-4xl mx-auto'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold text-white sm:text-5xl lg:text-6xl'>
            404 - Page Not Found
          </h1>
          <p className='mt-4 text-xl text-gray-300 max-w-2xl mx-auto'>
            The page you are looking for does not exist.
          </p>
        </div>
      </div>
    </div>
  )
}

export default NoPageFound
