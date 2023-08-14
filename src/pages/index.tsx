import styles from './home.module.scss'
import Link from "next/link"

export default function Home (){
return (
  <>
    <div className={styles.container}>
      <section className={styles.hero}>
        <span>Home</span>
       <Link href="/details">
          <button type="button">Details</button>
        </Link>
      </section>
    </div>
  </>
)

}
