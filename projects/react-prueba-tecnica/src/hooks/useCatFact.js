import { useState, useEffect } from 'react'
import { getRamdomFact } from "../service/facts"

export const useCatFact = () => {
    const [fact, setFact] = useState(null)

    const refreshFact = () => {
        getRamdomFact().then(newFact => setFact(newFact))
    }

    useEffect(refreshFact, [])

    return { fact, refreshFact }
}