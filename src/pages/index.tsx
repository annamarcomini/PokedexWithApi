import Head from "next/head";
import styles from "./styles.module.scss"
import Image from "next/image"
import logoIMG from "../assets/Pokemon.svg"
import pikachu from "../assets/Pikachu.svg"

export default function Inicial(){
return (
  <>
    <Head>
      <title>Pokédex</title>
    </Head>
    <main className={styles.main}>
      <div className={styles.container}>
        <div>
          <Image
            className={styles.imgLogo}
            priority
            src={logoIMG}
            alt="Follow us on Twitter"
          />
        </div>
        <div className={styles.column1}>
          <h1>Let's catch them all!</h1>
        </div>
      </div>

      <div className={styles.column2}>
        <div>
          <Image className={styles.poke} src={pikachu} alt={""} />
        </div>
      </div>
    </main>
  </>
)
}