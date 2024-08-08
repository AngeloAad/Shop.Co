import React from 'react'
import YouMightCard from '../components/YouMightCard'
import { tshirts } from '../constants'
import { Link } from 'react-router-dom'

const YouMight = () => {

  return (
    <section>
      <h2 className="flex justify-center items-center 
      font-montserrat font-black sm:text-[48px] text-[32px] pt-[110px]">
        YOU MIGHT ALSO LIKE
      </h2>

      <div
        className="flex-center flex-wrap mt-10 gap-y-10"
      >
        {tshirts.map((product) => (
          <div key={product.key}>
              <YouMightCard product={product} />
          </div>
        ))}
      </div>

    </section>
  )
}

export default YouMight