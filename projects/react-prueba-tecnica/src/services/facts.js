
const CAT_ENDPOINT_RAMDON_FACT = `https://catfact.ninja/fact`

export const getRandomnFact = async () =>{
    const response = await fetch(CAT_ENDPOINT_RAMDON_FACT)
    const data = await response.json()
    const { fact } = data
    return fact
  }