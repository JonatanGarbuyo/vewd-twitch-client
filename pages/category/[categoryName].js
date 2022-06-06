import Head from 'next/head'

import Nav from '../../components/nav'
import CategoryHeader from '../../components/categoryHeader'

import getTopGames from '../../lib/api/getTopGames'
import { getCategory } from '../../lib/api/categories'
import CategoryStreams from '../../components/categoryStreams'

export default function Category({ category }) {
  return (
    <>
      <Head>
        <title>Vewd Twitch client - categories</title>
        <meta name="viewport" content="maximum-scale=5 width=1280"></meta>
      </Head>
      <Nav />
      <div>
        <CategoryHeader category={category} />
        <CategoryStreams categoryId={category.id} />
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const { data } = await getTopGames()
  const paths = data.map((category) => ({
    params: { categoryName: `${category.name}` },
  }))
  return {
    paths: paths.slice(0, 7),
    fallback: true,
  }
}

export async function getStaticProps(context) {
  const { categoryName } = context.params
  const { data } = await getCategory(categoryName)
  return {
    props: { category: data[0] },
  }
}
