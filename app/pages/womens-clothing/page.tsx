// pages/mens-clothing.tsx

import React from 'react'
import { GetStaticProps } from 'next'
import { ClothingItemTypes } from '@/constants/types'
import { fetchWomensClothing } from '@/utils/api'
import CategoryPage from '@/components/categoryPage'

interface WomensClothingProps {
  WomensClothingData: ClothingItemTypes[]
}

const WomensClothingPage: React.FC<WomensClothingProps> = ({
  WomensClothingData,
}) => {
  return (
    <CategoryPage title="Men's Clothing" categoryData={WomensClothingData} />
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // Fetch data for men's clothing items
  const womensClothingData = await fetchWomensClothing()

  return {
    props: {
      womensClothingData,
    },
  }
}

export default WomensClothingPage
