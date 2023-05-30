import { CardsProps } from '@/@types/Card'

import Style from './styles.module.scss'

export function Card(props: CardsProps){
  return (
    <div className={Style.card}>
      {props.children}
    </div>
  )
}