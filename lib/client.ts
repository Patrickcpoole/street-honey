import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { SubmissionsTyping } from "../typings";

export const client = sanityClient({
  projectId: 'm6h4sq13',
  dataset: 'production',
  apiVersion: '2023-06-07',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

const builder = imageUrlBuilder(client);
console.log('builder', builder)

export const urlFor = (source:string) => builder.image
(source);

export const submissionsUploader = (submission: SubmissionsTyping) => {
  console.log('this is client', client)
  
  fetch(`https://${client.config().projectId}.api.sanity.io/v2023-06-07/data/mutate/${client.config().dataset}`, {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${client.config().token}`
    },
    body: JSON.stringify({
      mutations: [{
        create: submission
      }]
    })
  })
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.error(error))
}