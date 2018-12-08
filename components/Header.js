import Link from 'next/link';
import Head from '../components/Head';

export default ()=> {
  return (
    <header>
      <Head />
      <nav>
        <Link href={'/'} as={'/'} >
          <a className="" href="#">Home</a>
        </Link>
        <Link href={'/works'} as={'/works'} >
          <a className="" href="#">Works</a>
        </Link>
      </nav>
    </header>
  )
}