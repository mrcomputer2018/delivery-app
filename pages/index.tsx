import type { NextPage } from 'next';
import Link from 'next/link';
import { PageHead } from '../components/HeadPage/pageHead';

const Home: NextPage = () => {
  return (
    <>
      <PageHead 
            title='Home - Delivery App' 
            description='Sistema de Dlivery' 
            keywords='delivery, entrega de comida, pagina principal, home'
      />

      <div className=''>
        <h1>Home</h1>
        <Link href='/signup'>
          <a>Cadastro</a>
        </Link>
        <Link href='/login'>
          <a>Login</a>
        </Link>
      </div>   
    </>
  )
}

export default Home;
