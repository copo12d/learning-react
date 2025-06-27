const API_URL_FACT = "https://catfact.ninja/fact"

export const getRamdomFact = async () => {
    try {
        const response = await fetch(API_URL_FACT)
        if (!response.ok) {
            throw new Error('Error fetching fact')
        }
        const data = await response.json()
        const { fact } = data
        return fact
    } catch (error) {
        console.error("Error fetching cat fact:", error)
    }
}