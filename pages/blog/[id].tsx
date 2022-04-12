import React from "react"
import Head from "next/head"
import { client } from "../../lib/client"

import Layout from "../components/Layout"
import Button from "../components/Button"

interface Props {
  params: {
    id: string
  }
  locales?: string[]
  locale: string
  defaultLocale?: string
}

import * as Styles from "../../styles/blog.module.scss"

export const getStaticPaths = async () => {
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

const Blog = ({ blog }: { blog: Blog }) => (
  <>
    <Head>
      <title>{blog.title} | SamplePage</title>
    </Head>

    <Layout>
      <main className="wContainer w-11/12 md:w-1/2 py-8 md:py-16">
        <div
          dangerouslySetInnerHTML={{
            __html: `${blog.body}`
          }}
          className={`${Styles.main} pb-12`}
        />

        <Button
          path="/"
        />
      </main>

    </Layout>
  </>
)

export default Blog
