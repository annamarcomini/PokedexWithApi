import styles from "./home.module.scss"
import { PokemonItem } from "@/components/PokemonItem"
import { useEffect, useState } from "react"
import { api } from "@/services/api"

export default function Home() {
  const [pokemons, setPokemons] = useState([])
  useEffect(() => {
    api.get("https://pokeapi.co/api/v2/pokemon").then((response) => {
      console.log(response)
      setPokemons(response.data.results)
    }) // Atualiza o estado com os dados da resposta
  }, [])

  return (
    <main className={styles.home}>
      {pokemons.map((pokemon) => {
        return <PokemonItem pokemon={pokemon} />
      })}
    </main>
  )
}
