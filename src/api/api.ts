import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "x-rapidapi-key": process.env.NEXT_PUBLIC_API_KEY,
    "x-rapidapi-host": "v3.football.api-sports.io"
  }
})