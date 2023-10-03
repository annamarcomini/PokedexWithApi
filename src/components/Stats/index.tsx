import styles from "./styles.module.scss"

interface StatsProps {
  label: string
  value: number
}
export default function Stats({ label, value }: StatsProps) {
 const capitalizeFirstLetter = (str: string) => {
   return str.charAt(0).toUpperCase() + str.slice(1)
 }
  return (
    <main className={styles.main}>
      <div className={styles.valueContainer}>
        <span>{value}</span>
      </div>
      <div className={styles.label}>
        <p>{capitalizeFirstLetter(label)}</p>
      </div>
    </main>
  )
}
