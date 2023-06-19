import { useQuery } from 'react-query'

import Chart from "../../components/charts"
import Layout from "../../components/layout"
import PageHeader from '../../components/page-header'
import Meta from '../../components/meta'

const Page3 = () => {
  const fetchData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/gsms`)
    // const res = await fetch(`http://localhost:8888/gsms`)
    return res.json()
  }

  const { data, isLoading, error } = useQuery("data3", fetchData)

  return (
    <>
      <Meta
        pageTitle="3. GS、MSタイトルの支配率"
        pageDesc="description"
      />

      <Layout>
        <PageHeader
          title="3. GS、MSタイトルの支配率"
          post="2023年6月4日"
          update="23023年6月19日"
        />

        <p>MSが入っている分、支配率は少し下がっています。</p>

        {isLoading
          ? (
            <p>loading...</p>
          ) : (
            <>
              {error
                ? <p>エラーが発生しました。</p>
                : <Chart data={data}/>
              }
            </>
          )}
      </Layout>
    </>
  )
}

export default Page3
