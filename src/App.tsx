import './App.css'
import Footer from './Components/Footer.tsx';
import Header from './Components/Header.tsx';
import SkateboardCard from './Components/SkateboardCard.tsx';
import skateboards from './data/data.ts';
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState("");

  const [totalFavorites, setTotalFavorites] = useState(0);
  const [totalCartItems, setTotalCartItems] = useState(0);

  return (
    <>
      <Header totalFavorites={totalFavorites} totalCartItems={totalCartItems} />
      <main className='App'>
        <h1>Decks</h1>

        <input
          type="text"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value)
          }}
          placeholder='Search a specific deck' />

        <section id='cards'>
          {
            skateboards.filter((skateboard) => {
              return skateboard.model.toLowerCase().includes(search.toLowerCase()) || skateboard.name.toLowerCase().includes(search.toLowerCase()) || skateboard.size.toLowerCase().includes(search.toLowerCase());
            })
              .map((skateboard) => {
                return <SkateboardCard key={skateboard.id} skateboard={skateboard} setTotalFavorites={setTotalFavorites} setTotalCartItems={setTotalCartItems} />;
              }
              )
          }
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
