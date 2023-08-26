import styles from './home.module.scss'
import Link from "next/link"
import { Pokemon } from '@/components/Pokemon'

export default function Home (){
return (
  <>
    <main>
      <div className={styles.container}>
        <div className={styles.content}>{/* <Pokemon /> */}</div>
      </div>
    </main>
  </>
)

}
