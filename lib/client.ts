import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { Image } from "../typings";

export const client = sanityClient({
  projectId: 'm6h4sq13',
  dataset: 'production',
  apiVersion: '2023-01-11',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

const builder = imageUrlBuilder(client);
console.log('builder', builder)

export const urlFor = (source:string) => builder.image
(source);