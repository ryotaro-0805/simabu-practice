import type { Metadata } from 'next';
import { Main } from '../components/Main';

export const metadata: Metadata = {
  title: 'About Page',
}

export default function Home() {
  return (
    <>
      <h3 className=' text-3xl w-full text-center my-1 text-blue-900 z-50'>About Page</h3>
      <Main />
    </>)
}
