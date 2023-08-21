import styles from './home.module.scss'
import Link from "next/link"
import { Repository } from '@/components/Repository'

export default function Home (){
return (
  <>
    <div className={styles.container}>
      <section className={styles.hero}>
        
        <Repository/>
       <Link href="/details">
          <button type="button">Details</button>
        </Link>
      </section>
    </div>
  </>
)

}
