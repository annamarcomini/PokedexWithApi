import styles from './styles.module.scss'

interface WeightProps {
  value: number
}
export default function Weight({value}: WeightProps) {
  return (
    <div className={styles.texts}>
      <span>{(value / 10).toFixed(2)}kg</span>
    </div>
  )
}
