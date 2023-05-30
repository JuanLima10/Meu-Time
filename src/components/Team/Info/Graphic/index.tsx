import { Line } from 'react-chartjs-2'

import { GraphicsProps } from '@/@types/Graphics'

import Style from './styles.module.scss'

export function Graphic(props: GraphicsProps) {
  const data = {
    labels: [
      '0-15',
      '16-30',
      '31-45',
      '46-60',
      '61-75',
      '76-90',
      '91-105',
      '106-120'
    ],
    datasets: [{
      label: 'Gols marcados',
      data: [
        props.for['0-15'].total,
        props.for['16-30'].total,
        props.for['31-45'].total,
        props.for['46-60'].total,
        props.for['61-75'].total,
        props.for['76-90'].total,
        props.for['91-105'].total,
        props.for['106-120'].total
      ],
      fill: true,
      borderColor: '#7A84FF',
      tension: 0.4
    },
    {
      label: 'Gols sofridos',
      data: [
        props.against['0-15'].total,
        props.against['16-30'].total,
        props.against['31-45'].total,
        props.against['46-60'].total,
        props.against['61-75'].total,
        props.against['76-90'].total,
        props.against['91-105'].total,
        props.against['106-120'].total
      ],
      fill: true,
      borderColor: '#F82D2D',
      tension: 0.4
    }],
  }

  return (
    <div className={Style.graphic}>
      <h2>Gols marcados por minuto:</h2>
      <Line className={Style.graph} data={data} />
    </div>
  )
}