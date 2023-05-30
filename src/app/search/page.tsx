import { cookies } from 'next/headers'

import { FormSearch } from '@/components/Forms/FormSearch'
import { Notification } from '@/components/Notification'

import { getData } from '@/api/getData'

import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import Style from './styles.module.scss'

export default async function Search() {
  const cookie = cookies().get('MT_session')?.value
  const countries = await getData(
    '/countries',
    `${cookie}`
  )

  if (!cookie) {
    return (
      <Notification backButton>
        Você não tem permissão
        para acessar esssa pagina! 😥
      </Notification>
    )
  }

  return (
    <div className={Style.search}>
      <Navbar />
      <main>
        <FormSearch
          countries={countries}
          cookie={cookie}
        />
      </main>
      <Footer />
    </div>
  )
}