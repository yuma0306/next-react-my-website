// next
import Link from 'next/link'
// Hooks
import { useState } from 'react'
// styles
import styles from '/styles/nav.module.css'

export default function Nav() {
  // navIsOpen = 変数名
  // setNavIsOpen = 変数を更新する関数
  const [navIsOpen, setNavIsOpen] = useState(false)
  // 【論理否定】prevがfalseならtrue,trueならfalseをリターン
  const toggleNav = () => {
    setNavIsOpen((prev) => !prev)
  }

  return (
    <nav className={navIsOpen ? styles.open : styles.close} onClick={toggleNav}>
      {navIsOpen && (
        <style jsx global> {`
          @media (max-width: 767px) {
            html,body {
              overflow: hidden;
              postion: fixed;
              width: 100%;
            }
          }
        `}</style>
      )
      }
      <button className={styles.btn}>
        <span className={styles.bar}></span>
        <span className='sr-only'>MENU</span>
      </button>
      <ul className={styles.list}>
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about">
            About
          </Link>
        </li>
        <li>
          <Link href="/blog">
            Blog
          </Link>
        </li>
      </ul>
    </nav>

  )
}