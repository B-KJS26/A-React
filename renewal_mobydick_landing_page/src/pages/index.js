import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from './header'
import Onemain from './onemain'
import Twomain from './twomain'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className={styles.maining}>
        <Header />
        <div className={styles.imging}></div>
        <div className={styles.texting}>
          <h1>유행에 맞춰 옷을 급급하게 사기 바빴다면, 꼬꼬막을 이용해 보세요!</h1>
        </div>
        <div className={styles.minitext}>
          <p>유행에 맞춰 옷을 급급하게 사기 바빴다면, 꼬꼬막을 이용해보세요! 유행에 맞춰 옷을 급급하게 사기 바빴다면, 꼬꼬막을 이용해 보세요!</p>
        </div>
        <div className={styles.images}>
          <div className={styles.img1}></div>
          <div className={styles.img2}></div>
        </div>
        <div className={styles.phone1}></div>
        <div className={styles.phone2}></div>
      </div>
      <Onemain />
      <Twomain />
    </>
  )
}
