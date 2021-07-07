import Link from 'next/link'

import Image from 'next/image'
import logoImg from '../../../public/images/logo.svg'

import { ActiveLink } from './ActiveLink'
import { SignInButton } from './SignInButton'

import styles from './styles.module.scss'

export function Header() {
  return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/">
          <Image src={logoImg} alt="Logo Ignews"/>
        </Link>

        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            <a>Home</a>
          </ActiveLink>

          <ActiveLink activeClassName={styles.active} href="/posts">
            <a>Posts</a>
          </ActiveLink>
        </nav>

        <SignInButton />
      </div>
    </header>
  )
}