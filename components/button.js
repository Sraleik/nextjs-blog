import styles from './button.module.scss'

export default function Button({ text, children }) {
  return (
    <div className={styles.button} onClick={() => alert('test')}>
      {children}
    </div>
  )
}