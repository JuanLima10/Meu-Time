import { LeaguesProps } from './Leagues'

export interface StatsProps {
  league: LeaguesProps
  form: string
  fixtures: {
    played: MatchProps
    wins: MatchProps
    draws: MatchProps
    loses: MatchProps
  }
  goals: {
    for: {
      total: MatchProps
      average: MatchProps
      minute: GoalsPerMinuteProps
    }
    against: {
      total: MatchProps
      average: MatchProps
      minute: GoalsPerMinuteProps
    }
  }
  lineups: [
    {
      formation: string
      played: number
    }
  ]
}

interface MatchProps {
  home: string
  away: string
  total: string
}

export interface GoalsPerMinuteProps {
    '0-15': MinutesProps
    '16-30': MinutesProps
    '31-45': MinutesProps
    '46-60': MinutesProps
    '61-75': MinutesProps
    '76-90': MinutesProps
    '91-105': MinutesProps
    '106-120': MinutesProps
}

interface MinutesProps {
  total: number
  percentage: string
}