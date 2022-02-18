import type { NextPage } from 'next';
import Link from 'next/link';
import { InputText } from '../components/input-text/input';
import { Button } from '../components/Button/button';
import { PageHead } from '../components/HeadPage/pageHead';

const Login: NextPage = () => {
  return (
    <>
       {/*  keywords - tags para sistema de busca */}
        <PageHead 
            title='Login' 
            description='Sistema de Dlivery' 
            keywords='delivery, entrega de comida'
        />

        <div className='h-screen flex flex-col lg:flex-row'>
            <div className='bg-indigo-100 rounded-r-2xl md:basis-full lg:basis-4/12'>
                imagem
            </div>

            <div className='lg:basis-8/12 flex'>
                <div className='max-w-2xl w-4/5 m-auto'>
                    <h1 className='font-bold text-4xl mb-3'>Bem vindo!</h1>
                    <p className='text-slate-700 mb-14'>
                        Autentique-se para continuar usando nosso serviço.
                    </p>

                    <InputText 
                        label='Endereço de e-mail' 
                        placeholder='Digite seu email' 
                        type='email'
                    />
                    <InputText 
                        label='Senha' 
                        placeholder='Digite sua senha' 
                        type='password'
                    />

                    <Button className='bg-indigo-200 text-indigo-700 p-4'>
                        Login
                    </Button>
                    <div className='text-center block p-6'>
                        <Link href='/forgot'>
                            <a className='mb-6 mt-6 text-slate-600 hover:text-slate-900'>
                                Esqueceu a senha?
                            </a>
                        </Link>
                    </div>
                    <Button className='bg-indigo-600 text-white p-4'>
                        <Link href='/signup'>
                            <a>Criar uma conta</a>
                        </Link>
                    </Button>
                </div>
            </div>
      </div>      
    </>
  )
}

export default Login;
