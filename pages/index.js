// lib
import { getAllPosts } from 'lib/api'
// components
import Meta from 'components/meta'
import Hero from 'components/hero'
import Container from 'components/container'
import Posts from 'components/posts'
import Pagination from 'components/pagination'
import { eyecatchLocal } from 'lib/constants'

export default function Home( {posts} ) {
  return (
    <>
      <Meta />
      <Container>
        <Hero
          title="DevHoly"
          subtitle="フロントエンドとweb制作の備忘録"
          imageOn
          topPage
        />
        <Posts
          posts={posts}
        />
        <Pagination
          nextUrl='/blog'
          nextText='More Posts'
        />
      </Container>
    </>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts(4)
  for (const post of posts) {
    if (!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchLocal
    }
  }

  return {
    props: {
      posts: posts,
    },
  }
}
