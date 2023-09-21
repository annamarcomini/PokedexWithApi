
import React from "react"
import { api } from "@/services/api"
import { PokemonDetailsProps } from "../../types/pokemon"
import Head from "next/head"
import styles from './styles.module.scss'
import Image from "next/image"
import logoIMG from '../../assets/Pokemon.svg'
import Weight from "@/components/Weight"
import Height from "@/components/Height"

interface PokemonDetailsPageProps { 
  pokemon: PokemonDetailsProps
}

const PokemonDetailsPage: React.FC<PokemonDetailsPageProps> = ({ pokemon }) => {
 const capitalizeFirstLetter = (str: string) => {
   return str.charAt(0).toUpperCase() + str.slice(1)
 } 
  return (
    <main>
      <Head>
        <title>Pokédex</title>
      </Head>

      <div className={styles.logo}>
        <Image
          className={styles.imgLogo}
          priority
          src={logoIMG}
          alt="Follow us on Twitter"
        />
      </div>

      <div className={styles.content}>
        {/* Renderize aqui os detalhes do Pokémon */}
        <div className={styles.column1}>
          <h1>{capitalizeFirstLetter(pokemon.name)}</h1>
          <div className={styles.row}>
            <Weight value={pokemon.weight} />
            <Height value={pokemon.height} />
          </div>
        </div>

        <div className={styles.column2}>
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

export async function getServerSideProps({ params}) {
  const response = await api.get(`/pokemon/${params.slug}`)
  const pokemon = response.data
 
  return {
    props: {
      pokemon,
    },
  }
}
