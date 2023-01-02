import styles from '/styles/hero.module.css';
import Image from 'next/legacy/image'
// import eyecatch from '/images/dinosaur.png'
import eyecatch from 'images/cube.jpg'

export default function Hero({ title, subtitle, imageOn = false }) {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      {imageOn && (
        <picture>
          <img src="dinosaur.png" />
        </picture>
      )}
    </div>
  )
}

