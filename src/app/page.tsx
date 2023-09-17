import { Metadata } from 'next'
import Image from 'next/image'
import { Main } from './components/Main'

export const metadata: Metadata = {
  title: 'Top Page',
}

export default function Home() {
  return (
    <>
      <h3 className=' text-3xl w-full text-center my-1 text-red-900 z-50'>Hello, Next.js</h3>
      <Main />
    </>
  )
}
