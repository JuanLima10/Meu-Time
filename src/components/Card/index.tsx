import Style from './styles.module.scss'

interface CardsProps {
  children: any
}

export function Card(props: CardsProps){
  return (
    <div className={Style.card}>
      {props.children}
    </div>
  )
}