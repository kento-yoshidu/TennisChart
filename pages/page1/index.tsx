import { useQuery } from "react-query"

import Chart from "../../components/charts"
import Layout from "../../components/layout"

import styles from "../../styles/styles.module.css"

const Page1 = () => {
  const fetchData = async () => {
    const res = await fetch("/api/api1")
    return res.json()
  }

  const { data, isLoading } = useQuery("data1", fetchData)

  return (
    <>
      <Layout>
        <main className={styles.main}>
          <h2>GSタイトルの支配率</h2>

          <p>フェデラーが初めてGSタイトルを獲得した2003年から2023年全豪オープンまでの間、BIG4がどれだけタイトルを独占していたかを見てみます。</p>


          <p>期間中に開催されたGSは80大会あり、そのうちBIG4が獲得したタイトルは<strong>67</strong>に及び、獲得率は<strong>83.75%</strong>です。</p>

          <p>例えば3～5年間の支配率が80~90%ならそこまでの驚きはありませんが、20年間でのこの数値というのはやはり異常です。30中盤～後半に差し掛かり、全盛期の強さを維持できなくなった（と思われる）BIG4の牙城を、未だ若手が崩せていないと言えます。</p>

          <p>2020年はウィンブルドンの開催はありませんでした。</p>

          {/*<p>2004年から2022年まで、年間でBIG4以外の選手が複数のGSを優勝したことはありません。つまり、20年近くに渡って、年間3つ以上のGSタイトルをBIG4が占めていたということです。</p>*/}
          {isLoading
            ? (
              <p>Loading...</p>
            ) : (
              <Chart data={data.data1}/>
            )}
        </main>
      </Layout>
    </>
  )
}

export default Page1
