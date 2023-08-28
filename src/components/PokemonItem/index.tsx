import styles from "./styles.module.scss"
import React from "react"

interface PokemonItemProps {
  pokemon: {
    name: string
  }
}
export function PokemonItem({ pokemon }: PokemonItemProps) {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.content}>
            <a>{pokemon.name}</a>
          </div>
        </div>
      </main>
    </>
  )
}
