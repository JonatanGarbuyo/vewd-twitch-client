import getToken from './getToken'

const client_id = process.env.APP_CLIENT_ID

export async function getCategory(categoryName) {
  const { access_token } = await getToken()

  return fetch(
    `https://api.twitch.tv/helix/search/categories?query=${categoryName}`,
    {
      method: 'GET',
      headers: {
        'Client-Id': client_id,
        Authorization: 'Bearer ' + access_token,
      },
    },
  )
    .then((response) => response.json())
    .catch((error) => {
      console.error('getCategory(): ', error)
      throw error
    })
}
