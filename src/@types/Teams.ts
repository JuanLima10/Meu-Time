import { StatsProps } from './Stats'

export interface TeamsProps{
  id: string
  name: string
  code: string
  founded: number 
  country: string
  national: boolean
  logo: string
  venue: VenuesProps
}

export interface TeamsParamsProps {
  params: {
    league_id: string
    team_id: string
  }
}

export interface TeamsComponentProps {
  team: TeamsProps
  cookie?: string
  league: StatsProps
  venue: VenuesProps
}

export interface VenuesProps{
  id: number
  name: string
  address: string
  city: string
  capacity: number
  surface: string
  image: string
}

export interface PlayersProps {
    id: number
    name: string
    age: number
    number: number
    position: string
    photo: string
}