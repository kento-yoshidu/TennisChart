import { useQuery } from 'react-query'

import Chart from "../../components/charts"
import Layout from "../../components/layout"
import PageHeader from '../../components/page-header'

const Page2 = () => {
  const fetchData = async () => {
    const res = await fetch("/api/api2")
    return res.json()
  }

  const { data, isLoading } = useQuery("data2", fetchData)

  return (
  <>
    <Layout>
      <PageHeader
        title="GS、MSタイトルの支配率"
        post="2023年6月4日"
        update="23023年6月5日"
      />

      <p>MSが入っている分、支配率は少し下がっています。</p>

      {isLoading
        ? (
          <p>loading...</p>
        ) : (
          <Chart data={data.data2}/>
        )}
    </Layout>
  </>
  )
}

export default Page2
