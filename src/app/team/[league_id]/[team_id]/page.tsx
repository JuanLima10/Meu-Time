import { cookies } from 'next/headers'
import Link from 'next/link'


import { Navbar } from '@/components/Navbar'
import { Notification } from '@/components/Notification'
import { Header } from '@/components/Team/Header'
import { Info } from '@/components/Team/Info'
import { Players } from '@/components/Team/Players'

import { TeamsParamsProps } from '@/@types/Teams'

import Style from './styles.module.scss'

export default function Team({ params }: TeamsParamsProps) {
  const cookie = cookies().get('MT_session')?.value

  if (!cookie) {
    return (
      <Notification backButton>
        Você não tem permissão
        para acessar esssa pagina! 😥
      </Notification>
    )
  }

  return (
    <div className={Style.team}>
      <Navbar />
      <main>
        <Link href="/search">
          {'<-'} Voltar para escolha do time
        </Link>
        <div className={Style.content}>
          <div className={Style.duo}>
            {/* @ts-expect-error Server Component */}
            <Header team={params.team_id} cookie={cookie} />
            {/* @ts-expect-error Server Component */}
            <Info team={params.team_id} league={params.league_id} cookie={cookie} />
          </div>
          {/* @ts-expect-error Server Component */}
          <Players team={params.team_id} cookie={cookie} />
        </div>
      </main>
    </div>
  )
}