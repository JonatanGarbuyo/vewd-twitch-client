import getStreams from '../../lib/api/getStreams'

export default async function streams(req, res) {
  if (req.method === 'GET') {
    try {
      const data = await getStreams()
      // console.log('--streams: ', data)
      res.status(200).send(data)
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  }
}
