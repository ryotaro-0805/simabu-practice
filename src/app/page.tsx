import { Metadata } from 'next'
import { Main } from './components/Main'
import { Title } from './components/Title'
import Image from 'next/image'
import styles from '../../css/Home.module.css';
import { useEffect } from 'react';
import { Link } from './components/Link'

export const metadata: Metadata = {
  title: 'Top Page',
}

export default function Home() {
  const css = styles.test_p;
  useEffect(() => {
    console.log(css);
  }, []);

  return (
    <>
      <Title title='main' />
      <p className='bg-pink-300 w-full text-center'>このページはメインページです。</p>
      <p className={styles.test_p}>test</p>
      <Link />
      <Main>
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </Main>
    </>
  )
}
