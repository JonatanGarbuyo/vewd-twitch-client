import getToken from './getToken'

const client_id = process.env.APP_CLIENT_ID

export default async function getTopGames() {
  const { access_token } = await getToken()

  return fetch(`https://api.twitch.tv/helix/games/top`, {
    method: 'GET',
    headers: {
      'Client-Id': client_id,
      Authorization: 'Bearer ' + access_token,
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error('getCategories(): ', error)
      throw error
    })
}
