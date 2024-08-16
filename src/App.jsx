import './App.css'
import data from '../data/data.js';
import Trip from "./components/Trip"
import Nav from "./components/Nav"

function App() {

  const trips = data.map(item => {
    return (
        <Trip
            key={item.id}
            item={item}
        />
    )
  })

  return (
    <div>
      <Nav />
      <section className="trips-list">
        {trips}
      </section>
    </div>
  )
}

export default App
