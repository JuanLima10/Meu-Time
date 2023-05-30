'use client'
import * as Tabs from '@radix-ui/react-tabs'
import { Chart as ChartJS, registerables } from 'chart.js'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { MenuTabs } from '@/components/Tabs'
import { Graphic } from '../Graphic'

import { StatsProps } from '@/@types/Stats'
import {
  TeamsComponentProps,
  TeamsProps,
  VenuesProps
} from '@/@types/Teams'

import Style from './styles.module.scss'

ChartJS.register(...registerables)

export function Content(props: TeamsComponentProps) {
  const team: TeamsProps = props.team
  const venue: VenuesProps = props.venue
  const stats: StatsProps = props.league

  let lastMatchs
  if (stats.form) {
    lastMatchs = stats.form.split('').length
  }

  return (
    <MenuTabs id_about={venue.id} id_stats={stats.league.id}>
      {venue.id &&
        <Tabs.Content className={Style.content} value="about">
          <div className={Style.about}>
            <p>
              {team.name} ({team.code})
              fundado em {team.founded} no(a){' '}
              {team.country} joga no {venue.name}
              {' '}que fica localizado em: {venue.address} com
              capacidade para {venue.capacity} pessoas.
            </p>
            <Image
              src={venue.image}
              alt={venue.name}
              width={732} height={402}
              loading="lazy"
            />
          </div>
        </Tabs.Content>
      }
      {stats.league.id &&
        <Tabs.Content className={Style.content} value="stats">
          <div className={Style.stats}>
            <h1>{stats.league.name}</h1>
            <div className={Style.header}>
              <div className={Style.info}>
                <div className={Style.played}>
                  <h2>Temporada de 2022</h2>
                  <h2>Ultimas partidas: {' '}
                    {lastMatchs &&
                      stats.form.split('')
                      .slice(lastMatchs - 25, lastMatchs).map((match, index) => {
                        if (match === 'W') {
                          return <small className={Style.win} key={index}>V{' '}</small>
                        } else if (match === 'L') {
                          return <small className={Style.lost} key={index}>D{' '}</small>
                        }
                        return <small className={Style.draw} key={index}>E{' '}</small>
                      })
                    }
                  </h2>
                </div>
              </div>
              <Image
                src={stats.league.logo}
                alt={stats.league.name}
                width={60} height={60}
                loading="lazy"
              />
            </div>
            <div className={Style.otherStats}>
              <div className={Style.cards}>
                <div className={Style.vertical}>
                  <Card>
                    <h2>Em casa:</h2>
                    <h3>
                      {stats.goals.for.total.home} gols
                      <small>1.8</small>
                    </h3>
                    <h2>
                      <strong>{stats.fixtures.wins.home} vitorias</strong> • {' '}
                      <strong>{stats.fixtures.draws.home} empate</strong> • {' '}
                      <strong>{stats.fixtures.loses.home} derrotas</strong>
                    </h2>
                  </Card>
                  <Card>
                    <h2>Fora de casa:</h2>
                    <h3>
                      {stats.goals.for.total.away} gols
                      <small>1.8</small>
                    </h3>
                    <h2>
                      <strong>{stats.fixtures.wins.away} vitorias</strong> • {' '}
                      <strong>{stats.fixtures.draws.away} empate</strong> • {' '}
                      <strong>{stats.fixtures.loses.away} derrotas</strong>
                    </h2>
                  </Card>
                  <Card>
                    <h2>Todos os jogos:</h2>
                    <h3>Formação mais usada:
                      {stats.lineups[0] && stats.lineups[0].formation}
                    </h3>
                    <h3>
                      {stats.goals.for.total.total} gols
                      <small>1.8</small>
                    </h3>
                    <h2>
                      <strong>{stats.fixtures.wins.total} vitorias</strong> • {' '}
                      <strong>{stats.fixtures.draws.total} empate</strong> • {' '}
                      <strong>{stats.fixtures.loses.total} derrotas</strong>
                    </h2>
                  </Card>
                </div>
                <Graphic
                  for={stats.goals.for.minute}
                  against={stats.goals.against.minute}
                />
              </div>
            </div>
          </div>
        </Tabs.Content>
      }
    </MenuTabs>
  )
}