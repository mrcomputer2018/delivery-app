import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Delivery App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className='text-5xl text-center'>Projeto FrontExpert</h1>    
    </div>
  )
}
