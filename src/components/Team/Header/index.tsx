import Image from 'next/image'

import { TeamsComponentProps } from '@/@types/Teams'
import { getData } from '@/api/getData'

import Style from './styles.module.scss'

export async function Header(props: TeamsComponentProps) {
  const response = await getData(
    `/teams?id=${props.team}`,
    `${props.cookie}`
  )

  return (
    <header className={Style.header}>
      <div className={Style.info}>
        <Image
          src={response[0].team.logo}
          alt={response[0].team.name}
          width={100} height={100}
        />
        <div className={Style.texts}>
          <h1>{response[0].team.name}</h1>
          <h6>{'#'}{response[0].team.id}</h6>
        </div>
      </div>
      <div className={Style.details}>
        <h2>País: {response[0].team.country}</h2>
        <h2>Fundação: {response[0].team.founded}</h2>
        <h2>Abreviação: {response[0].team.code}</h2>
      </div>
    </header>
  )
}