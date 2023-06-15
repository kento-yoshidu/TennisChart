import { useQuery } from 'react-query'

import Chart from "../../components/charts"
import Layout from "../../components/layout"
import PageHeader from '../../components/page-header'
import Meta from '../../components/meta'

import styles from "../../styles/styles.module.css"
import Loading from '../../components/loading'

const PageActix = () => {
  const fetchData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/gs1`)
    // const res = await fetch(`http://localhost:8888/gs1`)
    return res.json()
  }

  const { data , isLoading, error } = useQuery("test", fetchData)

  return (
  <>
    <Meta
      pageTitle="xx. Actix Webからデータ取得"
      pageDesc="description"
    />

    <Layout>
      <main className={styles.main}>
        <PageHeader
          title="xx. Actix Webからデータ取得"
          post="2023年6月14日"
          update="2023年6月14日"
        />

        <h2>GSのタイトル</h2>

        {error && <p>エラーが発生しました。</p>}

        {!error && (
          <>
            {isLoading
              ? (
                <Loading />
              ): (
                <Chart data={data} />
              )}
            </>
          )}
        </main>
      </Layout>
  </>
  )
}

export default PageActix
