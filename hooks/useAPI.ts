import { useState } from 'react'

export const useAPI = () => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [data, setData] = useState('')

    const fetchPictures = async (limit: number) => {

        setLoading(true)

        if(!process.env.EXPO_PUBLIC_API_KEY) {
            throw new Error('API key not specified')
        }

        try {
            const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=${limit}`, {
                headers: {
                    'x-api-key': process.env.EXPO_PUBLIC_API_KEY
                }
            })

            console.log(response)

        } catch (err) {
            setError(`Error: ${err}`)
        } finally {
            setLoading(false)
        }
    }


    return { fetchPictures, loading, error, data }
}