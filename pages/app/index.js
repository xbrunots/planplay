import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function App() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Plan Play | Planning Poker App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         by @xbrunots 
        </h1>
  
      </main> 
    </div>
  )
}
