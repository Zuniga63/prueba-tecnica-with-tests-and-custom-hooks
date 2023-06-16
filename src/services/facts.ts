import { CAT_ENDPOINT_IMAGE_URL, CAT_ENDPOINT_RANDOM_FACT } from '../constants'

export const getRandomFact = async () => {
  const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
  const data = await res.json()
  return data.fact as string
}

export const getImageUrl = async (text: string) => {
  const apiUrl = `${CAT_ENDPOINT_IMAGE_URL}/cat/says/${text}?size=50&color=red&json=true`

  const res = await fetch(apiUrl)
  const data = await res.json()
  const { url } = data

  return `${CAT_ENDPOINT_IMAGE_URL}${url}`
}
