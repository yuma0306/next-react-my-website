import styles from '/styles/hero.module.css';
// import Image from 'next/legacy/image'

export default function Hero({ title, subtitle, imageOn = false }) {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.block}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      {imageOn && (
        <picture className={styles.pic}>
          <img src="dinosaur.png" />
        </picture>
      )}
    </div>
  )
}

