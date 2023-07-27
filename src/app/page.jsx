import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
export default function Home() {
  return (
    <main className='mainContainer'>
  <Link href="/Projects" className='menuBarBtn appear'>Start</Link>
    </main>
  )
}
