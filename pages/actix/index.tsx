import { useQuery } from 'react-query'

import Chart from "../../components/charts"
import Layout from "../../components/layout"
import PageHeader from '../../components/page-header'
import Meta from '../../components/meta'

import styles from "../../styles/styles.module.css"

type User = {
  id: number,
  name: string
}

const PageActix = () => {
  const fetchData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/test`)
    // const res = await fetch(`http://localhost:8888/test`)
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
          post="2023年6月13日"
          update="2023年6月13日"
        />

        <h2>選手一覧</h2>

        {error && <p>データ取得に失敗しました。少し時間を置いてから再度アクセスお願いします。</p>}

        {!error && (
          <>
            {isLoading
              ? (
                <p>Loading...</p>
              ): (
                <>
                  {data.map((d: User) => (
                    <div key={d.id}>
                      <p>{d.id}</p>
                      <p>{d.name}</p>
                    </div>
                  ))}
                </>
              )}
            </>
          )}
        </main>
      </Layout>
  </>
  )
}

export default PageActix
