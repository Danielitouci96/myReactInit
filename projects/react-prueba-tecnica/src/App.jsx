
import { useState, useEffect } from 'react'
import './App.css'

const CAT_ENDPOINT_RAMDON_FACT = `https://catfact.ninja/fact`
//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstword}?size=50&color=red&json=true`
const PREFIX_IMG_URL = 'https://cataas.com'
export function App() {
  const [fact, setFact] = useState('lorem iptsum app gatitos')
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    fetch(CAT_ENDPOINT_RAMDON_FACT)
      .then(response => response.json())
      .then(data => {
        const { fact } = data
        setFact(fact)

        const firstWord = fact.split(' ', 1).join(' ')

        fetch(`https://cataas.com/cat/says/${firstWord}?font=Impact&fontSize=30&fontColor=%23fff&fontBackground=none&position=top&json=false`)
          .then(response => response.json())
          .then(data => {
            //const {url} = data;
            setImageUrl(data);
          })
      })
  }, [])

  return (
    <main>
      <h1>App de gaticos</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={ `${PREFIX_IMG_URL}${imageUrl}` } alt="gatito" />}
    </main>
  )
}

export default App
