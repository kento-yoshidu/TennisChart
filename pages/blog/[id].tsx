import React from "react"
import Header from "../components/Header"
import { client } from "../../lib/client"

interface Props {
  params: {
    id: string
  }
  locales?: string[]
  locale: string
  defaultLocale?: string
}

export const getStaticPaths =async () => {
  const data = await client.get({ endpoint: "blog" })

  const paths = data.contents.map((content: Blog) => `/blog/${content.id}`)

  return { paths, fallback: false }
}

export const getStaticProps = async (content: Props) => {
  const id = content.params.id
  const data = await client.get({ endpoint: "blog", contentId: id })

  return {
    props: {
      blog: data
    }
  }
}

const Blog = ({ blog }: { blog: Blog }) => {
  return (
    <>
      <Header />

      <main className="wContainer">
        <div
          dangerouslySetInnerHTML={{
            __html: `${blog.body}`
          }}
        />
      </main>
    </>
  )
}

export default Blog
