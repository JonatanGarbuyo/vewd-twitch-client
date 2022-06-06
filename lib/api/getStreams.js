import getToken from './getToken'

const client_id = process.env.APP_CLIENT_ID

export default async function getStreams() {
  const { access_token } = await getToken()

  return fetch('https://api.twitch.tv/helix/streams', {
    method: 'GET',
    headers: {
      'Client-Id': client_id,
      Authorization: 'Bearer ' + access_token,
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error('getStreams(): ', error)
      throw error
    })
}

export async function getStreamsByCategory(categoryId) {
  const { access_token } = await getToken()

  return fetch(`https://api.twitch.tv/helix/streams?game_id=${categoryId}`, {
    method: 'GET',
    headers: {
      'Client-Id': client_id,
      Authorization: 'Bearer ' + access_token,
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error('getStreams(): ', error)
      throw error
    })
}
