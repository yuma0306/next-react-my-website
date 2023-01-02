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
// import eyecatch from '/images/about.jpg'
const eyecatch = {
  src: 'https://images.microcms-assets.io/assets/ea4e7c9023f14705809e4bd7c4ab8422/470843c369af4239b64b6e8807f883a5/about.jpg',
  height: 960,
  width: 1920,
  // blurDataURL: 'data:image/jpeg;base64,',
}

export default function About() {
  return (
    <>
      <Meta
        pageTitle = 'アバウト'
        pageDesc = 'About development activities'
        pageImg = {eyecatch.src}
        pageWidth = {eyecatch.width}
        pageHight = {eyecatch.height}
      />
      <Container>
        <Hero
          title='About'
          subtitle='About development activities'
        />
        {/* <picture>
          <img src="dinosaur.png" />
        </picture> */}
        <TwoColumn>
          <TwoColumnMain>
            <PostBody>
              <p>
                Cubeが得意とする分野はモノづくりです。3次元から2次元の造形、プログラミングやデザインなど、さまざまな技術を組み合わせることによって社会や環境と結びつけるクリエイティブを提案し続けています。
              </p>
              <h2>モノづくりで目指していること</h2>
              <p>
                モノづくりではデータの解析からクリエイティブまで幅広いことを担当しています。新しいことを取り入れながら、ユーザーにマッチした提案を実現するのが目標です。たくさんの開発・提供が数多くありますが、特にそこを磨く作業に力を入れています。
              </p>
              <p>
                単純に形にするだけでなく、作る過程や、なぜそのようにしたのかを大事にしながらものづくりをしています。毎回課題解決テーマをもって「モノ」と向き合い制作をし、フィードバックしてもらうことで自分の中にあるモヤモヤを言葉にして「問い」への答えを出しています。
              </p>
              <h3>新しいことへのチャレンジ</h3>
              <p>
                今までと違うものを作ることで愛着が湧いてきます。そこで興味を持ったことは小さなことでもいいから取り入れて、良いものを作れるようにしています。小さなヒントから新しいものを生み出すようなモノづくりは、これからも続けていきたいです。
              </p>
              <h2>FAQ</h2>
              <Accordion heading="プログラミングのポイントについて">
                <p>
                  プログラミングのポイントは、作りたいものを作ることです。楽しいことから思いつき、目標とゴールを決め、そこに向かってさまざまな課題を設定していきながら、プログラムを作っていきます。
                </p>
              </Accordion>
              <Accordion heading="古代語の解読について">
                <p>
                  古代語を解読するのに必要なのは、書かれた文字そのものだけです。古代の世界観や思考方法。それらを読み取ってこそ古代の世界観が理解できてきます。
                </p>
              </Accordion>
              <Accordion heading="公開リポジトリの活用について">
                <p>
                  公開リポジトリを活用すると、全世界のどこからでもアクセスし、開発者が関連するプロジェクトのタスクを利用することができます。
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