import styles from './styles.module.scss'
import logoIMG from "../../assets/Pokemon.svg"
import pokeball from "../../assets/Pokeball.svg"
import { Search } from "../Search"
import Image from "next/image"

export function Header(){

 return (
   <>
     <div className={styles.header}>
       <Image
         className={styles.imgLogo}
         priority
         src={logoIMG}
         alt="Follow us on Twitter"
       />
       {/* <img src={logoIMG} alt="pokemon" /> */}
       <h1>Which Pokémon do you want to catch?</h1>
     </div>
     <div className={styles.content}>
       <Search />
       <Image
         className={styles.imgPokeball}
         priority
         src={pokeball}
         alt="Follow us on Twitter"
       />
     </div>
   </>
 )
}