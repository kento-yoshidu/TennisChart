import { useQuery } from 'react-query'

import Chart from "../../components/charts"
import Layout from "../../components/layout"
import PageHeader from '../../components/page-header'
import Meta from '../../components/meta'

import styles from "../../styles/styles.module.css"

const PageActix = () => {
  const fetchData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/test`)
    return res.json()
  }

  const { data , isLoading } = useQuery("test", fetchData)

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
          post="2023年6月13日"
          update="23023年6月13日"
        />

        {isLoading
          ? (
            <p>Loading...</p>
          ): (
            <>
              <p>OK!</p>
              <p>{data.name}</p>
            </>
          )}
        </main>
      </Layout>
  </>
  )
}

export default PageActix
