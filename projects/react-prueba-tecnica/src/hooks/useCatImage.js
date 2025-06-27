import React, { useState, useEffect } from 'react'

export function useCatImage ({fact}) {
    const [imgUrl, setImgUrl] = useState(null)
    
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

    return { imgUrl }

}
