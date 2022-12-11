import Head from 'next/head'
import Image from 'next/image'
import styles from 'src/styles/Home.module.css'
import { Footer } from 'src/components/Footer'
import { Main } from 'src/components/Main'
import { Header } from 'src/components/Header'
import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'




export default function Home() {
  const [count, setCount] = useState(1);


  const handleClick = useCallback(() => {
    console.log(count);
    if (count < 10) {
      setCount((count) => count + 1);
    }
  }, [count]);

  useEffect(() => {
    //console.log(`マウント時:${count}`);
    //↓マウント時の処理
    document.body.style.backgroundColor = 'lightblue';


    //↓アンマウント時の処理(return以降)
    return () => {
      //console.log(`アンマウント時:${count}`);
      document.body.style.backgroundColor = '';
    };
  }, []);



  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>

      </Head>

      <Header />

      <h1>{count}</h1>
      <button
        href='/about'
        onClick={handleClick}
      >
        ボタン
      </button>

      <Main page='index' />

      <Footer />
    </div>
  )
}
