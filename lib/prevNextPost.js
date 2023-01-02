export function prevNextPost(allSlugs, currentSlug) {
  // 記事総数
  const numberOfPosts = allSlugs.length

  // currentSlugとslugが一致する記事のindexを取得
  const index = allSlugs.findIndex(
    ({slug}) => slug === currentSlug,
  )

  // 現在の記事のが最後の記事なら空
  const prevPost = index + 1 === numberOfPosts ? { title: '', slug: '' } : allSlugs[index + 1]
  // 現在の記事のが最初の記事なら空
  const nextPost = index === 0 ? { title: '', slug: '' } : allSlugs[index - 1]

  return [prevPost, nextPost]
}
