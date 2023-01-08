// next
import Image from 'next/image'
// components
import Meta from 'components/meta'
import Hero from 'components/hero'
import Container from 'components/container'
import PostBody from 'components/postBody'
import Contact from 'components/contact'
import Accordion from 'components/accordion'
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from 'components/two-column'

export default function About() {
  return (
    <>
      <Meta
        pageTitle = 'About'
        pageDesc = '自己紹介'
      />
      <Container>
        <TwoColumn>
          <TwoColumnMain>
            <Hero
              title='About'
              imageOn
              aboutPage
            />
            <PostBody>
              <h2>自己紹介</h2>
              <p>
                某会社でフロントエンドエンジニアとして働かせてもらっています。マークアップ言語も得意です。好きな言語はPHP。React勉強中。愛玩動物飼養管理士、電気工事士、ボイラー技師とかの資格持ってます。
              </p>
              <h2>趣味</h2>
              <Accordion heading="爬虫類好き">
                <p>
                  ボールパイソンの飼育して、ヘビブログを書いてます。繁殖経験あり。今はばなぞうとばなこと3人で暮らしてます。動物園にもよく現れます。ヘビ飼育者ですがネズミアレルギーなのでお手柔らかに 。
                </p>
              </Accordion>
              <Accordion heading="昆虫食">
                <p>
                  昆虫食・ジビエが好きです。その辺の虫を捕まえてたべます。好物はアブラゼミの幼虫。この世に食べられない動物はいません。
                </p>
              </Accordion>
              <Accordion heading="釣り">
                <p>
                  全然釣れないけど釣りが好きです。船釣りは酔ってしにかけるので堤防限定です。釣り堀が一番いいですよね。
                </p>
              </Accordion>
            </PostBody>
          </TwoColumnMain>
          <TwoColumnSidebar>
            <Contact />
          </TwoColumnSidebar>
        </TwoColumn>
      </Container>
    </>
  )
}