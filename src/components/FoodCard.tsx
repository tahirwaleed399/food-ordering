import React from 'react'
import { Food } from '../lib/types'
import { Link } from 'react-router-dom'

const FoodCard = ({food}:{food : Food}) => {
  return (
    <Link to={`/food-item/${food.id}`} className="flex justify-center w-full">
    <div className=" bg-white border border-gray-200 rounded-lg shadow min-w-64 max-w-64"key={food.id}>
      <a href="#">
        <img
          className="rounded-t-lg h-52 w-full object-cover"
          src={food.url}
          alt=""
        />
      </a>
      <div className="p-2">
        <a href="#">
          <h5 className="mb-2 text-md font-semibold tracking-tight text-gray-900 ">
            {food.title}
          </h5>
          <div className="w-full flex justify-between items-center mt-3 mb-2">
            <span className="flex gap-1">
              <span className="text-primary">
                $
              </span>
              <span className="font-normal">
                {food.price}
              </span>
            </span>

            <div>
            <svg width="18" height="17" viewBox="0 0 18 17" fill={food.isFavourite ? 'red' : 'white'} xmlns="http://www.w3.org/2000/svg">
<path d="M9.496 15.9242C9.224 16.0253 8.776 16.0253 8.504 15.9242C6.184 15.0899 1 11.6096 1 5.71067C1 3.10674 2.992 1 5.448 1C6.904 1 8.192 1.74157 9 2.88764C9.41102 2.3027 9.94638 1.8273 10.5632 1.4995C11.18 1.17171 11.8611 1.00064 12.552 1C15.008 1 17 3.10674 17 5.71067C17 11.6096 11.816 15.0899 9.496 15.9242Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </div>
          </div>
        </a>
      </div>
    </div>
</Link>
  )
}

export default FoodCard