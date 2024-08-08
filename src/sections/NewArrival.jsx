import React from 'react'
import NewArrivalCard from '../components/NewArrivalCard'
import { products } from '../constants'
import Button from '../components/Button';

const NewArrival = () => {
  const first4 = products.slice(0, 4);

  return (
    <section>
      <h2 className="flex justify-center items-center 
      font-montserrat font-black text-[48px] max-sm:text-[32px] pt-[110px]">
        NEW ARRIVALS
      </h2>

      <div
        className="flex-center flex-wrap mt-10 gap-y-10"
      >
        {first4.map((product) => (
          <div key={product.key}>
              <NewArrivalCard product={product} />
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center pt-4">
      <Button label="View All" backgroundColor="#FFFFFF"
      textColor="text-black font-medium" 
      className="font-montserrat text-[16px] w-[218px] 
      rounded-[62px] mt-6 max-sm:w-full" />
      </div>

    </section>
  )
}

export default NewArrival