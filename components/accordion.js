// react
import { useState, useRef } from 'react'
// lib
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons'
// styles
import styles from 'styles/accordion.module.css'


export default function Accordion({ heading, children }) {
  // textIsOpen→変数
  // setTextIsOpen→変数を更新する関数
  const [textIsOpen, setTextIsOpen] = useState(false)

  const toggleText = () => {
    setTextIsOpen((prev) => !prev)
  }
  const refText = useRef(null)

  return (
    <dl className={textIsOpen ? styles.open : styles.close}>
      <dt className={styles.heading}>
        <button onClick={toggleText}>
          {heading}
          <FontAwesomeIcon icon={faCircleChevronDown} className={styles.icon} />
        </button>
      </dt>
      <dd
        className={styles.text}
        ref={refText}
        style={{
          '--text-height': refText.current
            ? `${refText.current.scrollHeight}px`
            : '0px',
        }}
      >
        <div className={styles.textInner}>{children}</div>
      </dd>
    </dl>
  )
}


