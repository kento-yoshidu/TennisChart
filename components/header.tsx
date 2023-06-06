import Link from "next/link"
import { useRouter } from "next/router"

import styles from "../styles/header.module.css"

import { siteMetaData } from "../lib/constants"

const Header = () => {
  const { siteTitle } = siteMetaData
  const { pathname } = useRouter()

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <h1 className={styles.title}>
          {pathname !== "/" ? (
              <Link href="/">{siteTitle}</Link>
          ) : (
            <>{siteTitle}</>
          )}
        </h1>

        <Link href="about">About</Link>
      </div>
    </header>
  )
}

export default Header
