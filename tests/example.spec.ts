import { test, expect } from '@playwright/test'
import { CAT_ENDPOINT_IMAGE_URL } from '../src/constants'

const LOCALHOST_URL = 'http://localhost:5173/'

test('app shows random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imageSource = await image.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSource?.startsWith(CAT_ENDPOINT_IMAGE_URL)).toBeTruthy()
})
