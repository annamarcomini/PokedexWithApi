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
          <div className={styles.title}>
            <h1>Let's catch them all!</h1>
          </div>
          <div className={styles.text}>
            <span>
              Pokémon is a media franchise that originally started out as an RPG
              video game, but due to its popularity has managed to expand to
              other media entertainment such as TV series, movies, card games,
              clothes, among others, becoming a brand that is recognized in the
              world market.
            </span>
          </div>
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