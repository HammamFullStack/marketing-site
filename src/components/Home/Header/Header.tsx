import styles from './Header.module.css'

export default function Header({ name }: { name: string }) {
  return (
    <header className={styles.header}>
            <div className={styles.headerIcon}></div>
            <span className={styles.headerName}>{name}</span>
    </header>
  )
}
