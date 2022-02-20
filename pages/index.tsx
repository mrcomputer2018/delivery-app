import type { NextPage } from 'next';
import Link from 'next/link';
import Categories from '../components/Categories/Categories';
import { PageHead } from '../components/HeadPage/pageHead';
import Highlights from '../components/Highlights/Highlights';
import Navbar from '../components/Navbar/Navbar';
import { Sidebar } from '../components/Sidebar/Sidebar';

const Home: NextPage = () => {
  return (
    <>
      <PageHead 
            title='Home - Delivery App' 
            description='Sistema de Dlivery' 
            keywords='delivery, entrega de comida, pagina principal, home'
      />

      <div className='container bg-gray-300 h-60 m-auto flex'>
        <Sidebar/>
        <div className='m-auto'>
          <Navbar />
          <Categories />
          <Highlights />
        </div>
      </div>   
    </>
  )
}

export default Home;
