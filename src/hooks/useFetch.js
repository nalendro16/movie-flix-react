import axios from './utils/axios'
import { useEffect, useState } from 'react'

export const useFetch = ({ url }) => {
  const [movieData, setMovieData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(url)
      if (request.status === 200) {
        setMovieData(request?.data?.results)
      }
    }
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { movieData }
}
