import React from 'react'

const Card = ({ name, age, location }) => {
  return (
    <div className="max-w-sm rounded-lg shadow-lg bg-white p-6 m-4 hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col space-y-3">
        <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
        <div className="flex items-center space-x-2">
          <span className="text-gray-600 font-semibold">Age:</span>
          <span className="text-gray-700">{age}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-gray-600 font-semibold">Location:</span>
          <span className="text-gray-700">{location}</span>
        </div>
      </div>
    </div>
  )
}

export default Card
