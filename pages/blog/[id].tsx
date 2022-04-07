import React from "react"
import Image, { ImageProps } from "next/image"
import { client } from "../../lib/client"

type IProps = Omit<ImageProps, 'src' | 'width' | 'height' | 'layout'> & {
  src: string
  width: number
  height: number
  layout?: 'fixed' | 'intrinsic' | 'responsive'
}

interface Props {
  params: {
    id: string
  }
  locales?: string[]
  locale: string
  defaultLocale?: string
}

const MicroCMSImage: React.VFC<IProps> = ({ src, layout, alt, ...imageProps }) => (
  <Image
    {...imageProps}
    src={src}
    layout={layout ?? "responsive"}
    placeholder="blur"
    blurDataURL={`${src}?auto=compress&w=10`}
    alt={alt}
  />
)

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
    <main>
      <MicroCMSImage src={blog.image.url} width={blog.image.width} height={blog.image.height} />
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`
        }}
      />
    </main>
  )
}

export default Blog
