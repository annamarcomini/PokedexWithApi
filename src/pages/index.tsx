import styles from './home.module.scss'
import Link from "next/link"
import { Pokemon } from '@/components/Pokemon'

export default function Home (){
return (
  <>
    <div className={styles.container}>
      <Pokemon />
      <section className={styles.hero}>
        <Link href="/details">
          <button type="button">Details</button>
        </Link>
      </section>
    </div>
  </>
)

}
