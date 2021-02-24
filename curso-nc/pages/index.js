
import Head from 'next/head'

//NC Componentes
import Prueba01 from '../components/prueba/prueba-01'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          <h2> Esto es Next </h2>

          <Prueba01 />
      </main>

      <section>
        
      </section>

      <footer>
          <h2>  Este es el footer de Next </h2>
      </footer>
    </div>
  )
}
