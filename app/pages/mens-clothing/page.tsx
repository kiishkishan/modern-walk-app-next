// pages/mens-clothing.tsx

import React from 'react'
import { GetStaticProps } from 'next'
import { ClothingItemTypes } from '@/constants/types'
import { fetchMensClothing } from '@/utils/api'
import CategoryPage from '@/components/categoryPage'

interface MensClothingProps {
  mensClothingData: ClothingItemTypes[]
}

const MensClothingPage: React.FC<MensClothingProps> = ({
  mensClothingData,
}) => {
  return <CategoryPage title="Men's Clothing" categoryData={mensClothingData} />
}

export const getStaticProps: GetStaticProps = async () => {
  // Fetch data for men's clothing items
  const mensClothingData = await fetchMensClothing()

  return {
    props: {
      mensClothingData,
    },
  }
}

export default MensClothingPage
