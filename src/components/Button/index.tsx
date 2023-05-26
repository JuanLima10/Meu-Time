import { ButtonProps } from '@/@types/Button'

import Style from './styles.module.scss'

export function Button(props: ButtonProps) {
  return (
    <button {...props} className={Style.button}>
      {props.children}
    </button>
  )
}