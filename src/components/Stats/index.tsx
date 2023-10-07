import styles from "./styles.module.scss"

interface StatsProps {
  label: string
  value: number
}
export default function Stats({ label, value }: StatsProps) {
 const capitalizeFirstLetter = (str: string) => {
   return str.charAt(0).toUpperCase() + str.slice(1)
 }
 const backgroundColor =
   value >= 70? "var(--green-100)":
    value <= 51? "var(--red-100)": "var(--yellow-100)" ;
 //vars para mudar a cor atraves de propridade style ali na div que colore o fundo dos status.
 const borderColor= 
 value >= 70 ? "var(--green-300)": 
 value <= 51? "var(--red-300)": 'var(--yellow-300)';

  return (
    <main className={styles.main}>
      <div className={styles.valueContainer} style={{ backgroundColor,borderColor }}>
        <span>{value}</span>
      </div>
      <div className={styles.label}>
        <p>{capitalizeFirstLetter(label)}</p>
      </div>
    </main>
  )
}
