import styles from "./styles.module.scss"
import logo from "../../assets/logo.svg"
import pokeball from "../../assets/pokeball.svg"
import { Search } from "../Search"

export function Header(){

 return (
   <>
     <div className={styles.container}>
       <img src={logo} alt="pokemon" />
     </div>
     <div className={styles.content}>
      <Search/>
       <img src={pokeball} alt="pokeball" />
     </div>
   </>
 )
}