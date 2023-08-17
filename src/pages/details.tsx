import Link from "next/link"
import styles from "./home.module.scss"
import { useRouter } from "next/navigation"

export default function Details() {
 const router= useRouter()

  return (
    <>
      <div className={styles.container}>
        <section className={styles.hero}>
          <span>Details</span>
          
            <button type="button" onClick={()=> router.push('/')}>Home</button>
          
        </section>
      </div>
    </>
  )
}
