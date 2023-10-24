import Image from 'next/image'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Companies from './components/Companies'
import Services from './components/Services'
import Benefits from './components/Benefits'
import Transaction from './components/Transaction'
import Payment from './components/Payment'
import Reputation from './components/Reputation'
import Growing from './components/Growing'

export default function Home() {
  return (
   <main>
   
    <Header/>
    <Companies/>
    <Services/>
    <Benefits/>
    <Transaction/>
    <Payment/>
    <Reputation/>
    <Growing/>
    
   </main>
  )
}
