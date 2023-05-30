import Image from 'next/image'

import Link from 'next/link'
import Style from './styles.module.scss'

export function Navbar() {
  return (
    <header className={Style.navbar}>
      <Link href="/">
        <Image src="/logo.png" alt="logo Meu Time" width={50} height={50}/>
      </Link>
    </header>
  ) 
}