import Head from "next/head"

import { siteMetaData } from "../lib/constants"

type Props = {
  pageTitle?: string
  pageDesc?: string
}

const Meta = ({ pageTitle, pageDesc }: Props) => {
  const { siteTitle, siteDesc } = siteMetaData

  const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle
  const desc =  pageDesc ?? siteDesc

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={desc} />
    </Head>
  )
}

export default Meta
