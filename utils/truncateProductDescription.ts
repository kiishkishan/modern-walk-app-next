// truncateProductDescription.ts
export const truncateProductDescription = (description: string): string => {
  // Your truncation logic here
  // For example:
  const maxLength = 100
  if (description.length > maxLength) {
    return description.substring(0, maxLength - 3) + '...'
  }
  return description
}
