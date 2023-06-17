import { useQuery } from 'react-query'

import Chart from "../../components/charts"
import Layout from "../../components/layout"
import PageHeader from '../../components/page-header'
import Meta from '../../components/meta'

import styles from "../../styles/styles.module.css"
import Loading from '../../components/loading'

const Page2 = () => {
  const fetchData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/gs2`)
    // const res = await fetch(`http://localhost:8888/gs2`)

    return res.json()
  }

  const { data, isLoading, error } = useQuery("data2", fetchData)

  return (
  <>
    <Meta
      pageTitle="2. GS決勝進出"
      pageDesc="description"
    />

    <Layout>
      <PageHeader
        title="2. GS決勝進出"
        post="2023年6月11日"
        update="23023年6月17日"
      />

      <main className={styles.main}>

        {error && <p>エラーが発生しました。</p>}

        {isLoading
          ? (
            <Loading />
          ) : (
            <Chart data={data}/>
          )}
      </main>
    </Layout>
  </>
  )
}

export default Page2
