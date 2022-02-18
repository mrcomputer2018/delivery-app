import type { NextPage } from 'next';
import Link from 'next/link';
import { InputText } from '../components/input-text/input';
import { Button } from '../components/Button/button';
import { PageHead } from '../components/HeadPage/pageHead';

const Forgot: NextPage = () => {
  return (
    <>
        <PageHead 
            title='Recuperar a senha' 
            description='Sistema de Dlivery' 
            keywords='delivery, entrega de comida, esqueceu a senha'
        />

        <div className='h-screen flex flex-col lg:flex-row'>
            <div className='bg-indigo-100 rounded-r-2xl md:basis-full lg:basis-4/12'>
                imagem
            </div>

            <div className='lg:basis-8/12 flex'>
                <div className='max-w-2xl w-4/5 m-auto'>
                    <h1 className='font-bold text-4xl mb-3'>Esqueceu a senha?</h1>
                    <p className='mb-14'>
                        Digite seu endereço de e-mail para continuar.
                    </p>

                    <InputText 
                        label='Endereço de e-mail' 
                        placeholder='Digite seu email' 
                        type='email'
                    />
                    
                    <Button className='bg-indigo-200 text-indigo-700 w-full p-4 text-xl'>
                        Continuar
                    </Button>
                    <div className='text-center block p-6'>
                        <Link href='/login'>
                            <a className='mb-6 mt-6 text-slate-600 hover:text-slate-900'>
                                Voltar para Login?
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>      
    </>
  )
}

export default Forgot;