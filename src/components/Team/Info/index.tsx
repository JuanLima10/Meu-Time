import { Content } from './Content'

import { TeamsComponentProps } from '@/@types/Teams'
import { getData } from '@/api/getData'

export async function Info(props: TeamsComponentProps) {
  const year = new Date().getFullYear()
  
  const info = await getData(
    `/teams?id=${props.team}`,
    `${props.cookie}`
  )

  let stats = await getData(
    `/teams/statistics?league=${props.league}&season=${year - 1}&team=${props.team}`,
    `${props.cookie}`
  )

  return (
    <Content 
      team={info[0].team} 
      venue={info[0].venue}
      league={stats}
    />
  )
}