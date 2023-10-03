import styles from './styles.module.scss'

 interface HabilityProps {
   texts: string
 }

 export default function Hability({ texts }: HabilityProps) {
   return (
     <main>
       <div className={styles.texts}>
        <span>{texts}</span>
      </div>
     </main>
   )
 }
