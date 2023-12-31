import styles from "./home.module.scss"
import { PokemonItem } from "@/components/PokemonItem"
import { useEffect, useState } from "react"
import { api } from "@/services/api"
import { Header } from "@/components/Header"
import Head from "next/head"

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
        <Head>
          <title>Pokédex</title>
        </Head>
        <Header />
        <main className={styles.home}>
          {pokemons.map((pokemon) => {
            return <PokemonItem pokemon={pokemon} />
          })}
        </main>
      </div>
    </>
  )
}
