import styles from "./styles.module.scss"
import logo from "../../assets/logo.svg"
import pokeball from "../../assets/pokeball.svg"

export function Header(){

 return (
   <>
     <div className="Container">
       <img src={logo} alt="pokemon" />
     </div>
     <div className="Content">
       <img src={pokeball} alt="pokeball" />
     </div>
   </>
 )
}