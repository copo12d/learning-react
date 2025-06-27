import { useState,useEffect } from "react"
import './App.css'
import './style.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from "./hooks/useCatFact"


export function App() {
    const { fact, refreshFact } = useCatFact()
    const { imgUrl } = useCatImage({ fact })
    

    
    const handleClick = async () => {
       refreshFact()
    }
    
    return (
        <main>
            <h1 className="titulo">APP de gatos</h1>
            <button onClick={handleClick}>get new fact</button>
            <section>
                {fact  && <p className="fact">{fact}</p>}
                {imgUrl &&<img src={imgUrl} alt={`image stracted suing the three first letters of the fact ${fact}`} />}
            </section>

        </main>
    )
}