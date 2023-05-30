export const getData = async (url: string, cookie: string) =>{
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${url}`, {
    next: {
      revalidate: 86400,
    },
    headers: {
      'x-rapidapi-host': 'v3.football.api-sports.io',
      'x-rapidapi-key': `${cookie}`,
    },
  })
  const data = await response.json()
  return data.response
}