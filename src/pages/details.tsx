import Link from "next/link"
import styles from "./home.module.scss"

export default function Details() {
  return (
    <>
      <div className={styles.container}>
        <section className={styles.hero}>
          <span>Details</span>
          <Link href="/">
            <button type="button">Home</button>
          </Link>
        </section>
      </div>
    </>
  )
}
