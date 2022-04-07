import { client } from "../../lib/client"

export const getStaticPaths =async () => {
  const data = await client.get({ endpoint: "blog" }) 

  const paths = data.contents.map((content: Blog) => `/blog/${content.id}`)

  return { paths, fallback: false }
}

export const getStaticProps =async (content: any) => {
  const id = content.params.id
  const data = await client.get({ endpoint: "blog", contentId: id })

  return {
    props: {
      blog: data
    }
  }
}

const Blog = ({ blog }) => (
  <>
    <p>main </p>
  </>
)

export default Blog
