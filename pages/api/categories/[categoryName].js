import { getCategory } from '../../../lib/api/categories'

export default async function category(req, res) {
  if (req.method === 'GET') {
    const { categoryName } = req.query

    try {
      const { data } = await getCategory(categoryName)
      res.status(200).send(data[0])
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  }
}
