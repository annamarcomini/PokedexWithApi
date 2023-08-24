import styles from './home.module.scss'
import Link from "next/link"
import { Repository } from '@/components/Repository'

export default function Home (){
return (
  <>
    <div className={styles.container}>
      <Repository />
      <section className={styles.hero}>
        <Link href="/details">
          <button type="button">Details</button>
        </Link>
      </section>
    </div>
  </>
)

}
