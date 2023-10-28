import type { Metadata } from 'next';
import { Main } from '../components/Main';
import { Title } from '../components/Title';
import Image from 'next/image';
import { Link } from '../components/Link';

export const metadata: Metadata = {
  title: 'About Page',
}

export default function Home() {
  return (
    <>
      <Title title='about' number={111} array={[1, 2, 3]}
        obj={{ key: 'propaty' }} boolean />
      <p className='bg-green-300 w-full text-center'>このページはサブページです。</p>
      <Link />
      <Main comp={<Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
      } />
    </>)
}
