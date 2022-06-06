import { useEffect, useState } from 'react'

import gaming from '../public/images/gaming.svg'
import irl from '../public/images/irl.svg'
import music from '../public/images/music.svg'
import esports from '../public/images/esports.svg'
import creative from '../public/images/creative.svg'

export default function useTwitch() {
  const directories = [
    {
      id: 'games',
      alt: 'Games Icon',
      img: gaming,
      name: 'Games',
      url: '/directory/games',
    },
    {
      id: 'irl',
      alt: 'IRL Icon',
      img: irl,
      name: 'IRL',
      url: '/directory/irl',
    },
    {
      id: 'music',
      alt: 'Music Icon',
      img: music,
      name: 'Music',
      url: '/directory/music',
    },
    {
      id: 'esports',
      alt: 'Esports Icon',
      img: esports,
      name: 'Esports',
      url: '/directory/esports',
    },
    {
      id: 'creative',
      alt: 'Creative Icon',
      img: creative,
      name: 'Creative',
      url: '/directory/creative',
    },
  ]
  const [streams, setStreams] = useState(() => [])

  useEffect(() => {
    getStreams().then(({ data }) => setStreams(data))
  }, [])

  async function getStreams() {
    return fetch('/api/streams').then((data) => data.json())
  }

  return { streams, directories }
}
