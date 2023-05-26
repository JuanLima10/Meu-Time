import Image from 'next/image'

import Style from './styles.module.scss'

export function Navbar() {
  return (
    <header className={Style.navbar}>
      <Image src="/logo.png" alt="logo Meu Time" width={50} height={50}/>
    </header>
  ) 
}