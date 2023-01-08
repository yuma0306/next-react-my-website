// modules
import Image from 'next/legacy/image'
// import { getPlaiceholder } from 'plaiceholder'
// heighlight
import { load } from 'cheerio';
import hljs from 'highlight.js';
// import 'highlight.js/styles/vs2015.css';
// lib
import { getPostBySlug, getAllSlugs } from 'lib/api'
import { extractText } from 'lib/extractText'
import { heightLight } from 'lib/heightLight'
import { prevNextPost } from 'lib/prevNextPost'
import { eyecatchLocal } from 'lib/constants'
// components
import Meta from 'components/meta'
import Container from 'components/container'
import PostHeader from 'components/postHeader'
import PostBody from 'components/postBody'
import { TwoColumn, TwoColumnMain, TwoColumnSidebar, } from 'components/two-column'
import ConvertBody from 'components/convertBody'
import PostCategories from 'components/postCategories'
import Pagination from 'components/pagination'

export default function Post({
  title,
  publish,
  content,
  eyecatch,
  description,
  categories,
  prevPost,
  nextPost,
}) {
  return (
    <>
      <Meta
        pageTitle={title}
        pageDesc={description}
        pageImg={eyecatch.url}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />
      <Container>
        <TwoColumn>
          <TwoColumnMain>
          <article>
                <PostHeader
                  title={title}
                  subtitle='Blog Article'
                  publish={publish}
                  src={eyecatch.url}
                />
                <PostBody>
                  <ConvertBody contentHTML={content} />
                </PostBody>
              <Pagination
                prevText={prevPost.title}
                prevUrl={`/blog/${prevPost.slug}`}
                nextText={nextPost.title}
                nextUrl={`/blog/${nextPost.slug}`}
              />
          </article>
          </TwoColumnMain>
          <TwoColumnSidebar>
            <PostCategories categories={categories} />
          </TwoColumnSidebar>
        </TwoColumn>
      </Container>
    </>
  )
}

export async function getStaticPaths() {
  const allSlugs = await getAllSlugs()
  return {
    paths: allSlugs.map(( {slug} ) => `/blog/${slug}`),
    fallback: false,
  }
}

export async function getStaticProps(context) {
  // console.log(context);
  const slug = context.params.slug;
  const post = await getPostBySlug(slug)
  const description = extractText(post.content)
  const eyecatch = post.eyecatch ?? eyecatchLocal
  const allSlugs = await getAllSlugs()
  const [prevPost, nextPost] = prevNextPost(allSlugs, slug)

  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: eyecatch,
      categories: post.categories,
      description: description,
      prevPost: prevPost,
      nextPost: nextPost,
    },
  }
}