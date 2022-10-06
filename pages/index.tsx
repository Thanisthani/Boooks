import Head from 'next/head'
import Banner from '../components/Welcome/banner'
import Header from '../components/Welcome/header'
import NewBooks from '../components/Welcome/newBooks'


const Home = () => {
  return (
    <div className="">
      <Head>
        <title>Book store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <Header />
      <div className='relative '>
        <Banner />
        <NewBooks />
      </div>
      

    
    </div>
  )
}

export default Home
