import { createClient } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  token: process.env.SANITY_API_TOKEN,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: process.env.NODE_ENV === "production",
};

export const sanityClient = createClient(config) // klient Sanity zainicjalizowany z powyższym configem

export const urlFor = (source) => createImageUrlBuilder(config).image(source); // Funkcja pomocnicza dostarczona przez nextsanity służąca do obsługi pobranych zdjęć z CMS sanity - tworzenie URL z assetow.