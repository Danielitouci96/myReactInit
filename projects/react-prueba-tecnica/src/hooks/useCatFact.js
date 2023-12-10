import { useState, useEffect } from "react";
import { getRandomnFact } from "../services/facts";

export function useCatFact() {
    const [fact, setFact] = useState('')
  
    const refreshRamdonFact = () => {
      getRandomnFact().then(newFact => setFact(newFact));
    }
  
    useEffect(refreshRamdonFact, [])
  
    return { fact, refreshRamdonFact }
  
  }