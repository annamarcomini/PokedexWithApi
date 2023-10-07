import React from "react"
import { api } from "@/services/api"
import { PokemonDetailsProps } from "../../types/pokemon"
import Head from "next/head"
import styles from "./styles.module.scss"
import Image from "next/image"
import logoIMG from "../../assets/Pokemon.svg"
import Weight from "@/components/Weight"
import Height from "@/components/Height"
import Hability from "@/components/Hability"
import Stats from "@/components/Stats"

interface PokemonDetailsPageProps {
  pokemon: PokemonDetailsProps
}

const PokemonDetailsPage: React.FC<PokemonDetailsPageProps> = ({ pokemon }) => {
  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  return (
    <main className={styles.main}>
      <Head>
        <title>Pokédex</title>
      </Head>

      {/* Renderize aqui os detalhes do Pokémon */}
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
          <h1>{capitalizeFirstLetter(pokemon.name)}</h1>

          <div className={styles.rowContainer}>
            <div className={styles.row1}>
              <p>Weight:</p>
              <div className={styles.weight}>
                <Weight value={pokemon.weight} />
              </div>
            </div>

            <div className={styles.row2}>
              <p>Height:</p>
              <div className={styles.height}>
                <Height value={pokemon.height} />
              </div>
            </div>
          </div>

          <p>Habilities:</p>
          <div className={styles.ability}>
            {pokemon.abilities.map(
              (
                ability,
                index //fiz esse map pra mapear e percorrer uma tipagem de array na api
              ) => (
                <Hability texts={capitalizeFirstLetter(ability.ability.name)} />
              )
            )}
          </div>

          <p>Stats:</p>
          <div className={styles.stats}>
            {pokemon.stats.map((stat, index) => (
              <Stats label={stat.stat.name} value={stat.base_stat} />
            ))}
          </div>
        </div>
      </div>

      <div className={styles.column2}>
        {" "}
        {/*parte do pokemon img */}
        <div className={styles.pokeIMG}>
          <img
            src={pokemon.sprites.other.dream_world.front_default}
            alt="Imagem SVG"
          />
        </div>
      </div>
    </main>
  )
}

export default PokemonDetailsPage

export async function getServerSideProps({ params }) {
  const response = await api.get(`/pokemon/${params.slug}`)
  const pokemon = response.data
  
  return {
    props: {
      pokemon,
    },
  }
  
}
