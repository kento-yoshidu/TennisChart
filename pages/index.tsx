import Link from "next/link"
import Layout from "../components/layout"

import styles from "../styles/styles.module.css"
import Meta from "../components/meta"

const Home = () => (
  <>
    <Meta
      pageDesc="tennis chart"
    />

    <Layout>
      <main className={styles.main}>
        <p>2022年、ロジャーフェデラーの引退。2023年、ラファエルナダルが全仏オープンを欠場し来季での引退の可能性があると発言。いよいよテニスBIG4の時代が終わりを告げようとしています（正確にはフェデラーが引退した時点で終わっていますが、2022年もジョコビッチが勝ちを重ねていたため、いまいちその実感が湧きません）。</p>

        <p>このサイトでは、BIG4という存在がいかに男子テニス界を支配していたかをグラフを用いて見てみます。データは基本的にATP公式とWikipediaから引っ張ってきているので正しいはずです。</p>

        <p>なお、真の目的は私のフロントエンド技術の向上です。思い付きで始めただけなので、サイト構成は大きく変わる可能性があります。</p>

        <h3>目次</h3>
        <nav>
          <ul>
            <li>
              <Link href="/page1/">1. GSタイトルの支配率</Link>
            </li>
            <li>
              <Link href="/page2/">2. GS、MSタイトルの支配率</Link>
            </li>
          </ul>
        </nav>
      </main>
    </Layout>
  </>
)

export default Home
