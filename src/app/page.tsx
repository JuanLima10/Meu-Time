import { api } from "@/api/api"

export default async function Home() {
  const {data} = await api.get('/teams?id=127')
  const team = data.response[0].team
  const venue = data.response[0].venue
  
  console.log(team.name)
  console.log(venue.name)

  return (
    <main>
      <span>{ team.name }</span>
    </main>
  )
}
