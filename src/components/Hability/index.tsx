import styles from './styles.module.scss'

 interface HabilityProps {
   title: string
   children: React.ReactNode
 }

 export default function Hability({ title, children }: HabilityProps) {
   return (
     <main>
       <div className={styles.title}>
        <p>{title}</p>
      </div>
      <div className={styles.texts}>{children}</div>
     </main>
   )
 }
