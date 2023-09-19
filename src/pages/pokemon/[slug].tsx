
import React from "react"
import { api } from "@/services/api"
import { PokemonDetailsProps } from "../../types/pokemon"
import Head from "next/head"
import styles from './styles.module.scss'
import Image from "next/image"
import logoIMG from '../../assets/Pokemon.svg'

interface PokemonDetailsPageProps { 
  pokemon: PokemonDetailsProps
}

const PokemonDetailsPage: React.FC<PokemonDetailsPageProps> = ({ pokemon }) => {
 const capitalizeFirstLetter = (str: string) => {
   return str.charAt(0).toUpperCase() + str.slice(1)
 } 
  return (
    <>
      <div className={styles.header}>
        <Image
          className={styles.imgLogo}
          priority
          src={logoIMG}
          alt="Follow us on Twitter"
        />
      </div>
      <div className={styles.details}>
        <Head>
          <title>Pokédex</title>
        </Head>
        {/* Renderize aqui os detalhes do Pokémon */}
        <h1>{capitalizeFirstLetter(pokemon.name)}</h1>
        <img
          src={pokemon.sprites.other.dream_world.front_default}
          alt="Imagem SVG"
        />
      </div>
    </>
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
