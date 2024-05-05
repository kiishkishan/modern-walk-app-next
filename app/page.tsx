'use client'

import React, { useEffect, useState } from 'react'
import ItemCard from '@/components/itemCard'
import flashSaleData from '@/utils/flashSaleData'
import CategoryCard from '@/components/categoryCard'
import Loading from '@/components/loading'

const HomePageContent: React.FC = () => {
  const clothingData = flashSaleData()

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulating API call delay
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          {/* Sale Section */}
          <h1 className="font-roboto mb-4 mt-8 px-4 py-2 text-lg font-bold leading-tight text-black sm:px-6 lg:px-8 lg:text-xl">
            Flash Sale
          </h1>

          <div className="w-100 flex flex-wrap justify-between">
            {clothingData.map((item, index) => (
              <div key={index} className="w-full px-2 md:w-1/2 lg:w-1/4">
                <ItemCard
                  title={item.title}
                  price={item.price}
                  description={item.description}
                  image={item.image}
                  id={0}
                  category={item.category}
                  rating={{
                    rate: 0,
                    count: 0,
                  }}
                />
              </div>
            ))}
          </div>
          <div className="mb-12" />
          {/* Category Section */}
          <div className="mb-8 w-full">
            <h1 className="font-roboto mb-4 px-4 py-2 text-lg font-bold leading-tight text-black sm:px-6 lg:px-8 lg:text-xl">
              Categories
            </h1>
            <div className="flex w-full justify-between">
              <CategoryCard title="Men's Clothing" />
              <CategoryCard title="Women's Clothing" />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default HomePageContent
