import getStreams, { getStreamsByCategory } from '../../lib/api/getStreams'

export default async function streams(req, res) {
  const { categoryId } = req.query

  if (req.method === 'GET') {
    if (categoryId) {
      try {
        const data = await getStreamsByCategory(categoryId)
        res.status(200).send(data)
      } catch (error) {
        console.error(error)
        res.status(500).send(error)
      }
    } else {
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
}
