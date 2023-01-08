import styles from 'styles/postCategories.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons'

export default function PostCategories({ categories }) {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.heading}>
        <FontAwesomeIcon icon={faFolderOpen} />
        <span className="sr-only">Categories</span>
      </div>
      <ul className={styles.list}>
        {categories.map(({ name, slug }) => (
          <li className={styles.item} key={slug}>
            <Link href={`/blog/category/${slug}`}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
