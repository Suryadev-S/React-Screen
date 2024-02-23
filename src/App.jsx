import { useState } from 'react'
import './App.scss'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Heading from './components/Heading'
import CardVertical from './components/CardVertical'
import Categories from './components/Categories'
import Action from './components/Action'
import Footer from './components/Footer'
function App() {
  const catg = ["Tools", "AWS Builder", "Start Build", "Build Supplies", "Tooling", "Blue Hosting"];
  return (
    <>
      <Navbar />
      <Heading>Best Website builders in the US</Heading>
      <section className='notice view-width'>
        <div>
          <span>last updated- feb 22, 2020</span>
          <span>Advertising Disclosure</span>
        </div>
        <div>
          top relevant
        </div>
      </section>
      <Categories categories={catg} />
      <main className='view-width'>
        <Card />
        <Card />        
        <Card />
        <Card />
        <h2 className='sub-head'>Related deals you might like</h2>
        <div className="card-group">
          <CardVertical />
          <CardVertical />
          <CardVertical />
        </div>
        <Action actionText={"Signup and get exclusive special deals"}/>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
