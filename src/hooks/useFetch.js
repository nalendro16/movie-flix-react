import axios from './utils/axios'
import { useEffect, useState } from 'react'

export const useFetch = ({ url }) => {
  const [movieData, setMovieData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const request = await axios.get(url)
      if (request.status === 200) {
        setMovieData(request?.data?.results)
        setLoading(false)
      }
    }
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { movieData, loading }
}
