import Search from '../components/Search'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col justify-between'>
        <div className='top'>
        <Header></Header>
        <Search></Search>
        </div>
        <Footer></Footer>
    </div>
  )
}
