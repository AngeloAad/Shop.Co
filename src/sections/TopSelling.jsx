import React from 'react'
import TopSellingCard from '../components/TopSellingCard';
import { products } from '../constants'
import Button from '../components/Button';

const TopSelling = () => {
  const second4 = products.slice(4, 8);

  return (
    <section>
      <h2 className="flex justify-center items-center 
      font-montserrat font-black text-[48px] max-sm:text-[32px] pt-[110px]">
        TOP SELLING
      </h2>

      <div
        className="flex-center flex-wrap mt-10 gap-y-10"
      >
        {second4.map((product) => (
          <div key={product.key}>
            <TopSellingCard {...product} />
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

export default TopSelling;