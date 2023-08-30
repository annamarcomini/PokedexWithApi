import styles from "./styles.module.scss"
import React, { useEffect, useState } from "react"
import { api } from "@/services/api"

interface PokemonItemProps {
  pokemon: {
    name: string
    url: string
  }
}
export function PokemonItem({ pokemon }: PokemonItemProps) {
  
   const [pokemonImgUrl, setPokemonImgUrl] = useState()
   useEffect(() => {
     api.get(pokemon.url).then((response) => {
      console.log('responseeeee', response)
       setPokemonImgUrl(response.data.sprites.other.dream_world.front_default)
     }) // Atualiza o estado com os dados da resposta
     
   }, [])
   
  return (
    <>
      <main className={styles.main}>
        <div className={styles.container}>
          <img
            src={pokemonImgUrl}
            alt="Imagem SVG"
          ></img>
          <div className={styles.content}>
            <a>{pokemon.name}</a>
          </div>
        </div>
      </main>
    </>
  )
}
