import styles from './home.module.scss'
import Link from "next/link"
import { Pokemon } from '@/components/Pokemon'

export default function Home (){
return (
  <>
    <main>
      <Pokemon/>
    </main>
  </>
)

}
