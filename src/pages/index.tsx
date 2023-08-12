import styles from './home.module.scss'

export default function Home (){
return (
  <>
    <main>
      <section className={styles.hero}>
        <span>Home</span>
        <button type="button">Details</button>
      </section>
    </main>
  </>
)

}
