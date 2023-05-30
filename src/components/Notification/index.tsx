import Link from 'next/link'

import { NotificationProps } from '@/@types/Notification'

import Style from './styles.module.scss'

export function Notification(props: NotificationProps) {
  return (
    <main className={Style.notification}>
      <span>
        {props.children}
        <br />
        {props.backButton && 
          <Link href="/">
            {'<-'} Voltar para o login
          </Link>
        }
      </span>
    </main>
  )
}