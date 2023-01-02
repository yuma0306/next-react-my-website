// modules
import Image from 'next/legacy/image'
// lib
import { getAllCategories, getAllPostsByCategory } from 'lib/api'
import { eyecatchLocal } from 'lib/constants'
// components
import Meta from 'components/meta'
import Container from 'components/container'
import PostHeader from 'components/postHeader'
import Posts from 'components/posts'

export default function Category({name, posts}) {
  return (
    <>
      <Meta
        pageTitle={name}
        pageDesc={`${name}に関する記事`}
      />
      <Container>
        <PostHeader title={name} subtitle='Blog Category' />
        <Posts posts={posts} />
      </Container>
    </>
  )
}

export async function getStaticPaths() {
  const allCats = await getAllCategories()
  return {
    paths: allCats.map(( {slug} ) => `/blog/category/${slug}`),
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const catSlug = context.params.slug
  const allCats = await getAllCategories()
  // console.log(allCats)
  const cat = allCats.find(({slug}) => slug === catSlug)
  // idがcat.idのカテゴリーに属するもの
  const posts = await getAllPostsByCategory(cat.id)
  for (const post of posts) {
    if (!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchLocal
    }
    // const { base64 } = await getPlaiceholder(post.eyecatch.url)
    // post.eyecatch.blurDataURL = base64
  }

  return {
    props: {
      name: cat.name,
      posts: posts,
    },
  }
}