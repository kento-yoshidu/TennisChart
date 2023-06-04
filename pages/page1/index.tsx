import Chart from "../../components/charts"
import Layout from "../../components/layout"

const Page1 = () => (
  <>
    <Layout>
      <h2>GSタイトルの支配率</h2>

      <p>2004年から2022年まで、年間でBIG4以外の選手が複数のGSを優勝したことはありません。つまり、20年近くに渡って、年間3つ以上のGSタイトルをBIG4が占めていたということです。</p>

      <p>2020年はウィンブルドンの開催はありませんでした。</p>

      <Chart />
    </Layout>
  </>
)

export default Page1
