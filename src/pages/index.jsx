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
  const [text, setText] = useState('');
  const [isShow, setIsShow] = useState(true);


  const handleClick = useCallback(() => {
    console.log(count);
    if (count < 10) {
      setCount((count) => count + 1);
    }
  }, [count]);

  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert('5文字以内にしてください');
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const handleDisplay = useCallback((e) => {
    setIsShow((isShow) => !isShow);
  }, []);


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
      {isShow ? <h1>{count}</h1> : null}
      <button
        href='/about'
        onClick={handleClick}
      >
        ボタン
      </button>

      <button onClick={handleDisplay}>{isShow ? '非表示' : '表示'}</button>

      <input type="text" value={text} onChange={handleChange} />

      <Main page='index' />

      <Footer />
    </div>
  )
}
