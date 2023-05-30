'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { ChangeEvent, FormEvent, useState } from 'react'

import { Button } from '@/components/Button'
import { Select, SelectLoading } from '@/components/Select'

import { FormSearchProps } from '@/@types/Form'
import { LeaguesProps } from '@/@types/Leagues'
import { TeamsProps } from '@/@types/Teams'
import { getData } from '@/api/getData'

import Style from './styles.module.scss'

export function FormSearch(props: FormSearchProps) {
  const router = useRouter()
  const year = new Date().getFullYear()

  const [country, setCountry] = useState('')
  const [league, setLeague] = useState('')
  const [team, setTeam] = useState('')

  const [isLoadLeague, setIsLoadLeague] = useState(false)
  const [isLoadTeam, setIsLoadTeam] = useState(false)

  const [leagues, setLeagues] = useState<LeaguesProps[]>([])
  const [teams, setTeams] = useState<TeamsProps[]>([])

  async function getCountry(e: ChangeEvent<HTMLSelectElement>) {
    setIsLoadLeague(true)
    setCountry(e.target.value)
    const leagues = await getData(
      `/leagues?country=${e.target.value}`,
      `${props.cookie}`
    )
    setLeagues(leagues)
    setIsLoadLeague(false)
  }

  async function getLeague(e: ChangeEvent<HTMLSelectElement>) {
    setIsLoadTeam(true)
    setLeague(e.target.value)
    const teams = await getData(
      `/teams?league=${e.target.value}&season=${year - 1}`,
      `${props.cookie}`

    )
    // if (teams.length === 0) {
    //   const teams = await getData(
    //     `/teams?league=${e.target.value}&season=${year - 1}`,
    //     `${props.cookie}`
    //   )
    //   setTeams(teams)
    // } else {
    //   setTeams(teams)
    // }
    setTeams(teams)
    setIsLoadTeam(false)
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    router.push(
      `/team/${formData.get('league')}/${formData.get('team')}`
    )
  }

  return (
    <div className={Style.form}>
      <Image src="/stars.png" alt="stars" width={130} height={59} />
      <form onSubmit={handleSubmit}>
        <h1>Agora chegou a hora de selecionar o time.</h1>
        <Select
          title="País"
          label="Selecione o País"
          onChange={getCountry}
        >
          {props.countries.map((c) => (
            <option key={c.name} value={c.name}>
              {c.name}
            </option>
          ))}
        </Select>
        {!isLoadLeague ?
          country !== '' ?
            <Select
              title="Campeonato"
              name="league"
              label="Selecione o Campeonato"
              onChange={getLeague}
            >
              {leagues.map((l: any) => (
                <option key={l.league.id} value={l.league.id}>
                  {l.league.name}
                </option>
              ))}
            </Select>
            :
            <Select title="Campeonato" label="Selecione o Campeonato" disabled />
          :
          <SelectLoading title="Carregando..." label="Selecione o Campeonato" disabled />
        }
        {!isLoadTeam ?
          country !== '' && league !== '' ?
            <Select
              title="Time"
              name="team"
              label="Selecione o Time"
              onChange={(e: ChangeEvent<HTMLSelectElement>) => setTeam(e.target.value)}
            >
              {teams.map((t: any) => (
                <option key={t.team.id} value={t.team.id}>
                  {t.team.name}
                </option>
              ))}
            </Select>
            :
            <Select title="Time" label="Selecione o Time" disabled />
          :
          <SelectLoading title="Carregando..." label="Selecione o Time" disabled />
        }
        {country !== '' && league !== '' && team !== '' ?
          <Button type='submit'>
            Ver Time
          </Button>
          :
          <Button disabled>
            Ver Time
          </Button>
        }
      </form>
    </div>
  )
}