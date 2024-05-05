// components/CategoryPage.tsx

import React from 'react'
import { ClothingItemTypes } from '@/constants/types'
import ItemCard from './itemCard'

interface CategoryPageProps {
  title: string
  categoryData: ClothingItemTypes[]
}

const CategoryPage: React.FC<CategoryPageProps> = ({ title, categoryData }) => {
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="mb-6 text-3xl font-semibold">{title}</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {categoryData.map((item) => (
          <ItemCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}

export default CategoryPage
