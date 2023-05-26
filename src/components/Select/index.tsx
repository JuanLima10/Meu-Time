import { SelectProps } from '@/@types/Select'
import { ChevronDown } from 'lucide-react'

import Style from './styles.module.scss'

export function Select(props: SelectProps) {
  return (
    <div className={Style.select}>
      <label>{props.label}</label>
      <div className={Style.content}>
        <select value={props.value} {...props}>
          {props.children}
        </select>
        <ChevronDown className={Style.icon}/>
      </div>
    </div>
  )
}