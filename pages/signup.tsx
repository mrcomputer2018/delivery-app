import type { NextPage } from 'next';
import { InputText } from '../components/input-text/input'
import { PageHead } from '../components/HeadPage/pageHead';
import Link from 'next/link';

const Signup: NextPage = () => {
  return (
    <>
      <PageHead 
            title='Cadastro' 
            description='Sistema de Dlivery' 
            keywords='delivery, entrega de comida, cadastro'
      />
      
      {/* h-screen - 100% da tela */}
      <div className='h-screen flex flex-col lg:flex-row'>
        {/* basis - defino a largura responsivamente */}
        {/* rounded-r - canto arredondado na direita */}
        <div className='bg-indigo-100 rounded-r-2xl md:basis-full lg:basis-4/12'>imagem</div>
        <div className='lg:basis-8/12 flex'>
          {/* max-w - largura maxima */}
          <div className='max-w-2xl w-4/5 m-auto'>
            <h1 className='font-bold text-4xl mb-3'>Criar uma conta</h1>
            <p className='text-slate-700 mb-14'>
              Por favor crie uma conta para continuar usando nosso serviço.
            </p>

            <InputText 
              label='Nome oompleto' 
              placeholder='Informe seu nome' 
              type='text'/>
            <InputText 
              label='Endereço de e-mail' 
              placeholder='Digite seu email' 
              type='email'/>
            <InputText 
              label='Senha' 
              placeholder='Digite sua senha' 
              type='password'/>

            <button className='bg-indigo-600 text-white w-full p-4 text-xl font-bold rounded-xl'>
              Criar uma conta
            </button>
            <p className='mt-6 text-center'>Você já tem uma conta?{" "}
              <Link href='/forgot'>
                  <a className='mb-6 mt-6 text-orange-600 font-bold hover:text-orange-300'>
                      Acesse aqui
                  </a>
              </Link>
            </p>
          </div>
        </div>
      </div>   
    </>
  )
}

export default Signup;