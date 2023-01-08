import styles from '/styles/container.module.css';

export default function Container({ children, header = false }) {
  return (
    <div className={header ? styles.header : styles.default}>
      {children}
    </div>
  )
}