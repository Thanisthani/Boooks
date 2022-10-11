import { REACT_LOADABLE_MANIFEST } from 'next/dist/shared/lib/constants'
import Head from 'next/head'
import Banner from '../components/Welcome/banner'
import Footer from '../components/Welcome/footer'
import Header from '../components/Welcome/header'
import NewBooks from '../components/Welcome/newBooks'
import Recommend from '../components/Welcome/recommend'


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
        <Recommend />
        <Footer />
      </div>
      

    
    </div>
  )
}

export default Home
