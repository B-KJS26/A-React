import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Headers from './Header'
import Main from './mainone'
import Maintwo from './maintwo'
export default function Home() {
  return (
    <>
      <div className={styles.realmain}>
        <Headers></Headers>
        <Main></Main>
        <Maintwo></Maintwo>
      </div>
    </>
  )
}
