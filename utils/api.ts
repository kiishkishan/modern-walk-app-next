import axios from 'axios'

const fetchClothingData = async (category: string) => {
  try {
    const response = await axios.get(
      `https://fakestoreapi.com/products/category/${category}`,
    )
    return response.data
  } catch (error) {
    console.error('Error fetching data:', error)
    return []
  }
}

export const fetchMensClothing = async () => {
  return fetchClothingData("men's clothing")
}

export const fetchWomensClothing = async () => {
  return fetchClothingData("women's clothing")
}
