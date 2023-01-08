import styles from 'styles/postHeader.module.css'
import ConvertDate from 'components/convertDate'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'

export default function PostHeader ({title, subtitle, src = '', publish = ''}) {
  return (
    <div className={styles.stack}>
      <h1 className={styles.title}>{title}</h1>
      {src && (
        <picture className={styles.pic}>
          <img src={src} />
        </picture>
      )}
      {publish && (
        <div className={styles.publish}>
          <FontAwesomeIcon icon={faClock} size="lg" color="var(--grayMedium)" />
          <ConvertDate dateISO={publish} />
        </div>
      )}
    </div>
  )
}
