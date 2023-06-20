import { useQuery } from "react-query"

import Chart from "../../components/charts"
import Layout from "../../components/layout"

import styles from "../../styles/styles.module.css"
import PageHeader from "../../components/page-header"
import Meta from "../../components/meta"
import Loading from "../../components/loading"

const Page1 = () => {
  const fetchData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/gs1`)
    return res.json()
  }

  const { data, isLoading, error } = useQuery("data1", fetchData)

  return (
    <>
      <Meta
        pageTitle="1. GSタイトルの支配率"
        pageDesc="BIG4がどれだけGSタイトルを独占していたかを振り返ります。"
      />

      <Layout>
        <PageHeader
          title="1. GSタイトルの支配率"
          post="2023-06-03"
          update="2023-06-20"
        />

        <main className={styles.main}>
          <p>フェデラーが初めてGSタイトルを獲得した2003年から2023年全仏オープンまでの間、BIG4がどれだけタイトルを独占していたかを見てみます。</p>

          <p>期間中に開催されたGSは81大会あり、そのうちBIG4が獲得したタイトルは<strong>68</strong>に及び、獲得率は<strong>83.95%</strong>です。</p>

          {error && <p>エラーが発生しました。</p>}

          {isLoading
            ? (
              <Loading />
            ) : (
              <Chart data={data}/>
            )
          }

          <p>例えば3～5年間の支配率が80~90%ならそこまでの驚きはありませんが、20年間でのこの数値というのはやはり異常です。30中盤～後半に差し掛かり、全盛期の強さを維持できなくなった（と思われる）BIG4の牙城を、未だ若手が崩せていないと言えます。</p>

          <p>BIG4の話ではありませんが、スタン・ワウリンカは2014年全豪、2015年全仏、2016年全米を優勝しており、GSタイトル数でマレーと並んでいます。しかも2014年全豪決勝でナダルを、2015年全仏決勝と2016年全米決勝でジョコビッチをぶち抜いて優勝しています。格好いいですね。</p>

          {/*<p>2004年から2022年まで、年間でBIG4以外の選手が複数のGSを優勝したことはありません。つまり、20年近くに渡って、年間3つ以上のGSタイトルをBIG4が占めていたということです。</p>*/}
        </main>
      </Layout>
    </>
  )
}

export default Page1
