import { PlayersProps, TeamsComponentProps } from '@/@types/Teams'
import { getData } from '@/api/getData'

import Image from 'next/image'
import Style from './styles.module.scss'

export async function Players(props: TeamsComponentProps) {
  const response = await getData(
    `/players/squads?team=${props.team}`,
    `${props.cookie}`
  )

  return (
    <div className={Style.players}>
      <h1>Jogadores do time</h1>
      <hr />
      <div className={Style.playersContainer}>
        {response[0].players.map((player: PlayersProps) => (
          <div key={player.id} className={Style.player}>
            <Image
              src={player.photo}
              alt={player.name}
              width={50} height={50}
              loading="lazy"
            />
            <div className={Style.info}>
              <h2>{player.name}</h2>
              <h3>{player.position}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}