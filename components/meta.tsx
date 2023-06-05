import Head from "next/head"

type Props = {
  pageTitle: string
  pageDesc: string
}

const Meta = ({ pageTitle, pageDesc }: Props) => {
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDesc} />
    </Head>
  )
}

export default Meta
