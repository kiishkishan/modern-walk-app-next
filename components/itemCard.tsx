import React from 'react'
import Image from 'next/image'
import { truncateProductDescription } from '@/utils/truncateProductDescription'
import { ClothingItemTypes } from '@/constants/types'

const ItemCard: React.FC<ClothingItemTypes> = ({
  title,
  price,
  description,
  image,
  category,
}) => {
  const truncatedDescription = truncateProductDescription(description)
  const truncatedTitle = truncateProductDescription(title)

  return (
    <div className="relative flex w-full max-w-sm flex-col rounded-2xl bg-white shadow-md">
      <h2 className="mb-2 line-clamp-2 overflow-hidden px-4 pt-4 text-center text-lg font-bold">
        {truncatedTitle}
      </h2>
      <div className="relative h-48 w-full overflow-hidden rounded-t-2xl">
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div
        className={`flex flex-grow flex-col justify-between rounded-b-2xl rounded-t-2xl border-t border-gray-300 p-4 ${category === "men's clothing" ? 'bg-green-500' : category === "women's clothing" ? 'bg-red-500' : 'bg-gray-500'}`}
      >
        <p className="mb-2 text-center font-bold text-blue-600">
          Price: ${price}
        </p>
        <div className="flex-grow overflow-y-auto">
          <p className="text-sm">{truncatedDescription}</p>
        </div>
      </div>
    </div>
  )
}

export default ItemCard
