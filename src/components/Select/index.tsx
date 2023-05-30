import { SelectProps } from '@/@types/Select'
import { ChevronDown } from 'lucide-react'

import Style from './styles.module.scss'

export function Select(props: SelectProps) {
  return (
    <div className={Style.select}>
      <label>{props.label}</label>
      <div className={Style.content}>
        <select value={props.value} defaultValue={'DEFAULT'} {...props}>
          <option value="DEFAULT" disabled>{props.title}</option>
          {props.children}
        </select>
        <ChevronDown className={Style.icon}/>
      </div>
    </div>
  )
}

export function SelectLoading(props: SelectProps) {
  return (
    <div className={Style.select}>
      <label>{props.label}</label>
      <div className={Style.content}>
        <select defaultValue={'DEFAULT'} {...props}>
          <option value="DEFAULT" disabled>{props.title}</option>
        </select>
        <div className={Style.loading}>
          <div></div><div></div><div></div><div></div>
        </div>
      </div>
    </div>
  )
}