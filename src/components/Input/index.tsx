import { InputProps } from '@/@types/Input'

import Style from './styles.module.scss'

export function Input(props: InputProps) {
  return (
    <div className={Style.input}>
      <label>
        {props.label}
      </label>
      <input {...props} />
    </div>
  )
}