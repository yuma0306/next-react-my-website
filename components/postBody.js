import styles from '/styles/postBody.module.css'

export default function PostBody({children}) {
  return (
    <div className={styles.stack}>
      {children}
    </div>
  )
}
