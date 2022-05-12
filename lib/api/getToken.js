const client_id = process.env.APP_CLIENT_ID
const client_secret = process.env.APP_CLIENT_SECRET

export default async function getToken() {
  return fetch(
    `https://id.twitch.tv/oauth2/token?client_id=${client_id}&client_secret=${client_secret}&grant_type=client_credentials`,
    {
      method: 'POST',
    },
  )
    .then((response) => response.json())
    .catch((error) => {
      throw error
    })
}
