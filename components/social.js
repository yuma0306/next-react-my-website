import styles from 'styles/social.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faFacebookF,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'

export default function Social({ iconSize = 'initial', footer = false }) {
  return (
    <ul className={footer ? styles.footerList : styles.list} style={{ '--icon-size': iconSize }}>
      <li className={styles.item}>
        <a href="https://twitter.com/yuma03060306">
          <FontAwesomeIcon icon={faTwitter} />
          <span className="sr-only">Twitter</span>
        </a>
      </li>
      <li className={styles.item}>
        <a href="https://github.com/yuma0306">
          <FontAwesomeIcon icon={faGithub} />
          <span className="sr-only">GitHub</span>
        </a>
      </li>
    </ul>
  )
}
