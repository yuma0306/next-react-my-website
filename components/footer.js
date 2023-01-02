import styles from '/styles/header.module.css'
import Logo from '/components/logo'
import Container from '/components/container'
import Social from '/components/social'

export default function Footer() {
  return (
    <Container>
      <footer>
        <Logo />
        <Social />
      </footer>
    </Container>
  )
}