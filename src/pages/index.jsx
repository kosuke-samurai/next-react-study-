import Head from 'next/head'
import Image from 'next/image'
import styles from 'src/styles/Home.module.css'
import { Footer } from 'src/components/Footer'
import { Main } from 'src/components/Main'
import { Header } from 'src/components/Header'
import { useEffect, useState } from 'react'
import Link from 'next/link'

// const handleClick = (e, foo) => {
//   console.log(e.target.href);
//   e.preventDefault();
//   alert(foo);
// }



export default function Home() {
  const [count, setCount] = useState(1);


  const handleClick = (e) => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);

  };

  useEffect(() => {

    //↓マウント時の処理
    document.body.style.backgroundColor = 'lightblue';


    //↓アンマウント時の処理(return以降)
    return () => {
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
