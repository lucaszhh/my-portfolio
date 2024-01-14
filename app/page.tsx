import Image from 'next/image'
import Dashboard from './components/Dashboard'
import Header from './components/Header'
import Aside from './components/Aside'

export default function Home() {
  return (
    <main>
      <Header/>
      <Aside/>
      <Dashboard/>
    </main>
  )
}
