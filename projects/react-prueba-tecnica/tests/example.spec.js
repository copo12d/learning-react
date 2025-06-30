// @ts-check
import { test, expect } from '@playwright/test';
import { exec } from 'child_process';
import { getRandomValues } from 'crypto';

const LOCALHOST_URL = 'http://localhost:5173/';
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

test('app shows random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')
  const button = await page.getByRole('button')

  const textContent = await text.textContent()
  const imageUrl = await image.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageUrl?.startsWith(CAT_PREFIX_IMAGE_URL)).toBeTruthy()
  const previousImageUrl = imageUrl || '';

  // Click the button to change the image
  await button.click();

  console.log(previousImageUrl)
  // Wait for the image src to change
  await expect(image).not.toHaveAttribute('src', previousImageUrl);


});


