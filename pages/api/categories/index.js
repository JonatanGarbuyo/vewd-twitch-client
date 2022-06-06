import getTopGames from '../../../lib/api/getTopGames'

export default async function category(req, res) {
  if (req.method === 'GET') {
    try {
      const data = await getTopGames()
      console.log('--streams: ', data)

      res.status(200).send(data)
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  }
}
