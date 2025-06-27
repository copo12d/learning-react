import { useState,useEffect } from "react"
import './App.css'
const API_URL_FACT = "https://catfact.ninja/fact"
//const CAT_END_POINT = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`  

export function App() {
    const [fact, setFact] = useState(null)
    const [imgUrl, setImgUrl] = useState(null)
    
    useEffect(() => {
        fetch(API_URL_FACT)
            .then((response) => response.json())
            .then((data) => {
                const {fact} = data
                setFact(fact)
            })
            .catch((error) => {
                console.error("Error fetching cat fact:", error)
            })
    },[])

    useEffect(() => {
        if(!fact) return
        const threeFirstWord = fact.split(" ", 3).join(" ")
            fetch(`https://cataas.com/cat/says/${threeFirstWord}?fontSize=50&fontColor=red&json=true`)
            .then(res => res.json())
            .then((response) => {
                const {url} = response
                setImgUrl(url)
            })
            
    },[fact])
    
    return (
        <main>
            <h1>APP de gatos</h1>
            <section>
            {fact  && <p>{fact}</p>}
            {imgUrl &&<img src={imgUrl} alt={`image stracted suing the three first letters of the fact ${fact}`} />}
            </section>

        </main>
    )
}