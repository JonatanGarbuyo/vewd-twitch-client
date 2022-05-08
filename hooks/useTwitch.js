import { useEffect, useState } from 'react'

export default function useTwitch() {
  const [streams, setStreams] = useState(() => [])

  async function getStreams() {
    return fetch('/api/streams').then((data) => data.json())
  }

  useEffect(() => {
    getStreams().then(({ data }) => setStreams(data))
  }, [])

  return { streams }
}
