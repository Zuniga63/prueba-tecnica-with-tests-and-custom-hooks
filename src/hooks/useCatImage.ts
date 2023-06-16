import { useEffect, useState } from 'react'
import { getImageUrl } from '../services/facts'

export default function useCatImage({ fact }: { fact: string }) {
  const [imageUrl, setImageUrl] = useState('')

  const updateImageUrl = async (text: string) => {
    const newUrl = await getImageUrl(text)
    setImageUrl(newUrl)
  }

  useEffect(() => {
    if (!fact) return
    const threeFirstWord = fact.split(' ', 3).join(' ')
    updateImageUrl(threeFirstWord)
  }, [fact])

  return { imageUrl }
}
