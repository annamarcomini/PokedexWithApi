import styles from "./styles.module.scss"
import React, { useEffect, useState } from "react"
import { api } from "@/services/api"
import Link from "next/link"
import {PokemonDetailsProps}  from "../../types/pokemon"

interface PokemonItemProps {
  pokemon: {
    name: string
    url: string
  }
}
export function PokemonItem({ pokemon }: PokemonItemProps) {
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetailsProps>()
  useEffect(() => {
    api.get(pokemon.url).then((response) => {
      console.log("responseeeee", response)
      setPokemonDetails(response.data)
    }) // Atualiza o estado com os dados da resposta
  }, [])

  const capitalizeFirstLetter = (str: string) => {
    //
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  return (
    <main className={styles.main}>
      <Link href="/details">
        <div className={styles.container}>
          <img
            src={pokemonDetails?.sprites?.other?.dream_world?.front_default}
            alt="Imagem SVG"
          ></img>
          <a>{capitalizeFirstLetter(pokemon.name)}</a>
          <h1>#{pokemonDetails?.id}</h1>
        </div>
      </Link>
    </main>
  )
}
