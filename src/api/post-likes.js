require("dotenv").config({
  path: `.env`,
})

import {createClient} from '@sanity/client'

export const client = createClient({
  projectId: process.env.GATSBY_SANITY_PROJECT_ID,
  dataset: process.env.GATSBY_SANITY_DATASET,
  useCdn: true,
  apiVersion: '2023-07-11',
  token: process.env.SANITY_TOKEN
})

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://kryptonum.eu');
  res.setHeader('Access-Control-Allow-Credentials', true);
  if(req.method === `POST`){
    client
    .patch(req.body.id)
    .inc({likes: 1})
    .commit()
    .then(() => {
      res.status(200).json({ success: true })
    })
    .catch(() => {
      res.status(400).json({ success: false })
    })
  } else {
    res.redirect(404, '/404')
  }
}