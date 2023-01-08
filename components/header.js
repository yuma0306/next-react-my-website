import styles from '/styles/header.module.css'
import Logo from '/components/logo'
import Nav from '/components/nav'
import Container from '/components/container'

export default function Header() {
  return (
    <header>
      <Container header>
        <div className={styles.flexContainer}>
          <Logo boxOn />
          <Nav />
        </div>
      </Container>
    </header>
  )
}