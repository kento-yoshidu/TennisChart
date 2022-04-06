import { createClient } from "microcms-js-sdk"

export const client = createClient({
  serviceDomain: "jamsample",
  // @ts-ignore
  apiKey: process.env.API_KEY
})
