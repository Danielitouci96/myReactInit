
import { useState, useEffect } from 'react'
import './App.css'
import { getRandomnFact } from "./services/facts";

//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstword}?size=50&color=red&json=true`
const PREFIX_IMG_URL = 'https://cataas.com'
export function App() {
  const [fact, setFact] = useState('')
  const [imageUrl, setImageUrl] = useState('')


  useEffect(() => {
    getRandomnFact().then(newFact => setFact(newFact));
  }, [])

  useEffect(() => {
    if(!fact) return 
    const firstWord = fact.split(' ', 3).join(' ')

        /* fetch(`https://cataas.com/cat/says/${firstWord}?font=Impact&fontSize=30&fontColor=%23fff&fontBackground=none&position=top&json=false`) */
        fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
          .then(response => response.json())
          .then(data => {
            setImageUrl(data);
          })
  },[fact])

  const handlerClick = async () =>{
    const newFact = await getRandomnFact();
    setFact(newFact);
  }

  return (
    <main>
      <h1>App de gaticos</h1>

      <button onClick={handlerClick}>New Fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={ `${PREFIX_IMG_URL}${imageUrl}` } alt="gatito" />}
    </main>
  )
}

export default App
