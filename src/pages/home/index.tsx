import styles from "./home.module.scss"
import { PokemonItem } from "@/components/PokemonItem"
import { useEffect, useState } from "react"
import { api } from "@/services/api"
import { Header } from "@/components/Header"

export default function Home() {
  const [pokemons, setPokemons] = useState([])
  useEffect(() => {
    api.get("/pokemon").then((response) => {
      setPokemons(response.data.results)
      console.log("aloooo", response)
    }) // Atualiza o estado com os dados da resposta
  }, [])

  return (
    <>
      <div>
        <Header/>
        <main className={styles.home}>
          {pokemons.map((pokemon) => {
            return <PokemonItem pokemon={pokemon} />
          })}
        </main>
      </div>
    </>
  )
}
