import Head from 'next/head'
import { useRouter } from 'next/router'

// サイトに関する情報
import { siteMeta } from 'lib/constants'
const { siteTitle, siteDesc, siteUrl, siteLocale, siteType, siteImg, siteIcon, appleTouch, androidManifest } = siteMeta

// 汎用OGP
// import siteImg from '/images/ogp.jpg'

export default function Meta({ pageTitle, pageDesc, }) {
  const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle;
  const desc = pageDesc ?? siteDesc;
  const router = useRouter();
  const url = `${siteUrl}${router.asPath}`;

  return (
    <Head>
      {/* タイトル */}
      <title>{title}</title>
      {/* ディスクリプション */}
      <meta name="description" content={desc} />
      {/* canonical */}
      <link rel="canonical" href={url} />
      {/* favicon */}
      <link rel="icon" href={siteIcon} />
      <link rel="apple-touch-icon" href={appleTouch} />
      <link rel="manifest" href={androidManifest} />
      {/* ogp */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:type" content={siteType} />
      <meta property="og:locale" content={siteLocale} />
      <meta property="og:image" content={siteImg} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  )
}
