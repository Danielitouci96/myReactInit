import './App.css'

import { useCatImage } from "./hooks/useCatImage";
import { useCatFact } from "./hooks/useCatFact";


export function App() {
  const { fact, refreshRamdonFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })


  const handlerClick = async () => {
    refreshRamdonFact()
  }

  return (
    <main>
      <h1>App de gaticos</h1>

      <button onClick={handlerClick}>New Fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img width={300} height={300} src={`${imageUrl}`} alt="gatito" />}
    </main>
  )
}

export default App
