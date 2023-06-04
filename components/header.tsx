import Link from "next/link"
import { useRouter } from "next/router"

import styles from "../styles/header.module.css"

const Header = () => {
  const { pathname } = useRouter()

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <h1 className={styles.title}>
          {pathname !== "/" ? (
              <Link href="/">Tennis Chart（仮）</Link>
          ) : (
            "Tennis Chart（仮）"
          )}
        </h1>
      </div>
    </header>
  )
}

export default Header
