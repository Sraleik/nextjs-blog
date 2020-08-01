import styles from './button.module.scss'

export default function TextButton({ text, children }) {
  return (
    <div className={styles.button} onClick={() => alert('test')}>
      {children}
    </div>
  )
}