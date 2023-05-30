import Image from 'next/image'

import { FormLogin } from '@/components/Forms/FormLogin'

import Style from './styles.module.scss'

export default function Login() {
  return (
    <main className={Style.login}>
      <div className={Style.hero}>
        <Image src="/logo.png" alt="Meu Time" width={300} height={300} />
        <h1>A wep app created with API-FOOTBALL (3.9.2)</h1>
      </div>
      <div className={Style.hero2}>
        <span>
          Entre para conferir as 
          informação do seu time!
        </span>
        <FormLogin />
      </div>
    </main>
  )
}