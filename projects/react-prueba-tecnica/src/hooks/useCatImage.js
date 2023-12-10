import { useEffect, useState } from "react"

// custome hook siempre se va llamar use-...
export function useCatImage({fact}){
    const [imageUrl, setImageUrl] = useState('')
  
    useEffect(() => {
      if(!fact) return 
      const firstWord = fact.split(' ', 3).join(' ')
  
          fetch(`https://cataas.com/cat/says/${firstWord}?font=Impact&fontSize=50&fontColor=%23fff&fontBackground=none&position=top&json=false`)
            .then(response => response.url)
            .then(data => {
              setImageUrl(data);
            })
    },[fact])
  
    return {imageUrl}
  
   }